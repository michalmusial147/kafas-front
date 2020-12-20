import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSearcherComponent } from './app-searcher.component';

describe('AppSearcherComponent', () => {
  let component: AppSearcherComponent;
  let fixture: ComponentFixture<AppSearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
