import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what',
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.css']
})
export class WhatComponent implements OnInit {

  whatHeadText: string = "What Do We Do?"
  whatBodyText: string = "AstroWhriled is the one of a kind Interspace travel reservation system. We primarily operate with Interspace travel market as a low-cost carrier with focus on our  pillars – offering low fares and delivering a courteous and hassle-free experience. AstroWhirled is one-stop destination for all your interspace travel arrangements .A uniform experience, high reliability and an award winning service make us one of the most reliable space travel reservation system in the market."

  constructor() { }

  ngOnInit(): void {
  }

}
