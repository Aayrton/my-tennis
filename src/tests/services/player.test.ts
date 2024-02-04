import { getPlayers, getPlayer } from "../../services/player";
import mockPlayers from "../../testsMocks/mocksPlayers";

describe("Player Services", () => {
  global.fetch = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getPlayers function", () => {
    it("should fetches players successfully", async () => {
      fetch.mockImplementationOnce(() =>
        Promise.resolve({
          json: async () => mockPlayers,
        })
      );

      const result = await getPlayers();

      expect(result).toEqual(mockPlayers);
    });

    it("should throw an error", async () => {
      fetch.mockImplementationOnce(() =>
        Promise.reject(new Error("GET failed players"))
      );

      await expect(getPlayers()).rejects.toThrow();
    });
  });

  describe("getPlayer function", () => {
    it("should fetches player successfully", async () => {
      fetch.mockImplementationOnce(() =>
        Promise.resolve({
          json: async () => mockPlayers[1],
        })
      );

      const result = await getPlayer(95);

      expect(result).toEqual(mockPlayers[1]);
    });

    it("should throw an error", async () => {
      fetch.mockImplementationOnce(() =>
        Promise.reject(new Error("GET failed player 95"))
      );

      await expect(getPlayer(52)).rejects.toThrow();
    });
  });
});
