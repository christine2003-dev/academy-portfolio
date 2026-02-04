import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  scrollTo(sectionId: string, event?: Event) {
    event?.preventDefault();

    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToTop(event?: Event) {
    event?.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
