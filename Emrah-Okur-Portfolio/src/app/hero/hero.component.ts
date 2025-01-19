import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.component.html', 
  styleUrls:[ './hero.component.scss','hero-responsive.component.scss', 'hero-desktop.component.scss', 'hero-mobile.component.scss','hero-tablet.component.scss']
})
export class HeroComponent {

}
