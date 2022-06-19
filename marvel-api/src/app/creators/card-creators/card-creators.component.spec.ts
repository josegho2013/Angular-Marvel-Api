import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCreatorsComponent } from './card-creators.component';

describe('CardCreatorsComponent', () => {
  let component: CardCreatorsComponent;
  let fixture: ComponentFixture<CardCreatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCreatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
