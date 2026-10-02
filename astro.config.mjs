// [Code 层] Astro 配置——site 从 site.config 读不到这里（构建顺序限制），
// 由 apply-template.py / check-config.py 保证与 site.config.ts 一致。
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hellraiserrevivalwiki.wiki', // apply-template 时自动替换为新域名
  output: 'static',
  integrations: [sitemap()],
});
