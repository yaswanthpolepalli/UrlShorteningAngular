import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserService } from '../userser.service';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-addurl',
  templateUrl: './addurl.component.html',
  styleUrls: ['./addurl.component.css']
})
export class AddurlComponent implements OnInit {

  alog : any = localStorage.getItem("userLogID");
  urlDetails={
    longUrl:'',
    shortUrl:''

  };
  @Input("userId")
  public uid:any;
  constructor(public restApi: UserserService,public router: Router) { }

  ngOnInit(): void {
  }

  addShortUrl(){
    console.log(this.urlDetails);
    this.restApi
      .addNewUrl(this.urlDetails)
      .subscribe((data) => this.router.navigate(['userpage']));
  }

}
