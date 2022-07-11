import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserService } from '../userser.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userDetails = {
    userName: '',
    password: '',
    email: '',
  };

  public userRegData = [] as any;

  constructor(public restApi: UserserService,public router: Router) {}

  ngOnInit(): void {
    this.restApi
    .getAllUsers()
    .subscribe((data)=>(this.userRegData = data));

  }

  
  addUser() {
    console.log(this.userDetails);
    this.restApi
      .createUser(this.userDetails)
      .subscribe((data) => this.router.navigate(['user/login']));
  }

  onSubmit() {
    alert('Employee data is added successfully');
  }

}
