import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = 'http://localhost:8083/';
  private url = this.baseUrl + 'api/games';

  selected: Game | null = null;
  editGame: Game | null = null;
  newGame: Game | null = null;

  constructor(
    private http: HttpClient
  ) { }

  index(): Observable<Game[]>{
    return this.http.get<Game[]>(this.url).pipe(
      catchError((err: any) => {
        console.error('gameService.index(): error accessing games');
        console.error(err);
        return throwError(
          () => new Error('gameService.index(): error accessing games')
        );
      })
    )
  }

  create(game: Game): Observable<Game> {
    return this.http.post<Game>(this.url, game).pipe(
      catchError((err: any) => {
        console.error('gameService.create(): error creating game');
        console.error(err);
        return throwError(
          () => new Error('gameService.create(): error creating game')
        )
      })
    )
  }

  update(game: Game): Observable<Game> {
    return this.http.put<Game>(this.url + '/' + game.id, game).pipe(
      catchError((err: any) => {
        console.error('gameService.update(): error updating game');
        console.error(err);
        return throwError(
          () => new Error('gameService.update(): error updating game')
        );
      })
    )
  }

  destroy(gameId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${gameId}`).pipe(
      catchError((err: any) => {
        console.error('gameService.destroy(): error deleting game');
        console.error(err);
        return throwError(
          () => new Error('gameService.destroy(): error deleting game')
        );
      })
    );
  }

  show(gameId: number): Observable<Game> {
    return this.http.get<Game>(this.url + '/' + gameId).pipe(
      catchError((err: any) => {
        console.error('gameService.show(): error showing game');
        console.error(err);
        return throwError(
          () => new Error('gameService.show(): error showing game')
        );
      })
    );

  }

}
