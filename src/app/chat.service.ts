import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages: { user: string, message: string }[] = [];

  constructor() { }

  sendMessage(user: string, message: string) {
    this.messages.push({ user, message });
  }

  getMessages() {
    return this.messages;
  }
}
