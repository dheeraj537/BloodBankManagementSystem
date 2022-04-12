import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodbankmenuComponent } from './bloodbankmenu.component';

describe('BloodbankmenuComponent', () => {
  let component: BloodbankmenuComponent;
  let fixture: ComponentFixture<BloodbankmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodbankmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodbankmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
