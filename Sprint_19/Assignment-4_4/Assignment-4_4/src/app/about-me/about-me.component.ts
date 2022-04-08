import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  paragraph1 = "This site is my first test of Angular.";
  paragraph2 = "It was a bit confusing at first.";
  paragraph3 = "However, I can see the appeal now that I've messed around with it for a while!";

  constructor() { }

  ngOnInit(): void {
  }

}
