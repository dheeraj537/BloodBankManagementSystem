using System;
using System.Collections.Generic;
using System.Text;

namespace inventoryfunction
{
    public class BloodDonorDonation
    {
        public int BloodDonationID { get; set; }  
        public int BloodDonorID { get; set; }
        public DateTime BloodDonationDate { get; set; }
        public int NumberofBottles { get; set; }
        public int Weight { get; set; }
        public int HBCount { get; set; }
        public string BloodGroup { get; set; }
       
        public int BloodBankID { get; set; }
        public DateTime ExpiryDate { get; set; }
    }
}
