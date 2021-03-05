import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  match:any={};
  matchForm:FormGroup;



  constructor(private formbuilder:FormBuilder,private matchservice:MatchService,private router:Router) { }

  ngOnInit() {
    this.matchForm=this.formbuilder.group({
      id:[''],
      team1:[''],
      team2:[''],
      score1:[''],
      score2:[''],
      logo1:[''],
      logo2:['']
    })
  }
addmatch(){
  this.matchservice.addMatch(this.matchForm.value).subscribe()
  this.router.navigate([`admin`])
}
}
