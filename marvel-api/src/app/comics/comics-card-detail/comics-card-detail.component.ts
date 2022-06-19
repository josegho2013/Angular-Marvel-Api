import { Component, OnInit,Input } from '@angular/core';
import { ComicsService } from '../service/comics.service';
import { EMPTY, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comics-card-detail',
  templateUrl: './comics-card-detail.component.html',
  styleUrls: ['./comics-card-detail.component.css']
})
export class ComicsCardDetailComponent implements OnInit {

  constructor( private comicsService :ComicsService ,private route: ActivatedRoute  ) { }
  comicsById: Observable<any> = EMPTY;
  comicsIdCharacter: Observable<any> = EMPTY;
  comicsIdCreators: Observable<any> = EMPTY;

  ngOnInit(): void {
    console.log("Aquiiii")
    this.getComicsById();
    this.getComicsIdCharacter();
    this.getComicsIdCreators();

  }

  getComicsById() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.comicsById = this.comicsService.getComicsById(id);
  }
  getComicsIdCharacter() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.comicsIdCharacter = this.comicsService.getComicsIdCharacter(id);
  }
  getComicsIdCreators() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.comicsIdCreators = this.comicsService.getComicsIdCreators(id);
  }

}
