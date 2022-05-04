using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BloodBankManagementSystem.Entities;
using BloodBankManagementSystem.Repositories;
using Microsoft.AspNetCore.JsonPatch;

namespace BloodBankManagementSystem.Repositories
{
    public interface IBloodDonorRepository
    {
        List<BloodDonor> GetBloodDonors();

        void AddBloodDonor(BloodDonor bloodDonor);
        void RemoveBloodDonor(int BloodDonorID);
        void UpdateBloodDonor(BloodDonor bloodDonor);

        
        List<BloodDonorDonation> GetBloodInventory();
        int SearchBlood(string BloodGroup,int BloodBankID);
        void DeleteExpiredBlood(int BloodDonationID);
        List<ViewBloodAvailable> ViewBloodAvailable();
       
        

    }
}
