import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChatMessagesComponent } from './user-chat-messages.component';

describe('UserChatMessagesComponent', () => {
  let component: UserChatMessagesComponent;
  let fixture: ComponentFixture<UserChatMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChatMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChatMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
