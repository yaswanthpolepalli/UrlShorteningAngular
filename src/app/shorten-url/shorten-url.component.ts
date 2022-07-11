import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Url } from '../url';
import { UserserService } from '../userser.service';

@Component({
  selector: 'app-shorten-url',
  templateUrl: './shorten-url.component.html',
  styleUrls: ['./shorten-url.component.css']
})

export class ShortenUrlComponent implements OnInit{

  

  urlDetails={
    longUrl:'',
    shortUrl:''

  };
  shortURL : Url={
    id:0,
    shortUrl: this.urlDetails.shortUrl,
    longUrl: this.urlDetails.longUrl,
    creationDate: '2022-07-08',
    lastAccessDate:'',
    accessCount:0
  };
  loggedID:any;
  today:any;
  userId:number=0;
  dataPipe:DatePipe=new DatePipe('en-US');
  constructor(public restApi: UserserService,public router: Router,public rout: ActivatedRoute) {
    this.rout.queryParams.subscribe(params=>{console.log(params['userId']);{
      this.userId=params['userId'];
    }})
    this.today=new Date();
    this.today=this.dataPipe.transform(this.today,'yyyy-MM-dd');
    console.log(this.today);
   }

  ngOnInit(){
    
  }
  
  shortUrl(){
    console.log(this.urlDetails);
    this.shortURL.id=this.userId;
    this.shortURL.creationDate=this.today;
    this.shortURL.longUrl=this.urlDetails.longUrl;
    this.restApi
      .shortUrlService(this.shortURL)
      .subscribe((data) => this.urlDetails.shortUrl= data.shortUrl);
  }
  
  verifyUrl(){
    console.log(this.urlDetails);
  }
  
}
