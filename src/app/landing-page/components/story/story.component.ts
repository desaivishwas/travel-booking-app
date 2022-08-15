import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  storyHeadText: string = "Our Story";
  storyBodyText: string = "Booking trips can be a hassle specially when it is one of a kind reservation like a ticket to Mars! Finding information on the offered trips based on space regulations and finding the means to get a ticket for the unique experience involves a-lot of work. Well! We are here to make it easy for you. Leave the boring process of finding means to reserve a ticket to us! All you need to do is to decide which planetary destination excites you. So,brace yourself for an experience of a lifetime made available through a click of a button."

  constructor() { }

  ngOnInit(): void {
  }

}
