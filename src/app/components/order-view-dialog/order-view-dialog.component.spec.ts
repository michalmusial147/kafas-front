import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderViewDialogComponent } from './order-view-dialog.component';

describe('OrderViewDialogComponent', () => {
  let component: OrderViewDialogComponent;
  let fixture: ComponentFixture<OrderViewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderViewDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
