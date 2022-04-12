import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hospital } from '../Models/hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalControllerService {
 

  constructor(private http:HttpClient) { }
  hospital_api=environment.hospital_api

  GetHospitalDetails():Observable<Hospital[]>
  {
    //invoking the api endpoints and returns the hospital api array
    return this.http.get<Hospital[]>(this.hospital_api+'GetHospitalDetails')
  }
  //Adding Hospital Details
  AddHospitalDetails(item:Hospital):Observable<any>
  {
    return this.http.post<string>(this.hospital_api + 'AddHospitalDetails', item);
  }
  //Updating Hospital Details
  UpdateHospital(item:Hospital):Observable<any>
  {
    return this.http.put(this.hospital_api+'UpdateHospital',item)
  }
  //Removing Hospital Details
  RemoveHospitalDetails(id:number):Observable<any>
  {
    return this.http.delete(this.hospital_api+'RemoveHospitalDetails/'+id)
  }
}
