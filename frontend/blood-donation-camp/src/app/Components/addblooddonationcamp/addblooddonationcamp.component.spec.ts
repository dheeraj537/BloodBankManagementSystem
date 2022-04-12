import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddblooddonationcampComponent } from './addblooddonationcamp.component';

describe('AddblooddonationcampComponent', () => {
  let component: AddblooddonationcampComponent;
  let fixture: ComponentFixture<AddblooddonationcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddblooddonationcampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddblooddonationcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
