using ExoSmsRouter.Api.DAL.EFConfigs;
using ExoSmsRouter.Api.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;

namespace ExoSmsRouter.Api.DAL
{
    public partial class ExoSmsRouterDbContext : IdentityDbContext<ApplicationUser>
    {
        public static readonly object Lock = new object();
        public static bool _dbInitialized;
        public ExoSmsRouterDbContext()
            : base("name=ExoSmsRouterDbConnection")
        {
            if (_dbInitialized)
                return;
            lock (Lock)
            {
                if (!_dbInitialized)
                {
                    Database.SetInitializer(new ApplicationDbInitializer());
                    _dbInitialized = true;
                }
            }
        }

        public static ExoSmsRouterDbContext Create()
        {
            return new ExoSmsRouterDbContext();
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            IdentityEntityConfig.ConfigureIdentity(modelBuilder);
        }
    }
}
//namespace ExoSmsRouter.Api.DAL
//{
//    using System;
//    using System.Data.Entity;
//    using System.ComponentModel.DataAnnotations.Schema;
//    using System.Linq;

//    public partial class ExoSmsRouterDbContext : DbContext
//    {
//        public ExoSmsRouterDbContext()
//            : base("name=ExoSmsRouterDbConnection")
//        {
//        }


//        protected override void OnModelCreating(DbModelBuilder modelBuilder)
//        {
//        }
//    }
//}
