import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Bloodavailable } from 'src/app/Models/bloodavailable';
import { BlooddonorcontrollerService } from 'src/app/Services/blooddonorcontroller.service';

@Component({
  selector: 'app-viewbloodavailable',
  templateUrl: './viewbloodavailable.component.html',
  styleUrls: ['./viewbloodavailable.component.css']
})
export class ViewbloodavailableComponent implements OnInit {
bloodsavailable:Bloodavailable[];
bloodavailable:Bloodavailable;
op:string;
  constructor(private blooddonorcontrollerservice:BlooddonorcontrollerService) {
    this.bloodavailable=new Bloodavailable();

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
    transferblood(id:number,group:string){
      let to=this.bloodavailable.tobloodBankID;
      let bottles=this.bloodavailable.numberOfBottlesToSend;

    this.blooddonorcontrollerservice.transferblood(id,group,to,bottles).subscribe(res=>{
      this.op=res;


    })}

}
