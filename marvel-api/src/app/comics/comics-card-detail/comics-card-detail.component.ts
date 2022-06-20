import { Component, OnInit, Input } from '@angular/core';
import { ComicsService } from '../service/comics.service';
import { EMPTY, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comics-card-detail',
  templateUrl: './comics-card-detail.component.html',
  styleUrls: ['./comics-card-detail.component.css'],
})
export class ComicsCardDetailComponent implements OnInit {
  constructor(
    private comicsService: ComicsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  comicsById: Observable<any> = EMPTY;
  comicsIdCharacters: Observable<any> = EMPTY;
  comicsIdCreators: Observable<any> = EMPTY;

  ngOnInit(): void {
    this.getComicsById();
    this.getComicsIdCharacter();
    this.getComicsIdCreators();
  }

  goToDetailCharacter(id: number) {
    this.router.navigate([`home/detail/${id}`]);
  }
  goToDetailCreators(id: number) {
    this.router.navigate([`creators/detail/${id}`]);
  }

  getComicsById() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.comicsById = this.comicsService.getComicsById(id);
  }
  getComicsIdCharacter() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.comicsIdCharacters = this.comicsService.getComicsIdCharacter(id);
  }
  getComicsIdCreators() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.comicsIdCreators = this.comicsService.getComicsIdCreators(id);
  }
}
