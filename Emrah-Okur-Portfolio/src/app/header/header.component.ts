import { Component, Inject, PLATFORM_ID, AfterViewInit, HostListener } from '@angular/core';
import { isPlatformBrowser,NgIf, CommonModule  } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TranslateModule,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  activeSection: string = '';
  navbarOpen: boolean = false;
  animationClose: boolean = false;
  closeAnimationStage: number = 0;
  isBrowser: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private translate: TranslateService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId); 

    if (this.isBrowser && typeof localStorage !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') || 'en';
      this.translate.use(savedLanguage);
    } else {
      this.translate.use('en');
    }
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      window.addEventListener('scroll', this.onScroll.bind(this));
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (!this.isBrowser) return;

    const sections = ['about', 'skills', 'portfolio', 'contact'];
    let currentSection = '';

    sections.forEach(section => {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section;
        }
      }
    });

    this.activeSection = currentSection ? currentSection : '';
    
  }

  setActive(section: string) {
    this.activeSection = section;
    this.closeMenuWithAnimation();
    
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
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
    if (this.isBrowser) {
      localStorage.setItem('language', lang);
    }
  }

  scrollToSection(section: string) {
    const sectionElement = document.getElementById(section);
    const navbarHeight = document.querySelector('.navbar')?.clientHeight || 0; 

    if (sectionElement) {
        window.scrollTo({
            top: sectionElement.offsetTop - navbarHeight, 
            behavior: 'smooth'
        });

        this.navbarOpen = false;
    }
}

}
