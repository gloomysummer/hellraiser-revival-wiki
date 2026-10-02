#!/usr/bin/env python3
"""apply-template.py — 起站命令（KI-57 v0.1）。

从模板克隆后跑一次，把三处真相源（site.config.ts / astro.config.mjs /
robots.txt）与示例内容替换成你的站点。设计原则学自 AnvilWiki apply-template：
只动 Config 层与 Content 层示例，永不碰 Code 层。

用法（问答式，也可全参数）:
    python3 scripts/apply-template.py \
        --game "Escape from Duckov" --site-name "Duckov Wiki" \
        --domain "duckov.wiki" --suffix "| DuckWiki" \
        [--email admin@duckov.wiki] [--adsense ca-pub-xxx] [--ga G-XXX]
"""
from __future__ import annotations

import argparse
import re
import shutil
import sys
import uuid
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def ask(prompt: str, default: str = "") -> str:
    val = input(f"{prompt} [{default}]: ").strip()
    return val or default


def main() -> int:
    ap = argparse.ArgumentParser(description="Apply the template to a new game site (Config layer only)")
    ap.add_argument("--game", help="游戏官方名")
    ap.add_argument("--site-name", help="站点品牌名，如 'Duckov Wiki'")
    apad = ap.add_argument("--domain", help="站点域名，如 duckov.wiki")
    ap.add_argument("--suffix", help="SERP 品牌后缀，如 ' | DuckWiki'（≤12 字符）")
    ap.add_argument("--email", default="")
    ap.add_argument("--adsense", default="")
    ap.add_argument("--ga", default="")
    ap.add_argument("--yes", action="store_true", help="跳过示例内容删除确认")
    args = ap.parse_args()

    game = args.game or ask("游戏官方名")
    site_name = args.site_name or ask("站点品牌名", f"{game} Wiki")
    domain = args.domain or ask("域名", f"{game.lower().replace(' ', '')}.com")
    suffix = args.suffix or ask("品牌后缀", f" | {site_name.split()[0][:8]}")
    email = args.email or ask("联系邮箱", f"admin@{domain}")

    if len(suffix) > 12:
        print(f"❌ 品牌后缀 '{suffix}' 超过 12 字符（SERP 红线）")
        return 1

    site_url = f"https://{domain}"

    def sub_file(path: Path, pairs: list[tuple[str, str]]) -> None:
        text = path.read_text(encoding="utf-8")
        for old, new in pairs:
            text = text.replace(old, new)
        path.write_text(text, encoding="utf-8")
        print(f"  ✓ {path.relative_to(ROOT)}")

    print(f"→ 应用配置: {site_name} @ {site_url}")
    index_now_key = uuid.uuid4().hex
    sub_file(ROOT / "src" / "config" / "site.config.ts", [
        ('gameName: "Demo Game"', f'gameName: "{game}"'),
        ('siteName: "DemoGame Wiki"', f'siteName: "{site_name}"'),
        ('siteUrl: "https://demo-game.example.com"', f'siteUrl: "{site_url}"'),
        ('titleSuffix: "| DemoWiki"', f'titleSuffix: "{suffix}"'),
        ('contactEmail: "admin@example.com"', f'contactEmail: "{email}"'),
        ('adsenseClient: ""', f'adsenseClient: "{args.adsense}"'),
        ('gaMeasurementId: ""', f'gaMeasurementId: "{args.ga}"'),
        ('indexNowKey: ""', f'indexNowKey: "{index_now_key}"'),
    ])
    (ROOT / "public" / f"{index_now_key}.txt").write_text(f"{index_now_key}\n", encoding="utf-8")
    print(f"  ✓ public/{index_now_key}.txt (Microsoft Bing IndexNow Key)")
    sub_file(ROOT / "astro.config.mjs", [
        ("https://demo-game.example.com", site_url),
    ])
    sub_file(ROOT / "public" / "robots.txt", [
        ("https://demo-game.example.com", site_url),
    ])
    sub_file(ROOT / "public" / "llms.txt", [
        ("DemoGame Wiki", site_name),
        ("Demo Game", game),
        ("https://demo-game.example.com", site_url),
    ])
    # 文案里的游戏名占位
    for md in list((ROOT / "src" / "content").rglob("*.md")):
        text = md.read_text(encoding="utf-8")
        md.write_text(text.replace("Demo Game", game), encoding="utf-8")

    if args.yes or ask("删除示例内容？(y/N)").lower() == "y":
        for demo in (ROOT / "src" / "content").rglob("*.md"):
            demo.unlink()
            print(f"  ✓ 删除示例 {demo.name}")

    print("\n✅ 完成。下一步：")
    print("   1. npm install && npm run build")
    print("   2. npm run check:config && npm run check:content && npm run check:links")
    print("   3. npm run setup:hooks   # 门禁挂上 pre-push，物理上锁")
    print("   4. 推到 GitHub，Cloudflare Pages 连仓库（build: npm run build，输出: dist，NODE_VERSION=22）")
    print("   5. 写真内容：summary 必填（40-60 词），每条断言带 evidence，绝不编造游戏数据")
    print("   6. 权威收录：部署后执行 Google Indexing API 与 `npm run submit:bing` 双引擎秒级推送收录")
    print("   提示：首发保持英语单向击穿（单语言最轻形态），有流量后再开本地化。")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
