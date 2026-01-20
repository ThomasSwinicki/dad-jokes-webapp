import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../environments/environment';

export interface Joke {
  _id: string;
  type: string;
  setup: string;
  punchline: string;
}

interface JokeResponse {
  success: boolean;
  body: Joke[];
}

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private readonly http = inject(HttpClient);

  getRandomJoke(): Observable<Joke> {
    return this.http.get<JokeResponse>(`${environment.apiUrl}/random/joke`).pipe(
      map(response => response.body[0])
    );
  }
}
