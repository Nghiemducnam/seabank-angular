import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  api: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {
    this.initializeWebSocketConnection();
  }

  public stompClient;
  public msg = [];

  initializeWebSocketConnection() {
    const serverUrl = 'http://localhost:8080/socket';
    // const ws = new SockJS(serverUrl);
    let ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/message', (message) => {
        if (message.body) {
          that.msg.push(message.body);
        }
      });
    });
  }

  sendMessage(message) {
    this.stompClient.send('/app/send/message', {}, message);
  }

  getMessages(): Observable<any> {
    return this.http.get(this.api);
  }
}
