import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit() {
    // Überprüfen, ob der Code im Browser ausgeführt wird
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,       // Dauer der Animation in Millisekunden
        easing: 'ease-out-back', // Art der Animation
        once: false,          // Animation wird bei erneutem Scrollen ausgelöst
        mirror: true,         // Animation wird auch bei Scroll nach oben ausgelöst
        delay: 90            // Verzögerung vor dem Start der Animation
      });
    }
  }
}