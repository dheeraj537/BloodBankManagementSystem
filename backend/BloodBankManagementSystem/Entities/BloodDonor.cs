﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BloodBankManagementSystem.Entities
{
        [Table("Blooddonors")]
        public class BloodDonor
        {
            [Key]
            public int BloodDonorID { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string Address { get; set; }
            public string City { get; set; }
            
            public string MobileNo { get; set; }
            public string BloodGroup { get; set; }
            

        }

    }

