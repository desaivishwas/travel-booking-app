import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LandingPageService } from '../../services/landing-page.service';
import { ITestinmonial } from '../../shared/interfaces/testimonial.interface';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonialHeadText: string = "User Reviews"
  testimonialData: ITestinmonial[]

  constructor(
    private landingPageService: LandingPageService
  ) {
    this.testimonialData = []
  }

  ngOnInit(): void {
    this.testimonialData = this.landingPageService.getTestimonials();
  }

  customOptions: OwlOptions = {
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 7500,
    autoplayHoverPause: true,
    dots: true,
    loop: true,
    items: 1
  }

}
