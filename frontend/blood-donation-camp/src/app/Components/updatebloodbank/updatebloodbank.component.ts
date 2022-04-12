import { Component, OnInit } from '@angular/core';
import { BloodBank } from 'src/app/Models/blood-bank';
import { BloodbankserviceService } from 'src/app/Services/bloodbankservice.service';
@Component({
  selector: 'app-updatebloodbank',
  templateUrl: './updatebloodbank.component.html',
  styleUrls: ['./updatebloodbank.component.css']
})
export class UpdatebloodbankComponent implements OnInit {
bloodbanks:BloodBank[];
bloodbank:BloodBank;
errormsg:string=''
  constructor(private bloodbankservice:BloodbankserviceService) {
    this.bloodbank=new BloodBank();
    this.UpdateBloodBank();
  }

  ngOnInit(): void {
  }
  UpdateBloodBank(){


      this.bloodbankservice.UpdateBloodBank(this.bloodbank).subscribe(res=>{


    })
    this.errormsg='updated successfully';
  }
}
