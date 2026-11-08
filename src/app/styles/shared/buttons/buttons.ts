import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss',
})
export class Buttons {
  @Input() buttonType: 'primary' | 'secondary' | 'icon-only' = 'primary';
}