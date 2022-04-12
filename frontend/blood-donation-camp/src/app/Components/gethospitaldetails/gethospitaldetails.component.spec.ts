import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GethospitaldetailsComponent } from './gethospitaldetails.component';

describe('GethospitaldetailsComponent', () => {
  let component: GethospitaldetailsComponent;
  let fixture: ComponentFixture<GethospitaldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GethospitaldetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GethospitaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
