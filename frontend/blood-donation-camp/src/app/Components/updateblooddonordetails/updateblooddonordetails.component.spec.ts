import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateblooddonordetailsComponent } from './updateblooddonordetails.component';

describe('UpdateblooddonordetailsComponent', () => {
  let component: UpdateblooddonordetailsComponent;
  let fixture: ComponentFixture<UpdateblooddonordetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateblooddonordetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateblooddonordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
