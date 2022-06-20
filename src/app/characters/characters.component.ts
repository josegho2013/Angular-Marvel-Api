import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CharactersService } from './services/characters.service';
import { EMPTY, Observable, BehaviorSubject, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import * as rxjs from 'rxjs'
import * as rxops from 'rxjs/operators'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  constructor(private characterService: CharactersService) { }

  searchTerm$ = new BehaviorSubject<string>('')
  private OnDestroy$ = new Subject();
  secondtest: Array<any> = []
  
  allCharacters: Observable<any> = EMPTY;
  listFiltered$: Observable<any> = EMPTY;

  @Input() character: any;

  ngOnInit() {
    this.getCharacters();
    this.filterList();
  }
  getCharacters() {
    this.allCharacters = this.characterService.getCharacters();
  }
  
  async filterList  () {
    var aux = await rxjs.lastValueFrom(rxjs.from(this.allCharacters).pipe(rxops.toArray()))
    this.searchTerm$
    .pipe(
      debounceTime(400),
      distinctUntilChanged(),
      takeUntil(this.OnDestroy$),
    ) 
    .subscribe(term => {
      if(term){
        this.secondtest = []
        for (let i = 0; i < aux[0].length; i++) {
          if(aux[0][i].name.toLowerCase().indexOf(term.toLowerCase()) >= 0){
           this.secondtest.push(aux[0][i])
          }
        }
        return this.listFiltered$ = of(this.secondtest)
      } else {
        this.listFiltered$ = this.allCharacters
      }
    }); 
  }
  ngOnDestroy(): void {
    this.OnDestroy$.next(Subject);
  }
}
