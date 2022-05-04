using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BloodBankManagementSystem.DBContext;
using BloodBankManagementSystem.Entities;


namespace BloodBankManagementSystem.DBContext
{
    public class MainContext : DbContext
    {
        public MainContext(DbContextOptions<MainContext> options) : base(options)
        { 
        }
        public DbSet<BloodDonationCamp> BloodDonationCamps{get;set;}
        public DbSet<BloodDonor> BloodDonors { get; set; }
        public DbSet<BloodDonorDonation> BloodDonorDonations { get; set; }
        public DbSet<Hospital> Hospitals { get; set; }

       
        public DbSet<BloodBank> BloodBanks { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public  DbSet<ViewBloodAvailable> bloods { get; set; }




    }
}
