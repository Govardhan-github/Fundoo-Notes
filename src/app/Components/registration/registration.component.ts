import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {UserService} from 'src/app/Services/UserService/user.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  //formgroup is used with formcontrol to track the value and validate the stateof  form control 
  registration!: FormGroup;
  submitted = false;

  //FormBuilder is a class that is used to create both formgroup and formcontrol
  constructor(private formBuilder: FormBuilder,private user:UserService) { }

  ngOnInit(): void {
      this.registration = this.formBuilder.group({
        Firstname: ['', Validators.required],
        Lastname: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirm: ['', Validators.required],
        service: 'advance'
    })
  }


  get f() { return this.registration.controls; }

  onSubmit() {
    console.log("the data" ,this.registration.value);

    let payload ={
      firstName:this.registration.value.Firstname,
      lastName : this.registration.value.Lastname,
      email : this.registration.value.username,
      password : this.registration.value.password,
      service:this.registration.value.service
    }
    this.user.register(payload).subscribe((response:any) =>{
      console.log("the response",response);
    });

    // if (this.registration.invalid) {
    //   return;
    // }

    // alert('successs ' + JSON.stringify(this.registration.value, null, 4));
    // console.log("the data" + this.registration.value);
  
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


    // this.user.registeration(this.registration.value).subscribe((response)=>{
    //   console.log(response);
      
    // })
