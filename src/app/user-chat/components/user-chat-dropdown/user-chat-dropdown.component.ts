import { Component, OnInit } from '@angular/core';
import { UserChatService } from '../../services/user-chat.service';
@Component({
  selector: 'app-user-chat-dropdown',
  templateUrl: './user-chat-dropdown.component.html',
  styleUrls: ['./user-chat-dropdown.component.css']
})
export class UserChatDropdownComponent implements OnInit {

  chatService: UserChatService;

  constructor(
    chatService: UserChatService
  ) { 

    
    this.chatService = chatService;

  }

  ngOnInit(): void {
    
  }

  handleSelection(event: any) {
    this.chatService.currentSelectedSupportStaff = event.target.value;
  }

}
