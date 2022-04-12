import { Component, OnInit } from '@angular/core';
import { BloodBank } from 'src/app/Models/blood-bank';
import { BloodbankserviceService } from 'src/app/Services/bloodbankservice.service';
@Component({
  selector: 'app-addbloodbank',
  templateUrl: './addbloodbank.component.html',
  styleUrls: ['./addbloodbank.component.css']
})
export class AddbloodbankComponent implements OnInit {
bloodbanks:BloodBank[];
bloodbank:BloodBank;
  constructor(private bloodbankservice:BloodbankserviceService) {
    this.bloodbank=new BloodBank();
    this.AddBloodBank();
  }

  ngOnInit(): void {
  }
  AddBloodBank(){
    this.bloodbankservice.AddBloodBank(this.bloodbank).subscribe(res=>{


    })
  }
}
