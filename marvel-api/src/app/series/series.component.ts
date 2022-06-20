import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SeriesService } from './service/series.service';
import { EMPTY, Observable, BehaviorSubject, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import * as rxjs from 'rxjs'
import * as rxops from 'rxjs/operators'

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit, OnDestroy {
  constructor(private seriesService: SeriesService) {}
  
  searchTerm$ = new BehaviorSubject<string>('')
  private OnDestroy$ = new Subject();
  secondtest: Array<any> = []
  
  allSeries: Observable<any> = EMPTY;
  listFiltered$: Observable<any> = EMPTY;

  @Input() serie: any;

  ngOnInit() {
    this.getSeries();
    this.filterList();
  }
  getSeries() {
    this.allSeries = this.seriesService.getSeries();
  }
  async filterList  () {
    var aux = await rxjs.lastValueFrom(rxjs.from(this.allSeries).pipe(rxops.toArray()))
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
        this.listFiltered$ = this.allSeries
      }
    }); 
  }
  ngOnDestroy(): void {
    this.OnDestroy$.next(Subject);
  }
  async filterType(e: any) {
    var aux = await rxjs.lastValueFrom(rxjs.from(this.allSeries).pipe(rxops.toArray()))
    if(e.target.value){
      this.secondtest = []
      for (let i = 0; i < aux[0].length; i++) {
        if(aux[0][i].type.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0){
         this.secondtest.push(aux[0][i])
        }
      }
      return this.listFiltered$ = of(this.secondtest)
    } else {
      this.listFiltered$ = this.allSeries
    }
  }
  async filterRating(e: any) {
    var aux = await rxjs.lastValueFrom(rxjs.from(this.allSeries).pipe(rxops.toArray()))
    if(e.target.value){
      this.secondtest = []
      for (let i = 0; i < aux[0].length; i++) {
        if(aux[0][i].rating.toLowerCase() === (e.target.value.toLowerCase()) || aux[0][i].rating.toLowerCase().split(' ')[1] === (e.target.value.toLowerCase())){
         this.secondtest.push(aux[0][i])
        }
      }
      return this.listFiltered$ = of(this.secondtest)
    } else {
      this.listFiltered$ = this.allSeries
    }
  }
}
