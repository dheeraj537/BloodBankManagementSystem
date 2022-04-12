import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddblooddonordetailsComponent } from './addblooddonordetails.component';

describe('AddblooddonordetailsComponent', () => {
  let component: AddblooddonordetailsComponent;
  let fixture: ComponentFixture<AddblooddonordetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddblooddonordetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddblooddonordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
