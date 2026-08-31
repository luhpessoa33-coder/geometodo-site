import { describe, expect, it } from "vitest";
import { products, services, solutionDetails } from "./const";

const expectedProducts = [
  ["GeoMétodo Essencial", "R$ 47", "https://mpago.la/1KPYFHV"],
  ["GeoTCC Pro", "R$ 97", "https://mpago.la/2cUHWGM"],
  ["GeoAHP Pro", "R$ 147", "https://mpago.la/2EMhh8L"],
  ["GeoUSLE Pro", "R$ 197", "https://mpago.la/33QNcvU"],
  ["GeoArcPy Automation Pack", "R$ 247", "https://mpago.la/1F8QrBy"],
  ["GeoMCDA Lab", "R$ 297", "https://mpago.la/2XiJT9Z"],
  ["GeoPSA Hídrica Suite", "R$ 497", "https://mpago.la/31YNZUp"],
];

describe("catálogo comercial", () => {
  it("mantém os sete produtos, preços e checkouts oficiais", () => {
    expect(
      products.map(({ name, price, href }) => [name, price, href])
    ).toEqual(expectedProducts);
  });

  it("usa imagens públicas versionadas no repositório", () => {
    for (const product of products) {
      expect(product.image).toMatch(/^\/assets\//);
      expect(product.image).not.toContain("manus-storage");
    }
  });

  it("mantém cada serviço ligado a uma página de detalhe", () => {
    for (const service of services) {
      expect(solutionDetails[service.href]).toBeDefined();
    }
  });

  it("não mistura a marca com a Lumina", () => {
    expect(
      JSON.stringify({ products, services, solutionDetails }).toLowerCase()
    ).not.toContain("lumina");
  });
});
