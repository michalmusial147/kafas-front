import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingPageComponentComponent } from './loading-page-component.component';

describe('LoadingPageComponentComponent', () => {
  let component: LoadingPageComponentComponent;
  let fixture: ComponentFixture<LoadingPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
