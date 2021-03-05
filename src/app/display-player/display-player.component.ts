import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {
  id:any;
  player:any;
 
  constructor(private activeRouter:ActivatedRoute,
    private playerService:PlayerService) { }

  ngOnInit() { 
    
    this.id=this.activeRouter.snapshot.paramMap.get('id');
    this.playerService.getPlayerById(this.id).subscribe(
      (data)=>{this.player=data;
      console.log(this.player)}
      
    )
  }

}
