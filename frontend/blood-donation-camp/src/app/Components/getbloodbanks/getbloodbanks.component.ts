import { Component, OnInit } from '@angular/core';
import { BloodBank } from 'src/app/Models/blood-bank';
import { BloodbankserviceService } from 'src/app/Services/bloodbankservice.service';

@Component({
  selector: 'app-getbloodbanks',
  templateUrl: './getbloodbanks.component.html',
  styleUrls: ['./getbloodbanks.component.css']
})
export class GetbloodbanksComponent implements OnInit {
bloodbanks:BloodBank[];
bloodbank:BloodBank;
  constructor(private bloodbankserviceservice:BloodbankserviceService) {
        this.bloodbank=new BloodBank();
        this.bloodbankserviceservice.GetBloodBanks().subscribe(response=>{
        this.bloodbanks=response;

        })
        this.GetBloodBanks();


  }

  ngOnInit(): void {
  }
  GetBloodBanks(){
    this.bloodbankserviceservice.GetBloodBanks().subscribe(response=>{
      this.bloodbanks=response;
    })

  }
  updatebloodbank(id:number,name:string,adress:string,city:string,mobile:string){
    this.bloodbank.bloodBankID=id;
    this.bloodbank.bloodBankName=name;
    this.bloodbank.address=adress;
    this.bloodbank.city=city;
    this.bloodbank.contactNumber=mobile;
    this.bloodbankserviceservice.UpdateBloodBank(this.bloodbank).subscribe(res=>{
      this.GetBloodBanks();

    })
  }
  Deletebloodbank(id:number){
    this.bloodbankserviceservice.DeleteBloodBank(id).subscribe(res=>{
      this.GetBloodBanks();
    })
  }

}
