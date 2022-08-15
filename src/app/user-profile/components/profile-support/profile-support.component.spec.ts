import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSupportComponent } from './profile-support.component';

describe('ProfileSupportComponent', () => {
  let component: ProfileSupportComponent;
  let fixture: ComponentFixture<ProfileSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
