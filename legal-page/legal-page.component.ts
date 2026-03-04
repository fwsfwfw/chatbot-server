import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { NgClass } from '@angular/common';

export type LegalPageType = 'termsOfService' | 'privacyPolicy' | 'accessibilityStatement';

@Component({
  selector: 'app-legal-page',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="bg-gray-50 min-h-screen pb-20">
      
      <!-- Mini Header -->
      <div class="section-light-bg text-on-light-bg py-16 relative overflow-hidden">
         <div class="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div class="container mx-auto px-4 md:px-8 relative z-10">
            <button (click)="navigateHome()" class="flex items-center gap-2 text-gold-accent hover:text-heading-light transition-colors mb-6 font-bold">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"
                    [ngClass]="t().dir === 'rtl' ? 'rotate-0' : 'rotate-180'">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
               </svg>
               {{ t().common.homePage }}
            </button>
            <h1 class="text-4xl md:text-5xl font-black text-heading-light mb-4 animate-fade-in-up">
              {{ pageContent().title }}
            </h1>
            <p class="text-lg text-body-light opacity-90 animate-fade-in-up animation-delay-200">
              {{ pageContent().lastUpdated }}
            </p>
         </div>
      </div>

      <div class="container mx-auto px-4 md:px-8 -mt-8">
         <!-- Content Sections -->
         <div class="bg-white rounded-3xl shadow-lg p-8 md:p-12 animate-fade-in-up animation-delay-400">
            @for (section of pageContent().sections; track $index) {
              <div class="mb-10 last:mb-0" [style.animation-delay]="(600 + $index * 100) + 'ms'">
                <h2 class="text-2xl font-bold text-gray-900 mb-4 relative inline-block">
                  {{ section.title }}
                  <span class="absolute -bottom-1 left-0 w-20 h-1 bg-gold-accent rounded-full"></span>
                </h2>
                <p class="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                  {{ section.content }}
                </p>
              </div>
            }
         </div>

         <!-- Back Button -->
         <div class="mt-12 text-center animate-fade-in-up animation-delay-800">
            <button (click)="navigateHome()" class="bg-accent-blue hover:bg-secondary-bg text-on-dark-bg px-10 py-4 rounded-full font-bold shadow-lg transition-all hover:scale-105 active:scale-95 border-2 border-gold-accent">
               {{ t().common.homePage }}
            </button>
         </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LegalPageComponent {
  private langService = inject(LanguageService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  
  t = this.langService.content;
  pageType = signal<LegalPageType>('termsOfService');
  
  constructor() {
    const pageType = this.route.snapshot.data['pageType'] as LegalPageType;
    if (pageType) {
      this.pageType.set(pageType);
    }
  }
  
  pageContent = () => {
    const content = this.t();
    return content[this.pageType()];
  };
  
  navigateHome() {
    this.router.navigate(['/']);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
