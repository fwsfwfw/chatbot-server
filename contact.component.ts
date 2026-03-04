import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="py-16 section-light-bg">
      <div class="container mx-auto px-4 md:px-8">
        
        @if (submitted()) {
          <!-- Success Message -->
          <div class="text-center text-on-light-bg">
            <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-accent">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-2">{{ t().contact.successMessage }}</h3>
          </div>
        } @else {
          <!-- Intro Text -->
          <div class="text-center mb-8 max-w-3xl mx-auto">
            <h2 class="text-heading-light text-3xl md:text-4xl font-bold mb-4">
              {{ t().contact.title }}
            </h2>
            <p class="text-body-light text-lg md:text-xl opacity-90 leading-relaxed">
              {{ t().contact.description }}
            </p>
          </div>

          <!-- Contact Form -->
          <form (ngSubmit)="handleSubmit()" #contactForm="ngForm" class="flex flex-col md:flex-row items-center md:items-end justify-center gap-4 max-w-5xl mx-auto">

            <!-- Name Input -->
            <div class="w-full md:flex-1">
              <input 
                type="text" 
                id="name"
                name="name"
                [(ngModel)]="formData.name"
                required
                autocomplete="name"
                class="w-full px-6 py-4 rounded-full border-2 border-gold-accent bg-white text-gray-900 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white/50 outline-none transition-all"
                [placeholder]="t().contact.namePlaceholder"
              />
            </div>

            <!-- Phone Input -->
            <div class="w-full md:flex-1">
              <input 
                type="tel" 
                id="phone"
                name="phone"
                [(ngModel)]="formData.phone"
                required
                pattern="[0-9]{9,10}"
                autocomplete="tel"
                class="w-full px-6 py-4 rounded-full border-2 border-gold-accent bg-white text-gray-900 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white/50 outline-none transition-all text-right"
                [placeholder]="t().contact.phonePlaceholder"
              />
            </div>

            <!-- Submit Button -->
            <button 
              type="submit"
              class="w-full md:w-auto bg-gold-accent hover:bg-yellow-500 text-dark-button px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {{ t().contact.btnSubmit }}
            </button>
          </form>
        }

      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  langService = inject(LanguageService);
  t = this.langService.content;

  formData = {
    name: '',
    phone: ''
  };

  submitted = signal(false);

  handleSubmit() {
    if (this.formData.name && this.formData.phone) {
      // Here you would typically send the data to a backend service
      console.log('Form submitted:', this.formData);

      // Show success message
      this.submitted.set(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        this.formData = { name: '', phone: '' };
        this.submitted.set(false);
      }, 5000);
    }
  }
}
