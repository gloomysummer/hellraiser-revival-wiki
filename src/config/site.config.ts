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
    gaMeasurementId: "G-DQQY1KGEP3", // GA4 衡量 ID
    // Adsterra v2 自托管 iframe 架构（规范：game-wiki-builder/references/adsterra_monetization_sop.md）
    // ⚠️ key 为空或非 32 位 hex 时，AdSlot 组件整槽不渲染，对线上零影响。
    // ⚠️ 同页同 Zone Key 只计一次展示（Adsterra 去重，GK2 commit cba0189 佐证）——每个尺寸必须独立 Key。
    // ⚠️ SocialBar / Popunder 永久关闭（老大 2026-10-05 定案：体验差、怕影响排名），不配置。
    adsterra: {
      enabled: true,
      // 反嵌套探针伪装开关说明：伪装代码硬编码在 public/ads/banner-*.html 的 <head>（SOP 六.2）。
      // 撤回方式 = 还原对应静态文件（git revert 单文件，约 1 分钟），文件头有回滚命令注释。
      banners: {
        "banner-300x250": { key: "dfd0f4f10063376108f08d6409ab0450", enabled: true },
        "banner-728x90": { key: "0a8d21e288f7ecfcbddfa01482f7243b", enabled: true },
        "banner-320x50": { key: "e01788d25d901b9a6a27c189b9470b5e", enabled: true },
      },
    },
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
