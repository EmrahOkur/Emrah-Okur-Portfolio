import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'legal-notice', component: LegalNoticeComponent, pathMatch: 'full' },
    { path: 'privacy-policy', component: PrivacyPolicyComponent , pathMatch: 'full'}
];
