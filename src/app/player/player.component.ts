import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  players:any;
  players1=[
    {id: 1,name:'Messi',age:33,number:10,poste:'PM',team:'FCB'},
    {id: 2,name:'Iniesta',age:33,number:8,poste:'MID',team:'FCB'},
    {id: 3,name:'Stegen',age:33,number:1,poste:'GK',team:'FCB'},
    {id: 4,name:'Ramos',age:33,number:4,poste:'DEF',team:'RM'}

  ];


  constructor(private playerService:PlayerService, private router:Router ) { }

  ngOnInit() {
    this.getPlayers();
  
  }
  deleteMatch(id:any){
    this.playerService.deletePlayer(id).subscribe(
      ()=>{
        console.log(`object ${id} is deleted`);
        this.getPlayers()
      }
    )
  }
  editPlayer(id:any){
    this.router.navigate([`edit/${id}`])
    // this.playerService.getPlayerById(id).subscribe(
    //   (data)=>{this.players=data;
    //   console.log(this.players)}
      
    // )
    

  } 
  addPlayer(){ 
    this.router.navigate([`add-player`])

  }
  
  goToPlayer(id:any){
    this.router.navigate([`displayPlayer/${id}`])

  }
  getPlayers(){
    this.playerService.getAllPlayers().subscribe(
      (data) =>{
        this.players=data;
        console.log(this.players)
      }
    )
  }
}
