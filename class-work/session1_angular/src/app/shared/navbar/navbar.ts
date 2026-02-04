import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  scrollTo(id: string, event?: Event) {
    event?.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToTop(event?: Event) {
    event?.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
