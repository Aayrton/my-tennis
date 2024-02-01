export const getPlayers = async () => {
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
