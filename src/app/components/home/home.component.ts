import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lastMatch:any;

  constructor() { }

  ngOnInit() {
    this.lastMatch={
      score1:2,score2:2,team1:'EST',team2:'CA',logo1:'assets/images/EST.png',logo2:'assets/images/CA.png'
    }
  }

}
