import { Injectable, signal } from '@angular/core';

export type PageView = 'home' | 'info' | 'terms' | 'privacy' | 'accessibility';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  currentPage = signal<PageView>('home');

  navigateToInfo() {
    this.currentPage.set('info');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateToHome() {
    this.currentPage.set('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateToTerms() {
    this.currentPage.set('terms');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateToPrivacy() {
    this.currentPage.set('privacy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateToAccessibility() {
    this.currentPage.set('accessibility');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
