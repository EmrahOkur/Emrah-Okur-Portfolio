import { Component, HostListener, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeSection: string = '';
  navbarOpen: boolean = false;
  animationClose: boolean = false;
  closeAnimationStage: number = 0;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private translate: TranslateService
  ) {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') || 'en';
      this.translate.use(savedLanguage);
    } else {
      this.translate.use('en'); // Fallback, falls localStorage nicht verfügbar ist
    }
  }
  

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
  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
    
  }
}
