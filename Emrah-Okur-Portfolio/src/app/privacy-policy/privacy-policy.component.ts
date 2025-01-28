import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})

export class PrivacyPolicyComponent {
  currentLanguage: string = 'en'; 
  constructor(private translate: TranslateService) {
    this.currentLanguage = this.translate.currentLang || 'en';

    this.translate.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
    });
  }
}