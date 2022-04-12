import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Models/user';
@Injectable({
  providedIn: 'root'
})
export class LogincontrollerService {
  login_api=environment.login_api;

  constructor(private http:HttpClient) {



   }
   LoginCheck(Username:string,Password:string):Observable<string>{
    return this.http.get<string>(this.login_api+'LoginCheck/'+Username+'/'+Password);
  }
}
