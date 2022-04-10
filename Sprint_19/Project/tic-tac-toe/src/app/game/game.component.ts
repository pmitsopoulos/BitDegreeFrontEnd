import { Component, OnInit } from '@angular/core';
import { GameLogic } from '../game-logic';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers:[GameLogic]
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
