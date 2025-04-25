import { Component, OnInit } from '@angular/core';
import { ChatListComponent } from "../../components/chat-list/chat-list.component";
import { ChatResponse, MessageRequest, MessageResponse } from '../../services/models';
import { ChatService, MessageService } from '../../services/services';
import { KeycloakService } from '../../utils/keycloak/keycloak.service';
import { DatePipe } from '@angular/common';
import { PickerComponent } from "@ctrl/ngx-emoji-mart"
import {FormsModule} from '@angular/forms';
import { EmojiData } from '@ctrl/ngx-emoji-mart/ngx-emoji';

@Component({
  selector: 'app-main',
  imports: [ChatListComponent,DatePipe,PickerComponent,FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {





  chats: Array<ChatResponse> = [];
  selectedChat: ChatResponse = {};
  chatMessages: MessageResponse[] = [];
  showEmojis:boolean = false;
  messageContent = '';

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
    this.messageService.setMessagesToSeen({
      'chat-id': this.selectedChat.id as string
    }).subscribe({
      next:() => {}
    });
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

    uploadMediaFile(target: EventTarget|null) {
      
    }

    onSelectEmojis(emojiSelected: any) {
      const emoji: EmojiData = emojiSelected.emoji;
      this.messageContent += emoji.native;
    }

    keyDown(event: KeyboardEvent) {
      if (event.key == 'Enter') {
          this.sendMessage();
      }
    }

    onClick() {
      this.setMessagesToSeen();
    }

    sendMessage() {
      if (this.messageContent) {
        const messageRequest: MessageRequest = {
          chatId: this.selectedChat.id,
          senderId: this.getSenderId(),
          receiverId: this.getReceiverId(),
          content: this.messageContent,
          type: 'TEXT'
        };

        this.messageService.saveMessage({
          body: messageRequest
        }).subscribe({
          next: () => {
            const message: MessageResponse = {
              senderId: this.getSenderId(),
              receiverId: this.getReceiverId(),
              content: this.messageContent,
              type: 'TEXT',
              state: 'SENT',
              createdAt: new Date().toString()
            };
            this.selectedChat.lastMessage = this.messageContent;
            this.chatMessages.push(message);
            this.messageContent = '';
            this.showEmojis = false;
          }
        });

      }
    }

  private getSenderId(): string{
    if (this.selectedChat.senderId === this.keycloakService.userId) {
      return this.selectedChat.senderId as string;
    }

    return this.selectedChat.receiverId as string;
  }

  private getReceiverId(): string{
    if (this.selectedChat.senderId === this.keycloakService.userId) {
      return this.selectedChat.receiverId as string;
    }

    return this.selectedChat.senderId as string;
  }



}
