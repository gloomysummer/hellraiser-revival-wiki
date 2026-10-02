// ============================================================
// [Code 层] content.config.ts — 内容集合 Schema（Zod）
//
// 纪律（对齐 fabrication_guard 事实纪律）：
//   1. summary 必填 —— 40-60 词直答块，QuickAnswer / featured snippet /
//      AI Overviews 的抓取入口（AnvilWiki seo.md 同款标准）。
//   2. 字段只增不改名 —— 上游模板升级永不破坏旧文章。
//   3. evidence 预留槽位 —— 每条可断言内容应能回答"这话哪来的"。
//      未公布的数据一律省略，禁止估算（blueprints-imported.ts 同款纪律）。
//   4. draft 门控 —— draft:true 的页面不参与构建。
// ============================================================

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string().min(10).max(60), // SERP 600px 红线
    description: z.string().min(120).max(160), // 黄金摘要，句号收尾
    /** Quick Answer 直答块，40-60 词 */
    summary: z.string().min(40).max(400),
    pubDate: z.coerce.date(),
    updated: z.coerce.date().optional(),
    /** 攻略所属主分类/系列（用于右侧侧栏阅读展开树与归档聚合，可选） */
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    /** 证据槽位：本篇关键数据的事实来源。level 三级制（设计方 Round 43 定稿）：
     *  Official / Community-reported / Personal in-game test。
     *  契约：Community-reported 必须带 sourceUrl（check-content 与 schema 双重校验）。 */
    evidence: z
      .array(
        z.object({
          claim: z.string(),
          level: z
            .enum(["Official", "Community-reported", "Personal in-game test"])
            .default("Official"),
          sourceUrl: z.string().url().optional(),
          exactQuote: z.string().optional(),
          verifiedPatch: z.string().optional(),
        }).refine(
          (e) => e.level !== "Community-reported" || !!e.sourceUrl,
          { message: "Community-reported 证据必须带 sourceUrl" }
        )
      )
      .default([]),
    /** 视频嵌入槽位：遵循 youtube_video_to_guide_sop.md 规范 */
    guide_video: z
      .object({
        id: z.string(),
        title: z.string(),
        channel: z.string(),
        uploadDate: z.string().optional(),
        description: z.string().optional(),
      })
      .optional(),
    draft: z.boolean().default(false),
  }),
});

const codes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/codes" }),
  schema: z.object({
    title: z.string().min(10).max(60),
    description: z.string().min(120).max(160),
    summary: z.string().min(40).max(400),
    updated: z.coerce.date(),
    /** 兑换码清单：新码前置、过期保留（长尾 SEO） */
    codes: z.array(
      z.object({
        code: z.string(),
        reward: z.string(),
        status: z.enum(["active", "expired"]),
        /** 每个码必须带出处 */
        sourceUrl: z.string().url(),
        expiryDate: z.string().optional(),
      })
    ),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides, codes };
