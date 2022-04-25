import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewallblooddonationcampsComponent } from './Components/viewallblooddonationcamps/viewallblooddonationcamps.component';
import { AddblooddonationcampComponent } from './Components/addblooddonationcamp/addblooddonationcamp.component';


import { BlooddonationcampmenuComponent } from './Components/blooddonationcampmenu/blooddonationcampmenu.component';
import { GethospitaldetailsComponent } from './Components/gethospitaldetails/gethospitaldetails.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { HospitalmenuComponent } from './Components/hospitalmenu/hospitalmenu.component';
import { AddhospitalComponent } from './Components/addhospital/addhospital.component';


import { GetbloodbanksComponent } from './Components/getbloodbanks/getbloodbanks.component';
import { AddbloodbankComponent } from './Components/addbloodbank/addbloodbank.component';

import { BloodbankmenuComponent } from './Components/bloodbankmenu/bloodbankmenu.component';
import { LoginComponent } from './Components/login/login.component';
import { AddblooddonordetailsComponent } from './Components/addblooddonordetails/addblooddonordetails.component';


import { AddblooddonordonationComponent } from './Components/addblooddonordonation/addblooddonordonation.component';
import { GetblooddonordetailsComponent } from './Components/getblooddonordetails/getblooddonordetails.component';
import { BlooddonormenuComponent } from './Components/blooddonormenu/blooddonormenu.component';
import { GetbloodinventoryComponent } from './Components/getbloodinventory/getbloodinventory.component';

import { SearchbloodComponent } from './Components/searchblood/searchblood.component';

import { ViewbloodavailableComponent } from './Components/viewbloodavailable/viewbloodavailable.component';

//defining routes to the components
const routes: Routes = [
  {path:'viewbloodinventory',component:GetbloodinventoryComponent},

  {path:'addblooddonordonation',component:AddblooddonordonationComponent},
  {path:'searchblood',component:SearchbloodComponent},
  {path:'bloodavailable',component:ViewbloodavailableComponent},


  {path:'addblooddonordetails',component:AddblooddonordetailsComponent},
  {path:'getblooddonordetails',component:GetblooddonordetailsComponent},
  {path:'blooddonormenu',component:BlooddonormenuComponent},

  {path:'viewbloodbanks',component:GetbloodbanksComponent},
  {path:'addbloodbank',component:AddbloodbankComponent},

  {path:'bloodbankmenu',component:BloodbankmenuComponent},

  {path:'viewblooddonationcamp',component:ViewallblooddonationcampsComponent},
  {path:'addblooddonationcamp',component:AddblooddonationcampComponent},


  {path:'blooddonationcampmenu',component:BlooddonationcampmenuComponent},



  {path:'viewhospital',component:GethospitaldetailsComponent},
  {path:'addhospital',component:AddhospitalComponent},
  {path:'hospitalmenu',component:HospitalmenuComponent},

  {path:'homepage',component:HomepageComponent},
  {path:'',component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
