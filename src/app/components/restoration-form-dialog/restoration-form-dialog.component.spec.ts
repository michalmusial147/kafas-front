import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorationFormDialogComponent } from './restoration-form-dialog.component';

describe('RestorationFormDialogComponent', () => {
  let component: RestorationFormDialogComponent;
  let fixture: ComponentFixture<RestorationFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestorationFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorationFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
