import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { LucideAngularModule, Mail, Phone } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule, RouterLink],
  template: `
    <footer class="card-texture-dark text-on-dark-bg py-16 border-t border-gold-accent relative overflow-hidden">
      
      <!-- Decorative background element -->
      <div class="absolute -top-24 -right-24 w-64 h-64 bg-gold-accent rounded-full blur-3xl opacity-10 pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold-accent via-accent-blue to-gold-accent"></div>

      <div class="container mx-auto px-4 md:px-8 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <!-- Column 1: Brand -->
          <div class="col-span-1 md:col-span-1">
             <!-- Logo Section -->
            <div class="flex items-center gap-2 mb-6">
               <div class="flex flex-col items-start leading-none">
                 <span class="text-2xl font-black text-heading-dark tracking-tight">{{ t().common.logoTitle }}</span>
                 <span class="text-xs text-muted-dark font-bold tracking-wide">{{ t().common.logoSubtitle }}</span>
               </div>
               <!--svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
               </svg-->
             </div>
            <p class="text-sm text-body-dark leading-relaxed font-medium">
              {{ t().footer.about }}
            </p>
          </div>

          <!-- Column 2: Quick Links -->
          <div>
            <h4 class="text-heading-dark font-black mb-6 text-lg">{{ t().footer.linksTitle }}</h4>
            <ul class="space-y-3 text-sm font-medium">
              <li><a href="#hero" class="nav-underline transition-all no-underline hover:no-underline">{{ t().common.homePage }}</a></li>
              <li><a href="#concept" class="nav-underline transition-all no-underline hover:no-underline">{{ t().common.institute }}</a></li>
              <!--li><a href="#tech" class="hover:text-gold-accent hover:translate-x-1 transition-all inline-block">Levels</a></li-->
              <!--li><a href="#download" class="hover:text-gold-accent hover:translate-x-1 transition-all inline-block">Download</a></li-->
            </ul>
          </div>

          <!-- Column 3: Legal -->
          <div>
            <h4 class="text-heading-dark font-black mb-6 text-lg">{{ t().footer.legalTitle }}</h4>
            <ul class="space-y-3 text-sm font-medium">
              <li><a routerLink="/terms" class="nav-underline transition-all no-underline hover:no-underline">{{ t().footer.legalLinks[0] }}</a></li>
              <li><a routerLink="/privacy" class="nav-underline transition-all no-underline hover:no-underline">{{ t().footer.legalLinks[1] }}</a></li>
              <li><a routerLink="/accessibility" class="nav-underline transition-all no-underline hover:no-underline">{{ t().footer.legalLinks[2] }}</a></li>
            </ul>
          </div>

          <!-- Column 4: Contact -->
          <div>
            <h4 class="text-heading-dark font-black mb-6 text-lg">{{ t().footer.contactTitle }}</h4>
            <ul class="space-y-4 text-sm font-medium">
              <li class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-gold-accent text-dark-button flex items-center justify-center">
                    <lucide-icon [img]="Mail" [strokeWidth]="2" class="w-4 h-4"></lucide-icon>
                </div>
                <a href="mailto:support@ketertorah.co.il" class="hover:text-white transition-colors">support@ketertorah.co.il</a>
              </li>
              <li class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-gold-accent text-dark-button flex items-center justify-center">
                    <lucide-icon [img]="Phone" [strokeWidth]="2" class="w-4 h-4"></lucide-icon>
                </div>
                <span>03-123-4567</span>
              </li>
              <!--li class="flex items-center gap-3">
                 <div class="w-8 h-8 rounded-full bg-gold-accent text-dark-button flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <span>09:00 - 18:00</span>
              </li-->
            </ul>
          </div>

        </div>

        <!--div class="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div class="font-medium">
            {{ t().footer.copyright }}
          </div>
          <div class="mt-2 md:mt-0 opacity-75">
            {{ t().footer.credit }}
          </div>
        </div-->
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  langService = inject(LanguageService);
  t = this.langService.content;

  readonly Mail = Mail;
  readonly Phone = Phone;
}
