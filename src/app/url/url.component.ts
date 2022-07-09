import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {

  public urlservices = [
    { id: 1, name: 'expand' },
    { id: 2, name: 'shorten' }
  ];

  public serviceId: any;

  constructor(public router: Router) {}

  ngOnInit(): void {}

  onClick(service: any) {
    this.router.navigate(['/url', service.name]);
  }

  onExpand(){
    this.router.navigate(['url/expandurl']);
  }

  onShorten(){
    this.router.navigate(['url/shorturl']);
  }

  addUrl(){
    this.router.navigate(['url']);
  }

  dashboard(){
    this.router.navigate(['/dashboard']);
  }
}
