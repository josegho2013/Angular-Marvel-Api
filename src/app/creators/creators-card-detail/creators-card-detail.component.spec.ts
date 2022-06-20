import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorsCardDetailComponent } from './creators-card-detail.component';

describe('CreatorsCardDetailComponent', () => {
  let component: CreatorsCardDetailComponent;
  let fixture: ComponentFixture<CreatorsCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorsCardDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatorsCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
