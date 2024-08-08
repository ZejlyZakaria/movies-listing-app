import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie.model';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
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
      this.series = data;
      // this.continue_watching = this.filterSeriesById(2);
    });
    this.seriesService.getContinue_watching().then((data) => {
      this.continue_watching = data;
      console.log(this.continue_watching);
    });
  }

  // filterSeriesById(minId: number): Serie[] {
  //   return this.continue_watching.filter((serie) => parseInt(serie.id) >= minId);
  // }
}
