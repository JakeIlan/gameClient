import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../service/user-service.service';
import { Player } from '../model/player';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent {

  player: Player;

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService) {
    this.player = new Player();
  }

  onSubmit() {
    this.gameService.save(this.player).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/players']);
  }
}
