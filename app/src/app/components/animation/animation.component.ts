import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/models/anime.model';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {

  animes: Anime[] = [];
  filteredAnimes: Anime[] = [];
  categories: string[] = [];
  selectedCategories: string[] = [];
  itemsPerPage: number = 4;
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private animesServices: AnimesService) {}

  ngOnInit() {
    this.animesServices.getAnimes().then((data: Anime[]) => {
      this.animes = data;
      this.updateCategories();
      this.updatePagination();
    });
  }

  getLikeRatio(anime: Anime): number {
    const total = anime.likes + anime.dislikes;
    return total ? (anime.likes / total) * 100 : 0;
  }

  getLikeBarClass(anime: Anime): string {
    const likeRatio = this.getLikeRatio(anime);

    if (likeRatio > 70) {
      return 'bg-green-500'; // Green for more than 70% likes
    } else if (likeRatio >= 40) {
      return 'bg-yellow-500'; // Yellow for 40% to 70% likes
    } else {
      return 'bg-red-500'; // Red for less than 40% likes
    }
  }


  removeAnime(id: string): void {
    this.animes = this.animes.filter(movie => movie.id !== id);
    this.updateCategories();
    this.updatePagination();
  }

  toggleLike(anime: Anime): void {
    anime.liked = !anime.liked;
    if (anime.liked) {
      anime.likes++;
      if (anime.disliked) {
        anime.disliked = false;
        anime.dislikes--;
      }
    } else {
      anime.likes--;
    }
  }

  updateCategories(): void {
    this.categories = [...new Set(this.animes.map(movie => movie.category))];
  }

  filterByCategory(event: any): void {
    const selectedOptions = Array.from(event.target.selectedOptions, (option: any) => option.value);
    this.selectedCategories = selectedOptions;
    this.filteredAnimes = this.animes.filter(movie => this.selectedCategories.includes(movie.category));
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.animes.length / this.itemsPerPage);
    this.filteredAnimes = this.animes.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
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
