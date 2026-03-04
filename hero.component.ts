import { Component, ChangeDetectionStrategy, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { NgClass } from '@angular/common';
import { LucideAngularModule, MessageCircle, Phone, Shield, ChevronLeft, ChevronRight, Plus } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgClass, LucideAngularModule],
  template: `
    <div class="relative hero-texture overflow-hidden min-h-[calc(100vh-90px)] lg:min-h-[680px] flex items-center group">
      
      <!-- Side Widget (Right in LTR, Left in RTL) - Fixed Position -->
      <div class="hidden xl:flex fixed z-50 top-2/3 flex-col gap-3"
           [ngClass]="t().dir === 'rtl' ? 'left-4' : 'right-4'">
           <div class="w-14 h-14 card-texture rounded-full shadow-soft border border-gray-100 flex flex-col items-center justify-center text-on-light-bg hover:scale-110 transition-transform cursor-pointer group/widget">
              <lucide-icon [img]="MessageCircle" [strokeWidth]="1.5" class="w-6 h-6 mb-0.5"></lucide-icon>
              <span class="text-[10px] font-bold">{{ t().hero.chat }}</span>
           </div>
           <div class="w-14 h-14 card-texture rounded-full shadow-soft border border-gray-100 flex flex-col items-center justify-center text-on-light-bg hover:scale-110 transition-transform cursor-pointer">
              <lucide-icon [img]="Phone" [strokeWidth]="1.5" class="w-6 h-6 mb-0.5"></lucide-icon>
              <span class="text-[10px] font-bold">{{ t().hero.call }}</span>
           </div>
      </div>

      <!-- Carousel Slides -->
      @for (slide of t().hero.slides; track $index) {
        <div class="absolute inset-0 w-full h-full transition-all duration-700 ease-in-out"
             [class.opacity-100]="currentSlide() === $index"
             [class.opacity-0]="currentSlide() !== $index"
             [class.z-10]="currentSlide() === $index"
             [class.z-0]="currentSlide() !== $index"
             [class.pointer-events-none]="currentSlide() !== $index">
             
           <!-- Added overflow-y-auto for landscape mobile safety, and py-12 for vertical spacing on mobile -->
           <div class="container mx-auto px-4 md:px-8 relative h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between py-12 lg:py-0 lg:overflow-visible">
              
              <!-- Text Content -->
              <div class="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 text-start z-20 pt-4 lg:pt-0 transition-transform duration-700 delay-100 shrink-0"
                   [class.translate-y-0]="currentSlide() === $index"
                   [class.translate-y-10]="currentSlide() !== $index">
                
                <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-heading-light leading-tight"
                    data-aos="fade-up" data-aos-duration="1000">
                  {{ slide.title }}
                  <span class="text-gold-accent block mt-2">{{ slide.subtitle }}</span>
                </h1>
                
                <p class="text-base sm:text-lg md:text-xl text-body-light leading-relaxed font-medium max-w-lg"
                   data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                  {{ slide.description }}
                </p>
                
<div class="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8 w-full sm:w-auto"
     data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
  <!-- Gold Button -->
  <button (click)="scrollToDownload()"
          class="bg-gold-accent hover:bg-yellow-500 text-dark-button text-center px-8 py-3.5 md:py-4 rounded-full font-bold text-lg shadow-lg shadow-yellow-900/30 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto">
    {{ t().hero.btnDownload }}
  </button>
  <!-- Blue Button - ניווט לסקשן Concept -->
  <button onclick="document.getElementById('concept').scrollIntoView({behavior: 'smooth'})" 
          class="bg-accent-blue hover:bg-secondary-bg text-white text-center px-8 py-3.5 md:py-4 rounded-full font-bold text-lg shadow-lg shadow-blue-900/30 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto border-2 border-gold-accent">
    {{ t().hero.btnHow }}
  </button>
</div>
              </div>

              <!-- Image / Visual with Floating Stickers -->
              <div class="w-full lg:w-1/2 flex justify-center relative mt-8 lg:mt-0 transition-opacity duration-1000 delay-200 shrink-0 pb-12 lg:pb-0"
                   [class.opacity-100]="currentSlide() === $index"
                   [class.opacity-0]="currentSlide() !== $index">
                 <div class="relative w-[330px] sm:w-[350px] md:w-[450px] aspect-square"
                      data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1200">
                    
                    <!-- Main Image - Masked Blob -->
                    <img [src]="slide.image" [alt]="slide.title" 
                         class="mask-blob object-cover w-full h-full relative z-10 drop-shadow-2xl grayscale-[15%]" 
                         style="mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill=%22%23FF0066%22 d=%22M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.2,-19.2,95.8,-5.2C93.4,8.9,81.8,22.1,70.8,33.5C59.8,44.9,49.4,54.6,37.5,62.8C25.6,71,12.3,77.7,-0.7,78.9C-13.7,80.1,-26.8,75.8,-38.4,68.2C-50,60.6,-60.1,49.7,-68.5,37.2C-76.9,24.7,-83.6,10.6,-82.6,-3.1C-81.6,-16.8,-72.9,-30.1,-62.7,-41.2C-52.5,-52.3,-40.8,-61.2,-28.4,-69.3C-16,-77.4,-2.9,-84.7,9.8,-83.6C22.5,-82.5,30.5,-83.6,44.7,-76.4Z%22 transform=%22translate(100 100)%22 /></svg>'); mask-size: contain; mask-repeat: no-repeat; mask-position: center;" />
                    
                    <!-- Floating Elements (Dynamic Content) -->
                    
                    <!-- Top Sticker (Badge 1) -->
                    <!--div class="absolute top-4 sm:top-10 right-0 bg-accent-blue text-white p-3 sm:p-4 rounded-full shadow-xl z-20 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center transform rotate-12 animate-float border-2 border-gold-accent">
                        <div class="text-center leading-tight">
                            <div class="text-[9px] sm:text-[10px] opacity-80">{{ slide.badge1 }}</div>
                            <div class="font-bold text-base sm:text-lg">✓</div>
                        </div>
                    </div-->

                     <!-- Decorative Icon -->
                     <div class="absolute bottom-10 left-4 sm:left-10 text-gold-accent z-0">
                        <lucide-icon [img]="Plus" [strokeWidth]="4" class="w-10 h-10 sm:w-12 sm:h-12 opacity-50"></lucide-icon>
                     </div>
                     <div class="absolute bottom-8 left-8 sm:left-14 text-gold-accent z-0">
                        <lucide-icon [img]="Plus" [strokeWidth]="4" class="w-10 h-10 sm:w-12 sm:h-12 opacity-90"></lucide-icon>
                     </div>

                     <!-- Bottom Card (Badge 2) -->
                     <!--div class="absolute bottom-0 right-4 sm:right-10 halachic-card p-3 rounded-xl shadow-soft-lg z-30 transform -rotate-6 max-w-[140px] sm:max-w-[160px]">
                        <div class="flex items-center gap-2 mb-2">
                            <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gold-accent flex items-center justify-center text-dark-button">
                                 <lucide-icon [img]="Shield" class="w-4 h-4 sm:w-5 sm:h-5" [fill]="'currentColor'"></lucide-icon>
                            </div>
                            <span class="text-[10px] sm:text-xs font-bold text-white">{{ slide.badge2 }}</span>
                        </div>
                        <div class="h-1.5 w-full bg-secondary-bg rounded-full overflow-hidden">
                            <div class="h-full bg-gold-accent w-full"></div>
                        </div>
                     </div-->

                 </div>
              </div>
              
           </div>
        </div>
      }

      <!-- Controls -->
      <div class="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
         @for (slide of t().hero.slides; track $index) {
             <button (click)="setSlide($index)" 
                     class="w-3 h-3 rounded-full transition-all duration-300 shadow-sm"
                     [ngClass]="$index === currentSlide() ? 'bg-gold-accent scale-125 w-8' : 'bg-accent-blue hover:bg-secondary-bg'">
             </button>
         }
      </div>
      
      <!-- Arrow Buttons (Hidden on mobile/tablet, visible on hover desktop) -->
      <button (click)="prevSlide()" class="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 halachic-card hover:bg-secondary-bg text-white rounded-full shadow-soft-lg opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block">
        <lucide-icon [img]="ChevronLeft" [strokeWidth]="2.5" class="w-5 h-5"></lucide-icon>
      </button>
      
      <button (click)="nextSlide()" class="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 halachic-card hover:bg-secondary-bg text-white rounded-full shadow-soft-lg opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block">
        <lucide-icon [img]="ChevronRight" [strokeWidth]="2.5" class="w-5 h-5"></lucide-icon>
      </button>

    </div>
  `,
  styles: [`
    .animate-float {
        animation: float 6s ease-in-out infinite;
    }
    @keyframes float {
        0% { transform: translateY(0px) rotate(12deg); }
        50% { transform: translateY(-15px) rotate(12deg); }
        100% { transform: translateY(0px) rotate(12deg); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit, OnDestroy {
  langService = inject(LanguageService);
  t = this.langService.content;

  currentSlide = signal(0);
  private intervalId: any;

  readonly MessageCircle = MessageCircle;
  readonly Phone = Phone;
  readonly Shield = Shield;
  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;
  readonly Plus = Plus;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 10000);
  }

  stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentSlide.update(i => (i + 1) % this.t().hero.slides.length);
  }

  prevSlide() {
    this.currentSlide.update(i => i === 0 ? this.t().hero.slides.length - 1 : i - 1);
  }

  setSlide(index: number) {
    this.stopAutoPlay();
    this.currentSlide.set(index);
    this.startAutoPlay();
  }

scrollToDownload() {
  const element = document.getElementById('download-section');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
}
