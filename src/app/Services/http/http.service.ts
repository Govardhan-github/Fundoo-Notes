import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import{HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = environment.BaseUrl;
  token : any;

  constructor(private http : HttpClient) { 
    localStorage.getItem('token')
  }

  Post(url: any, data: any, token: boolean=false, headers: any) {
    return this.http.post(this.url + url, data,token && headers);
  }

  
  Get(url: any,  headers: any) {
    return this.http.get( url, headers);
  }
  
  GetallNotes(url: any) {
    this.token = localStorage.getItem('token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(this.url + url, options);
  }

  Delete(url: string, data: any, token: any = false, headers: any = null) {
   
    return this.http.post(url, data, token && headers);
  }


  

  getService(url: string='', token: boolean = false, headers:any=null) {
    
    return this.http.get( url, token && headers );
  }
  

}
