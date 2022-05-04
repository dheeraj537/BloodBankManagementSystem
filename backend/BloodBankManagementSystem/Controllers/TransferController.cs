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
    public class TransferController : ControllerBase
    {
        
       

        private readonly MainContext context;
        private readonly IConfiguration config;
        public TransferController(MainContext context, IConfiguration config)
        {
            this.context = context;
            this.config = config;
            
        }


        // GET: api/<TransferController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<TransferController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<TransferController>
        [HttpPost]
        public IActionResult Post([FromBody]Transfer transfer)
        {
            

            if (ModelState.IsValid)
            {
                
                bool isUploaded = Helper.UploadBlobtwo(config, transfer).Result;
                if (isUploaded)
                {
  
                    return Ok("Transfered Blood");
                }
                return StatusCode(StatusCodes.Status500InternalServerError, "Error in API");
            }
            return BadRequest(ModelState);
        }

        // PUT api/<TransferController>/5
       
    }
}
