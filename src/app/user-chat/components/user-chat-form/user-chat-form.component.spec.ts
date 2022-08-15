import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChatFormComponent } from './user-chat-form.component';

describe('UserChatFormComponent', () => {
  let component: UserChatFormComponent;
  let fixture: ComponentFixture<UserChatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChatFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
