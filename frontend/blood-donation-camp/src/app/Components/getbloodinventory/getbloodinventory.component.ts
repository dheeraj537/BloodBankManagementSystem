import { Component, OnInit } from '@angular/core';
import { BloodDonorDonation } from 'src/app/Models/blood-donor-donation';
import { BlooddonorcontrollerService } from 'src/app/Services/blooddonorcontroller.service';
@Component({
  selector: 'app-getbloodinventory',
  templateUrl: './getbloodinventory.component.html',
  styleUrls: ['./getbloodinventory.component.css']
})
export class GetbloodinventoryComponent implements OnInit {
blooddonordonations:BloodDonorDonation[];
blooddonordonation:BloodDonorDonation;
  constructor(private blooddonorcontrollerservice:BlooddonorcontrollerService){
    this.blooddonordonation=new BloodDonorDonation();
    //add GetAllBloodDonationCamps() response to product array
        this.blooddonorcontrollerservice.GetBloodInventory().subscribe(response=>{
        this.blooddonordonations=response;

        })
        this.GetBloodInventory();


  }

  ngOnInit(): void {
  }
  GetBloodInventory(){
    this.blooddonorcontrollerservice.GetBloodInventory().subscribe(response=>{
      this.blooddonordonations=response;
    })

  }

}
