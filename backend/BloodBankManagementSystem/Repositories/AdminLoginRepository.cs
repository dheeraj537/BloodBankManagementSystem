using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BloodBankManagementSystem.Entities;
using BloodBankManagementSystem.DBContext;

namespace BloodBankManagementSystem.Repositories
{
    public class AdminLoginRepository : IAdminLogin
    {
        private MainContext db;
            public AdminLoginRepository(MainContext context)
        {
            db = context;
        }
        public Admin Validate(Admin admin)
        {
            string str;
            try
            {
                str = "user not found";
                Admin adm = db.Admins.Find(admin.AdminID);
                if (adm != null)
                {
                    if (adm.AdminPassword == admin.AdminPassword)
                    {
                        str = "login successfull";
                    }
                }
            }
            catch(Exception e)
            {
                str = e.Message;
            }
            return new Admin()
            {
                AdminID = admin.AdminID,
                AdminPassword = admin.AdminPassword,
                Message = str
            };

        }
    }
}
