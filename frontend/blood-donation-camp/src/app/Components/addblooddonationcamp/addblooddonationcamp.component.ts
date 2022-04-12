import { Component, OnInit } from '@angular/core';
import { BloodDonationCamp } from 'src/app/Models/blood-donation-camp';
import { BlooddonationcampService } from 'src/app/Services/blooddonationcamp.service';
@Component({
  selector: 'app-addblooddonationcamp',
  templateUrl: './addblooddonationcamp.component.html',
  styleUrls: ['./addblooddonationcamp.component.css']
})
export class AddblooddonationcampComponent implements OnInit {
blooddonationcamps:BloodDonationCamp[]
blooddonationcamp:BloodDonationCamp;
  constructor( private BloodDonationCampService:BlooddonationcampService){
    this.blooddonationcamp=new BloodDonationCamp();
    this.AddBloodDonationCamp();
  }

  ngOnInit(): void {
  }
  AddBloodDonationCamp(){
    this.BloodDonationCampService.AddBloodDonationCamp(this.blooddonationcamp).subscribe(res=>{


    })
  }

}
