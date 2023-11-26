import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-chat-card',
  templateUrl: './user-chat-card.component.html',
  styleUrls: ['./user-chat-card.component.scss']
})
export class UserChatCardComponent {
  @Input() activeUserlist: any;
}
