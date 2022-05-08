import { Component, OnInit } from '@angular/core';
import { BlooddonorcontrollerService } from 'src/app/Services/blooddonorcontroller.service';
import { BloodDonorDonation } from 'src/app/Models/blood-donor-donation';
import { Searchblooddetails } from 'src/app/Models/searchblooddetails';
@Component({
  selector: 'app-searchblood',
  templateUrl: './searchblood.component.html',
  styleUrls: ['./searchblood.component.css']
})
export class SearchbloodComponent implements OnInit {
blooddonordonations:BloodDonorDonation[];
blooddonordonation:BloodDonorDonation;
numberofbottles:number;
searchblooddetails:Searchblooddetails;
num:number=0;
  constructor(private blooddonorcontrollerservice:BlooddonorcontrollerService) {
     this.searchblooddetails=new Searchblooddetails;
    this.blooddonordonation=new BloodDonorDonation();
    this.SearchBlood();

  }

  ngOnInit(): void {
  }
  SearchBlood()
  {
     this.searchblooddetails.BloodGroup=this.blooddonordonation.bloodGroup;
    this.searchblooddetails.BloodBankID=this.blooddonordonation.bloodBankID;
    this.blooddonorcontrollerservice.SearchBlood(this.searchblooddetails).subscribe(res=>{

        this.numberofbottles=res;
        // return this.numberofbottles;



    })
    this.num=this.numberofbottles;




  }


}



