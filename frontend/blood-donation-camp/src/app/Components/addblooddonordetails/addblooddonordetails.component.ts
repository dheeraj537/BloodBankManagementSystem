import { Component, OnInit } from '@angular/core';
import { BloodDonor }from 'src/app/Models/blood-donor';
import { BlooddonorcontrollerService } from 'src/app/Services/blooddonorcontroller.service';
@Component({
  selector: 'app-addblooddonordetails',
  templateUrl: './addblooddonordetails.component.html',
  styleUrls: ['./addblooddonordetails.component.css']
})
export class AddblooddonordetailsComponent implements OnInit {
  blooddonors:BloodDonor[];
  blooddonor:BloodDonor;
  constructor(private blooddonorcontrollerservice:BlooddonorcontrollerService) { 
    this.blooddonor=new BloodDonor();
    this.AddBloodDonor();  
  }

  ngOnInit(): void {
  }
AddBloodDonor(){
  this.blooddonorcontrollerservice.AddBloodDonor(this.blooddonor).subscribe(res=>{

  })
}  

}
