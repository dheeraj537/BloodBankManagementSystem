import { Component, OnInit } from '@angular/core';
import { BloodDonationCamp } from 'src/app/Models/blood-donation-camp';
import { BlooddonationcampService } from 'src/app/Services/blooddonationcamp.service';
@Component({
  selector: 'app-viewallblooddonationcamps',
  templateUrl: './viewallblooddonationcamps.component.html',
  styleUrls: ['./viewallblooddonationcamps.component.css']
})
export class ViewallblooddonationcampsComponent implements OnInit
 {
blooddonationcamps:BloodDonationCamp[]
blooddonationcamp:BloodDonationCamp;
today:object=new Date();
usercampdate:Date;
msg:string;
  constructor(private blooddonationcampservice:BlooddonationcampService)
  {
    this.blooddonationcamp=new BloodDonationCamp();
    //add GetAllBloodDonationCamps() response to product array
    this.blooddonationcampservice.GetAllBloodDonationCamps().subscribe(response=>{
      this.blooddonationcamps=response;
    })

      this.GetAllBloodDonationCamps();

   }



  ngOnInit(): void {
  }
  GetAllBloodDonationCamps(){
    this.blooddonationcampservice.GetAllBloodDonationCamps().subscribe(response=>{
      this.blooddonationcamps=response;
    }
    )}
    updateblooddonationcamp(id:number,name:string,address:string,city:string,bloodbankid:number,startdate:Date,enddate:Date){

      if(this.usercampdate>this.today){

        this.blooddonationcamp.bloodDonationCampID=id;
        this.blooddonationcamp.campName=name;
        this.blooddonationcamp.adress=address;
        this.blooddonationcamp.city=city;
        this.blooddonationcamp.bloodBankID=bloodbankid;
        this.blooddonationcamp.campStartDate=startdate;
        this.blooddonationcamp.campEndDate=enddate;
        this.blooddonationcampservice.editBloodDonationCamp(this.blooddonationcamp).subscribe(res=>{

        })

      }


    }
    GetBloodDonationCampStartDate(id:number): void{
      
      this.blooddonationcampservice.GetBloodDonationCampStartDate(id).subscribe(res=>{
             this.usercampdate=new Date(res);




      })

    }

  }



