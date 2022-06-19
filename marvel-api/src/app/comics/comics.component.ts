import { Component, OnInit, Input } from '@angular/core';
import { ComicsService } from './service/comics.service';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
})
export class ComicsComponent implements OnInit {
  constructor(private comicsService: ComicsService) {}
  allComics: Observable<any> = EMPTY;
  @Input() comic: any;

  ngOnInit() {
    this.getComics();
  }
  getComics() {
    this.allComics = this.comicsService.getComics();
  }
}
