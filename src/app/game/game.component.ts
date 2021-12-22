import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GameService} from '../service/user-service.service';
import {Player} from '../model/player';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  players: Player[] | undefined;
  score: number;
  nextPlayer: Player | undefined;

  constructor(private gameService: GameService) {
    this.score = 0;
  }

  ngOnInit() {
    this.gameService.findAll().subscribe(data => {
      this.players = data;
    });
    this.gameService.start(1).subscribe(data => {
      this.players = data;
    });
    this.gameService.findNext().subscribe( data => {
      this.nextPlayer = data;
    })
  }

  onSubmit() {
    this.gameService.move(this.score).subscribe(result => this.gameUpdate());

  }

  private gameUpdate() {
    this.gameService.findAll().subscribe(data => {
      this.players = data;
    });
    this.gameService.findNext().subscribe(data => {
      this.nextPlayer = data;
    })
  }
}
