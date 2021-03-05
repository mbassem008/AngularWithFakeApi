import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  constructor(private fb:FormBuilder) { }


  ngOnInit() {
    this.signupForm=this.fb.group({
      name:['',[Validators.minLength(3),Validators.required]],
      email:[''],
      pwd:[''],
      ConfirmPwd:['']    
    })
  }
  signup(){
    console.log('this is my value ',this.signupForm.value);

    }

}
