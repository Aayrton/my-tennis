import { Player } from '../types/Player';

export const getTwoRandomsInArray = (players: Player[]) => {


  const lastIndex = players.length - 1;
  const firstIndex = Math.floor(Math.random() * lastIndex);
  let secondIndex = Math.floor(Math.random() * players.length - 1);

  if(firstIndex === secondIndex) {
    secondIndex++
  }

  return [players[firstIndex], players[secondIndex]]

}

