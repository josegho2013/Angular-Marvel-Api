import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-creators',
  templateUrl: './card-creators.component.html',
  styleUrls: ['./card-creators.component.css'],
})
export class CardCreatorsComponent implements OnInit {
  @Input() creator: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToDetailCreators(id: number) {
    this.router.navigate([`creators/detail/${id}`]);
  }
}
