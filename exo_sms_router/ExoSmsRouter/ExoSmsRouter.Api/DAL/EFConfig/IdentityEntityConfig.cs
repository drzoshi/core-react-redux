using ExoSmsRouter.Api.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;

namespace ExoSmsRouter.Api.DAL.EFConfigs
{
    public class IdentityEntityConfig
    {
        public static void ConfigureIdentity(DbModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("dbo");
            modelBuilder.Entity<IdentityUserLogin>().Map(c =>
            {
                c.ToTable("UserLogin");
                c.Properties(p => new
                {
                    p.UserId,
                    p.LoginProvider,
                    p.ProviderKey
                });
            }).HasKey(p => new { p.LoginProvider, p.ProviderKey, p.UserId });

            modelBuilder.Entity<IdentityRole>().Map(c =>
            {
                c.ToTable("Role");
                c.Property(p => p.Id).HasColumnName("RoleId");
                c.Properties(p => new
                {
                    p.Name,
                    //p.Description,
                    //p.IsSystemConfig,
                    //p.InsertedOnUtc
                });
            }).HasKey(p => p.Id);
            //modelBuilder.Entity<IdentityRole>().Property(x => x.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<IdentityRole>().HasMany(c => c.Users).WithRequired().HasForeignKey(c => c.RoleId);

            modelBuilder.Entity<ApplicationUser>().Map(c =>
            {
                c.ToTable("User");
                c.Property(p => p.Id).HasColumnName("UserId");
                c.Properties(p => new
                {
                    p.AccessFailedCount,
                    p.Email,
                    p.EmailConfirmed,
                    p.PasswordHash,
                    p.PhoneNumber,
                    p.PhoneNumberConfirmed,
                    p.TwoFactorEnabled,
                    p.SecurityStamp,
                    p.LockoutEnabled,
                    p.LockoutEndDateUtc,
                    p.UserName,

                    //p.FirstName,
                    //p.MiddleName,
                    //p.LastName,
                    //p.LastModifiedUserId,
                    //p.InsertedOnUtc,
                    //p.LastModifiedOnUtc
                });
            }).HasKey(c => c.Id);
            //modelBuilder.Entity<IdentityUser>().Property(c => c.FirstName).IsRequired().HasMaxLength(150);
            //modelBuilder.Entity<IdentityUser>().Property(c => c.MiddleName).IsOptional().HasMaxLength(150);
            //modelBuilder.Entity<IdentityUser>().Property(c => c.LastName).IsOptional().HasMaxLength(150);
            //modelBuilder.Entity<IdentityUser>().Property(c => c.LastModifiedUserId).IsRequired();
            //modelBuilder.Entity<IdentityUser>().Property(c => c.InsertedOnUtc).IsRequired();
            //modelBuilder.Entity<IdentityUser>().Property(c => c.LastModifiedOnUtc).IsOptional();

            //modelBuilder.Entity<IdentityUser>().Property(c => c.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<ApplicationUser>().HasMany(c => c.Logins).WithOptional().HasForeignKey(c => c.UserId);
            modelBuilder.Entity<ApplicationUser>().HasMany(c => c.Claims).WithOptional().HasForeignKey(c => c.UserId);
            modelBuilder.Entity<ApplicationUser>().HasMany(c => c.Roles).WithRequired().HasForeignKey(c => c.UserId);

            modelBuilder.Entity<IdentityUserRole>().Map(c =>
            {
                c.ToTable("UserRole");
                c.Properties(p => new
                {
                    p.UserId,
                    p.RoleId
                });
            }).HasKey(c => new { c.UserId, c.RoleId });

            modelBuilder.Entity<IdentityUserClaim>().Map(c =>
            {
                c.ToTable("UserClaim");
                c.Property(p => p.Id).HasColumnName("UserClaimId");
                c.Properties(p => new
                {
                    p.UserId,
                    p.ClaimValue,
                    p.ClaimType
                });
            }).HasKey(c => c.Id);
            //modelBuilder.Entity<IdentityUserClaim>().Property(c => c.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
        }
    }
}
