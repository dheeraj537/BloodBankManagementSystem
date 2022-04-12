import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewallblooddonationcampsComponent } from './Components/viewallblooddonationcamps/viewallblooddonationcamps.component';
import { AddblooddonationcampComponent } from './Components/addblooddonationcamp/addblooddonationcamp.component';
import { GetblooddonationcampstartdateComponent } from './Components/getblooddonationcampstartdate/getblooddonationcampstartdate.component';
import { UpdatecampdetailsComponent } from './Components/updatecampdetails/updatecampdetails.component';
import { BlooddonationcampmenuComponent } from './Components/blooddonationcampmenu/blooddonationcampmenu.component';
import { GethospitaldetailsComponent } from './Components/gethospitaldetails/gethospitaldetails.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { HospitalmenuComponent } from './Components/hospitalmenu/hospitalmenu.component';
import { AddhospitalComponent } from './Components/addhospital/addhospital.component';
import { UpdatehospitalComponent } from './Components/updatehospital/updatehospital.component';

import { GetbloodbanksComponent } from './Components/getbloodbanks/getbloodbanks.component';
import { AddbloodbankComponent } from './Components/addbloodbank/addbloodbank.component';
import { UpdatebloodbankComponent } from './Components/updatebloodbank/updatebloodbank.component';
import { BloodbankmenuComponent } from './Components/bloodbankmenu/bloodbankmenu.component';
import { LoginComponent } from './Components/login/login.component';
import { AddblooddonordetailsComponent } from './Components/addblooddonordetails/addblooddonordetails.component';

import { UpdateblooddonordetailsComponent } from './Components/updateblooddonordetails/updateblooddonordetails.component';
import { AddblooddonordonationComponent } from './Components/addblooddonordonation/addblooddonordonation.component';
import { GetblooddonordetailsComponent } from './Components/getblooddonordetails/getblooddonordetails.component';
import { BlooddonormenuComponent } from './Components/blooddonormenu/blooddonormenu.component';
import { GetbloodinventoryComponent } from './Components/getbloodinventory/getbloodinventory.component';
import { TransferbloodComponent } from './Components/transferblood/transferblood.component';
import { SearchbloodComponent } from './Components/searchblood/searchblood.component';

//defining routes to the components
const routes: Routes = [
  {path:'viewbloodinventory',component:GetbloodinventoryComponent},
  {path:'transferblood',component:TransferbloodComponent},
  {path:'addblooddonordonation',component:AddblooddonordonationComponent},
  {path:'searchblood',component:SearchbloodComponent},

  {path:'updateblooddonordetails',component:UpdateblooddonordetailsComponent},
  {path:'addblooddonordetails',component:AddblooddonordetailsComponent},
  {path:'getblooddonordetails',component:GetblooddonordetailsComponent},
  {path:'blooddonormenu',component:BlooddonormenuComponent},

  {path:'viewbloodbanks',component:GetbloodbanksComponent},
  {path:'addbloodbank',component:AddbloodbankComponent},
  {path:'updatebloodbank',component:UpdatebloodbankComponent},
  {path:'bloodbankmenu',component:BloodbankmenuComponent},

  {path:'viewblooddonationcamp',component:ViewallblooddonationcampsComponent},
  {path:'addblooddonationcamp',component:AddblooddonationcampComponent},
  {path:'getblooddonationcampstartdate',component:GetblooddonationcampstartdateComponent},
  {path:'updateblooddonationcamp',component:UpdatecampdetailsComponent},
  {path:'blooddonationcampmenu',component:BlooddonationcampmenuComponent},


  {path:'updatehospital',component:UpdatehospitalComponent},
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
