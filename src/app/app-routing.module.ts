import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddurlComponent } from './addurl/addurl.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ExpandURLComponent } from './expand-url/expand-url.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShortenUrlComponent } from './shorten-url/shorten-url.component';
import { UrlComponent } from './url/url.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path :'user/login',component:LoginComponent},
  { path:'url/expandurl',component:ExpandURLComponent},
  {path :'url/shorturl',component:ShortenUrlComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'user',component:RegisterComponent},
  {path:'urlpage',component:UrlComponent},
  {path:'userpage',component:UserComponent},
  {path:'adminlogin',component:AdminComponent},
  {path:'edituser',component:EdituserComponent},
  {path:'url',component:AddurlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


