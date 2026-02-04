import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  standalone: true,
  templateUrl: './info-card.html',
  styleUrl: './info-card.scss',
})
export class InfoCardComponent {
  @Input() iconSrc = '';
  @Input() iconAlt = '';
  @Input() title = '';
  @Input() line1 = '';
  @Input() line2 = '';
}
