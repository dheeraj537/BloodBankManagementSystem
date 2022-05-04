using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BloodBankManagementSystem.DBContext;
using BloodBankManagementSystem.Entities;
using Microsoft.AspNetCore.JsonPatch;

namespace BloodBankManagementSystem.Repositories
{
    public class BloodDonorRepository : IBloodDonorRepository
    {
        private  MainContext _context;

        public BloodDonorRepository(MainContext context)
        {
            _context = context;
        }

        public List<BloodDonor> GetBloodDonors()
        {
            return _context.BloodDonors.ToList();
        }

        public void AddBloodDonor(BloodDonor bloodDonor)
        {
            _context.BloodDonors.Add(bloodDonor);
            _context.SaveChanges();
        }

        public void RemoveBloodDonor(int BloodDonorID)
        {
            BloodDonor bloodDonor = _context.BloodDonors.Find(BloodDonorID);
            _context.BloodDonors.Remove(bloodDonor);
           
            _context.SaveChanges();
        }

        

        //public void DonateBlood(BloodDonorDonation bloodDonorDonation)
        //{
        //    _context.BloodDonorDonations.Add(bloodDonorDonation);
        //    _context.SaveChanges();
        //    addbloods(bloodDonorDonation);

        //}

//        public static string addbloods(BloodDonorDonation bloodDonorDonation)
//        {
//            string str;
//            try
//            {
//                str = "not found";
//               List<ViewBloodAvailable> vms;
//                vms =MainContext.bloods.Where(x => x.BloodBankID == bloodDonorDonation.BloodBankID &&x.BloodGroup==bloodDonorDonation.BloodGroup).Select(x => x).ToList();
//                if (vms.Capacity == 0)
//                {
//                    _context.Add(new ViewBloodAvailable()
//                    {
//                        BloodBankID = bloodDonorDonation.BloodBankID,
//                        BloodGroup = bloodDonorDonation.BloodGroup,
//                        NumberOfBottles = bloodDonorDonation.NumberofBottles
//                    });
//                    _context.SaveChanges();
//                }
//                else
//                {


//                                vms[0].BloodBankID = bloodDonorDonation.BloodBankID;
//                                vms[0].BloodGroup = bloodDonorDonation.BloodGroup;
//                                vms[0].NumberOfBottles = vms[0].NumberOfBottles + bloodDonorDonation.NumberofBottles;
//                    MainContext.bloods.Update(vms[0]);
                            

//                            _context.SaveChanges();
                        
//                    }
                
//            }
//            catch (Exception e)
//            {
//                str = e.Message;

//            }
//            return str;
//}


            
       

        public void UpdateBloodDonor(BloodDonor bloodDonor)
        {
            _context.BloodDonors.Update(bloodDonor);
            _context.SaveChanges();
        }

     

       

        public List<BloodDonorDonation> GetBloodInventory()
        {
            return _context.BloodDonorDonations.ToList();
            throw new NotImplementedException();
        }

        public int SearchBlood(string BloodGroup, int BloodBankID)
        {
            return _context.BloodDonorDonations.Where(x => x.BloodGroup == BloodGroup && x.BloodBankID==BloodBankID).Select(x=>x.NumberofBottles).Sum();





            throw new NotImplementedException();
        }

        public void DeleteExpiredBlood(int BloodDonationID)
        {
            BloodDonorDonation bloodDonorDonation = _context.BloodDonorDonations.Find(BloodDonationID);
            _context.BloodDonorDonations.Remove(bloodDonorDonation);
            deletebloods(bloodDonorDonation);
            _context.SaveChanges();
        }

        private void deletebloods(BloodDonorDonation bloodDonorDonation)
        {
            string str;
            try
            {
                str = "unable to delete blood from inventory";
                
                List<ViewBloodAvailable> vms;
                vms = _context.bloods.Where(x => x.BloodBankID == bloodDonorDonation.BloodBankID && x.BloodGroup == bloodDonorDonation.BloodGroup).Select(x => x).ToList();
                vms[0].NumberOfBottles = vms[0].NumberOfBottles - bloodDonorDonation.NumberofBottles;
                _context.bloods.Update(vms[0]);
            }
            catch(Exception e)
            {
                str = e.Message;
            }
        }

        public List<ViewBloodAvailable> ViewBloodAvailable()
        {
            return _context.bloods.ToList();
            throw new NotImplementedException();
            
        }

        //public static void transferblood(Transfer transfer)
        //{
        //    List<ViewBloodAvailable> vms = MainContext.bloods.Where(x => x.BloodBankID == transfer.BloodBankID && x.BloodGroup == transfer.BloodGroup).Select(x => x).ToList();
        //    if (vms[0].NumberOfBottles >= transfer.NumberOfBottlesToSend)
        //    {
        //        tobloodbank(vms[0], transfer.ToBloodBankID, transfer.NumberOfBottlesToSend);

        //    }



        //}
        //private static void tobloodbank(ViewBloodAvailable viewBloodAvailable, int ToBloodBankID, int numberOfBottles)
        //{
        //    List<ViewBloodAvailable> vm = MainContext.bloods.Where(x => x.BloodBankID == ToBloodBankID && x.BloodGroup == viewBloodAvailable.BloodGroup).Select(x => x).ToList();
        //    if (vm.Capacity != 0)
        //    {
        //        vm[0].NumberOfBottles = vm[0].NumberOfBottles + numberOfBottles;
        //        _context.SaveChanges();
        //        frombloodbank(viewBloodAvailable, numberOfBottles);


        //    }



        //}
        //private static void frombloodbank(ViewBloodAvailable viewBloodAvailable, int numberOfBottles)
        //{
        //    List<ViewBloodAvailable> vms = MainContext.bloods.Where(x => x.BloodBankID == viewBloodAvailable.BloodBankID && x.BloodGroup == viewBloodAvailable.BloodGroup).Select(x => x).ToList();
        //    if (vms.Capacity != 0)
        //    {
        //        vms[0].NumberOfBottles = vms[0].NumberOfBottles - numberOfBottles;
        //        _context.SaveChanges();

        //    }
        //}






    }
}
