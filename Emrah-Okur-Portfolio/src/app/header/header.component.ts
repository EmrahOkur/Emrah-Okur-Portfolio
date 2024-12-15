import { Component, HostListener, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeSection: string = '';
  navbarOpen: boolean = false;
  animationClose: boolean = false;
  closeAnimationStage: number = 0;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  setActive(section: string) {
    this.activeSection = section;
    this.closeMenuWithAnimation();
  }

  toggleNavbar() {
    if (this.navbarOpen) {
      this.closeMenuWithAnimation();
    } else {
      this.navbarOpen = true;
    }
  }

  closeMenuWithAnimation() {
    this.animationClose = true;
    this.closeAnimationStage = 1;

    setTimeout(() => {
      this.closeAnimationStage = 2;
    }, 100);

    setTimeout(() => {
      this.animationClose = false;
      this.closeAnimationStage = 0;
      this.navbarOpen = false;
    }, 200);
  }
}