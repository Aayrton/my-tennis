import { getTwoRandomsPlayers } from "../../utils/getTwoRandomsPlayers";
import mockPlayers from "../../testsMocks/mocksPlayers";

describe("getTwoRandomsPlayers function", () => {
  it("should returns two different player  from the array", () => {
    const [firstPlayer, secondPlayer] = getTwoRandomsPlayers(mockPlayers);

    expect(mockPlayers).toContain(firstPlayer);
    expect(mockPlayers).toContain(secondPlayer);
    expect(firstPlayer).not.toBe(secondPlayer);
  });

  test("throws an error if the array has less than two objects", () => {
    expect(() => getTwoRandomsPlayers([])).toThrowError(
      "The players array must contains at least two objects"
    );
  });
});
