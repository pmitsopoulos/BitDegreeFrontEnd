import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo="https://coder.clothing/images/stories/virtuemart/product/angular-logo-stickers.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
