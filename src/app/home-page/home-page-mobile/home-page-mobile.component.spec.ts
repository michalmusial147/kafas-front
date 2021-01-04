import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageMobileComponent } from './home-page-mobile.component';

describe('HomePageMobileComponent', () => {
  let component: HomePageMobileComponent;
  let fixture: ComponentFixture<HomePageMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
