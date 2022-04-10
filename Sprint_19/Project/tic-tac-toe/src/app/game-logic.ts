import {
  Status
} from "./game-status";
export class GameLogic {
  gameStatus!: Status;
  gameField: Array < number > = [];
  currentTurn!: number;
  // game!: Object
  winConditionsOne: Array < Array < number >> = [
    [1, 1, 1, 0, 0, 0, 0, 0, 0], // Horizontal wins
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 0], // Vertical wins
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1], // Diagonal wins
    [0, 0, 1, 0, 1, 0, 1, 0, 0],
  ]

  winConditionsTwo: Array < Array < number >> = [
    [2, 2, 2, 0, 0, 0, 0, 0, 0], // Horizontal wins
    [0, 0, 0, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 2, 2],
    [2, 0, 0, 2, 0, 0, 2, 0, 0], // Vertical wins
    [0, 2, 0, 0, 2, 0, 0, 2, 0],
    [0, 0, 2, 0, 0, 2, 0, 0, 2],
    [2, 0, 0, 0, 2, 0, 0, 0, 2], // Diagonal wins
    [0, 0, 2, 0, 2, 0, 2, 0, 0],
  ]


  public constructor() {
    this.gameField = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.gameStatus = Status.STOP;
    this.currentTurn = 1;
  }

  gameStart(): void {
    this.gameStatus = Status.START;
    this.gameField = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.currentTurn = this.randomPlayerStart();
    console.log(this.currentTurn);
  }

  randomPlayerStart(): number {

    const startPlayer = Math.floor(Math.random() * 2) + 1;
    return startPlayer;
  }

  setField(positon: number, value: number): void {
    this.gameField[positon] = value;
    console.log(this.gameField);
  }

  getPlayerColorClass(): string {
    let colorClass = this.currentTurn === 1 ? "player-one" : "player-two";
    return colorClass;
  }

  changePlayer(): void {
    this.currentTurn = this.currentTurn === 1 ? 2 : 1;
  }

  async checkGameEndFull(): Promise < boolean > {
    let isFull = true;

    if (this.gameField.includes(0)) {
      console.log("empty spaces still exist")
      isFull = false;
    }
    if (isFull) {
      this.gameEnd();
      return true;
    } else {
      return false;
    }
  }

  arrayEquals(a: Array<any>, b: Array<any>): boolean {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((value, index) => value === b[index])
  }

  async checkGameEndWinner(): Promise < boolean > {
    let isWinner = false;

    const checkWin = (this.currentTurn === 1) ? this.winConditionsOne : this.winConditionsTwo;
    const currentBoard: any = [];

    this.gameField.forEach((subfield, index) => {
      if (subfield !== this.currentTurn) {
        currentBoard[index] = 0;
      } else {
        currentBoard[index] = subfield;
      }
    });

    console.log(`Here's the current state of the board: ${currentBoard}`);

    checkWin.forEach((checkfield, checkindex) => {
      if (this.arrayEquals(checkfield, currentBoard)) {
        isWinner = true;
      }
    });

    if (isWinner) {
      console.log('Three in a row: TIC-TAC-TOE!!!')
      this.gameEnd();
      console.log("EndGame");
      return true;
    } else {
      return false;
    }
  }


  gameEnd(): void {
    this.gameStatus = Status.STOP;
  }
}
