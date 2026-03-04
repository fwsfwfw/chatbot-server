import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ConceptComponent } from '../concept/concept.component';
import { TechLevelsComponent } from '../tech-levels/tech-levels.component';
import { StepsComponent } from '../steps/steps.component';
import { DemoComponent } from '../demo/demo.component';
import { KashrutComponent } from '../kashrut/kashrut.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ConceptComponent,
    TechLevelsComponent,
    StepsComponent,
    DemoComponent,
    KashrutComponent,
    ContactComponent
  ],
  template: `
    <section id="hero">
      <app-hero></app-hero>
    </section>

    <section id="concept">
      <app-concept></app-concept>
    </section>

    <section id="tech">
      <app-tech-levels></app-tech-levels>
    </section>

    <section id="demo">
      <app-demo></app-demo>
    </section>

    <section id="download">
      <app-steps></app-steps>
    </section>

    <section id="kashrut">
      <app-kashrut></app-kashrut>
    </section>

    <section id="contact">
      <app-contact></app-contact>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
