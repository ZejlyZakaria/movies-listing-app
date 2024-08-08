import { Injectable } from '@angular/core';
import { Anime } from '../models/anime.model';

@Injectable({
  providedIn: 'root',
})
export class AnimesService {
  private animes: Anime[] = [
    {
      id: '1',
      title: 'Naruto',
      category: 'Action',
      likes: 200,
      dislikes: 30,
      poster_path: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/xppeysfvDKVx775MFuH8Z9BlpMk.jpg',
    },
    {
      id: '2',
      title: 'One Piece',
      category: 'Adventure',
      likes: 250,
      dislikes: 25,
      poster_path:
        'https://image.tmdb.org/t/p/original/uiIB9ctqZFbfRXXimtpmZb5dusi.jpg',
    },
    {
      id: '3',
      title: 'Attack on Titan',
      category: 'Action',
      likes: 300,
      dislikes: 20,
      poster_path:
        'https://image.tmdb.org/t/p/original/8C5gYahMFmzHKGNID8QrG5t25WU.jpg',
    },
    {
      id: '4',
      title: 'My Hero Academia',
      category: 'Action',
      likes: 220,
      dislikes: 15,
      poster_path:
        'https://image.tmdb.org/t/p/original/zgq6eyLuGkTIVSCD0dL8TqZEuqF.jpg',
    },
    {
      id: '5',
      title: 'Demon Slayer',
      category: 'Action',
      likes: 280,
      dislikes: 18,
      poster_path:
        'https://image.tmdb.org/t/p/original/gsq1pCxMHhZDCHEh78sD6yEHoLu.jpg',
    },
    {
      id: '6',
      title: 'Fullmetal Alchemist',
      category: 'Adventure',
      likes: 290,
      dislikes: 12,
      poster_path:
        'https://image.tmdb.org/t/p/original/5ZFUEOULaVml7pQuXxhpR2SmVUw.jpg',
    },
    {
      id: '7',
      title: 'Death Note',
      category: 'Mystery',
      likes: 260,
      dislikes: 22,
      poster_path:
        'https://image.tmdb.org/t/p/original/iigTJJskR1PcjjXqxdyJwVB3BoU.jpg',
    },
    {
      id: '8',
      title: 'Cowboy Bebop',
      category: 'Sci-Fi',
      likes: 240,
      dislikes: 17,
      poster_path:
        'https://image.tmdb.org/t/p/original/7i9sIU6ASTw2zwvvNuM0FJzmpKs.jpg',
    },
    {
      id: '9',
      title: 'Genesis Evangelion',
      category: 'Sci-Fi',
      likes: 230,
      dislikes: 20,
      poster_path:
        'https://image.tmdb.org/t/p/original/hAejqZt7ptBRkYuR1p1lmGGS3g8.jpg',
    },
    {
      id: '10',
      title: 'Sword Art Online',
      category: 'Adventure',
      likes: 210,
      dislikes: 19,
      poster_path:
        'https://image.tmdb.org/t/p/original/9m8bFIXPg26taNrFSXGwEORVACD.jpg',
    },
  ];

  getAnimes(): Promise<Anime[]> {
    return new Promise((resolve) =>
      setTimeout(() => resolve(this.animes), 100)
    );
  }
}
