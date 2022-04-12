import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebloodbankComponent } from './updatebloodbank.component';

describe('UpdatebloodbankComponent', () => {
  let component: UpdatebloodbankComponent;
  let fixture: ComponentFixture<UpdatebloodbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatebloodbankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebloodbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
