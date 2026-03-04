import { 
  Component, 
  ChangeDetectionStrategy, 
  inject, 
  effect, 
  afterNextRender, 
  PLATFORM_ID 
} from '@angular/core';

import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen flex flex-col relative">
      <app-navbar></app-navbar>

      <main class="flex-grow">
        <router-outlet></router-outlet>
      </main>

      <app-footer></app-footer>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  private langService = inject(LanguageService);
  private document = inject(DOCUMENT) as Document;
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);

  constructor() {

    // 🌍 עדכון שפה וכיוון
    effect(() => {
      const content = this.langService.content();
      this.document.documentElement.lang = content.lang;
      this.document.documentElement.dir = content.dir;
    });

    if (isPlatformBrowser(this.platformId)) {

      // ⏳ חכה שה־DOM מוכן לגמרי
      afterNextRender(() => {
        this.waitForAOSAndInit();
      });

      // 🔁 רענון אחרי כל ניווט
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          setTimeout(() => {
            this.refreshAOS();
          }, 150);
        });
    }
  }

  // 🔍 מחכה ש־AOS באמת יופיע ב־window
  private waitForAOSAndInit() {
    const check = () => {
      const AOS = (window as any).AOS;
      if (AOS) {
        this.initAOS();
      } else {
        setTimeout(check, 50);
      }
    };
    check();
  }

  private initAOS() {
    const AOS = (window as any).AOS;

    if (AOS) {
      AOS.init({
        duration: 600,
        easing: 'ease-out-cubic',
        once: true,
        mirror: false,
        offset: 120,
        delay: 50,
        anchorPlacement: 'top-bottom',
      });

      AOS.refreshHard();
    }
  }

  private refreshAOS() {
    const AOS = (window as any).AOS;

    if (AOS) {
      AOS.refreshHard();
    }
  }
}
