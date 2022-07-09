import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ExpandURLComponent } from './expand-url/expand-url.component';
import { ShortenUrlComponent } from './shorten-url/shorten-url.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from  '@angular/common/http';
import { UrlComponent } from './url/url.component';
import { UrlservicesComponent } from './urlservices/urlservices.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AddurlComponent } from './addurl/addurl.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExpandURLComponent,
    ShortenUrlComponent,
    DashboardComponent,
    RegisterComponent,
    UrlComponent,
    UrlservicesComponent,
    UserComponent,
    AdminComponent,
    EdituserComponent,
    AddurlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
