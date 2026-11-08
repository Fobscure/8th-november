import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Buttons } from './styles/shared/buttons/buttons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Buttons],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('8th-november');
  
}

