// import { Component, OnInit } from '@angular/core';
// import { ChatService } from '../chat.service';
// import { AuthService } from '../auth.service';
// import { NotificationService } from '../notification.service';

// @Component({
//   selector: 'app-chat',
//   templateUrl: './chat.component.html',
//   styleUrls: ['./chat.component.css']
// })
// export class ChatComponent implements OnInit {

//   message: string = '';
//   messages: { user: string, message: string }[] = [];
//   filteredMessages: { user: string, message: string }[] = [];
//   searchTerm: string = '';

//   constructor(
//     private chatService: ChatService,
//     private authService: AuthService,
//     private notificationService: NotificationService
//   ) { }

//   ngOnInit(): void {
//     this.messages = this.chatService.getMessages();
//   }

//   sendMessage() {
//     const user = this.authService.getUser().username;
//     this.chatService.sendMessage(user, this.message);
//     this.notificationService.showNotification('Message sent successfully');
//     this.message = '';
//   }

//   searchMessages() {
//     if (this.searchTerm) {
//       this.filteredMessages = this.messages.filter(msg =>
//         msg.message.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
//         msg.user.toLowerCase().includes(this.searchTerm.toLowerCase())
//       );
//     } else {
//       this.filteredMessages = this.messages;
//     }
//   }
// }


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})

export class ChatComponent implements OnInit {
  messages: Array<{ sender: string, content: string }> = [];
  message: string = '';

  constructor() { }

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(): void {
    // Logic to load chat messages from server
  }

  sendMessage(): void {
    if (this.message.trim()) {
      this.messages.push({ sender: 'You', content: this.message });
      this.message = '';
    }
  }
}
