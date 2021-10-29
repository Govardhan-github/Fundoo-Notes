import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http'
import {HttpService} from '../http/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BaseUrl = environment.BaseUrl;
  token : any;

  constructor(private httpservice:HttpService) {
    localStorage.getItem('token')

   }

   register(data:any){
    this.token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.httpservice.Post("/user/userSignUp",data,false,options);
  }

  login(data:any){
    this.token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
        'Content-Type': 'application/json'
      })
    }
     return this.httpservice.Post("/user/login",data,false,options);
  }

  
  forgotemail(data:any){
    this.token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
        'Content-Type': 'application/json'
      })
    }
     return this.httpservice.Post("/user/reset",data,false,options);
  }

  resetpassword(data:any){
    this.token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
        'Content-Type': 'application/json'
      })
    }
     return this.httpservice.Post("/user/reset",data,false,options);
  }

  }




  // registeration(data:any){
  //   console.log(data);
  //   let headersOption={
  //     headers:new HttpHeaders({
  //       'Authorization': this.token,
  //       'Content-Type': 'application/json'
  //     })
  //   }
  //   return this.httpservice.PostService(this.BaseUrl+'/user/userSignUp',data,false,headersOption)
  // }
