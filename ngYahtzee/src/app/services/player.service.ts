import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private baseUrl = 'http://localhost:8083/';
  private url = this.baseUrl + 'api/players';

  selected: Player | null = null;
  editPlayer: Player | null = null;
  newPlayer: Player | null = null;

  constructor(
    private http: HttpClient
  ) { }

  index(): Observable<Player[]> {
    return this.http.get<Player[]>(this.url).pipe(
      catchError((err: any) => {
        console.error('playerService.index(): error accessing players');
        console.error(err);
        return throwError(
          () => new Error('playerService.index(): error accessing players')
        );
      })
    )
  }

  create(player: Player): Observable<Player> {
    return this.http.post<Player>(this.url, player).pipe(
      catchError((err: any) => {
        console.error('playerService.create(): error creating player');
        console.error(err);
        return throwError(
          () => new Error('playerService.create(): error creating player')
        );
      })
    )
  }

  update(player: Player): Observable<Player> {
    return this.http.put<Player>(this.url + '/' + player.id, player).pipe(
      catchError((err: any) => {
        console.error('playerService.update(): error updating player');
        console.error(err);
        return throwError(
          () => new Error('playerService.update(): error updating player')
        );
      })
    );
  }

  destroy(playerId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${playerId}`).pipe(
      catchError((err: any) => {
        console.error('playerService.destroy(): error deleting player');
        console.error(err);
        return throwError(
          () => new Error('playerService.destroy(): error deleting player')
        );
      })
    )
  }

  show(playerId: number): Observable<Player> {
    return this.http.get<Player>(this.url + '/' + playerId).pipe(
      catchError((err: any) => {
        console.error('playerService.show(): error showing player');
        console.error(err);
        return throwError(
          () => new Error('playerService.show(): error showing player')
        )
      })
    )
  }
}
