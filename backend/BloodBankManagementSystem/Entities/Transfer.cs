using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BloodBankManagementSystem.Entities
{
    public class Transfer
    {
        public int BloodBankID { get; set; }
        public string BloodGroup { get; set; }
        public int ToBloodBankID { get; set; }
        public int NumberOfBottlesToSend { get; set; }

       //public Transfer(int bloodBankID, string BloodGroup, int tobloodBankID, int numberOfBottlesToSend)
       // {
       //     this.BloodBankID = bloodBankID;
       //     this.BloodGroup = BloodGroup;
       //     this.ToBloodBankID = tobloodBankID;
       //     this.NumberOfBottlesToSend = numberOfBottlesToSend;
       // }
    }
}
