import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.css']
})
export class WhoComponent implements OnInit {

  whoHeadText: string = "Who Are We?"
  whoBodyText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  astroName_1: string = "Pranathi Neerudu";
  astroName_2: string = "Deepak Singh Bhadoriya";
  astroName_3: string = "Nick Emerson";
  astroName_4: string = "Vishwas Desai";


  constructor() { }

  ngOnInit(): void {
  }

}
