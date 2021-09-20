import { Component } from '@angular/core';
import { IMessage } from './message';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
})
export class ChatComponent {
  sentMessages: IMessage[] = [
    {
      id: '0',
      text: 'Hello',
      buttons: [],
    },
    {
      id: '0',
      text: 'How are you',
      buttons: [],
    },
    {
      id: '0',
      text: 'tegy n5sr Fifa?',
      buttons: [
        {
          text: 'Ok',
        },
        {
          text: 'La Hanam',
        },
      ],
    },
  ];
  receivedMessages: IMessage[];
}
