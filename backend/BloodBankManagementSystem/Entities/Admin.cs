using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace BloodBankManagementSystem.Entities
{
    [Table("Admins")]
    public class Admin
    {
        [Key]
       public string AdminID { get; set; }
        public string AdminPassword { get; set; }
        public string Message { get; set; }
    }
        
}
