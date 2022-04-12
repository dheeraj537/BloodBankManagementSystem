import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecampdetailsComponent } from './updatecampdetails.component';

describe('UpdatecampdetailsComponent', () => {
  let component: UpdatecampdetailsComponent;
  let fixture: ComponentFixture<UpdatecampdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecampdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecampdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
