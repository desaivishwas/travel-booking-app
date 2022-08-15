import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserChatComponent } from './user-chat.component';

const routes: Routes = [
  {
    path: "",
    component: UserChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserChatRoutingModule { }
