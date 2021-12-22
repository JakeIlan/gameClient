import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GameService} from '../service/user-service.service';
import {Player} from '../model/player';

@Component({
  selector: 'app-game-end',
  templateUrl: './game-end.component.html',
  styleUrls: ['./game-end.component.css']
})
export class GameEndComponent implements OnInit {

  players: Player[] | undefined;
  winner: Player | undefined;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.gameService.findAll().subscribe(data => {
      this.players = data;
    });
    this.gameService.findWinner().subscribe( data => {
      this.winner = data;
    })
  }

}
