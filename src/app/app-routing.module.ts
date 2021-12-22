import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { GameComponent } from './game/game.component';
import { GameEndComponent } from './game-end/game-end.component';


const routes: Routes = [
  { path: 'players', component: PlayerListComponent },
  { path: 'addPlayer', component: PlayerFormComponent },
  { path: 'game', component: GameComponent },
  { path: 'game/end', component: GameEndComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
