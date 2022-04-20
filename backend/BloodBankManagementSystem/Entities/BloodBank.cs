using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace BloodBankManagementSystem.Entities
{
    [Table("BloodBanks")]
   
    public class BloodBank
    {
        [Key]
        public int BloodBankID { get; set; }
       
        
        public int UserID { get; set; }

        public int Password { get; set; }
        public string BloodBankName { get; set; }
      
        public string Address { get; set; }
        public int ContactNumber { get; set; }
        public int BloodUnits { get; set; }
        public string City { get; set; }
    }
}
