import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 //import { MustMatch } from '../registration/registration.component';
 import {UserService} from 'src/app/Services/UserService/user.service'


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetpasswordpage! : FormGroup;
  submitted = false;

  constructor(private formbuilder : FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.resetpasswordpage = this.formbuilder.group({
      password : ['',Validators.required],
      confirm : ['',Validators.required],
      service:['advance',Validators.required]
    },
    {
      Validator:MustMatch('password','confirm')
    });

  }
  
  get f() {return this.resetpasswordpage.controls;}
  
  onSubmit(){
    this.submitted=true;
    console.log("the data", this.resetpasswordpage.value);


    
  let reqpayload={
    password:this.resetpasswordpage.value.password,
    confirm
    :this.resetpasswordpage.value.password,

    service:this.resetpasswordpage.value.service
  }
  this.user.resetpassword(reqpayload).subscribe((response:any) =>{
    console.log("the response",response);
  });
  
  
//   if(this.resetpasswordpage.invalid){
//     return;
//   }

//   alert('successs0 ' +JSON.stringify(this.resetpasswordpage.value,null,4
// ));
//   }


//   onReset(){
//     this.submitted=false;
//     this.resetpasswordpage.reset();

//   }
  }
}
// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
