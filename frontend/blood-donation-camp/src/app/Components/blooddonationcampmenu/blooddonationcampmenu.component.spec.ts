import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlooddonationcampmenuComponent } from './blooddonationcampmenu.component';

describe('BlooddonationcampmenuComponent', () => {
  let component: BlooddonationcampmenuComponent;
  let fixture: ComponentFixture<BlooddonationcampmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlooddonationcampmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlooddonationcampmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
