using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BloodBankManagementSystem.Entities;
using BloodBankManagementSystem.Repositories;

namespace BloodBankManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValidateController : ControllerBase
    {
        private IAdminLogin _repository = null;


        public ValidateController(IAdminLogin admin)
        {
            _repository = admin;
        }
        [HttpPost]
        [Route("Validate")]
        public IActionResult Validate(Admin admin)
        {
            try
            {
                Admin admins = _repository.Validate(admin);
                if (admins == null) return NotFound();
                return Ok(admins);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}