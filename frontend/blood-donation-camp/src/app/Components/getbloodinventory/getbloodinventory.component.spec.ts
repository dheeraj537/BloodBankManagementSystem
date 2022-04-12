import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbloodinventoryComponent } from './getbloodinventory.component';

describe('GetbloodinventoryComponent', () => {
  let component: GetbloodinventoryComponent;
  let fixture: ComponentFixture<GetbloodinventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetbloodinventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetbloodinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
