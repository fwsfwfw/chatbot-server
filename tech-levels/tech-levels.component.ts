import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-tech-levels',
  standalone: true,
  imports: [],
  template: `
    <div class="py-24 section-light-bg">
      <div class="container mx-auto px-4 md:px-8 max-w-6xl">
        
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-black text-heading-light mb-4">{{ t().tech.title }}</h2>
          <p class="text-body-light text-lg max-w-2xl mx-auto">
            {{ t().tech.subtitle }}
          </p>
        </div>

        <!-- Technology Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            @for (feat of t().tech.features; track $index) {
              <div class="halachic-card text-center p-8 transform hover:scale-105 transition-all">
                 <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-accent flex items-center justify-center">
                   <svg class="w-8 h-8 text-dark-button" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                     @if ($index === 0) {
                       <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                     } @else if ($index === 1) {
                       <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                       <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                     } @else if ($index === 2) {
                       <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                     } @else {
                       <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                     }
                   </svg>
                 </div>
                 <h3 class="text-xl font-bold text-heading-dark mb-2">{{ feat.title }}</h3>
                 <p class="text-sm text-muted-dark">{{ feat.desc }}</p>
              </div>
            }
        </div>

        <!-- Halachic Customization Info -->
        <div class="halachic-card text-center p-8 max-w-3xl mx-auto">
          <h3 class="text-2xl font-bold text-heading-dark mb-4">{{ t().tech.levelsTitle }}</h3>
          <p class="text-muted-dark text-lg">{{ t().tech.levelsDesc }}</p>
        </div>

      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechLevelsComponent {
  langService = inject(LanguageService);
  t = this.langService.content;
}
