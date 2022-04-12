import { Component, OnInit } from '@angular/core';
import { BloodDonorDonation } from 'src/app/Models/blood-donor-donation';
import { BlooddonorcontrollerService } from 'src/app/Services/blooddonorcontroller.service';
@Component({
  selector: 'app-transferblood',
  templateUrl: './transferblood.component.html',
  styleUrls: ['./transferblood.component.css']
})
export class TransferbloodComponent implements OnInit {
blooddonordonations:BloodDonorDonation[];
blooddonordonation:BloodDonorDonation;
  constructor(private blooddonorcontrollerservice:BlooddonorcontrollerService) {
    this.blooddonordonation=new BloodDonorDonation();

    this.TransferBlood();

  }

  ngOnInit(): void {
  }
  TransferBlood():void
  {
    let id=this.blooddonordonation.bloodDonationID;
    this.blooddonorcontrollerservice.TransferBlood(id).subscribe(res=>{
      console.log(res);

    })
  }

}
