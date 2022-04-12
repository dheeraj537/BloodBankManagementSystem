import { Component, OnInit } from '@angular/core';

import { BloodDonationCamp } from 'src/app/Models/blood-donation-camp';
import { BlooddonationcampService } from 'src/app/Services/blooddonationcamp.service';
@Component({
  selector: 'app-updatecampdetails',
  templateUrl: './updatecampdetails.component.html',
  styleUrls: ['./updatecampdetails.component.css']
})
export class UpdatecampdetailsComponent implements OnInit {

date:Date=new Date(2022,4,9)
blooddonationcamps:BloodDonationCamp[];
blooddonationcamp:BloodDonationCamp;
  constructor(private BloodDonationCampService:BlooddonationcampService) {
    this.blooddonationcamp=new BloodDonationCamp();
    this.UpdateBloodDonationCamp();
  }

  ngOnInit(): void {
  }
  UpdateBloodDonationCamp(){


      this.BloodDonationCampService.editBloodDonationCamp(this.blooddonationcamp).subscribe(res=>{


    })

  }


}

