import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './references-section.component.html',
  styleUrls: ['./references-section.component.scss','./references-section-responsive.scss']
})
export class ReferencesSectionComponent {

}
