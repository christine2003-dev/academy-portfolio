import { Component, EventEmitter, Input, Output } from '@angular/core';

type ButtonVariant = 'primary' | 'outline';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './app-button.html',
  styleUrl: './app-button.scss',
})
export class AppButtonComponent {
  @Input() label = '';

  // Maps to your existing CSS classes:
  // primary  -> btn-color-1
  // outline  -> btn-color-2 (used by Download CV / Github / Live Demo)
  @Input() variant: ButtonVariant = 'outline';

  // Optional extra classes (ex: "project-btn")
  @Input() extraClass = '';

  // Optional behavior
  @Input() href?: string;          // open link in new tab
  @Input() fileUrl?: string;       // open/download file in new tab

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    // Priority: fileUrl -> href -> emit clicked
    if (this.fileUrl) {
      window.open(this.fileUrl, '_blank');
      return;
    }

    if (this.href) {
      window.open(this.href, '_blank');
      return;
    }

    this.clicked.emit();
  }

  get classes(): string {
    const base = 'btn';
    const variantClass = this.variant === 'primary' ? 'btn-color-1' : 'btn-color-2';
    return `${base} ${variantClass} ${this.extraClass}`.trim();
  }
}
