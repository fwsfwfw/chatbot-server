import { Component, ChangeDetectionStrategy, inject, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  template: `
    <section class="py-24 section-light-bg">
      <div class="container mx-auto px-4 md:px-8">
        
        <!-- Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-black text-heading-light mb-4" data-aos="fade-down">
            {{ t().demo.title }}
          </h2>
          <p class="text-body-light text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            {{ t().demo.subtitle }}
          </p>
        </div>

        <!-- Demo Container - Physical Laptop Frame -->
        <div class="max-w-3xl mx-auto">
          <div class="laptop-container" data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="1200">
            <!-- Laptop Screen -->
            <div class="laptop-screen">
              <!-- Screen Bezel -->
              <div class="screen-bezel">
                <!-- Webcam -->
                <div class="webcam"></div>
                
                <!-- Screen Content (GIF) -->
                <div class="screen-display">
                  <img 
                    src="assets/demo.gif" 
                    alt="הדגמת המערכת בפעולה - חיפוש וסינון בזמן אמת"
                    class="w-full h-full object-cover"
                  />
                </div>

                <!-- Alternative: Video Version (commented out) -->
                <!--
                <div class="screen-display">
                  <video 
                    src="assets/demo.mp4" 
                    autoplay 
                    loop 
                    muted 
                    playsinline
                    class="w-full h-full object-cover"
                  >
                    הדפדפן שלך אינו תומך בתגית וידאו.
                  </video>
                </div>
                -->
              </div>
            </div>

            <!-- Laptop Base/Keyboard -->
            <div class="laptop-base">
              <div class="laptop-keyboard">
                <div class="keyboard-area"></div>
                <div class="trackpad"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .text-primary-blue-light {
      color: #2C5F7E;
    }
    
    .bg-primary-blue-light-10 {
      background-color: rgba(44, 95, 126, 0.1);
    }
    
    .border-primary-blue-light-20 {
      border-color: rgba(44, 95, 126, 0.2);
    }

    /* Physical Laptop Container */
    .laptop-container {
      perspective: 2000px;
      max-width: 100%;
      margin: 0 auto;
      position: relative;
    }

    /* Laptop Screen */
    .laptop-screen {
      background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
      border-radius: 20px 20px 8px 8px;
      padding: 16px 16px 24px 16px;
      box-shadow: 
        0 -2px 10px rgba(0, 0, 0, 0.1),
        0 10px 30px rgba(0, 0, 0, 0.3),
        0 30px 60px rgba(0, 0, 0, 0.4);
      position: relative;
      z-index: 2;
    }

    /* Screen Bezel */
    .screen-bezel {
      background: #000;
      border-radius: 8px;
      overflow: hidden;
      position: relative;
      box-shadow: 
        inset 0 0 0 2px #1a1a1a,
        inset 0 0 20px rgba(0, 0, 0, 0.8);
    }

    /* Webcam */
    .webcam {
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 8px;
      height: 8px;
      background: radial-gradient(circle, #334155 0%, #1e293b 70%);
      border-radius: 50%;
      box-shadow: 0 0 4px rgba(100, 200, 255, 0.3);
      z-index: 10;
    }

    /* Screen Display */
    .screen-display {
      background: #000;
      aspect-ratio: 16 / 10;
      overflow: hidden;
      position: relative;
    }

    .screen-display img,
    .screen-display video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    /* Laptop Base/Keyboard */
    .laptop-base {
      background: linear-gradient(180deg, #2d3e50 0%, #1a2332 100%);
      border-radius: 10px 10px 20px 20px;
      padding: 8px 20px 20px 20px;
      margin-top: 0px;
      box-shadow: 
        0 25px 60px rgba(0, 0, 0, 0.6),
        inset 0 1px 0 rgba(255, 255, 255, 0.08);
      position: relative;
      transform: perspective(800px) rotateX(50deg);
      transform-origin: top center;
      z-index: 1;
    }

    .laptop-base::before {
      content: '';
      position: absolute;
      top: 0;
      left: 10%;
      right: 10%;
      height: 2px;
      background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(255, 255, 255, 0.1) 20%, 
        rgba(255, 255, 255, 0.1) 80%, 
        transparent 100%);
    }

    /* Keyboard Area */
    .laptop-keyboard {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .keyboard-area {
      background: linear-gradient(135deg, #1a2332 0%, #0d1117 100%);
      border-radius: 6px;
      padding: 12px;
      box-shadow: 
        inset 0 2px 8px rgba(0, 0, 0, 0.6),
        inset 0 -1px 0 rgba(255, 255, 255, 0.03);
      min-height: 110px;
      position: relative;
      margin-top: 20px;
    }

    .keyboard-area::before {
      content: '';
      position: absolute;
      inset: 12px;
      background: 
        repeating-linear-gradient(90deg,
          transparent 0px,
          transparent 18px,
          rgba(255, 255, 255, 0.02) 18px,
          rgba(255, 255, 255, 0.02) 20px
        ),
        repeating-linear-gradient(0deg,
          transparent 0px,
          transparent 18px,
          rgba(255, 255, 255, 0.02) 18px,
          rgba(255, 255, 255, 0.02) 20px
        );
      border-radius: 4px;
      opacity: 0.3;
    }

    /* Trackpad */
    .trackpad {
      background: linear-gradient(135deg, #0d1117 0%, #000000 100%);
      border-radius: 10px;
      height: 50px;
      width: 140px;
      margin: 0 auto;
      box-shadow: 
        inset 0 2px 10px rgba(0, 0, 0, 0.8),
        inset 0 -1px 0 rgba(255, 255, 255, 0.03),
        0 1px 2px rgba(0, 0, 0, 0.3);
      position: relative;
    }

    .trackpad::after {
      content: '';
      position: absolute;
      bottom: 50%;
      left: 50%;
      width: 1px;
      height: 40%;
      background: rgba(255, 255, 255, 0.05);
    }

    /* Responsive */
    @media (max-width: 768px) {
      .laptop-screen {
        padding: 12px 12px 16px 12px;
        border-radius: 16px 16px 6px 6px;
      }

      .webcam {
        width: 6px;
        height: 6px;
        top: 6px;
      }

      .laptop-base {
        padding: 8px 16px 50px 16px;
        border-radius: 0 0 16px 16px;
      }

      .keyboard-area {
        min-height: 35px;
        padding: 10px;
      }

      .trackpad {
        height: 40px;
        width: 120px;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent implements AfterViewInit {

  langService = inject(LanguageService);
  t = this.langService.content;

  ngAfterViewInit(): void {

    AOS.init({
      once: true,        // לא יופעל שוב
      offset: 300,       // יחכה שיגללו אליו
      duration: 1200,
      easing: 'ease-out',
      mirror: false,
      startEvent: 'load'
    });

    // רענון אחרי רינדור Angular
    setTimeout(() => {
      AOS.refreshHard();
    }, 300);
  }
}
