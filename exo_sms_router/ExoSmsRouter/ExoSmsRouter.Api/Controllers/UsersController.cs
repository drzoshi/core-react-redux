using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using ExoSmsRouter.Api.DAL;
using ExoSmsRouter.Api.Models;
using Microsoft.AspNet.Identity.EntityFramework;

namespace ExoSmsRouter.Api.Controllers
{
    [Route("api/users")]
    [Authorize]
    public class UserController : ApiController
    {
        private ExoSmsRouterDbContext db = new ExoSmsRouterDbContext();
        private ApplicationUserManager _userManager;
        public UserController()
        {
            var userStore = new UserStore<ApplicationUser>(db);
            _userManager = new ApplicationUserManager(userStore);
        }
        
        [HttpGet]
        public async Task<ICollection<ApplicationUser>> Get()
        {
            return await _userManager.Users.ToListAsync();
        }

        [HttpGet]
        [ResponseType(typeof(ApplicationUser))]
        public async Task<IHttpActionResult> Get(string id)
        {
            ApplicationUser applicationUser = await _userManager.Users.FirstOrDefaultAsync(x=>x.Id == id);
            if (applicationUser == null)
            {
                return NotFound();
            }

            return Ok(applicationUser);
        }

        [HttpPut]
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> Put(string id, ApplicationUser applicationUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != applicationUser.Id)
            {
                return BadRequest();
            }
            try
            {
                var result = await _userManager.UpdateAsync(applicationUser);
                if (!result.Succeeded)
                    throw new Exception(result.Errors.SingleOrDefault());
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ApplicationUserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        [HttpPost]
        [ResponseType(typeof(ApplicationUser))]
        public async Task<IHttpActionResult> Post(ApplicationUser applicationUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var result = await _userManager.CreateAsync(applicationUser);
                if (!result.Succeeded)
                    throw new Exception(result.Errors.SingleOrDefault());
            }
            catch (DbUpdateException)
            {
                if (ApplicationUserExists(applicationUser.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = applicationUser.Id }, applicationUser);
        }

        [HttpDelete]
        [ResponseType(typeof(ApplicationUser))]
        public async Task<IHttpActionResult> Delete(string id)
        {
            ApplicationUser applicationUser = await _userManager.FindByIdAsync(id);
            if (applicationUser == null)
            {
                return NotFound();
            }

            await _userManager.DeleteAsync(applicationUser);
            return Ok(applicationUser);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ApplicationUserExists(string id)
        {
            return _userManager.Users.Count(e => e.Id == id) > 0;
        }
    }
}