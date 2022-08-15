import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChatDropdownComponent } from './user-chat-dropdown.component';

describe('UserChatDropdownComponent', () => {
  let component: UserChatDropdownComponent;
  let fixture: ComponentFixture<UserChatDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChatDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChatDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
