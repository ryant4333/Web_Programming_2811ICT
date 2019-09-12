import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {
  messagecontent:string='';

  constructor(private socketService: SocketService) { }

  private chat(){
    this.socketService.chat(this.messagecontent);
  }

  ngOnInit() {
  }

}
