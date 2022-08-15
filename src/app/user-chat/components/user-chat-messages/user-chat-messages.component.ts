import { Component, OnChanges, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { UserChatService } from '../../services/user-chat.service';


@Component({
  selector: 'app-user-chat-messages',
  templateUrl: './user-chat-messages.component.html',
  styleUrls: ['./user-chat-messages.component.css']
})
export class UserChatMessagesComponent implements OnInit, OnChanges {

  messageFeedRef: AngularFireList<any>;
  messageFeed: Observable<any[]>;

  constructor(private chatService: UserChatService, private af: AngularFireDatabase) {
    this.messageFeedRef = this.af.list('messages');
    this.messageFeed = this.messageFeedRef.valueChanges();
    this.messageFeed.subscribe(res => console.log(res));
  }

  ngOnInit(): void {
    this.messageFeed = this.chatService.getMessages().valueChanges()
  }

  ngOnChanges(): void {
    this.messageFeed = this.chatService.getMessages().valueChanges()

  }


}