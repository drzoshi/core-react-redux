using ExoSmsRouter.Api.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Data.Entity;
using System.Linq;

namespace ExoSmsRouter.Api.DAL
{
    public class ApplicationDbInitializer: CreateDatabaseIfNotExists<ExoSmsRouterDbContext>
    {
        private const string _SuperUserEmail = "superuser@exolutus.com";

        protected override void Seed(ExoSmsRouterDbContext context)
        {
            InitializeDatabaseForEF(context);
            base.Seed(context);
        }

        protected void InitializeDatabaseForEF(ExoSmsRouterDbContext context)
        {
            InitRoleAndUser(context);
        }
        
        protected void InitRoleAndUser(ExoSmsRouterDbContext context)
        {
            var password = "Apptest@1$#";
            var superRole = "SuperUser";
            string[] roles = new string[] { superRole, "Administrator", "Merchant" };

            var userStore = new UserStore<ApplicationUser>(context);
            var roleStore= new RoleStore<IdentityRole>(context);

            //new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));

            var roleManager = new RoleManager<IdentityRole>(roleStore);

            foreach (string role in roles)
            {
                if (!context.Roles.Any(r => r.Name == role))
                {
                    roleManager.Create(new IdentityRole(role));
                }
            }

            var user = new ApplicationUser
            {
                Email = _SuperUserEmail,
                UserName = _SuperUserEmail,
                PhoneNumber = "+111111111111",
                EmailConfirmed = true,
                PhoneNumberConfirmed = true,
                SecurityStamp = Guid.NewGuid().ToString("D")
            };

            if(!context.Users.Any(u=>u.UserName == user.UserName))
            {
                var userManager = new UserManager<ApplicationUser>(userStore);
                var result = userManager.Create(user, password);
                if (result.Succeeded)
                {
                    userManager.AddToRole(user.Id, superRole.ToString());
                    context.SaveChanges();
                }
            }
        }
    }
}
