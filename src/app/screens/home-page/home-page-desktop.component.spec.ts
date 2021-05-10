import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageDesktopComponent } from './home-page-desktop.component';

describe('HomePageDesktopComponent', () => {
  let component: HomePageDesktopComponent;
  let fixture: ComponentFixture<HomePageDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
