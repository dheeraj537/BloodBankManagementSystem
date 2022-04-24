using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BloodBankManagementSystem.Entities
{
    [Table("bloods")]
    public class ViewBloodAvailable
    {
        [Key]
        public  int Funkey { get; set; }
        
        [ForeignKey("BloodBank")]
        public  int BloodBankID { get; set; }
        public  string BloodGroup { get; set; }
        public int NumberOfBottles { get; set; }
    }
}
