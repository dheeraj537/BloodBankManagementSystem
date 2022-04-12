import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/Models/hospital';
import { HospitalControllerService } from 'src/app/Services/hospital-controller.service';
@Component({
  selector: 'app-addhospital',
  templateUrl: './addhospital.component.html',
  styleUrls: ['./addhospital.component.css']
})
export class AddhospitalComponent implements OnInit {
hospitals:Hospital[];
hospital:Hospital;
  constructor(private hospitalcontrollerservice:HospitalControllerService) {
    this.hospital=new Hospital();
    this.AddHospitalDetails();
  }

  ngOnInit(): void {
  }
  AddHospitalDetails(){
    this.hospitalcontrollerservice.AddHospitalDetails(this.hospital).subscribe(res=>{


    })
  }
}
