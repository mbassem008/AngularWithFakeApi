import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  match:any={};
  matchForm:FormGroup;
  id:any;



  constructor(private formbuilder:FormBuilder,private matchservice:MatchService,private router:Router,private activeRouter:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activeRouter.snapshot.paramMap.get('id');

    this.matchForm=this.formbuilder.group({
      id:[''],
      team1:[''],
      team2:[''],
      score1:[''],
      score2:[''],
      logo1:[''],
      logo2:['']
    })
    this.match= this.matchservice.getMatchById(this.id).subscribe(
      (data)=>{this.match=data;
      console.log(this.match)})
      
    }

    editTheMatch()
    {
      this.matchForm.get('id').setValue(this.match.id)
      this.matchservice.editMatch(this.matchForm.value).subscribe()
      this.router.navigate([`admin`])
   
    }
  }

