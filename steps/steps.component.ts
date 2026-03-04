import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { LucideAngularModule, Download, Sparkles, User, CreditCard, BadgeCheck } from 'lucide-angular';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <div id="download-section" class="py-24 section-light-bg border-t border-gray-100">
      <div class="container mx-auto px-4 md:px-8">
        
        <div class="flex flex-col lg:flex-row gap-20 items-center">
          
          <!-- Steps Content -->
          <div class="w-full lg:w-1/2">
            <h2 class="text-3xl md:text-4xl font-black text-heading-light mb-6" data-aos="fade-right">{{ t().steps.title }}</h2>
            <p class="text-body-light text-lg mb-12" data-aos="fade-right" data-aos-delay="100">
              {{ t().steps.desc }}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
              @for (step of t().steps.list; track $index) {
                <div class="flex flex-col gap-3 group" data-aos="fade-up" [attr.data-aos-delay]="150 + ($index * 100)">
                  <!-- Icon Circle -->
                  <div class="w-14 h-14 rounded-full border-2 flex items-center justify-center font-bold text-xl transition-all"
                      [class.border-brand-800]="$index === 0"
                      [class.bg-brand-800]="$index === 0"
                      [class.text-white]="$index === 0"
                      [class.border-gray-200]="$index !== 0"
                      [class.text-gray-400]="$index !== 0"
                      [class.group-hover:border-brand-800]="$index !== 0"
                      [class.group-hover:text-brand-800]="$index !== 0">
                     @if ($index === 0) {
                        <lucide-icon [img]="Download" [strokeWidth]="2" class="w-6 h-6"></lucide-icon>
                     } @else if ($index === 1) {
                        <lucide-icon [img]="Sparkles" [strokeWidth]="2" class="w-6 h-6"></lucide-icon>
                     } @else if ($index === 2) {
                        <lucide-icon [img]="User" [strokeWidth]="2" class="w-6 h-6"></lucide-icon>
                     } @else if ($index === 3) {
                        <lucide-icon [img]="CreditCard" [strokeWidth]="2" class="w-6 h-6"></lucide-icon>
                     } @else {
                        <lucide-icon [img]="BadgeCheck" [strokeWidth]="2" class="w-6 h-6"></lucide-icon>
                     }
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-heading-light mb-1 group-hover:text-brand-800 transition-colors">{{ step.title }}</h3>
                    <p class="text-sm text-muted-light leading-relaxed">{{ step.desc }}</p>
                  </div>
                </div>
              }
            </div>

            <div class="mt-16" data-aos="fade-right" data-aos-delay="700">
              <button class="bg-brand-800 hover:bg-brand-900 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-brand-900/10 transition-transform hover:scale-105 flex items-center gap-3">
                <lucide-icon [img]="Download" [strokeWidth]="2" class="w-6 h-6"></lucide-icon>
                {{ t().steps.btn }}
              </button>
            </div>
          </div>

<!-- Image/Visual -->
<div class="hidden lg:flex w-full lg:w-1/2 justify-center" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
  <div class="relative w-full max-w-md aspect-square bg-gray-50 rounded-full flex items-center justify-center">
    <div class="absolute inset-0 border border-dashed border-brand-200 rounded-full animate-[spin_10s_linear_infinite]"></div>

    <img
      src="assets/logo.png"
      alt="Setup"
      class="rounded-full w-[80%] h-[80%] object-cover shadow-2xl relative z-10"
    />

            <!-- Floating Badge -->
            <div class="absolute -bottom-4 bg-brand-800 px-6 py-3 rounded-full shadow-soft-lg border border-brand-900 z-20 flex items-center gap-3">
              <div class="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <span class="font-bold text-white text-sm">{{ t().steps.fastInstall }}</span>
            </div>
  </div>
</div>

        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepsComponent {
  langService = inject(LanguageService);
  t = this.langService.content;

  readonly Download = Download;
  readonly Sparkles = Sparkles;
  readonly User = User;
  readonly CreditCard = CreditCard;
  readonly BadgeCheck = BadgeCheck;
}
