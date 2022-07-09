import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-expand-url',
  templateUrl: './expand-url.component.html',
  styleUrls: ['./expand-url.component.css']
})
export class ExpandURLComponent implements OnInit {

  public isLoggedIn=false;

  constructor(private router:Router) { }

  onClick(){
  }


  ngOnInit(): void {
  }


}
