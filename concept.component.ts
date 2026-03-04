import { Component, ChangeDetectionStrategy, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { NgClass } from '@angular/common';
import { LucideAngularModule, ShieldCheck, BadgeCheck, Lock } from 'lucide-angular';

@Component({
  selector: 'app-concept',
  standalone: true,
  imports: [NgClass, LucideAngularModule],
  template: `
    <div class="py-24 section-light-bg">
      <div class="container mx-auto px-4 md:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-4xl mx-auto mb-20">
          <h2 class="text-3xl md:text-5xl font-black text-brand-900 mb-6" data-aos="fade-down">{{ t().concept.title }}</h2>
          <p class="text-gray-500 text-xl max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            {{ t().concept.desc }}
          </p>
        </div>

        <!-- Cards Grid - Clean Style -->
        <!-- Changed gap for tablets to fit better -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          
          @for (card of t().concept.cards; track $index) {
            <div class="card-texture rounded-2xl p-6 lg:p-8 shadow-soft border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
                 data-aos="fade-up" [attr.data-aos-delay]="$index * 150">
              
              <!-- Icon Circle -->
              <div class="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gold-accent flex items-center justify-center text-dark-button mb-6 shadow-lg">
                @if ($index === 0) {
                  <lucide-icon [img]="ShieldCheck" [strokeWidth]="1.5" class="w-8 h-8 lg:w-10 lg:h-10"></lucide-icon>
                } @else if ($index === 1) {
                  <lucide-icon [img]="BadgeCheck" [strokeWidth]="1.5" class="w-8 h-8 lg:w-10 lg:h-10"></lucide-icon>
                } @else {
                  <lucide-icon [img]="Lock" [strokeWidth]="1.5" class="w-8 h-8 lg:w-10 lg:h-10"></lucide-icon>
                }
              </div>

              <h3 class="text-lg lg:text-xl font-bold text-heading-light mb-4">{{ card.title }}</h3>
              <p class="text-sm lg:text-base text-light-gray-text leading-relaxed mb-8">{{ card.desc }}</p>

              <button (click)="navigateToInfo()" class="mt-auto text-gold-accent font-bold border-2 border-gold-accent rounded-full px-6 py-2 hover:bg-gold-accent hover:text-dark-button transition-colors">
                 {{ t().common.readMore }}
              </button>
            </div>
          }
        </div>

        <!-- How it works - Large Feature Section -->
        <!-- Changed to lg:flex-row to stay stacked on tablets -->
        <div class="mt-32 flex flex-col lg:flex-row items-center gap-16">
            <div class="w-full lg:w-1/2 order-2 lg:order-1" data-aos="fade-right" data-aos-duration="1000">
                <div class="bg-brand-50 rounded-[40px] p-8 relative flex items-center justify-center">
                     
                     <!-- Carousel Container with Tilt Effect -->
                     <div class="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl z-10 card-texture rotate-2 hover:rotate-0 transition-transform duration-500">
                        @for (img of images; track $index) {
                            <img [src]="img" 
                                 class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                                 [class.opacity-100]="$index === activeIndex()"
                                 [class.opacity-0]="$index !== activeIndex()"
                                 alt="Tech Feature">
                        }
                        
                        <!-- Overlay Gradient for text readability if needed, kept subtle -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

                        <!-- Indicators -->
                        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                            @for (img of images; track $index) {
                                <button (click)="setActive($index)" 
                                        class="w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm"
                                        [ngClass]="$index === activeIndex() ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'">
                                </button>
                            }
                        </div>
                     </div>

                     <!-- Decorative Circle -->
                     <div class="absolute -top-6 -right-6 w-24 h-24 bg-brand-purple rounded-full opacity-20 blur-xl"></div>
                </div>
            </div>
            <div class="w-full lg:w-1/2 order-1 lg:order-2" data-aos="fade-left" data-aos-duration="1000">
                <h3 class="text-3xl font-black text-heading-light mb-8">{{ t().concept.howItWorksTitle }}</h3>
                <div class="space-y-8">
                     @for (item of t().concept.howItWorksItems; track $index) {
                        <div class="flex gap-4" data-aos="fade-left" [attr.data-aos-delay]="200 + ($index * 100)">
                            <div class="w-8 h-8 rounded-full bg-gold-accent flex items-center justify-center flex-shrink-0 mt-1">
                                <span class="w-2.5 h-2.5 bg-dark-button rounded-full"></span>
                            </div>
                            <div>
                                <h4 class="text-xl font-bold text-heading-light mb-2">{{ item.title }}</h4>
                                <p class="text-light-gray-text leading-relaxed">{{ item.desc }}</p>
                            </div>
                        </div>
                     }
                </div>
                <button (click)="navigateToInfo()" class="mt-10 bg-gold-accent hover:bg-yellow-500 text-dark-button px-8 py-3 rounded-full font-bold shadow-lg">
                    {{ t().common.moreInfo }}
                </button>
            </div>
        </div>

      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConceptComponent implements OnInit, OnDestroy {
  private langService = inject(LanguageService);
  private router = inject(Router);
  t = this.langService.content;

  images = [
    'https://picsum.photos/seed/data_center/800/600',
    'https://picsum.photos/seed/code_monitor/800/600',
    'https://picsum.photos/seed/secure_cloud/800/600'
  ];

  activeIndex = signal(0);
  private intervalId: any;

  readonly ShieldCheck = ShieldCheck;
  readonly BadgeCheck = BadgeCheck;
  readonly Lock = Lock;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.intervalId = setInterval(() => {
        this.nextSlide();
    }, 4000); 
  }

  stopAutoPlay() {
    if (this.intervalId) {
        clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.activeIndex.update(i => (i + 1) % this.images.length);
  }

  setActive(index: number) {
    this.stopAutoPlay();
    this.activeIndex.set(index);
    this.startAutoPlay();
  }
  
  navigateToInfo() {
    this.router.navigate(['/info']);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
