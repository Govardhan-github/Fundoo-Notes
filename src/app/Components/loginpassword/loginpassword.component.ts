import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpassword',
  templateUrl: './loginpassword.component.html',
  styleUrls: ['./loginpassword.component.scss']
})
export class LoginpasswordComponent implements OnInit {
  passwordPage! : FormGroup;
  submitted =false;


  constructor(private formbulider : FormBuilder) { }

  ngOnInit(): void {
    this.passwordPage=this.formbulider.group({
      password :['',Validators.required]
    })

  }
  get f() {return this.passwordPage.controls;}


  onSubmit(){
    this.submitted=true;
  
  if(this.passwordPage.invalid){
    return;
  }

  alert('successs0 ' +JSON.stringify(this.passwordPage.value,null,4
));
  }


}
