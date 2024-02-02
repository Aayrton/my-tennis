import { Player } from "../types/Player";

export const getPlayers: () => Promise<Player[]> = async () => {
  try {
    const payload = await fetch(
      "https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json"
    );
    const { players } = await payload.json();
    return players;
  } catch (error) {
    throw error;
  }
};

export const getPlayer: (playerId: number) => Promise<Player> = async (
  playerId
) => {
  try {
    const players = await getPlayers();
    const player = players.find(({ id }) => id === playerId);

    if (typeof player === "undefined") {
      throw "404";
    }

    return player;
  } catch (error) {
    throw error;
  }
};
