import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetblooddonationcampstartdateComponent } from './getblooddonationcampstartdate.component';

describe('GetblooddonationcampstartdateComponent', () => {
  let component: GetblooddonationcampstartdateComponent;
  let fixture: ComponentFixture<GetblooddonationcampstartdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetblooddonationcampstartdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetblooddonationcampstartdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
