// src/app/services/movies.service.ts
import { Injectable } from '@angular/core';
import { Movie } from 'src/app/models/movie.model'; // Assure-toi que le chemin est correct

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private movies: Movie[] = [
    {
      id: '1',
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 35,
      dislikes: 12,
      poster_path:
        'https://fr.web.img3.acsta.net/pictures/18/05/14/12/19/5676009.jpg',
    },
    {
      id: '2',
      title: 'Midnight Sun',
      category: 'Romance',
      likes: 28,
      dislikes: 15,
      poster_path:
        'https://m.media-amazon.com/images/M/MV5BMjg0NjU1MjgyNF5BMl5BanBnXkFtZTgwNzc5NjYyNDM@._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: '3',
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 40,
      dislikes: 10,
      poster_path:
        'https://m.media-amazon.com/images/M/MV5BYTQ4ODVhOTktY2U3MS00MGNjLTkwMzctZTE5NjhkZmRmNzQ2XkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_.jpg',
    },
    {
      id: '4',
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 48,
      dislikes: 20,
      poster_path:
        'https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_.jpg',
    },
    {
      id: '5',
      title: 'Creed II',
      category: 'Drama',
      likes: 55,
      dislikes: 18,
      poster_path:
        'https://m.media-amazon.com/images/M/MV5BYmEyNWZhM2YtZDAyNi00ZjYzLWI2ZWMtOWM4ZmI1MDE0OWNmXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: '6',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 50,
      dislikes: 14,
      poster_path:
        'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: '7',
      title: 'Interstellar',
      category: 'Sci-Fi',
      likes: 60,
      dislikes: 11,
      poster_path:
        'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: '8',
      title: 'Seven',
      category: 'Thriller',
      likes: 45,
      dislikes: 13,
      poster_path:
        'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: '9',
      title: 'Inception',
      category: 'Sci-Fi',
      likes: 53,
      dislikes: 17,
      poster_path:
        'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
    },
    {
      id: '10',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 42,
      dislikes: 12,
      poster_path:
        'https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_.jpg',
    },
  ];

  getMovies(): Promise<Movie[]> {
    return new Promise((resolve) =>
      setTimeout(() => resolve(this.movies), 100)
    );
  }
}
