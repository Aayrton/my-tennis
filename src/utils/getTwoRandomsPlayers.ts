import { Player } from "../types/Player";

export const getTwoRandomsPlayers: (players: Player[]) => [Player, Player] = (
  players
) => {
  const playersLengh = players.length;
  if (playersLengh < 2) {
    throw new Error("The players array must contains at least two objects");
  }

  const firstIndex = Math.floor(Math.random() * playersLengh);
  let secondIndex = Math.floor(Math.random() * playersLengh);

  while (secondIndex === firstIndex) {
    secondIndex = Math.floor(Math.random() * playersLengh);
  }

  const firstPlayer = players[firstIndex];
  const secondPlayer = players[secondIndex];

  return [firstPlayer, secondPlayer];
};
