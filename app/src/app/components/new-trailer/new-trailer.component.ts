import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie.model';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-new-trailer',
  templateUrl: './new-trailer.component.html',
  styleUrls: ['./new-trailer.component.css'],
})
export class NewTrailerComponent implements OnInit {
  series: Serie[] = [];
  continue_watching: Serie[] = [];
  filteredSeries: Serie[] = [];
  categories: string[] = [];
  selectedCategories: string[] = [];
  itemsPerPage: number = 4;
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().then((data) => {
      this.series = data.slice(0, 3);
    });
    this.seriesService.getContinue_watching().then((data) => {
      this.continue_watching = data;
    });
  }

  // filterSeriesById(minId: number): Serie[] {
  //   return this.continue_watching.filter((serie) => parseInt(serie.id) >= minId);
  // }
}
