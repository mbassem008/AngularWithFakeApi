import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  matches=[
    {id: 1,score1:2,score2:0,team1:'EST',team2:'CA',logo1:'assets/images/EST.png',logo2:'assets/images/CA.png'},
    {id: 2,score1:2,score2:2,team1:'EST',team2:'CA',logo1:'assets/images/EST.png',logo2:'assets/images/CA.png'},
    {id: 3,score1:2,score2:6,team1:'EST',team2:'CA',logo1:'assets/images/EST.png',logo2:'assets/images/CA.png'},
    {id: 4,score1:2,score2:3,team1:'EST',team2:'CA',logo1:'assets/images/EST.png',logo2:'assets/images/CA.png'},
    {id: 5,score1:2,score2:1,team1:'EST',team2:'CA',logo1:'assets/images/EST.png',logo2:'assets/images/CA.png'}

  ];
  let players=[
    {id: 1,name:'Messi',age:33,number:10,poste:'PM',team:'FCB'},
    {id: 2,name:'Iniesta',age:33,number:8,poste:'MID',team:'FCB'},
    {id: 3,name:'Stegen',age:33,number:1,poste:'GK',team:'FCB'},
    {id: 4,name:'Ramos',age:33,number:4,poste:'DEF',team:'RM'}

  ];

   return {matches,players};

  }
}