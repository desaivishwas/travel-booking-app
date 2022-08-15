import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';
import { HeadComponent } from './components/head/head.component';
import { WhatComponent } from './components/what/what.component';
import { StoryComponent } from './components/story/story.component';
import { WhoComponent } from './components/who/who.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    HeadComponent,
    WhatComponent,
    StoryComponent,
    WhoComponent,
    TestimonialsComponent,

  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,

    SharedModulesModule
  ]
})
export class LandingPageModule { }
