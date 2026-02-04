import { Component } from '@angular/core';
import { InfoCardComponent } from '../../shared/info-card/info-card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [InfoCardComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {}
