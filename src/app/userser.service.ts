import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Url } from './url';
import { Urlres } from './urlres';

@Injectable({
  providedIn: 'root'
})
export class UserserService {

  private userendpoint: string = 'http://localhost:8081/url';
  private urlendpoint:string='http://localhost:8082/urls';
  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  
  updateuserforurl(url:any,id:any): Observable<Url> {
    return this.http.post<Url>(
      this.userendpoint + '/updateuserid',
      JSON.stringify(url),
      this.httpOptions
    );
  }


  createUser(user: any): Observable<User> {
    console.log(user);
    return this.http.post<User>(
      this.userendpoint + '/adduser',
      JSON.stringify(user),
      this.httpOptions
    );
  }

  validateUser(user: any) :Observable<User>{
    console.log(user);
    return this.http.post<User>(
      this.userendpoint + '/validateuser',
      JSON.stringify(user),
      this.httpOptions
    );
  }

 
  addNewUrl(url:any):Observable<Url>{
    console.log(url);
    return this.http.post<Url>(
      this.urlendpoint + '/short',
      JSON.stringify(url),
      this.httpOptions
    );

  }

  editUser(user: any): Observable<User> {
    return this.http.put<User>(
      this.userendpoint + '/updateUserByName',
      JSON.stringify(user),
      this.httpOptions
    );
  }

  getUserFromService(user: any): Observable<User[]> {
    return this.http.get<User[]>(this.userendpoint + '/validateveruser');
  }

  getUsersFromService(): Observable<User[]> {
    return this.http.get<User[]>(this.userendpoint + '/getallusers');
  }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.userendpoint + '/getusers')
  }

  getUserByName(name: any): Observable<User> {
    return this.http.get<User>(
      this.userendpoint + '/validateveruser/' + name,
      this.httpOptions
    );
  }
  shortUrlService(urlres: any): Observable<Urlres> {
    console.log("service"+urlres)
    return this.http.post<Urlres>(
      this.urlendpoint + '/short',
      JSON.stringify(urlres),
      this.httpOptions
    );
  }

  expandUrlService(urlres: any): Observable<Urlres> {
    console.log("service"+urlres.toString())
    return this.http.get<Urlres>(
      this.urlendpoint + '/urlByShort/' + urlres,
      this.httpOptions
    );
  }

  increaseUrlCountService(urlres: any):Observable<string>{
    return this.http.put<string>(
      this.urlendpoint + '/updateCount/'+urlres,
      this.httpOptions
    );
  }  

  increaseUrlCountServices(urlres: any):Observable<string>{
    return this.http.put<string>(
      this.urlendpoint +"/"+urlres,
      this.httpOptions
    );
  } 
}
