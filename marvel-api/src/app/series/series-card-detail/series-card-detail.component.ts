import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../service/series.service';
import { EMPTY, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-series-card-detail',
  templateUrl: './series-card-detail.component.html',
  styleUrls: ['./series-card-detail.component.css'],
})
export class SeriesCardDetailComponent implements OnInit {
  constructor(
    private seriesService: SeriesService,
    private route: ActivatedRoute
  ) {}
  seriesById: Observable<any> = EMPTY;

  ngOnInit(): void {
    this.getSeriesById();
  }

  getSeriesById() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.seriesById = this.seriesService.getSeriesById(id);
  }
}
