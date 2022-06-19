import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-creators',
  templateUrl: './card-creators.component.html',
  styleUrls: ['./card-creators.component.css']
})
export class CardCreatorsComponent implements OnInit {
  @Input() creator: any;
  constructor() { }

  ngOnInit(): void {
  }

}
