import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const clientRoot = fileURLToPath(new URL("../", import.meta.url));
const read = (path: string) => readFileSync(`${clientRoot}/${path}`, "utf8");

describe("integridade da publicação", () => {
  it("não depende do armazenamento antigo nem de analytics sem configuração", () => {
    const publicEntry = `${read("index.html")}\n${read("src/pages/Home.tsx")}`;
    expect(publicEntry).not.toContain("/manus-storage/");
    expect(publicEntry).not.toContain("%VITE_ANALYTICS_");
  });

  it("preserva anonimato e separação comercial no frontend", () => {
    const publicEntry = `${read("index.html")}\n${read("src/pages/Home.tsx")}\n${read("src/const.ts")}`;
    expect(publicEntry.toLowerCase()).not.toContain("lumina");
    expect(publicEntry).not.toMatch(/[\w.+-]+@gmail\.com/i);
    expect(publicEntry).not.toMatch(/[NS]\s*\d{1,2}°\s*\d{1,2}[′']/);
  });

  it("publica os arquivos básicos de SEO e segurança", () => {
    expect(read("public/robots.txt")).toContain(
      "https://geometodo.com.br/sitemap.xml"
    );
    expect(read("public/sitemap.xml")).toContain("https://geometodo.com.br/");
    expect(read("public/_headers")).toContain("Content-Security-Policy:");
  });

  it("mantém o domínio oficial ligado ao Worker sem criar subdomínio", () => {
    const wrangler = read("../wrangler.jsonc");
    expect(wrangler).toContain('"pattern": "geometodo.com.br"');
    expect(wrangler).toContain('"custom_domain": true');
    expect(wrangler).not.toContain("www.geometodo.com.br");
  });
});
