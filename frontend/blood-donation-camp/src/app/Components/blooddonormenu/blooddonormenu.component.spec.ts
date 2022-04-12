import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlooddonormenuComponent } from './blooddonormenu.component';

describe('BlooddonormenuComponent', () => {
  let component: BlooddonormenuComponent;
  let fixture: ComponentFixture<BlooddonormenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlooddonormenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlooddonormenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
