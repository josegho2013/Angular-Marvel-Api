import { Component, OnInit, Input } from '@angular/core';
import { SeriesService } from './service/series.service';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  constructor(private seriesService: SeriesService) {}
  allSeries: Observable<any> = EMPTY;
  @Input() serie: any;

  ngOnInit() {
    this.getSeries();
  }
  getSeries() {
    this.allSeries = this.seriesService.getSeries();
  }
}
