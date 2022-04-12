import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BloodBank } from '../Models/blood-bank';
import { Observable } from 'rxjs';
import { HttpClient,HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BloodbankserviceService {
  bloodbank_api=environment.BloodBank_api;

  constructor(private http:HttpClient) { }
  GetBloodBanks():Observable<BloodBank[]>{
    return this.http.get<BloodBank[]>(this.bloodbank_api+'GetBloodBanks')
  }
  AddBloodBank(item:BloodBank):Observable<any>{
    return this.http.post<string>(this.bloodbank_api+'AddBloodBank',item);
  }
  UpdateBloodBank(item:BloodBank):Observable<any>
  {
    return this.http.put(this.bloodbank_api+'UpdateBloodBank',item);
  }




}
