using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BloodBankManagementSystem.Entities;

namespace BloodBankManagementSystem.Repositories
{
    public interface IAdminLogin
    {
        Admin Validate(Admin admin);
    }
}
