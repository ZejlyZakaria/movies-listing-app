import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  categories: string[] = [];
  selectedCategories: string[] = [];
  itemsPerPage: number = 4;
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getMovies().then((data: Movie[]) => {
      this.movies = data;
      this.updateCategories();
      this.updatePagination();
    });
  }

  getLikeRatio(movie: Movie): number {
    const total = movie.likes + movie.dislikes;
    return total ? (movie.likes / total) * 100 : 0;
  }

  getLikeBarClass(movie: Movie): string {
    const likeRatio = this.getLikeRatio(movie);

    if (likeRatio > 70) {
      return 'bg-green-500'; // Green for more than 70% likes
    } else if (likeRatio >= 40) {
      return 'bg-yellow-500'; // Yellow for 40% to 70% likes
    } else {
      return 'bg-red-500'; // Red for less than 40% likes
    }
  }


  removeMovie(id: string): void {
    this.movies = this.movies.filter(movie => movie.id !== id);
    this.updateCategories();
    this.updatePagination();
  }

  toggleLike(movie: Movie): void {
    movie.liked = !movie.liked;
    if (movie.liked) {
      movie.likes++;
      if (movie.disliked) {
        movie.disliked = false;
        movie.dislikes--;
      }
    } else {
      movie.likes--;
    }
  }

  updateCategories(): void {
    this.categories = [...new Set(this.movies.map(movie => movie.category))];
  }

  filterByCategory(event: any): void {
    const selectedOptions = Array.from(event.target.selectedOptions, (option: any) => option.value);
    this.selectedCategories = selectedOptions;
    this.filteredMovies = this.movies.filter(movie => this.selectedCategories.includes(movie.category));
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.movies.length / this.itemsPerPage);
    this.filteredMovies = this.movies.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  updateItemsPerPage(event: any): void {
    this.itemsPerPage = parseInt(event.target.value, 10);
    this.updatePagination();
  }
}
