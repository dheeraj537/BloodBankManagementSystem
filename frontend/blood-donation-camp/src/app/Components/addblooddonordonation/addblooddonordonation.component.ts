import { Component, OnInit } from '@angular/core';
import { BloodDonor } from 'src/app/Models/blood-donor';
import { BloodDonorDonation }from 'src/app/Models/blood-donor-donation';
import { BlooddonorcontrollerService } from 'src/app/Services/blooddonorcontroller.service';


@Component({
  selector: 'app-addblooddonordonation',
  templateUrl: './addblooddonordonation.component.html',
  styleUrls: ['./addblooddonordonation.component.css']
})
export class AddblooddonordonationComponent implements OnInit {
  blooddonordonations:BloodDonorDonation[];
  blooddonordonation:BloodDonorDonation;
  constructor(private blooddonorcontrollerservice:BlooddonorcontrollerService) { 
    this.blooddonordonation=new BloodDonorDonation();
    this.AddBloodDonorDonation(); 
   }
  
   ngOnInit(): void {
  }
AddBloodDonorDonation(){
  this.blooddonorcontrollerservice.AddBloodDonorDonation(this.blooddonordonation).subscribe(res=>{

  })
}  

}
