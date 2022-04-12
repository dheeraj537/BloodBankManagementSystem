import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BloodDonationCamp } from '../Models/blood-donation-camp';
@Injectable({
  providedIn: 'root'
})
export class BlooddonationcampService {
  BloodDonationCamp_api=environment.BloodDonationCamp_api
  constructor(private http:HttpClient) { }
   GetAllBloodDonationCamps():Observable<BloodDonationCamp[]>
   {
     //Invoking the api endpoint and returns data in blooddonationcamp array
     return this.http.get<BloodDonationCamp[]>(this.BloodDonationCamp_api+'GetAllBloodDonationCamps')
   }
   GetBloodDonationCampStartDate(id:number):Observable<Date>{
     return this.http.get<Date>(this.BloodDonationCamp_api+'GetBloodDonationCampStartDate/'+id)
   }
  AddBloodDonationCamp(item:BloodDonationCamp):Observable<any>{
    return this.http.post(this.BloodDonationCamp_api+'AddBloodDonationCamp',item);

  }
  editBloodDonationCamp(item:BloodDonationCamp):Observable<any>{
    return this.http.put(this.BloodDonationCamp_api+'EditBloodDonationCamp',item);
  }
  
}
