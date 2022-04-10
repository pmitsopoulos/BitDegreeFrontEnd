import { Component, OnInit } from '@angular/core';
import { GameLogic } from '../game-logic';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers:[GameLogic]
})
export class GameComponent implements OnInit {

  constructor(public game : GameLogic) { }
  
  startGame(): void {
    this.game.gameStart();
    this.updateCurrentPlayer();
}

updateCurrentPlayer() : void
{
  const currentPlayer = `Current turn: Player ${this.game.currentTurn}`;
  const information = document.querySelector("#current-status");
  information!.innerHTML = currentPlayer;
}

async clickSubfield(subfield: any): Promise<void> {
  if(this.game.gameStatus === 1)
  {
    const position = subfield.currentTarget.getAttribute("position");
    const whoClicked = {player: this.game.currentTurn, position: position}
    console.log(whoClicked);

    this.game.setField(position , this.game.currentTurn);

    const color = this.game.getPlayerColorClass();

    subfield.currentTarget.classList.add(color);

    this.game.changePlayer();

    await this.game.checkGameEndWinner().then((end: boolean) => {
      if (this.game.gameStatus === 0 && end){
        const information = document.querySelector('#current-status')
        information!.innerHTML = `The winner is Player ` + this.game.currentTurn;
      }
    });

    await this.game.checkGameEndFull().then((end: boolean)=>{
      if(this.game.gameStatus === 0 && end)
      {
        const information = document.querySelector("#current-status");
        information!.innerHTML = "No winner: it's a draw";
      }
    });

    if(this.game.gameStatus === 1)
    {
      this.updateCurrentPlayer();
    }
  }




}




  ngOnInit(): void {
  }

}
