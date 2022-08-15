import { Injectable } from '@angular/core';
import { ITestinmonial } from '../shared/interfaces/testimonial.interface';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor() { }

  public sampleService(): string {
    return "Home Page"
  }

  public getTestimonials(): ITestinmonial[] {
    return [
      {
        testimonialId: "1",
        testimonialText: `AstroWhirled answered all my requirements for space travel .Had an experience of a lifetime. Loved the view of earth from Mars!`,
        testimonialBy: "User - 1",
        testimonialPhoto: "https://yt3.ggpht.com/ZAg-xr2AV9j21lTcDTJUzx0u8Y_jn0VzX4PQ8whanpC26nBw-JrnL3czKtdsU_2BK4U_xntlGw=s900-c-k-c0x00ffffff-no-rj"
      },
      {
        testimonialId: "2",
        testimonialText: `I had an amazing experience searching destinations on this site. Sometimes the excessive publicity of a business is all for nothing, but this time I wasn't disappointed. Amazing web with amazing results. Had a smooth booking experience.`,
        testimonialBy: "User - 2",
        testimonialPhoto: "https://yt3.ggpht.com/ZAg-xr2AV9j21lTcDTJUzx0u8Y_jn0VzX4PQ8whanpC26nBw-JrnL3czKtdsU_2BK4U_xntlGw=s900-c-k-c0x00ffffff-no-rj"
      },
      {
        testimonialId: "3",
        testimonialText: `I can see its very useful. Accommodating. Everything is fine. I can surely advice to everyone to see this and i make sure they will love it too.`,
        testimonialBy: "User - 3",
        testimonialPhoto: "https://yt3.ggpht.com/ZAg-xr2AV9j21lTcDTJUzx0u8Y_jn0VzX4PQ8whanpC26nBw-JrnL3czKtdsU_2BK4U_xntlGw=s900-c-k-c0x00ffffff-no-rj"
      },
      {
        testimonialId: "4",
        testimonialText: `I've been using AstroWhriled for a year and proceeded up to 50 bookings through them. Never had any issues whatsoever. Always smooth transactions. Great user experience.`,
        testimonialBy: "User - 4",
        testimonialPhoto: "https://yt3.ggpht.com/ZAg-xr2AV9j21lTcDTJUzx0u8Y_jn0VzX4PQ8whanpC26nBw-JrnL3czKtdsU_2BK4U_xntlGw=s900-c-k-c0x00ffffff-no-rj"
      },
      {
        testimonialId: "5",
        testimonialText: `Just came across the site after being recommended by a friend, so far it seems great! The interface is easy to navigate, I like that I can see all my trip information at one place. I have yet to book anything, but I will when I can and will update my review at that point!`,
        testimonialBy: "User - 5",
        testimonialPhoto: "https://yt3.ggpht.com/ZAg-xr2AV9j21lTcDTJUzx0u8Y_jn0VzX4PQ8whanpC26nBw-JrnL3czKtdsU_2BK4U_xntlGw=s900-c-k-c0x00ffffff-no-rj"
      }
    ]
  }

}
