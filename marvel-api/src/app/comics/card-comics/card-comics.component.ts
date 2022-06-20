import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-comics',
  templateUrl: './card-comics.component.html',
  styleUrls: ['./card-comics.component.css'],
})
export class CardComicsComponent implements OnInit {
  @Input() comic: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToDetailComics(id: number) {
    this.router.navigate([`comics/detail/${id}`]);
  }
}
