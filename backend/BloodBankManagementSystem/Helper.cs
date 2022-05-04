
using Azure.Messaging.ServiceBus;
using Azure.Storage.Blobs;
using BloodBankManagementSystem.DBContext;
using BloodBankManagementSystem.Entities;
using BloodBankManagementSystem.Repositories;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BloodBankManagementSystem
{
    public class Helper
    {
        private static MainContext _context;

        public Helper(MainContext context)
        {
            _context = context;
        }


        public static async Task<bool> UploadBlob(
                IConfiguration config,
                    BloodDonorDonation bloodDonorDonation)
        {
         
            string blobConnString = config.GetConnectionString("StorAccConnString");
            BlobServiceClient client = new BlobServiceClient(blobConnString);
            string container = config.GetValue<string>("Container");
            var containerClient = client.GetBlobContainerClient(container);

            string fileName = "mtbs.bloodinventory." + Guid.NewGuid().ToString() + ".json";
            // Get a reference to a blob
            BlobClient blobClient = containerClient.GetBlobClient(fileName);

            //memorystream
            using (var stream = new MemoryStream())
            {
                var serializer = JsonSerializer.Create(new JsonSerializerSettings());

                // Use the 'leave open' option to keep the memory stream open after the stream writer is disposed
                using (var writer = new StreamWriter(stream, Encoding.UTF8, 1024, true))
                {
                    // Serialize the job to the StreamWriter
                    serializer.Serialize(writer, bloodDonorDonation);
                }

                // Rewind the stream to the beginning
                stream.Position = 0;

                // Upload the job via the stream
                await blobClient.UploadAsync(stream, overwrite: true);
            }

            await SendMessageToServiceBusQueue(config, bloodDonorDonation);
            
            return true;
        }

        private static async Task<bool> SendMessageToServiceBusQueue(IConfiguration config, BloodDonorDonation bloodDonorDonation)
        {
            string ConnString = config.GetConnectionString("servicebusone");
            ServiceBusClient client = new ServiceBusClient(ConnString);
            string queueName = config.GetValue<string>("QueueName");
            ServiceBusSender sender = client.CreateSender(queueName);


            await sender.SendMessageAsync(new ServiceBusMessage(JsonConvert.SerializeObject(bloodDonorDonation)));



            return true;

        }




        public static async Task<bool> UploadBlobtwo(
                IConfiguration config,Transfer transfer)
        {
            
            string blobConnString = config.GetConnectionString("StorAccConnString");
            BlobServiceClient client = new BlobServiceClient(blobConnString);
            string container = config.GetValue<string>("Containertwo");
            var containerClient = client.GetBlobContainerClient(container);

            string fileName = "mtbs.transfer." + Guid.NewGuid().ToString() + ".json";
            // Get a reference to a blob
            BlobClient blobClient = containerClient.GetBlobClient(fileName);

            //memorystream
            using (var stream = new MemoryStream())
            {
                var serializer = JsonSerializer.Create(new JsonSerializerSettings());

                // Use the 'leave open' option to keep the memory stream open after the stream writer is disposed
                using (var writer = new StreamWriter(stream, Encoding.UTF8, 1024, true))
                {
                    // Serialize the job to the StreamWriter
                    serializer.Serialize(writer,transfer);
                 
                    
                }

                // Rewind the stream to the beginning
                stream.Position = 0;

                // Upload the job via the stream
                await blobClient.UploadAsync(stream, overwrite: true);
            }

            await SendMessageToServiceBusQueuetwo(config,transfer);
           
            return true;
        }

        private static async Task<bool> SendMessageToServiceBusQueuetwo(IConfiguration config, Transfer transfer)
        {
            string ConnString = config.GetConnectionString("servicebusone");
            ServiceBusClient client = new ServiceBusClient(ConnString);
            string queueName = config.GetValue<string>("Queuetwo");
            ServiceBusSender sender = client.CreateSender(queueName);


            await sender.SendMessageAsync(new ServiceBusMessage(JsonConvert.SerializeObject(transfer)));
            



            return true;

        }


       


    }
}
