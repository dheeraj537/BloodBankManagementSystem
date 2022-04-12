import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BloodDonor } from '../Models/blood-donor';
import { BloodDonorDonation } from 'src/app/Models/blood-donor-donation';
@Injectable({
  providedIn: 'root'
})
export class BlooddonorcontrollerService {

  blood_donor_api=environment.blood_donor_api
  constructor(private http:HttpClient) { }

  GetBloodDonors():Observable<BloodDonor[]>
  {
    return this.http.get<BloodDonor[]>(this.blood_donor_api+'GetBloodDonors')
  }
  AddBloodDonor(item:BloodDonor):Observable<any>
  {
    return this.http.post<string>(this.blood_donor_api+'AddBloodDonor',item);
  }
  UpdateBloodDonor(item:BloodDonor):Observable<any>
  {
    return this.http.put(this.blood_donor_api+'UpdateBloodDonor',item);
  }
  RemoveBloodDonor(bloodDonorId:number):Observable<any>
  {
    return this.http.delete(this.blood_donor_api+'RemoveBloodDonor/'+bloodDonorId);
  }
  AddBloodDonorDonation(item:BloodDonorDonation):Observable<any>
  {
    return this.http.post(this.blood_donor_api+'DonateBlood',item);
  }
  GetBloodInventory():Observable<BloodDonorDonation[]>{
    return this.http.get<BloodDonorDonation[]>(this.blood_donor_api+'GetBloodInventory')
  }
  TransferBlood(id:number):Observable<any>
  {
    return this.http.put(this.blood_donor_api+'TransferBlood/',id);
  }
  SearchBlood(bloodGroup:string,bloodBankID:number):Observable<number>{
    return this.http.get<number>(this.blood_donor_api+'SearchBlood/'+bloodGroup+'/'+bloodBankID);
  }
}
