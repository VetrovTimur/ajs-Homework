// 2 Import/Export
import Character from './domain';

console.log(Character);

export default class Game {
    start() {
        console.log('game started');
    }
}

export class GameSavingData {
}

export function readGameSaving() {
}

export function writeGameSaving() {
}