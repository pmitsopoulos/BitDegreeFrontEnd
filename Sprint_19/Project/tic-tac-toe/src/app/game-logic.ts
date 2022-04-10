import {Status} from "./game-status";

export class GameLogic {
    gameStatus!: Status;
    gameField: Array<number> = [];
    currentTurn!: number;


    public constructor(){
        this.gameField = [0,0,0,0,0,0,0,0,0];
        this.gameStatus = Status.STOP;
        this.currentTurn = 1;
    }

    startGame(): void{
        this.game.gameStart();
    }
}
