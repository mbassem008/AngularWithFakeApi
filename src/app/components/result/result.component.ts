import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() match:any;

  constructor() { }

  ngOnInit() {
    
  }
  resultScore(a,b){
    if (a>b){
      return ['green','win'];
    }
    else if (a<b){
      return ['red','loss'];
    }
    else {
      return ['blue','draw'];
    }
  }

}
