import { Component, OnInit, Input } from '@angular/core';
import { CharactersService } from './services/characters.service';
import { EMPTY, Observable, BehaviorSubject, Subject, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  constructor(private characterService: CharactersService) {}
  searchTerm$ = new BehaviorSubject<string>('')

  allCharacters: Observable<any> = EMPTY;
  listFiltered$: Observable<any> = EMPTY;
  public test: Array<any> = [];

  @Input() character: any;

  ngOnInit() {
    this.getCharacters();
    this.filterList();
  }
  getCharacters() {
    this.allCharacters = this.characterService.getCharacters();
  }

  filterList(): void {
    this.searchTerm$
    .pipe(
      debounceTime(400),
      distinctUntilChanged(),
    )
    .subscribe(term => {
      this.listFiltered$ = this.allCharacters.pipe(
        filter((character, index=0) => {
          if(character[index].name.toLowerCase().indexOf(term.toLowerCase()) >= 0){
            return character[index]
          }
          index ++
        })
      )});   
  }
}
