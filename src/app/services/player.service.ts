import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerUrl: string = "api/players"

  constructor(private httpClient: HttpClient) { }
  getAllPlayers() {
    return this.httpClient.get(this.playerUrl);
  }
  getPlayerById(id: any) {
    return this.httpClient.get(`${this.playerUrl}/${id}`)
  }
  deletePlayer(id: any) {
    return this.httpClient.delete(`${this.playerUrl}/${id}`)
  }
  addplayer(player: any) {
    return this.httpClient.post(this.playerUrl, player)

  }
  editplayer(player: any) {
    return this.httpClient.put(`${this.playerUrl}/${player.id}`, player)

  }

}
