import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = 'http://localhost:8083/';
  private url = 'api/game';

  selected: Game | null = null;
  editGame: Game | null = null;
  newGame: Game | null = null;

  constructor(
    private http: HttpClient
  ) { }

  index() {
    return this.http.get<Game[]>(this.url + 'games').pipe(
      catchError((err: any) => {
        console.log('gameService.index(): error accessing games');
        console.log(err);
        return throwError(
          () => new Error('gameService.index(): error accessing games')
        );
      })
    )
  }

  create(game: Game) {
    return this
  }
}
