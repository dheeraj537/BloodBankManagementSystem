import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/Models/admin';
import { Router } from '@angular/router';
import { AdminloginService } from 'src/app/Services/adminlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
admin:Admin;
errMsg:string=''
    constructor(private adminloginservice:AdminloginService,private router:Router)
     {
      this.admin=new Admin();




     }

    ngOnInit(): void {
    }
  Validate()
    {
      this.adminloginservice.Validate(this.admin).subscribe(res=>{
        console.log(res)
        if(res.message == "login successfull")
        {
          this.router.navigateByUrl('homepage');
        }
        else{
          this.errMsg="invalid login id or password";
        }

      })
    }

  }

