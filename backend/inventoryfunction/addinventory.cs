using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace inventoryfunction
{
    public static class addinventory
    {
        [FunctionName("addinventory")]
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)]
            HttpRequest req,
            [Sql("dbo.BloodDonorDonations",ConnectionStringSetting ="SqlConnectionString")]
            out BloodDonorDonation newbloodDonorDonation,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            

            string requestBody =  new StreamReader(req.Body).ReadToEnd();
             newbloodDonorDonation = JsonConvert.DeserializeObject<BloodDonorDonation>(requestBody);
           


            return new CreatedResult("bloodDonorDonation",newbloodDonorDonation);
        }
    }
}
