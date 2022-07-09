import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'URL Shortening';
  preUrl='';
  constructor(private router:Router,public aroute:ActivatedRoute){
    router.events.subscribe((url:any) => this.preUrl=router.url);
      console.log(this.router.url);
  }

  ngOnInit(){
   
  }

}

