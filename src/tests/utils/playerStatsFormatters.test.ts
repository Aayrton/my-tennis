import { formatWeight, formatHeight } from "../../utils/playerStatsFormatters";

describe("playerStatsFormatters utils", () => {
  describe("formatWeight function", () => {
    it('should converts weight from grams to kilograms with "kg" suffix', () => {
      const inputWeight = 80000;
      const result = formatWeight(inputWeight);

      expect(result).toBe("80 kg");
    });

    it("should handles zero g", () => {
      const inputWeight = 0;
      const result = formatWeight(inputWeight);

      expect(result).toBe("0 kg");
    });
  });

  describe("formatHeight function", () => {
    it('should converts height from centimeters to meters with "m" suffix', () => {
      const inputHeight = 180;
      const result = formatHeight(inputHeight);

      expect(result).toBe("1m8");
    });

    it("should handles zero height", () => {
      const inputHeight = 0;
      const result = formatHeight(inputHeight);

      expect(result).toBe("0");
    });
  });
});
