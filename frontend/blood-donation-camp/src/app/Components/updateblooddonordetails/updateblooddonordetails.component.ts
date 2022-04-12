import { Component, OnInit } from '@angular/core';
import { BloodDonor }from 'src/app/Models/blood-donor';
import { BlooddonorcontrollerService } from 'src/app/Services/blooddonorcontroller.service';

@Component({
  selector: 'app-updateblooddonordetails',
  templateUrl: './updateblooddonordetails.component.html',
  styleUrls: ['./updateblooddonordetails.component.css']
})
export class UpdateblooddonordetailsComponent implements OnInit {
blooddonors:BloodDonor[];
blooddonor:BloodDonor;
errormsg:string='';
  constructor(private blooddonorcontrollerservice:BlooddonorcontrollerService) {

  this.blooddonor=new BloodDonor();
    this.UpdateBloodDonor();
  }

  ngOnInit(): void {
  }
  UpdateBloodDonor(){


      this.blooddonorcontrollerservice.UpdateBloodDonor(this.blooddonor).subscribe(res=>{


    })
    this.errormsg='updated successfully';
  }
}