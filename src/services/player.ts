import { Player } from "../types/Player";

const apiUrl = "https://api-eurotennis.vercel.app/api/players";

export const getPlayers: () => Promise<Player[]> = async () => {
  try {
    const payload = await fetch(apiUrl);
    const players = await payload.json();
    return players;
  } catch (error) {
    throw error;
  }
};

export const getPlayer: (playerId: number) => Promise<Player> = async (
  playerId
) => {
  try {
    const response = await fetch(`${apiUrl}/${playerId}`);

    if (response.status === 404) {
      throw new Error("Not Found");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
