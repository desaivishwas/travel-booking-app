import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { UserChatService } from './services/user-chat.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireAuth} from '@angular/fire/compat/auth';


@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.css']
})
export class UserChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scroll') private container: ElementRef;

  messageFeed: Observable<any[]>;
  messageFeedRef: AngularFireList<any>;
  users: any;
  authRef: AngularFireAuth;

  title = 'Chat';

  chatOpen = false;


  ngOnInit(): void {
    
  }

  constructor(private chatService: UserChatService, private af: AngularFireDatabase, private auth: AngularFireAuth) {
    this.messageFeedRef = this.af.list('messages');
    this.messageFeed = this.messageFeedRef.valueChanges();
    this.messageFeed.subscribe(res => console.log(res));
    this.authRef = auth;


  }

  ngAfterViewChecked() {
    var e = document.getElementById("msgFeed");
    if (e != null) {
      e.scrollTo(0,document.body.scrollHeight);
    }
  }

  toggleMenu(button: HTMLButtonElement, chat: HTMLDivElement, container: HTMLDivElement) {
    if (this.chatOpen) {
      //closing chat
      chat.style.visibility = "hidden";
      container.style.zIndex = "-1"



    } else {
      //opening chat
      chat.style.visibility = "visible";
      container.style.zIndex = "999"


    }
    this.chatOpen = !this.chatOpen
  }


}
