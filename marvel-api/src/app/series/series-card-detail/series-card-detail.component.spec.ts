import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesCardDetailComponent } from './series-card-detail.component';

describe('SeriesCardDetailComponent', () => {
  let component: SeriesCardDetailComponent;
  let fixture: ComponentFixture<SeriesCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesCardDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
