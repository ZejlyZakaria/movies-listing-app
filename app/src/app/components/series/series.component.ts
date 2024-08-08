import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { Serie } from'src/app/models/serie.model';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series: Serie[] = [];
  filteredSeries: Serie[] = [];
  categories: string[] = [];
  selectedCategories: string[] = [];
  itemsPerPage: number = 4;
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getSeries().then((data: Serie[]) => {
      this.series = data;
      this.updateCategories();
      this.updatePagination();
    });
  }

  getLikeRatio(serie: Serie): number {
    const total = serie.likes + serie.dislikes;
    return total ? (serie.likes / total) * 100 : 0;
  }

  removeSerie(id: string): void {
    this.series = this.series.filter(serie => serie.id !== id);
    this.updateCategories();
    this.updatePagination();
  }

  toggleLike(serie: Serie): void {
    serie.liked = !serie.liked;
    if (serie.liked) {
      serie.likes++;
      if (serie.disliked) {
        serie.disliked = false;
        serie.dislikes--;
      }
    } else {
      serie.likes--;
    }
  }

  updateCategories(): void {
    this.categories = [...new Set(this.series.map(serie => serie.category))];
  }

  filterByCategory(event: any): void {
    const selectedOptions = Array.from(event.target.selectedOptions, (option: any) => option.value);
    this.selectedCategories = selectedOptions;
    this.filteredSeries = this.series.filter(serie => this.selectedCategories.includes(serie.category));
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.series.length / this.itemsPerPage);
    this.filteredSeries = this.series.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
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
