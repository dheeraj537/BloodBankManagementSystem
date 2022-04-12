import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferbloodComponent } from './transferblood.component';

describe('TransferbloodComponent', () => {
  let component: TransferbloodComponent;
  let fixture: ComponentFixture<TransferbloodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferbloodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferbloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
