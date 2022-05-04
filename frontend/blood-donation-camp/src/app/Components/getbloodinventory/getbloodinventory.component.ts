import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { BloodDonorDonation } from 'src/app/Models/blood-donor-donation';
import { BlooddonorcontrollerService } from 'src/app/Services/blooddonorcontroller.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-getbloodinventory',
  templateUrl: './getbloodinventory.component.html',
  styleUrls: ['./getbloodinventory.component.css']
})
export class GetbloodinventoryComponent implements OnInit {
blooddonordonations:BloodDonorDonation[];
blooddonordonation:BloodDonorDonation;

result1:Object=new Date();

  constructor(private blooddonorcontrollerservice:BlooddonorcontrollerService,private router:Router){
    this.blooddonordonation=new BloodDonorDonation();
    this.result1= this.blooddonordonation.bloodDonationDate;
        this.GetBloodInventory();


  }

  ngOnInit(): void {
  }
  GetBloodInventory(){
    this.blooddonorcontrollerservice.GetBloodInventory().subscribe(response=>{
      this.blooddonordonations=response;
      this.result1= this.blooddonordonation.bloodDonationDate;


    })

  }
 addDays(numOfDays: number, date = new Date()) {
    date.setDate(date.getDate() + numOfDays);
    return date;
  }
  DeleteExpiredBlood(id:number){
    this.router.navigateByUrl('viewbloodinventory');
    this.blooddonorcontrollerservice.DeleteExpiredBlood(id).subscribe(response=>{


    })

  }


}
