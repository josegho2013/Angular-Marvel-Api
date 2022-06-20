import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsCardDetailComponent } from './comics-card-detail.component';

describe('ComicsCardDetailComponent', () => {
  let component: ComicsCardDetailComponent;
  let fixture: ComponentFixture<ComicsCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicsCardDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicsCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
