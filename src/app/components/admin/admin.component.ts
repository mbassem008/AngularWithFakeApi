import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

players:any[];
match:any;
matches1=[
  {id: 1,score1:2,score2:0,team1:'RMD',team2:'FCB',logo1:'assets/images/RMD.png',logo2:'assets/images/FCB.png'},
  {id: 2,score1:2,score2:2,team1:'RMD',team2:'FCB',logo1:'assets/images/RMD.png',logo2:'assets/images/FCB.png'},
  {id: 3,score1:2,score2:6,team1:'RMD',team2:'FCB',logo1:'assets/images/RMD.png',logo2:'assets/images/FCB.png'},
  {id: 4,score1:2,score2:3,team1:'RMD',team2:'FCB',logo1:'assets/images/RMD.png',logo2:'assets/images/FCB.png'},
  {id: 5,score1:2,score2:1,team1:'RMD',team2:'FCB',logo1:'assets/images/RMD.png',logo2:'assets/images/FCB.png'}

];

  constructor(private matchService:MatchService,
    private router:Router) { }

  ngOnInit() {
   this.getMatches();


  }
goToMatch(id:any){
  this.router.navigate([`displayMatch/${id}`])
} 
deleteMatch(id:any){
  this.matchService.deleteMatch(id).subscribe(
    ()=>{
      console.log('deleted');
      this.getMatches();

    }
  )
}
editTheMatch(id:any){
  this.router.navigate([`edit-match/${id}`])
 
}
addMatch(){ 
  this.router.navigate([`add-match`])

}
getMatches(){
  this.matchService.getAllMatches().subscribe(
    (data) =>{
      this.match=data;
    }
  )
}
}
