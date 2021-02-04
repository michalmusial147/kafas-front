import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRenovationsComponent } from './admin-renovations.component';

describe('AdminRenovationsComponent', () => {
  let component: AdminRenovationsComponent;
  let fixture: ComponentFixture<AdminRenovationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRenovationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRenovationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
