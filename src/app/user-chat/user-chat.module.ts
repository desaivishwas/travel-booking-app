import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserChatRoutingModule } from './user-chat-routing.module';
import { UserChatComponent } from './user-chat.component';
import { UserChatMessagesComponent } from './components/user-chat-messages/user-chat-messages.component';
import { UserChatMessageComponent } from './components/user-chat-message/user-chat-message.component';
import { UserChatFormComponent } from './components/user-chat-form/user-chat-form.component';
import { UserChatDropdownComponent } from './components/user-chat-dropdown/user-chat-dropdown.component';


@NgModule({
  declarations: [
    UserChatComponent,
    UserChatMessagesComponent,
    UserChatMessageComponent,
    UserChatFormComponent,
    UserChatDropdownComponent,
  ],
  imports: [
    CommonModule,
    UserChatRoutingModule,

    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    UserChatComponent
  ]
})
export class UserChatModule { }
