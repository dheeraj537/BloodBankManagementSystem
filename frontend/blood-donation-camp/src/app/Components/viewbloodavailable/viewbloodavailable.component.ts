import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Bloodavailable } from 'src/app/Models/bloodavailable';
import { Transferdetails } from 'src/app/Models/transferdetails';
import { BlooddonorcontrollerService } from 'src/app/Services/blooddonorcontroller.service';

@Component({
  selector: 'app-viewbloodavailable',
  templateUrl: './viewbloodavailable.component.html',
  styleUrls: ['./viewbloodavailable.component.css']
})
export class ViewbloodavailableComponent implements OnInit {
bloodsavailable:Bloodavailable[];
bloodavailable:Bloodavailable;
transferdetails:Transferdetails;
op:string;
  constructor(private blooddonorcontrollerservice:BlooddonorcontrollerService) {
    this.bloodavailable=new Bloodavailable();
    this.transferdetails=new Transferdetails();



    this.ViewBloodAvailable();

   }

  ngOnInit(): void {
  }
  ViewBloodAvailable(){
    this.blooddonorcontrollerservice.ViewBloodAvailable().subscribe(response=>{
      this.bloodsavailable=response;
      console.log(this.bloodsavailable);

    }
    )}
    transferblood(id:number,group:string,to:number,bottles:number){

    this.transferdetails.bloodBankID=id;
    this.transferdetails.bloodGroup=group;
    this.transferdetails.toBloodBankID=to;
    this.transferdetails.numberOfBottlesToSend=bottles;

    this.blooddonorcontrollerservice.transferblood(this.transferdetails).subscribe(res=>{
      this.op=res;


    })}

}
