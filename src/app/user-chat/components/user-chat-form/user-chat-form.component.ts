import { Component, OnInit } from '@angular/core';
import { UserChatService } from '../../services/user-chat.service';

@Component({
  selector: 'app-user-chat-form',
  templateUrl: './user-chat-form.component.html',
  styleUrls: ['./user-chat-form.component.css']
})
export class UserChatFormComponent implements OnInit {

  text: string;

  constructor(private chatService: UserChatService) {

    this.text = "";
  }

  ngOnInit(): void {
  }

  send() {
    var recipient = this.chatService.currentSelectedSupportStaff
    this.chatService.send(this.text, recipient);
    this.text = "";
  }

  handleSubmit(e: KeyboardEvent) {
    if (e.keyCode === 13) { this.send(); }
  }
}