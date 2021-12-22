import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  isGame: boolean;

  constructor() {
    this.title = 'THE GAME';
    this.isGame = false;
  }

  startGame() {
    this.isGame = true;
  }

  endGame() {
    this.isGame = false;
  }
}
