import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
  user1:any={};
  login1Form:FormGroup;


  img={
    name:"EST",
    path:"./assets/images/EST.png"
  }

  
  constructor(private fb :FormBuilder) { }

  ngOnInit() {
    this.login1Form=this.fb.group({
      email:[''],
      pwd:['']


    })
  }
  login1(){
    console.log('User1',this.user1);
  }
}
