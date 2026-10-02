// ============================================================
// [Config 层] site.config.ts — 站点唯一真相源
//
// 起一个新站时，这是你唯一必须改的代码文件。
// 上游模板升级只会动 Code 层，与本文件的冲突是预期内的、
// 且永远保留你自己的值（见 docs/CONTENT-LAYERS.md）。
//
// 规则：所有派生值（JSON-LD、canonical、hreflang、sitemap、
// 收录提交）都从这里读，禁止在页面里硬编码域名。
// ============================================================

export const siteConfig = {
  /** 游戏官方名（用于 title/keywords/JSON-LD） */
  gameName: "Clive Barker's Hellraiser: Revival",
  /** 站点品牌名（og:site_name、页脚、品牌后缀） */
  siteName: "Hellraiser Revival Wiki",
  /** 站点根 URL，结尾不带斜杠 */
  siteUrl: "https://hellraiserrevivalwiki.wiki",
  /** 品牌后缀（SERP title 用，严格 ≤12 字符，含 | 与空格） */
  titleSuffix: " | HRWiki",
  /** 站点默认语言（URL 无前缀）；其余语言加前缀，缺失内容回退默认语言 */
  defaultLocale: "en",
  /** 实际存在翻译内容的语言（双轨 hreflang：只为物理存在的翻译输出 alternate） */
  locales: ["en"],
  /** 站长联系邮箱（法律合规三件套用） */
  contactEmail: "contact@hellraiserrevivalwiki.wiki",
  /** 广告与统计（全部默认关闭——env/config 门控，模板升级不会自动开启） */
  ads: {
    adsenseClient: "", // 例: "ca-pub-XXXXXXXXXXXXXXXX"，留空 = 不渲染广告位
    gaMeasurementId: "", // 例: "G-XXXXXXXXXX"，留空 = 不加载 GA4
  },
  /** 收录提交（可选） */
  indexing: {
    indexNowKey: "55e6c9e3efee4824b89b2808c855f6fc", // 留空 = 不生成 key 文件
  },
  /** 官方社区与实体链接（用于 Schema.org Organization sameAs 知识图谱绑定，留空不输出） */
  officialLinks: {
    steam: "", // 例: "https://store.steampowered.com/app/xxxxxx"
    discord: "", // 例: "https://discord.gg/xxxxxx"
    twitter: "", // 例: "https://twitter.com/xxxxxx"
    youtube: "", // 例: "https://youtube.com/@xxxxxx"
    officialSite: "", // 例: "https://example.com"
  },
} as const;

export type SiteConfig = typeof siteConfig;
