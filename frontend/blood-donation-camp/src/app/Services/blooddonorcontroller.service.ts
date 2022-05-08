import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BloodDonor } from '../Models/blood-donor';
import { BloodDonorDonation } from 'src/app/Models/blood-donor-donation';
import { Bloodavailable } from '../Models/bloodavailable';
import { Transferdetails } from '../Models/transferdetails';
import { Searchblooddetails } from '../Models/searchblooddetails';
@Injectable({
  providedIn: 'root'
})
export class BlooddonorcontrollerService {

  blood_donor_api=environment.api_base
  constructor(private http:HttpClient) { }

  GetBloodDonors():Observable<BloodDonor[]>
  {
    return this.http.get<BloodDonor[]>(this.blood_donor_api+'BloodDonor/GetBloodDonors')
  }
  AddBloodDonor(item:BloodDonor):Observable<any>
  {
    return this.http.post(this.blood_donor_api+'BloodDonor/AddBloodDonor',item);
  }
  UpdateBloodDonor(item:BloodDonor):Observable<any>
  {
    return this.http.put(this.blood_donor_api+'BloodDonor/UpdateBloodDonor',item);
  }
  RemoveBloodDonor(bloodDonorId:number):Observable<any>
  {
    return this.http.delete(this.blood_donor_api+'BloodDonor/RemoveBloodDonor/'+bloodDonorId);
  }
  AddBloodDonorDonation(item:BloodDonorDonation):Observable<any>
  {
    return this.http.post(this.blood_donor_api+'Bloodinventory',item);
  }
  GetBloodInventory():Observable<BloodDonorDonation[]>{
    return this.http.get<BloodDonorDonation[]>(this.blood_donor_api+'BloodDonor/GetBloodInventory')
  }

  SearchBlood(item:Searchblooddetails):Observable<number>{
    return this.http.post<number>(this.blood_donor_api+'BloodDonor/SearchBlood/',item);
  }
  DeleteExpiredBlood(id:number):Observable<any>
  {
    return this.http.delete(this.blood_donor_api+'BloodDonor/DeleteExpiredBlood/'+id);
  }
  ViewBloodAvailable():Observable<Bloodavailable[]>
  {
    return this.http.get<Bloodavailable[]>(this.blood_donor_api+'BloodDonor/ViewBloodAvailable');
  }
  transferblood(item:Transferdetails):Observable<any>
  {
    return this.http.post(this.blood_donor_api+'Transfer',item);

  }
}
