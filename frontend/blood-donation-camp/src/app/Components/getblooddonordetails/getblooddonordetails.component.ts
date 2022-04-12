import { Component, OnInit } from '@angular/core';
import { BloodDonor }from 'src/app/Models/blood-donor';
import { BlooddonorcontrollerService } from 'src/app/Services/blooddonorcontroller.service';
@Component({
  selector: 'app-getblooddonordetails',
  templateUrl: './getblooddonordetails.component.html',
  styleUrls: ['./getblooddonordetails.component.css']
})
export class GetblooddonordetailsComponent implements OnInit {
  blooddonors:BloodDonor[];
  blooddonor:BloodDonor;

  constructor(private blooddonorcontrollerservice:BlooddonorcontrollerService) {
  this.blooddonor=new BloodDonor();
  this.blooddonorcontrollerservice.GetBloodDonors().subscribe(response=>{
  this.blooddonors=response;

  })
  this.GetBloodDonorDetails();
  }
  ngOnInit(): void {
  }

  GetBloodDonorDetails() {
    this.blooddonorcontrollerservice.GetBloodDonors().subscribe(response=>{
      this.blooddonors=response;
    })
  }
  RemoveBloodDonor(id:number){
    this.blooddonorcontrollerservice.RemoveBloodDonor(id).subscribe(response=>{


    })

  }

}
