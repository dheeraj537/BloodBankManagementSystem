import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatehospitalComponent } from './updatehospital.component';

describe('UpdatehospitalComponent', () => {
  let component: UpdatehospitalComponent;
  let fixture: ComponentFixture<UpdatehospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatehospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatehospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
