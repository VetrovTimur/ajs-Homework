// 2 Import/Export
import Game, {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game';

console.log(GameSavingData, loadGame, saveGame);

const game = new Game();
game.start();


// 1 Working environment
const characters = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'маг', health: 0},
    {name: 'лучник', health: 0}
];

const alive = characters.filter(item => item.health > 0);

console.log(alive);