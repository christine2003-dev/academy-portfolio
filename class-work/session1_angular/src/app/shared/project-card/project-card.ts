import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
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
