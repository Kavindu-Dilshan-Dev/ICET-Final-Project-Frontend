import { Component, input, InputSignal } from '@angular/core';
import { ChatResponse } from '../../services/models';

@Component({
  selector: 'app-chat-list',
  imports: [],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.css'
})
export class ChatListComponent {


  chats: InputSignal<ChatResponse[]> = input<ChatResponse[]>([]);

  searchNewContact: boolean = false;

  searchContact() {
    throw new Error('Method not implemented.');
  }
}
