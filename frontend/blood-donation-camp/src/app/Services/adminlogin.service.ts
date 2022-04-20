import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Admin } from '../Models/admin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminloginService {
  admin_api=environment.admin_api;

  constructor(private http:HttpClient) { }
  Validate(item:Admin):Observable<any>{
    return this.http.post(this.admin_api+'Validate',item);
  }
}
