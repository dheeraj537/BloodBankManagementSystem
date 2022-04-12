import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddblooddonordonationComponent } from './addblooddonordonation.component';

describe('AddblooddonordonationComponent', () => {
  let component: AddblooddonordonationComponent;
  let fixture: ComponentFixture<AddblooddonordonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddblooddonordonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddblooddonordonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
