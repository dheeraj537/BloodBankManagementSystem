import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/Models/hospital';
import { HospitalControllerService } from 'src/app/Services/hospital-controller.service';
@Component({
  selector: 'app-updatehospital',
  templateUrl: './updatehospital.component.html',
  styleUrls: ['./updatehospital.component.css']
})
export class UpdatehospitalComponent implements OnInit {
hospitals:Hospital[];
hospital:Hospital;
errormsg:string='';
  constructor(private hospitalcontrollerservice:HospitalControllerService) {

  this.hospital=new Hospital();
    this.UpdateHospital();
  }

  ngOnInit(): void {
  }
  UpdateHospital(){


      this.hospitalcontrollerservice.UpdateHospital(this.hospital).subscribe(res=>{


    })
    this.errormsg='updated successfully';
  }
}
