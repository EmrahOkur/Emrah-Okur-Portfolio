import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsSectionComponent } from '../skills-section/skills-section.component';
import { PortfolioSectionComponent } from '../portfolio-section/portfolio-section.component';
import { ReferencesSectionComponent } from '../references-section/references-section.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HeroComponent, AboutMeComponent,SkillsSectionComponent,PortfolioSectionComponent,ReferencesSectionComponent,ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
