import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, LoadingIndicatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ContasBancarias';
  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
