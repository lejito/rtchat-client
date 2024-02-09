import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faKey, faPalette } from '@fortawesome/free-solid-svg-icons';
import { ChatColor } from '../../types/ChatColor';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private appService: AppService) {}

  public faUser = faUser;
  public faKey = faKey;
  public faPalette = faPalette;

  public chatColors: ChatColor[] = this.appService.chatColors;

  public username: string = '';
  public password: string = '';
  public chatColor: ChatColor = this.appService.chatColors[0];
}
