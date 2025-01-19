import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss','./portfolio-section-responsive.scss']
})
export class PortfolioSectionComponent {

}
