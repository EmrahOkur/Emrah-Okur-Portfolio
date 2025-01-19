import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss','./skills-section-responsive.scss']
})
export class SkillsSectionComponent {

}
