import { Component, OnInit } from '@angular/core';
import { CreatorsService } from '../service/creators.service';
import { EMPTY, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creators-card-detail',
  templateUrl: './creators-card-detail.component.html',
  styleUrls: ['./creators-card-detail.component.css']
})
export class CreatorsCardDetailComponent implements OnInit {

  constructor( private creatorsService:CreatorsService, private route: ActivatedRoute ) { }
  creatorsById: Observable<any> = EMPTY;
  creatorsIdComics: Observable<any> = EMPTY;
  creatorsIdSeries: Observable<any> = EMPTY;

  ngOnInit(): void {
    this.getCreatorsById();
    this.getCreatorsIdComics();
    this.getCreatorsIdseries();
  }
  getCreatorsById() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.creatorsById = this.creatorsService.getCreatorsById(id);
  }
  getCreatorsIdComics() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.creatorsIdComics = this.creatorsService.getCreatorsIdComics(id);
  }
  getCreatorsIdseries() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.creatorsIdSeries = this.creatorsService.getCreatorsIdseries(id);
  }

}
