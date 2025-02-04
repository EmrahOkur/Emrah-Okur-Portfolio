import { Component,OnInit,Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.component.html', 
  styleUrls:[ './hero.component.scss','hero-responsive.component.scss', 'hero-desktop.component.scss', 'hero-mobile.component.scss','hero-tablet.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 200, 
        once: false, 
      });
    }
  }
}

