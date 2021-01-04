import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl=environment.baseUrl
  constructor(private http:HttpClient) { }
  
  post(url,data){
    console.log(" data in http ", data);
    return this.http.post(this.baseUrl + url , data);
  }
  get(url) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token'),
      })
    }
    return this.http.get(this.baseUrl + url,options);
  }
}
