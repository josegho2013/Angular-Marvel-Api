import { Component, OnInit, Input } from '@angular/core';
import { CharactersService } from './services/characters.service';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})

export class CharactersComponent implements OnInit {
  constructor(private characterService: CharactersService) {}
  allCharacters: Observable<any> = EMPTY;
  @Input() character: any;
  
  ngOnInit() {
    this.getCharacters();
  }
  getCharacters() {
    this.allCharacters = this.characterService.getCharacters();
  }
}
