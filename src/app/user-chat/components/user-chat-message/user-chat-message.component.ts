import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { UserChatService } from '../../services/user-chat.service';
import { Message } from '../../shared/interfaces/messages.interface';

@Component({
  selector: 'app-user-chat-message',
  templateUrl: './user-chat-message.component.html',
  styleUrls: ['./user-chat-message.component.css']
})
export class UserChatMessageComponent implements OnInit {

  @Input() message: Message;
  username: string;
  support: string;
  email: string;
  text: string;
  time: Date = new Date();

  chatService: UserChatService;

  constructor(private authService: AuthService, chatService: UserChatService) {
    this.chatService = chatService;

    authService.user$.subscribe(user => {
      //add stuff later to differentiate between current user and other users
    });
  }

  ngOnInit(message = this.message): void {
    this.text = message.message!;
    this.username = message.username!;
    this.support = message.support!;
    this.email = message.email!;
    this.time = message.timeSent!;
  }

}
