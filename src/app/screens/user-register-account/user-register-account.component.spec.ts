import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisterAccountComponent } from './user-register-account.component';

describe('UserRegisterAccountComponent', () => {
  let component: UserRegisterAccountComponent;
  let fixture: ComponentFixture<UserRegisterAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegisterAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisterAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
