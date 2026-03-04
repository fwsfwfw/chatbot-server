import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'app-kashrut',
    standalone: true,
    imports: [],
    template: `
    <div class="py-20 section-light-bg overflow-hidden">
      <div class="container mx-auto px-4 md:px-8">
        
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          <!-- Text Content - Right Side -->
          <div class="w-full lg:w-1/2 space-y-6">
            <h2 class="text-4xl md:text-5xl font-black text-heading-light leading-tight"
                data-aos="fade-left" data-aos-duration="1000">
              {{ t().kashrut.title }}
              <span class="text-gold-accent block mt-2">{{ t().kashrut.subtitle }}</span>
            </h2>
            
            <div class="space-y-4 text-body-light text-lg leading-relaxed">
              <p class="font-semibold text-xl text-heading-light"
                 data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
                {{ t().kashrut.intro }}
              </p>
              
              <p data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                {{ t().kashrut.description }}
              </p>
              
              <!--div class="pt-6 flex flex-wrap gap-4">
                <div class="flex items-center gap-3 bg-white p-4 rounded-xl shadow-soft border border-gray-100">
                  <div class="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                      <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.352-.272-2.636-.759-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div class="font-bold text-gray-900">פיקוח רבני</div>
                    <div class="text-sm text-gray-500">מתמשך ורציף</div>
                  </div>
                </div>
                
                <div class="flex items-center gap-3 bg-white p-4 rounded-xl shadow-soft border border-gray-100">
                  <div class="w-10 h-10 rounded-full bg-gold-accent/10 flex items-center justify-center text-gold-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div class="font-bold text-gray-900">עדכון שוטף</div>
                    <div class="text-sm text-gray-500">לפי הוראות גדולי ישראל</div>
                  </div>
                </div>
              </div-->
            </div>
          </div>

          <!-- Image with Decorative Box - Left Side -->
          <div class="w-full lg:w-1/2 relative" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
            <!-- Background Decorative Box - Rotated Opposite Direction -->
            <div class="absolute inset-0 -rotate-3 transform scale-95">
              <div class="w-full h-full halachic-card rounded-3xl"></div>
            </div>
            
            <!-- Main Image Container - Slightly Rotated -->
            <div class="relative rotate-2 transform transition-transform duration-500 hover:rotate-0">
              <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
<img 
  src="https://www.jdn.co.il/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-16-at-15.30.20.jpeg"
  alt="כשרות המערכת"
  class="w-full object-contain"
/>

                <div class="absolute inset-0 bg-gradient-to-t from-accent-blue/20 to-transparent"></div>
                
                <!-- Floating Badge -->
                <!--div class="absolute top-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-full bg-gold-accent flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-dark-button">
                        <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div class="font-bold text-gray-900 text-sm">מאושר</div>
                      <div class="text-xs text-gray-500">ועדת כשרות</div>
                    </div>
                  </div>
                </div-->
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class KashrutComponent {
    langService = inject(LanguageService);
    t = this.langService.content;
}
