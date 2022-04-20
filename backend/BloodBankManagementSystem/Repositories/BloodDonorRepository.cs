using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BloodBankManagementSystem.DBContext;
using BloodBankManagementSystem.Entities;
using Microsoft.AspNetCore.JsonPatch;

namespace BloodBankManagementSystem.Repositories
{
    public class BloodDonorRepository : IBloodDonorRepository
    {
        private MainContext _context = null;

        public object[] BloodDonorID { get; private set; }

        public BloodDonorRepository(MainContext context)
        {
            _context = context;
        }

        public List<BloodDonor> GetBloodDonors()
        {
            return _context.BloodDonors.ToList();
        }

        public void AddBloodDonor(BloodDonor bloodDonor)
        {
            _context.BloodDonors.Add(bloodDonor);
            _context.SaveChanges();
        }

        public void RemoveBloodDonor(int BloodDonorID)
        {
            BloodDonor bloodDonor = _context.BloodDonors.Find(BloodDonorID);
            _context.BloodDonors.Remove(bloodDonor);
            _context.SaveChanges();
        }

       

        public void DonateBlood(BloodDonorDonation bloodDonorDonation)
        {
            _context.BloodDonorDonations.Add(bloodDonorDonation);
            _context.SaveChanges();

        }

        public void UpdateBloodDonor(BloodDonor bloodDonor)
        {
            _context.BloodDonors.Update(bloodDonor);
            _context.SaveChanges();
        }

       


        
        

        

        

        public List<BloodDonorDonation> SearchBlood(string BloodGroup)
        {
            return _context.BloodDonorDonations.Where(x => x.BloodGroup == BloodGroup).ToList();
            




            throw new NotImplementedException();
        }

        public List<BloodDonorDonation> GetBloodInventory()
        {
            return _context.BloodDonorDonations.ToList();
            throw new NotImplementedException();
        }

        public int SearchBlood(string BloodGroup, int BloodBankID)
        {
            return _context.BloodDonorDonations.Where(x => x.BloodGroup == BloodGroup && x.BloodBankID==BloodBankID).Select(x=>x.NumberofBottles).Sum();





            throw new NotImplementedException();
        }

        public void DeleteExpiredBlood(int BloodDonationID)
        {
            BloodDonorDonation bloodDonorDonation = _context.BloodDonorDonations.Find(BloodDonationID);
            _context.BloodDonorDonations.Remove(bloodDonorDonation);
            _context.SaveChanges();
        }
    }
}
