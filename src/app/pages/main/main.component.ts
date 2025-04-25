import { Component, OnInit } from '@angular/core';
import { ChatListComponent } from "../../components/chat-list/chat-list.component";
import { ChatResponse, MessageResponse } from '../../services/models';
import { ChatService, MessageService } from '../../services/services';
import { KeycloakService } from '../../utils/keycloak/keycloak.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [ChatListComponent,DatePipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  chats: Array<ChatResponse> = [];
  selectedChat: ChatResponse = {};
  chatMessages: MessageResponse[] = [];

  constructor(
    private readonly chatService: ChatService,
    private readonly keycloakService: KeycloakService,
    private readonly messageService: MessageService
  ){}

  ngOnInit(): void {
   this.getAllChats();
  }

  private getAllChats(){
    this.chatService.getChatsByReceiver()
    .subscribe({
      next: (res) => {
        this.chats = res;
      }
    });
  }

  logout() {
    this.keycloakService.logout();
  }

  userProfile() {
    this.keycloakService.accountManagement();
  }

  chatSelected(chatResponse: ChatResponse) {
   this.selectedChat = chatResponse;
   this.getAllChatMessages(chatResponse.id as string);
   this.setMessagesToSeen();
  //  this.selectedChat.unreadCount = 0;

  }

  setMessagesToSeen() {
   
  }

  private getAllChatMessages(chatId: string) {
    this.messageService.getMessages({
      'chat-id': chatId
    }).subscribe({
      next: (messages) => {
        this.chatMessages = messages;
      }
    })
  }

    isSelfMessage(message: MessageResponse):boolean {
      return message.senderId === this.keycloakService.userId;
    }

}
