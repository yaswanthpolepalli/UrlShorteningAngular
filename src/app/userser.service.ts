import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Url } from './url';
@Injectable({
  providedIn: 'root'
})
export class UserserService {

  private restUrl: string = 'http://localhost:8081/url';
  private urlendpoint:string='http://localhost:8082/urls';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  
  updateuserforurl(url:any,id:any): Observable<Url> {
    return this.http.post<Url>(
      this.urlendpoint + '/updateuserid',
      JSON.stringify(url),
      this.httpOptions
    );
  }


  createUser(user: any): Observable<User> {
    console.log(user);
    return this.http.post<User>(
      this.restUrl + '/adduser',
      JSON.stringify(user),
      this.httpOptions
    );
  }

  validateUser(user: any) :Observable<User>{
    console.log(user);
    return this.http.post<User>(
      this.restUrl + '/validateuser',
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
      this.restUrl + '/updateUserByName',
      JSON.stringify(user),
      this.httpOptions
    );
  }

  getUserFromService(user: any): Observable<User[]> {
    return this.http.get<User[]>(this.restUrl + '/validateveruser');
  }

  getUsersFromService(): Observable<User[]> {
    return this.http.get<User[]>(this.restUrl + '/getallusers');
  }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.restUrl + '/getusers')
  }

  getUserByName(name: any): Observable<User> {
    return this.http.get<User>(
      this.restUrl + '/validateveruser/' + name,
      this.httpOptions
    );
  }
  
}
