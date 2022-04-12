import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/Models/hospital';
import { HospitalControllerService } from 'src/app/Services/hospital-controller.service';
@Component({
  selector: 'app-gethospitaldetails',
  templateUrl: './gethospitaldetails.component.html',
  styleUrls: ['./gethospitaldetails.component.css']
})
export class GethospitaldetailsComponent implements OnInit {
  hospitals:Hospital[];
  hospital:Hospital;

  constructor(private hospitalcontrollerservice:HospitalControllerService) {
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
      

    })

  }
  UpdateHospitalDetails(){

  }

}

