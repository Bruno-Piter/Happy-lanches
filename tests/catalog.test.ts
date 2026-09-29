import { describe, expect, it } from "vitest";
import { menuItems } from "@/data/menu";
import { filterMenu, formatPrice } from "@/lib/catalog";
describe("catálogo", () => {
  it("filtra por termo e categoria", () => { expect(filterMenu(menuItems, "angus", "Lanche", "featured").map((item) => item.id)).toEqual(["hamburguer"]); });
  it("ordena por preço crescente", () => { expect(filterMenu(menuItems, "", "Todos", "price-asc").map((item) => item.price)).toEqual([5, 5, 9.5, 10, 25, 55]); });
  it("formata preço em real", () => { expect(formatPrice(9.5)).toBe("R$ 9,50"); });
});
