import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSelector } from './language-selector.component';

describe('LanguageSelectorComponent', () => {
  let component: LanguageSelector;
  let fixture: ComponentFixture<LanguageSelector>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageSelector ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
