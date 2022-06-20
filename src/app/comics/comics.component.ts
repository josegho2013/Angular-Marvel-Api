
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ComicsService } from './service/comics.service';
import { EMPTY, Observable, BehaviorSubject, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import * as rxjs from 'rxjs'
import * as rxops from 'rxjs/operators'

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
})
export class ComicsComponent implements OnInit, OnDestroy {
  constructor(private comicsService: ComicsService) {}
  
  searchTerm$ = new BehaviorSubject<string>('')
  private OnDestroy$ = new Subject();
  secondtest: Array<any> = []

  allComics: Observable<any> = EMPTY;
  listFiltered$: Observable<any> = EMPTY;

  @Input() comic: any;

  ngOnInit() {
    this.getComics();
    this.filterList();
  }
  getComics() {
    this.allComics = this.comicsService.getComics();
  }
  async filterList  () {
    var aux = await rxjs.lastValueFrom(rxjs.from(this.allComics).pipe(rxops.toArray()))
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
          if(aux[0][i].title.toLowerCase().indexOf(term.toLowerCase()) >= 0){
           this.secondtest.push(aux[0][i])
          }
        }
        return this.listFiltered$ = of(this.secondtest)
      } else {
        this.listFiltered$ = this.allComics
      }
    }); 
  }
  ngOnDestroy(): void {
    this.OnDestroy$.next(Subject);
  }
}
