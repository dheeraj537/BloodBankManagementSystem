import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/Models/hospital';
import { HospitalControllerService } from 'src/app/Services/hospital-controller.service';
import { Router } from '@angular/router';
import { waitForAsync } from '@angular/core/testing';
@Component({
  selector: 'app-gethospitaldetails',
  templateUrl: './gethospitaldetails.component.html',
  styleUrls: ['./gethospitaldetails.component.css']
})
export class GethospitaldetailsComponent implements OnInit {
  hospitals:Hospital[];
  hospital:Hospital;

  constructor(private hospitalcontrollerservice:HospitalControllerService,private router:Router) {
        this.hospital=new Hospital();
    //add GetAllBloodDonationCamps() response to product array
        this.hospitalcontrollerservice.GetHospitalDetails().subscribe(response=>{
        this.hospitals=response;
        console.log(this.hospitals);

        })
        this.GetHospitalDetails();



  }

  ngOnInit(): void {
  }
  GetHospitalDetails(){
    this.hospitalcontrollerservice.GetHospitalDetails().subscribe(response=>{
      this.hospitals=response;
    })

  }
  DeleteHospitalDetails(id:number){


    this.hospitalcontrollerservice.RemoveHospitalDetails(id).subscribe(response=>{
      // this.router.navigate['/viewhospital'];
      // this.ngOnInit();

      this.GetHospitalDetails();



    })



  }
  updatehospital(id:number,name:string,address:string,city:string,contact:string,bloodbank:number){
    this.hospital.hospitalID=id;
    this.hospital.hospitalName=name;
    this.hospital.address=address;
    this.hospital.city=city;
    this.hospital.contactNo=contact;
    this.hospital.bloodBankID=bloodbank;

    this.hospitalcontrollerservice.updatehospital(this.hospital).subscribe(res=>{
      this.GetHospitalDetails();


    })

  }

}

