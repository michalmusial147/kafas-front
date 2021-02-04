import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadCredentialsDialogComponent } from './bad-credentials-dialog.component';

describe('BadCredentialsDialogComponent', () => {
  let component: BadCredentialsDialogComponent;
  let fixture: ComponentFixture<BadCredentialsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadCredentialsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadCredentialsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
