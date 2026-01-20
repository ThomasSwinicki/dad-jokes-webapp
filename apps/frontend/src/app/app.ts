import { Component, signal, inject } from '@angular/core';
import { JokeService, Joke } from './joke.service';

type AppState = 'landing' | 'showingJoke' | 'showingPunchline';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly jokeService = inject(JokeService);

  protected readonly state = signal<AppState>('landing');
  protected readonly currentJoke = signal<Joke | null>(null);
  protected readonly isLoading = signal(false);

  onYesClick(): void {
    this.fetchJoke();
  }

  onShowPunchlineClick(): void {
    this.state.set('showingPunchline');
  }

  onTellDifferentJokeClick(): void {
    this.fetchJoke();
  }

  private fetchJoke(): void {
    this.isLoading.set(true);
    this.jokeService.getRandomJoke().subscribe({
      next: (joke) => {
        this.currentJoke.set(joke);
        this.state.set('showingJoke');
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Failed to fetch joke:', error);
        this.isLoading.set(false);
      }
    });
  }
}
