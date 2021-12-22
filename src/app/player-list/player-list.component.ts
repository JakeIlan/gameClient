import { Component, OnInit } from '@angular/core';
import { Player } from "../model/player";
import {GameService} from "../service/user-service.service";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[] | undefined;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.gameService.findAll().subscribe(data => {
      this.players = data;
    });
  }

  deletePlayer(player: Player) {
    this.gameService.delete(player).subscribe(data => {
      this.players = data;
    });
  }
}


