import { Component, OnInit, Input } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { EMPTY, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent implements OnInit {
  @Input() detail: any;

  constructor(
    private characterService: CharactersService,
    private route: ActivatedRoute,
  ) {}

  characterById: Observable<any> = EMPTY;
  characteIdComics: Observable<any> = EMPTY;
  characterIdSeries: Observable<any> = EMPTY;

  ngOnInit() {
    this.getCharactersById();
    this.getCharacterIdComics();
    this.getCharacterIdSeries();
  }

  getCharactersById() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.characterById = this.characterService.getCharactersById(id);
  }
  getCharacterIdComics() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.characteIdComics = this.characterService.getCharacterIdComics(id);
  }
  getCharacterIdSeries() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.characterIdSeries = this.characterService.getCharacterIdSeries(id);
  }
}
