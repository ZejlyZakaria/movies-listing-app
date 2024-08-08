import { Injectable } from '@angular/core';
import { Serie } from '../models/serie.model';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private series: Serie[] = [
    {
      id: '1',
      title: 'House of the dragon',
      category: 'Drama',
      likes: 70,
      dislikes: 8,
      poster_path: '../../../assets/images/hotd.jpeg',
      trailer_link: 'https://www.youtube.com/watch?v=YN2H_sKcmGw',
    },
    {
      id: '2',
      title: 'The boys',
      category: 'Superhero',
      likes: 71,
      dislikes: 6,
      poster_path:
        'https://images.hdqwalls.com/wallpapers/the-boys-season-4-6h.jpg',
      trailer_link: 'https://www.youtube.com/watch?v=EzFXDvC-EwM',
    },
    {
      id: '3',
      title: 'Thoose about to die',
      category: 'Action',
      likes: 66,
      dislikes: 9,
      poster_path:
        'https://assets-prd.ignimgs.com/2024/07/17/those-about-to-die-blogroll-1721188060349.jpg?width=3840',
      trailer_link: 'https://www.youtube.com/watch?v=hvf6IS48eik',
    },

    {
      id: '4',
      title: 'Breaking bad',
      category: 'Drama',
      likes: 58,
      dislikes: 12,
      poster_path:
        'https://rukminim2.flixcart.com/image/850/1000/kdga1zk0/poster/2/p/i/large-breakingbad04-breaking-bad-poster-breaking-bad-series-original-imafuc2fvfjyackz.jpeg?q=20&crop=false',
      trailer_link: 'https://www.youtube.com/watch?v=hvf6IS48eik',
    },
    {
      id: '5',
      title: 'Dark',
      category: 'Sci-Fi',
      likes: 62,
      dislikes: 9,
      poster_path: 'https://m.media-amazon.com/images/I/91-tOC-2EQL.jpg',
      trailer_link: 'https://www.youtube.com/watch?v=hvf6IS48eik',
    },

    {
      id: '6',
      title: 'Peaky blinders',
      category: 'Drama',
      likes: 65,
      dislikes: 10,
      poster_path:
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d7590f135861167.61ef6fb49f8e4.jpg',
      trailer_link: 'https://www.youtube.com/watch?v=hvf6IS48eik',
    },
    {
      id: '7',
      title: 'Queens gambit',
      category: 'Drama',
      likes: 64,
      dislikes: 11,
      poster_path:
        'https://static.posters.cz/image/1300/posters/queens-gambit-key-art-i102471.jpg',
      trailer_link: 'https://www.youtube.com/watch?v=hvf6IS48eik',
    },
    {
      id: '8',
      title: 'Silo',
      category: 'Sci-Fi',
      likes: 61,
      dislikes: 12,
      poster_path:
        'https://image.tmdb.org/t/p/original/zBx1X06G1OlndbXTCZI13FECNz2.jpg',
      trailer_link: 'https://www.youtube.com/watch?v=hvf6IS48eik',
    },
    {
      id: '9',
      title: 'Stinger things',
      category: 'Adventure',
      likes: 67,
      dislikes: 7,
      poster_path:
        'https://image.tmdb.org/t/p/original/sxWdVdVKtHhnUEFLLJmBc8SbwRl.jpg',
      trailer_link: 'https://www.youtube.com/watch?v=hvf6IS48eik',
    },
    {
      id: '10',
      title: 'Vikings',
      category: 'Adventure',
      likes: 63,
      dislikes: 10,
      poster_path:
        'https://image.tmdb.org/t/p/original/oktTNFM8PzdseiK1X0E0XhB6LvP.jpg',
      trailer_link: 'https://www.youtube.com/watch?v=hvf6IS48eik',
    },
    {
      id: '11',
      title: 'The gentlemen',
      category: 'Sci-Fi',
      likes: 59,
      dislikes: 13,
      poster_path:
        'https://fr.web.img5.acsta.net/pictures/24/02/13/10/53/3446209.jpg',
      trailer_link: 'https://www.youtube.com/watch?v=hvf6IS48eik',
    },
    {
      id: '12',
      title: 'The 100',
      category: 'Sci-Fi',
      likes: 68,
      dislikes: 10,
      poster_path:
        'https://image.tmdb.org/t/p/original/wcaDIAG1QdXQLRaj4vC1EFdBT2.jpg',
      trailer_link: 'https://www.youtube.com/watch?v=hvf6IS48eik',
    },

  ];


  private continue_watching: Serie[] = [
    {
      id: '1',
      title: 'Game of thrones',
      category: 'Seadon 1 ep 9',
      likes: 4,
      dislikes: 1,
      poster_path: '../../../assets/images/got.jpg',
      trailer_link: 'https://www.youtube.com/watch?v=YN2H_sKcmGw',
    },
    {
      id: '2',
      title: 'Suits',
      category: 'Season 2 ep 10',
      likes: 4,
      dislikes: 1,
      poster_path:
        'https://image.tmdb.org/t/p/original/jSldefhz7HNjDHBF19dNzGcLSba.jpg',
      trailer_link: 'https://www.youtube.com/watch?v=YN2H_sKcmGw',
    },
    {
      id: '3',
      title: 'Dexter',
      category: 'Season 6 ep 2',
      likes: 4,
      dislikes: 1,
      poster_path:
        'https://wallpapers.com/images/featured/dexter-fe9qbtzm9bbv0xxj.jpg',
      trailer_link: 'https://www.youtube.com/watch?v=YN2H_sKcmGw',
    },
    {
      id: '4',
      title: 'Top gun : Maverick',
      category: '1h 33 min',
      likes: 4,
      dislikes: 1,
      poster_path: 'https://m.media-amazon.com/images/I/71BokibfVUL.jpg',
      trailer_link: 'https://www.youtube.com/watch?v=YN2H_sKcmGw',
    },
  ];

  getSeries(): Promise<Serie[]> {
    return new Promise((resolve) =>
      setTimeout(() => resolve(this.series), 100)
    );
  }

  getContinue_watching(): Promise<Serie[]> {
    return new Promise((resolve) =>
      setTimeout(() => resolve(this.continue_watching), 100)
    );
  }
}
