import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from 'src/services/service.service';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private characterService: ServiceService) {}
  allCharacters: Observable<any> = EMPTY;
  @Input() character: any;
  
  ngOnInit() {
    this.getCharacters();
  }
  getCharacters() {
    this.allCharacters = this.characterService.getCharacters();
  }
}
