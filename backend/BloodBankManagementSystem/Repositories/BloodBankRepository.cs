﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BloodBankManagementSystem.Entities;

using BloodBankManagementSystem.DBContext;

namespace BloodBankManagementSystem.Repositories
{
    public class BloodBankRepository : IBloodBankRepository
    {
        //public static List<BloodBank> BloodBanks
        //{
        private MainContext _context = null;
        public BloodBankRepository(MainContext context)
        {
            _context = context;
        }
        public List<BloodBank> GetBloodBanks()
        {
            return _context.BloodBanks.ToList();
        }
        public void AddBloodBank(BloodBank bloodBank)
        {
            _context.BloodBanks.Add(bloodBank);
            _context.SaveChanges();
        }

        public void RemoveBloodBank(int BloodBankID)
        {
            BloodBank bloodBank = _context.BloodBanks.Find(BloodBankID);
            _context.BloodBanks.Remove(bloodBank);
            List<BloodDonorDonation> donations = _context.BloodDonorDonations.Where(x => x.BloodBankID == BloodBankID).Select(x => x).ToList();
            for(int i=0;i<donations.Count;i++){
                _context.BloodDonorDonations.Remove(donations[i]);
            }
            List<ViewBloodAvailable> blood = _context.bloods.Where(x => x.BloodBankID == BloodBankID).Select(x => x).ToList();
            for (int i = 0; i <blood.Count; i++)
            {
                _context.bloods.Remove(blood[i]);
            }


            _context.SaveChanges();
        }

        public void UpdateBloodBank(BloodBank bloodBank)
        {
            _context.BloodBanks.Update(bloodBank);
            _context.SaveChanges();
        }

       
    }
}
