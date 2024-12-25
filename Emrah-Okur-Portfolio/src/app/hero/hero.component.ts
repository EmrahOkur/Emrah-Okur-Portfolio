import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html', 
  styleUrls:[ './hero.component.scss','hero-responsive.component.scss', 'hero-desktop.component.scss', 'hero-mobile.component.scss']
})
export class HeroComponent {

}
