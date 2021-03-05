import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 playerForm:FormGroup;
 id:any;
 player:any;

 constructor(private formBuilder:FormBuilder, private router:Router,private activeRouter:ActivatedRoute,private playerService:PlayerService) { }

 ngOnInit() { 
   this.id=this.activeRouter.snapshot.paramMap.get('id');

    this.playerForm=this.formBuilder.group({
      id:[''],
      name:['',[Validators.minLength(3),Validators.required]],
      number:[''],
      team:['',[Validators.minLength(3),Validators.required]],
      poste:['',[Validators.minLength(3),Validators.required]],
      age:['']
    }),
    this.player= this.playerService.getPlayerById(this.id).subscribe(
      (data)=>{this.player=data;
      console.log(this.player)}
      
     )





}

 editPlayer()
 {
   this.playerForm.get('id').setValue(this.player.id)
   this.playerService.editplayer(this.playerForm.value).subscribe()
   this.router.navigate([`player`])

 }
 


}


// this.matchForm=this.formBuilder.group({
//   id:[''],
//   team1:[''],
//   team2:[''],
//   score1:[''],
//   score2:[''],
//   logo1:[''],
//   logo2:['']
// }),

// this.match= this.matchService.getMatchById(this.id).subscribe(
//   (data)=>{this.match=data;
//   console.log(this.match)}
  
// )

// }