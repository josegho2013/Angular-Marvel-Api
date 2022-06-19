import { Component, OnInit, Input } from '@angular/core';
import { CreatorsService } from './service/creators.service';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css'],
})
export class CreatorsComponent implements OnInit {
  constructor(private creatorsService: CreatorsService) {}
  allCreators: Observable<any> = EMPTY;
  @Input() creator: any;

  ngOnInit() {
    this.getCreators();
  }
  getCreators() {
    this.allCreators = this.creatorsService.getCreators();
  }
}
