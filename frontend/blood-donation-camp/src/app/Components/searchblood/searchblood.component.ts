import { Component, OnInit } from '@angular/core';
import { BlooddonorcontrollerService } from 'src/app/Services/blooddonorcontroller.service';
import { BloodDonorDonation } from 'src/app/Models/blood-donor-donation';
@Component({
  selector: 'app-searchblood',
  templateUrl: './searchblood.component.html',
  styleUrls: ['./searchblood.component.css']
})
export class SearchbloodComponent implements OnInit {
blooddonordonations:BloodDonorDonation[];
blooddonordonation:BloodDonorDonation;
numberofbottles:number;
num:number=0;
  constructor(private blooddonorcontrollerservice:BlooddonorcontrollerService) {

    this.blooddonordonation=new BloodDonorDonation();
    this.SearchBlood();

  }

  ngOnInit(): void {
  }
  SearchBlood()
  {
    let group=this.blooddonordonation.bloodGroup;
    let id=this.blooddonordonation.bloodBankID;
    this.blooddonorcontrollerservice.SearchBlood(group,id).subscribe(res=>{

        this.numberofbottles=res;



    })
    this.num=this.numberofbottles;




  }


}



