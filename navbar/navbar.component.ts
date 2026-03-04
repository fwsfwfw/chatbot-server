import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { NgClass } from '@angular/common';
import { LucideAngularModule, ArrowRight, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, LucideAngularModule],
  template: `
    <header class="sticky top-0 z-50 card-texture-dark shadow-sm border-b border-gray-100">
      <!-- Top Utility Bar (Mobile/Desktop) -->
      
      <div class="container mx-auto px-4 md:px-8">
        <div class="flex items-center justify-between h-[90px]">
          
          <!-- Logo Section -->
          <div class="flex items-center gap-3 cursor-pointer logo-container" (click)="handleLogoClick()">
            <img src="assets/logo.png" [alt]="t().common.logoTitle" class="logo-image w-14 h-14 rounded-full object-cover border-2 border-gold-accent" />
            <div class="flex flex-col items-start leading-none">
              <span class="text-2xl font-black text-on-dark-bg tracking-tight">{{ t().common.logoTitle }}</span>
              <span class="text-sm text-muted-dark font-bold tracking-wide">{{ t().common.logoSubtitle }}</span>
            </div>
          </div>

          <!-- Desktop Actions -->
          <div class="hidden lg:flex items-center gap-4">
             <nav class="flex items-center gap-6 text-lg font-bold text-on-dark-bg">
                <a href="#concept" class="nav-underline transition-all no-underline hover:no-underline">{{ t().navbar.about }}</a>
                <a href="#kashrut" class="nav-underline transition-all no-underline hover:no-underline">{{ t().navbar.kashrut }}</a>
                <a href="#tech" class="nav-underline transition-all no-underline hover:no-underline">{{ t().navbar.tech }}</a>
             </nav>

             <button (click)="langService.toggleLanguage()" class="text-lg font-bold text-on-dark-bg hover:text-gold-accent transition-colors uppercase mx-2">
              {{ langService.currentLang() === 'he' ? 'EN' : 'HE' }}
            </button>

             <!-- Gold Download Button -->
             <button class="bg-gold-accent hover:bg-yellow-500 text-dark-button px-6 py-2.5 rounded-full font-bold text-lg shadow-md transition-all hover:-translate-y-0.5">
               {{ t().navbar.download }}
             </button>

             <!-- Blue Login Button with Arrow -->
             <button class="bg-accent-blue hover:bg-secondary-bg text-white px-6 py-2.5 rounded-full font-bold text-lg shadow-md transition-all hover:-translate-y-0.5 flex items-center gap-2 border-2 border-gold-accent">
               {{ t().navbar.login }}
               <lucide-icon [img]="ArrowRight" [strokeWidth]="2.5" class="w-4 h-4" 
                [ngClass]="{'rotate-180': langService.currentLang() === 'he'}"></lucide-icon>
             </button>
          </div>

          <!-- Mobile Menu Button -->
          <button (click)="toggleMenu()" class="lg:hidden p-2 text-on-dark-bg hover:text-gold-accent transition-colors">
            @if (!isOpen()) {
              <lucide-icon [img]="Menu" [strokeWidth]="1.5" class="w-8 h-8"></lucide-icon>
            } @else {
              <lucide-icon [img]="X" [strokeWidth]="1.5" class="w-8 h-8"></lucide-icon>
            }
          </button>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      @if (isOpen()) {
        <!-- Added max-h and overflow-y-auto for landscape mobile -->
        <div class="lg:hidden card-texture-dark border-t border-gray-100 shadow-xl absolute w-full left-0 animate-fade-in z-50 max-h-[calc(100vh-90px)] overflow-y-auto">
          <nav class="flex flex-col p-6 gap-4">
             <a href="#concept" (click)="closeMenu()" class="text-on-dark-bg font-bold text-lg p-2 hover:bg-secondary-bg rounded">{{ t().navbar.about }}</a>
             <a href="#tech" (click)="closeMenu()" class="text-on-dark-bg font-bold text-lg p-2 hover:bg-secondary-bg rounded">{{ t().navbar.tech }}</a>
             <a href="#download" (click)="closeMenu()" class="text-on-dark-bg font-bold text-lg p-2 hover:bg-secondary-bg rounded">{{ t().navbar.download }}</a>
            
            <div class="h-px w-full bg-gold-accent opacity-30 my-2"></div>
            
            <button (click)="toggleLangAndClose()" class="text-on-dark-bg font-bold p-2 hover:bg-secondary-bg rounded text-start">
               {{ t().common.switchToEnglish }}
            </button>

            <button class="bg-gold-accent text-dark-button px-6 py-3 rounded-full font-bold w-full text-center shadow-md">
              {{ t().navbar.download }}
            </button>

            <button class="bg-accent-blue text-white px-6 py-3 rounded-full font-bold w-full text-center shadow-md flex items-center justify-center gap-2 border-2 border-gold-accent">
              {{ t().navbar.login }}
              <lucide-icon [img]="ArrowRight" [strokeWidth]="2.5" class="w-4 h-4" 
               [ngClass]="{'rotate-180': langService.currentLang() === 'he'}"></lucide-icon>
            </button>
          </nav>
        </div>
      }
    </header>
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.2s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  langService = inject(LanguageService);
  private router = inject(Router);
  t = this.langService.content;
  isOpen = signal(false);

  readonly ArrowRight = ArrowRight;
  readonly Menu = Menu;
  readonly X = X;

  toggleMenu() {
    this.isOpen.update(v => !v);
  }

  closeMenu() {
    this.isOpen.set(false);
  }

  toggleLangAndClose() {
    this.langService.toggleLanguage();
    this.closeMenu();
  }

  handleLogoClick() {
    this.router.navigate(['/']);
    this.closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
