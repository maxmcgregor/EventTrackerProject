import { Player } from "./player";

export class Game {
  id: number;
  grandTotal: number | undefined;
  winner: boolean | undefined;
  aces: number | undefined;
  twos: number | undefined;
  threes: number | undefined;
  fours: number | undefined;
  fives: number | undefined;
  sixes: number | undefined;
  bonus: number | undefined;
  threeOfAKind: number | undefined;
  fourOfAKind: number | undefined;
  fullHouse: number | undefined;
  smallStraight: number | undefined;
  largeStraight: number | undefined;
  yahtzee: number | undefined;
  chance: number | undefined;
  yahtzeeBonus: number | undefined;
  player: Player = new Player();

  constructor(
    id: number = 0,
    player: Player = new Player(),
    grandTotal?: number,
    winner?: boolean,
    aces?: number,
    twos?: number,
    threes?: number,
    fours?: number,
    fives?: number,
    sixes?: number,
    bonus?: number,
    threeOfAKind?: number,
    fourOfAKind?: number,
    fullHouse?: number,
    smallStraight?: number,
    largeStraight?: number,
    yahtzee?: number,
    chance?: number,
    yahtzeeBonus?: number
  ) {
    this.id = id;
    this.grandTotal = grandTotal;
    this.winner = winner;
    this.aces = aces;
    this.twos = twos;
    this.threes = threes;
    this.fours = fours;
    this.fives = fives;
    this.sixes = sixes;
    this.bonus = bonus;
    this.threeOfAKind = threeOfAKind;
    this.fourOfAKind = fourOfAKind;
    this.fullHouse = fullHouse;
    this.smallStraight = smallStraight;
    this.largeStraight = largeStraight;
    this.yahtzee = yahtzee;
    this.chance = chance;
    this.yahtzeeBonus = yahtzeeBonus;
    this.player = player;
  }


}
