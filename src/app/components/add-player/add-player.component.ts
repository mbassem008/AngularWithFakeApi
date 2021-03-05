import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  // player:any={};
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
    })
  
  }
  addplayer()
  {
    // const id=this.playerForm.get('id').value;
    // const name=this.playerForm.get('name').value;
    // const num=this.playerForm.get('num').value;
    // const team=this.playerForm.get('team').value;
    // const poste=this.playerForm.get('poste').value;
    // const age=this.playerForm.get('age').value;

  
   this.playerService.addplayer(this.playerForm.value).subscribe()
    this.router.navigate([`player`])

  }

}
