import { Routes } from '@angular/router';
import { LegalPageComponent } from './components/legal-page/legal-page.component';
import { InfoPageComponent } from './components/info-page/info-page.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'info',
    component: InfoPageComponent
  },
  {
    path: 'terms',
    component: LegalPageComponent,
    data: { pageType: 'termsOfService' }
  },
  {
    path: 'privacy',
    component: LegalPageComponent,
    data: { pageType: 'privacyPolicy' }
  },
  {
    path: 'accessibility',
    component: LegalPageComponent,
    data: { pageType: 'accessibilityStatement' }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
