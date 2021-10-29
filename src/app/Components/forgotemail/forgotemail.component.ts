import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { UrlSegment } from '@angular/router';
import { UserService} from '../../Services/UserService/user.service'

@Component({
  selector: 'app-forgotemail',
  templateUrl: './forgotemail.component.html',
  styleUrls: ['./forgotemail.component.scss']
})
export class ForgotemailComponent implements OnInit {

  forgotEmailForm! : FormGroup;
  submitted =false;

  constructor(private formBuilder:FormBuilder , private user : UserService) { }

  ngOnInit(): void {
    this.forgotEmailForm=this.formBuilder.group({
      Username :['',Validators.required],
      service : 'advance'
    })
  }
  get f() {return this.forgotEmailForm.controls;}



onSubmit(){
  this.submitted=true;
  console.log("The data" ,this.forgotEmailForm.value)

  let reqdata={
    email:this.forgotEmailForm.value.Username,
  }


  this.user.forgotemail(reqdata).subscribe((response:any)=>{
    console.log("response" ,response);
    
  })


// if(this.forgotEmailForm.invalid){
//   return;
// }

// alert('successs0 ' +JSON.stringify(this.forgotEmailForm.value,null,4
// ));
// }


// onReset(){
//   this.submitted=false;
//   this.forgotEmailForm.reset();
 }
// }
}