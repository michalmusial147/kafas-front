import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGatesComponent } from './admin-gates.component';

describe('AdminGatesComponent', () => {
  let component: AdminGatesComponent;
  let fixture: ComponentFixture<AdminGatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
