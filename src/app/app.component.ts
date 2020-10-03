import { Component } from '@angular/core';
import {MessagesService} from './shared/services/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-seabank';
  input;
  constructor(public messageService: MessagesService) {}

  public changeLanguage(code: string) {
    localStorage.setItem('locale', code);
    window.location.reload();
  }

  sendMessage() {
    if (this.input) {
      this.messageService.sendMessage(this.input);
      this.input = '';
    }
  }
}
