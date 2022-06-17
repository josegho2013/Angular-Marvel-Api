import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/services/service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  constructor(private characterSvc: ServiceService, public allCharacters: Observable<any>) {}

  ngOnInit(): void {
    this.getCharacters();
  }
  getCharacters() {
    this.allCharacters = this.characterSvc.getCharacters();
  }
}
