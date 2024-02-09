import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { AppService } from '../../services/app.service';
import { ChatColor } from '../../types/ChatColor';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {
  constructor(private appService: AppService) {}

  public faPaperPlane = faPaperPlane;

  public chatColors: ChatColor[] = this.appService.chatColors;

  public setRandomChatColor(): ChatColor {
    return this.chatColors[Math.floor(Math.random() * this.chatColors.length)];
  }
}
