import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { GameService } from 'src/app/services/game.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players: Player[] = [];
  addingNewPlayer = false;
  newPlayer: Player = new Player();

  constructor(
    private gameService: GameService,
    private playerService: PlayerService
  ) { }

  addPlayer(player: Player) {
    this.playerService.create(player).subscribe({
      next: (player) => {
        this.newPlayer = new Player();
        this.reload();
      },
      error: (fail) => {
        console.error('playerComponent.addPlayer(): error creating player');
        console.error(fail);
        console.log(player);
      }
    });
  }

  reload() {
    this.playerService.index().subscribe({
      next: (players) => {
        this.players = players;
      },
      error: (error) => {
        console.error('playerComponent.reload(): Error retrieving players');
        console.error(error);
      }
    })
  }

  ngOnInit(): void {
    this.reload();
  }

}
