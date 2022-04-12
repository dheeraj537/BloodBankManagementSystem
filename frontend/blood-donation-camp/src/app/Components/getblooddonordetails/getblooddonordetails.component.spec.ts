import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetblooddonordetailsComponent } from './getblooddonordetails.component';

describe('GetblooddonordetailsComponent', () => {
  let component: GetblooddonordetailsComponent;
  let fixture: ComponentFixture<GetblooddonordetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetblooddonordetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetblooddonordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
