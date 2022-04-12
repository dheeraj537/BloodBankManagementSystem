import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbloodbanksComponent } from './getbloodbanks.component';

describe('GetbloodbanksComponent', () => {
  let component: GetbloodbanksComponent;
  let fixture: ComponentFixture<GetbloodbanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetbloodbanksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbloodbanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
