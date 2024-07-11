import { describe, expect, test } from "vitest";
import formatNumber from "./formatNumber";

describe("formatNumber happy path", function() {
  test("should format number", function() {
    expect(formatNumber(1000)).toBe("R$ 1.000,00");
  });

  test("should format number with currency", function() {
    expect(formatNumber(1000, "US$ 0,00", { currency: "USD" })).toBe("US$ 1.000,00");
  });

  test("should format number with locale", function() {
    expect(formatNumber(1000, "R$ 0,00", { locale: "en-US" })).toBe("R$1,000.00");
  });
});

describe("formatNumber bad path", function() {
  test("should fallback to R$ 0,00", function() {
    expect(formatNumber(null as unknown as number)).toBe("R$ 0,00");
    expect(formatNumber(undefined as unknown as number)).toBe("R$ 0,00");
    expect(formatNumber(NaN as unknown as number)).toBe("R$ 0,00");
    expect(formatNumber(0)).toBe("R$ 0,00");
  });

  test("should fallback to custom fallback", function() {
    expect(formatNumber(null as unknown as number, "US$ 0,00")).toBe("US$ 0,00");
    expect(formatNumber(undefined as unknown as number, "US$ 0,00")).toBe("US$ 0,00");
    expect(formatNumber(NaN as unknown as number, "US$ 0,00")).toBe("US$ 0,00");
    expect(formatNumber(0, "US$ 0,00")).toBe("US$ 0,00");
  });
});
