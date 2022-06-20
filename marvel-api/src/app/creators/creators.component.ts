import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CreatorsService } from './service/creators.service';
import { EMPTY, Observable, BehaviorSubject, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import * as rxjs from 'rxjs'
import * as rxops from 'rxjs/operators'

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css'],
})
export class CreatorsComponent implements OnInit, OnDestroy {
  constructor(private creatorsService: CreatorsService) {}
  
  searchTerm$ = new BehaviorSubject<string>('')
  private OnDestroy$ = new Subject();
  secondtest: Array<any> = []

  allCreators: Observable<any> = EMPTY;
  listFiltered$: Observable<any> = EMPTY;

  @Input() creator: any;

  ngOnInit() {
    this.getCreators();
    this.filterList();
  }
  getCreators() {
    this.allCreators = this.creatorsService.getCreators();
  }
  async filterList  () {
    var aux = await rxjs.lastValueFrom(rxjs.from(this.allCreators).pipe(rxops.toArray()))
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
          if(aux[0][i].fullName.toLowerCase().indexOf(term.toLowerCase()) >= 0){
           this.secondtest.push(aux[0][i])
          }
        }
        return this.listFiltered$ = of(this.secondtest)
      } else {
        this.listFiltered$ = this.allCreators
      }
    }); 
  }
  ngOnDestroy(): void {
    this.OnDestroy$.next(Subject);
  }
}
