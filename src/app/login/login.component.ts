import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

import { UserserService } from '../userser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(public restApi: UserserService,public router: Router,public aroute:ActivatedRoute) { }
  
  userLogId:any;
  userLogDetails = {
    email: '',
    password: ''
  };

  public userLogData = [] as any;
  ngOnInit(): void {
   // console.log(this.userLogDetails);
     this.restApi
      .getAllUsers()
      .subscribe((data)=>(this.userLogData = data));
  }
  
  getVeriUser(){
    this.userLogId=this.userLogData.id;
    this.router.navigate(['/urlpage']);
    
  }
  
  getNotVeriUser(){
    this.router.navigate(['/user/login']);
    alert('invalid login details');
  }

  getUser(){
    this.restApi.
      validateUser(this.userLogDetails)
      .subscribe((data) => this.router.navigate(['url/expandurl']));
  }

  onSubmit() {
    // this.router.navigate(['/login']);
     //alert('Employee data is verified successfully');
   }

}
