import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserChatService {

  messages: AngularFireList<any>;

  supportStaff: any[];
  

  user: any;
  username: any;

  currentSelectedSupportStaff: string;


  constructor(
    private database: AngularFireDatabase,
    private auth: AngularFireAuth
  ) {
    
    this.establishSupportStaff()

    this.auth.authState.subscribe(auth => {
      if (auth !== null && auth !== undefined) {
        this.user = auth;
        //NOTE: in the future change this to displayname when we have them implemented
        this.username = auth.email;
      }
    })
  }

  establishSupportStaff() {
    this.database.list('support').valueChanges().subscribe(x => {
      this.supportStaff = x;
      this.currentSelectedSupportStaff = this.supportStaff[0];
    })
    
  }

  getTime() {
    const d = new Date();
    return (d.getUTCMonth() + 1) + "/" + d.getUTCDate() + "/" + d.getUTCFullYear()
      + " " + d.getUTCHours() + ":" + d.getUTCMinutes();
  }

  getMessages(): AngularFireList<any> {
    return this.database.list('messages', r => {
      return r.orderByKey()
    })
  }


  send(text: string, recipient: string) {
    const time = this.getTime();
    const email = "";
    this.messages = this.getMessages();
    this.messages.push({
      message: text,
      time: time,
      username: this.username,
      support: recipient,
      sender: this.username,
      email: this.user.email
    })
  }
}
