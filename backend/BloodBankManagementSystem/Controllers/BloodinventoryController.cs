using BloodBankManagementSystem.DBContext;
using BloodBankManagementSystem.Entities;
using BloodBankManagementSystem.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BloodBankManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BloodinventoryController : ControllerBase
    {
       


        private readonly MainContext context;
        private readonly IConfiguration config;
        
        public BloodinventoryController(MainContext context,IConfiguration config)
        {
            this.context = context;
            this.config = config;
            
        }


        // POST api/<BloodinventoryController>
        [HttpPost]
        public IActionResult Post([FromBody] BloodDonorDonation bloodDonorDonation)
        {
            

            if (ModelState.IsValid)
            {
                
                bool isUploaded = Helper.UploadBlob(config, bloodDonorDonation).Result;
                if (isUploaded)
                {
                   
                    return Ok("Blood donor donation added");
                }
                return StatusCode(StatusCodes.Status500InternalServerError, "Error in API");
            }
            return BadRequest(ModelState);
        }


        // PUT api/<BloodinventoryController>/5
       

        // DELETE api/<BloodinventoryController>/5
       
    }
}
