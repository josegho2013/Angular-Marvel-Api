import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-comics',
  templateUrl: './card-comics.component.html',
  styleUrls: ['./card-comics.component.css']
})
export class CardComicsComponent implements OnInit {
  @Input() comic: any;
  constructor() { }

  ngOnInit(): void {
  }

}
