import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import {UserService} from 'src/app/Services/UserService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm! :FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder,private user:UserService,private router:Router) {} 

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username :['',Validators.required],
      password :['',[Validators.required,Validators.minLength(6)]],
      service: 'advance'

    })
  }
  get f() {return this.loginForm.controls;}


onSubmit(){
  this.submitted=true;

  console.log("the data", this.loginForm.value);

  let reqpayload={
    email:this.loginForm.value.username,
    password:this.loginForm.value.password,
    service:this.loginForm.value.service
  }
  this.user.login(reqpayload).subscribe((response:any) =>{
    console.log("the response",response);
    localStorage.setItem('token',response.id)
    this.router.navigateByUrl('/dashboard/getnotes')
    

  });

  if (this.loginForm.invalid) {
    return;
  }
  
  }
}



