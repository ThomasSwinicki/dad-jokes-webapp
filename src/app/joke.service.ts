import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, delay } from 'rxjs';
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
  private readonly apiUrl = 'https://dad-jokes.p.rapidapi.com';

  // Mock jokes for testing without API key
  private readonly mockJokes: Joke[] = [
    { _id: '1', type: 'general', setup: 'Why don\'t scientists trust atoms?', punchline: 'Because they make up everything!' },
    { _id: '2', type: 'general', setup: 'Why did the scarecrow win an award?', punchline: 'He was outstanding in his field!' },
    { _id: '3', type: 'general', setup: 'I\'m reading a book about anti-gravity.', punchline: 'It\'s impossible to put down!' },
    { _id: '4', type: 'general', setup: 'Why don\'t eggs tell jokes?', punchline: 'They\'d crack each other up!' },
    { _id: '5', type: 'general', setup: 'What do you call a fake noodle?', punchline: 'An impasta!' },
    { _id: '6', type: 'general', setup: 'Why did the bicycle fall over?', punchline: 'Because it was two-tired!' },
    { _id: '7', type: 'general', setup: 'What do you call a bear with no teeth?', punchline: 'A gummy bear!' },
    { _id: '8', type: 'general', setup: 'Why can\'t you give Elsa a balloon?', punchline: 'Because she will let it go!' },
  ];

  getRandomJoke(): Observable<Joke> {
    // Use mock data if no API key is configured
    if (!environment.rapidApiKey || environment.rapidApiKey === 'your-api-key-here') {
      const randomIndex = Math.floor(Math.random() * this.mockJokes.length);
      return of(this.mockJokes[randomIndex]).pipe(delay(500));
    }

    return this.http.get<JokeResponse>(`${this.apiUrl}/random/joke`, {
      headers: {
        'X-RapidAPI-Key': environment.rapidApiKey,
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
      }
    }).pipe(
      map(response => response.body[0])
    );
  }
}
