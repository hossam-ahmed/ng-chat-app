import { Component, Input } from '@angular/core';
import { IMessage } from '../chat/message';

@Component({
  selector: 'app-message',
  templateUrl: 'message.component.html',
})
export class MessageComponent {
  @Input() message: IMessage;
}
