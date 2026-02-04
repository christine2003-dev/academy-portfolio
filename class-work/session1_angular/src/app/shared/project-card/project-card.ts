import { Component, Input } from '@angular/core';
import { AppButtonComponent } from '../app-button/app-button';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCardComponent {
  @Input() imageSrc = '';
  @Input() title = '';
  @Input() githubUrl = '';
  @Input() demoUrl = '';

  open(url: string) {
    window.open(url, '_blank');
  }

}
