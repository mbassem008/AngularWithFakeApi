
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchUrl:string='api/matches';

  constructor(private httpClient: HttpClient) { }
  getAllMatches(){
    return this.httpClient.get(this.matchUrl);
    }
  getMatchById(id:any){
    return this.httpClient.get(`${this.matchUrl}/${id}`)
  }
  deleteMatch(id:any){
    return this.httpClient.delete(`${this.matchUrl}/${id}`)

  }
  addMatch(match:any){
    return this.httpClient.post(this.matchUrl, match)

  }
  editMatch(match:any){
    return this.httpClient.put(`${this.matchUrl}/${match.id}`,match)

  }
}


