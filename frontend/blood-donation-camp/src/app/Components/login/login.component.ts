import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { Router } from '@angular/router';
import { LogincontrollerService } from 'src/app/Services/logincontroller.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
users:User[];
user:User;
errMsg:string=''
    constructor(private loginservice:LogincontrollerService,private router:Router) {
      this.user=new User();
     this.LoginCheck();
     }

    ngOnInit(): void {
    }
    LoginCheck()
    {
      let uname=this.user.userName;
      let pwd=this.user.password;
      this.loginservice.LoginCheck(uname,pwd).subscribe(res=>{
        var output=res;
        if(output=="Logged In"){
          this.router.navigateByUrl('homepage');
        }
        else{
          this.errMsg="incorrect username or password";
        }

    })

    }
  }
