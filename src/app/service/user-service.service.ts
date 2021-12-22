import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../model/player';
import { Observable } from 'rxjs';

@Injectable()
export class GameService {

  private gameUrl: string;

  constructor(private http: HttpClient) {
    this.gameUrl = 'http://localhost:8080/game';
  }

  public findAll(): Observable<Player[]> {
    return this.http.get<Player[]>(this.gameUrl);
  }

  public findNext(): Observable<Player> {
    return this.http.get<Player>(this.gameUrl + '/next');
  }

  public findWinner(): Observable<Player> {
    return this.http.get<Player>(this.gameUrl + '/win');
  }

  public save(player: Player) {
    return this.http.post<Player>(this.gameUrl, player);
  }

  public move(score: number) {
    return this.http.post<Player>(this.gameUrl + '/move', score);
  }

  public start(id: number): Observable<Player[]>  {
    return this.http.put<Player[]>(this.gameUrl + '/start', id);
  }

  public delete(player: Player): Observable<Player[]> {
    return this.http.delete<Player[]>(this.gameUrl + '/' + player.id);
  }
}
