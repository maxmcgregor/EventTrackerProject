import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { Player } from 'src/app/models/player';
import { GameService } from 'src/app/services/game.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

editGame: Game | null = null;
newGame: Game = new Game();
selected: Game | null = null;
games: Game[] = [];
players: Player[] = [];
addingNewGame = false;
viewingGame = false;
title = 'ngYahtzee';

  constructor(
    private gameService: GameService,
    private playerService: PlayerService
  ) { }

  checkWinner(game: Game) {
    if (game.winner) {
      return 'Winner'
    } else {
      return 'Loser'
    }
  }

  retrievePlayer(game: Game) {
    if (game.player != undefined) {
      return this.playerService.show(game.player.id).subscribe({
        next: (player) => {
          console.log(player);
        },
        error: (fail) => {
          console.error('gameComponent.retrievePlayer(): error retrieving player');
          console.error(fail);
        }
      });
    }
    return null;
  }

  addGame(game: Game) {
    this.gameService.create(game).subscribe({
      next: (game) => {
        this.newGame = new Game();
        this.reload();
      },
      error: (fail) => {
        console.error('gameComponent.addGame(): error creating game');
        console.error(fail);
        console.log(game);
      }
    });
  }

  deleteGame(gameId : number) {
    this.gameService.destroy(gameId).subscribe({
      next: () => {
        this.reload();
      },
      error: (fail) => {
        console.error('gameComponent.deleteGame(): error deleting game');
        console.error(fail);
      }
    });
  }

  displayGame(game: Game) {
    this.selected = game;
  }

  displayAllGame() {
    this.selected = null;
  }

  setEditGame() {
    this.editGame = Object.assign({}, this.selected);
  }

  updateGame(game: Game, goToDetails = true): void {
    this.gameService.update(game).subscribe({
      next: (g) => {
        this.editGame = null;
        if (goToDetails) {
          this.selected = g;
        }
        this.reload();
      },
      error: (err) => {
        console.error('gameComponent.updateGame(): error on update');
        console.error(err);
      }
    })
  }

  countGames() {
    return this.games.length;
  }

  reload() {
    this.gameService.index().subscribe({
      next: (games) => {
        this.games = games;
      },
      error: (error) => {
        console.error('gamesComponent.reload(): Error retrieving games');
        console.error(error);
      }
    });

    this.playerService.index().subscribe({
      next: (players) => {
        this.players = players;
      },
      error: (error) => {
        console.error('gamesComponent.reload(): error retrieving players');
        console.error(error);
      }
    })
  }

  ngOnInit(): void {
    this.reload();
  }

}
