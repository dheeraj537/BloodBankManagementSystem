import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalmenuComponent } from './hospitalmenu.component';

describe('HospitalmenuComponent', () => {
  let component: HospitalmenuComponent;
  let fixture: ComponentFixture<HospitalmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
