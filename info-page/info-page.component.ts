import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-info-page',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="bg-gray-50 min-h-screen pb-20">
      
      <!-- Mini Header / Hero -->
      <div class="section-light-bg text-on-light-bg py-16 relative overflow-hidden">
         <div class="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div class="container mx-auto px-4 md:px-8 relative z-10">
            <button (click)="navigateHome()" class="flex items-center gap-2 text-gold-accent hover:text-heading-light transition-colors mb-6 font-bold">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"
                    [ngClass]="t().dir === 'rtl' ? 'rotate-0' : 'rotate-180'">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
               </svg>
               {{ t().infoPage.btnBack }}
            </button>
            <h1 class="text-4xl md:text-5xl font-black text-heading-light mb-4 animate-fade-in-up">{{ t().infoPage.header.title }}</h1>
            <p class="text-xl text-body-light opacity-90 max-w-2xl animate-fade-in-up animation-delay-200">{{ t().infoPage.header.subtitle }}</p>
         </div>
      </div>

      <div class="container mx-auto px-4 md:px-8 -mt-8">
         
         <!-- About Section -->
         <div class="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-12 flex flex-col md:flex-row gap-12 items-center animate-fade-in-up animation-delay-400">
             <div class="w-full md:w-1/2">
                <h2 class="text-3xl font-black text-gray-900 mb-6 relative inline-block">
                   {{ t().infoPage.about.title }}
                   <span class="absolute -bottom-2 right-0 w-1/2 h-1.5 bg-gold-accent rounded-full"></span>
                </h2>
                <div class="space-y-4 text-gray-600 text-lg leading-relaxed">
                   <p>{{ t().infoPage.about.text1 }}</p>
                   <p>{{ t().infoPage.about.text2 }}</p>
                </div>
             </div>
             <div class="w-full md:w-1/2">
                <div class="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                   <img src="https://picsum.photos/seed/team_working/800/600" alt="About Team" class="w-full h-full object-cover">
                   <div class="absolute inset-0 bg-accent-blue/10"></div>
                </div>
             </div>
         </div>

         <!-- Methodology Cards -->
         <div class="mb-16 animate-fade-in-up animation-delay-600">
            <h2 class="text-3xl font-black text-gray-900 mb-10 text-center">{{ t().infoPage.methodology.title }}</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
               @for (card of t().infoPage.methodology.cards; track $index) {
                  <div class="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:border-gold-accent transition-all hover:scale-105 hover:shadow-xl animate-fade-in-up"
                       [style.animation-delay]="(800 + $index * 200) + 'ms'">
                     <h3 class="text-xl font-bold text-gray-900 mb-3">
                        {{ card.title }}
                     </h3>
                     <p class="text-gray-500 leading-relaxed text-sm">{{ card.text }}</p>
                  </div>
               }
            </div>
         </div>

         <!-- FAQ Accordion -->
         <div class="max-w-3xl mx-auto animate-fade-in-up animation-delay-1000">
            <h2 class="text-3xl font-black text-gray-900 mb-10 text-center">{{ t().infoPage.faq.title }}</h2>
            <div class="space-y-4">
               @for (item of t().infoPage.faq.items; track $index) {
                  <details class="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden [&_summary::-webkit-details-marker]:hidden animate-fade-in-up"
                           [style.animation-delay]="(1200 + $index * 100) + 'ms'">
                     <summary class="flex items-center justify-between gap-4 p-6 cursor-pointer bg-gray-50 hover:bg-white transition-colors">
                        <h3 class="font-bold text-lg text-gray-800">{{ item.q }}</h3>
                        <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 shadow-sm group-open:-rotate-180 transition-transform duration-300">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                           </svg>
                        </span>
                     </summary>
                     <div class="p-6 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                        {{ item.a }}
                     </div>
                  </details>
               }
            </div>
         </div>

         <!-- Final CTA -->
         <div class="mt-20 text-center animate-fade-in-up animation-delay-1600">
            <button (click)="navigateHome()" class="bg-accent-blue hover:bg-secondary-bg text-on-dark-bg px-10 py-4 rounded-full font-bold shadow-lg transition-all hover:scale-105 active:scale-95 border-2 border-gold-accent">
               {{ t().infoPage.btnBack }}
            </button>
         </div>

      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoPageComponent {
  private langService = inject(LanguageService);
  private router = inject(Router);
  t = this.langService.content;
  
  navigateHome() {
    this.router.navigate(['/']);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
