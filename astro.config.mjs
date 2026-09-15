import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://jiahejiang.github.io",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()]
});
