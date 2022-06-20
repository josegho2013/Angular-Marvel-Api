import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-series',
  templateUrl: './card-series.component.html',
  styleUrls: ['./card-series.component.css'],
})
export class CardSeriesComponent implements OnInit {
  @Input() serie: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToDetailSeries(id: number) {
    this.router.navigate([`series/detail/${id}`]);
  }
}
