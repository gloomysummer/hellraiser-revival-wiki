---
title: "Update 1.1 Patch Notes: Hellraiser Revival Guide"
description: "Hellraiser: Revival Update 1.1 patch notes covers GPU driver alerts, sewer ladder fall fixes, and Charlotte chase progression softlock remedies on Steam."
summary: "Clive Barker's Hellraiser: Revival Update 1.1 deployed on October 15, 2026 for PC on Steam, addressing critical progression softlocks and stability bugs. Key fixes include an automated outdated GPU driver startup notice, resolution for falling through sewer ladder floors, Charlotte chase collision blockers, and missing Flooded Room puzzle levers."
pubDate: 2026-10-15
updated: '2026-10-20'
category: Technical
tags:
- update-1-1
- patch-notes
- updates
- bug-fixes
- technical
evidence:
- claim: Official Update 1.1 patch released on Steam adding GPU driver startup alerts.
  level: Official
  sourceUrl: https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1846651706677637
  exactQuote: Added a startup notice that tells you when your GPU driver is out of date and needs updating.
- claim: Progression softlocks fixed in Update 1.1 including sewer ladder and Charlotte chase collision.
  level: Official
  sourceUrl: https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1846651706677637
  exactQuote: Fixed an issue that caused the player to fall through the floor after climbing the ladder out of the sewers.
- claim: Console players receive the patch in a separate deployment the developers describe as coming soon.
  level: Official
  sourceUrl: https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1846651706677637
  exactQuote: For those who opened the box on consoles, your patch is coming soon.
- claim: PlayStation 5 and console players actively track 1.1 patch parity with Steam PC.
  level: Community-reported
  sourceUrl: https://www.reddit.com/r/hellraiserthegame/comments/1xa0m1l/
  exactQuote: Is PS5 version updated with the latest patch
---

## Hellraiser: Revival Update 1.1 Overview & Release Details

On **October 15, 2026**, Saber Interactive and Boss Team Games deployed **Update 1.1** for *Clive Barker's Hellraiser: Revival* on PC via Steam. 

This post-launch maintenance update targets critical softlocks, level-streaming geometry failures, and automated driver health checks. Console releases for PlayStation 5 and Xbox Series X|S will follow in a separate deployment.

---

## Quick Answer: What Does Update 1.1 Fix?

* **Patch Version & Release Date**: **Update 1.1**, released on **October 15, 2026** for Steam PC.
* **GPU Driver Startup Detection**: Automatically notifies players upon game startup if their installed display drivers are outdated, preventing black screen crashes during DirectX 12 pipeline initialization.
* **Critical Collision & Softlock Fixes**: Corrects floor clipping after ascending the sewer ladder, unblocks collisions halting the Charlotte chase sequence, and restores missing interaction levers in the Flooded Room corpse puzzle.
* **Level Streaming & Asset Stability**: Resolves void-falling bugs triggered during the Labyrinth teleportation sequences following Sunny's pillar encounter.

---

## Complete Official Update 1.1 Patch Notes

Every fix listed below has been verified against the official developer announcement `[Official]`:

### 1. New Features & Hardware Safeguards

* **GPU Driver Out-of-Date Notification** `[Official]`: Added an automated startup alert informing players when their GPU driver is outdated and requires updating before entering the Labyrinth. Players experiencing boot failures can review setup instructions in our [PC crash and black screen troubleshooting guide](/guide/pc-crash-black-screen-fixes/).

### 2. Progression & Softlock Corrections

* **Sewer Ladder Floor Collision** `[Official]`: Fixed a severe physics collision failure that caused players to fall through the world terrain immediately upon climbing the ladder out of the sewers.
* **Charlotte Chase Collision Blocker** `[Official]`: Resolved an invisible geometry collision issue that prevented players from successfully completing the Charlotte chase sequence.
* **Labyrinth Level Streaming & Teleport Void** `[Official]`: Fixed an asset-streaming lag issue where labyrinth levels failed to load in time following Sunny's pillar teleportation, preventing Aidan from plummeting into the void. Learn how story branch choices intersect this sequence in our [Sunny all endings guide](/guide/how-to-save-sunny-endings-guide/).
* **Charlotte Boss Arena Ledge Hang** `[Official]`: Fixed a boss AI routing bug where Charlotte could become immobilized on the rock ledge during her encounter.
* **Flooded Room Puzzle Lever Persistence** `[Official]`: Fixed a progression blocker where the Flooded Room lever failed to spawn if saving and reloading midway through the corpse puzzle sequence.

### 3. Visuals, Lighting & Animation Polish

* **Knife Pickup Cutscene Actor Persistence** `[Official]`: Fixed a visual glitch where the sacrifice victim unexpectedly disappeared during the knife acquisition cutscene.
* **Bookshelf Interaction Animation** `[Official]`: Corrected a rare skeletal animation offset when manipulating interactive secret bookshelves.
* **Geometry & Lighting Pop-In Reduction** `[Official]`: Reduced noticeable pop-in for level geometry and dynamic lights when backtracking through dungeon hallways, stairwells, and the Chatterer chase corridor.
* **Labyrinth Window Placeholder Removal** `[Official]`: Removed unfinished placeholder text reading `"Burning House"` that erroneously displayed through a window in the Labyrinth.

---

## Impact on Ongoing Playthroughs & Performance

### Does Update 1.1 Reset Save Progress?
No. Update 1.1 is fully backwards-compatible with launch-day game saves. Players who were previously trapped by the Flooded Room missing lever or stuck at the Charlotte rock ledge can reload their existing checkpoint to proceed.

### Verifying File Integrity After Updating
If your Steam client fails to auto-update to 1.1 or encounters initialization errors post-patch:
1. Open your **Steam Library** and right-click **Clive Barker's Hellraiser: Revival**.
2. Select **Properties** > **Installed Files**.
3. Click **Verify integrity of game files** to repair any mismatched binaries.

---

## Update 1.1 FAQ

### When Did Update 1.1 Release?
Update 1.1 went live on **October 15, 2026** for the Steam PC version of *Clive Barker's Hellraiser: Revival*. It is the game's first post-launch patch and currently applies to the Steam release only.

### Does Update 1.1 Fix the Sewer Ladder and Charlotte Chase Softlocks?
Yes. Both progression blockers are listed in the official notes: the player falling through the floor after climbing the ladder out of the sewers, and the collision issue that could stop you from finishing the Charlotte chase. The Flooded Room lever that failed to spawn after a mid-puzzle save/reload, and Charlotte becoming stuck on the rock ledge during her boss fight, are fixed in the same batch.

### What Does the GPU Driver Warning in Update 1.1 Mean?
The patch added a startup notice that tells you when your GPU driver is out of date and needs updating. If the notice appears at boot, update your display drivers before continuing into the Labyrinth. Boot failures and DirectX initialization errors are covered in our [PC crash and black screen troubleshooting guide](/guide/pc-crash-black-screen-fixes/).

### When Is Update 1.1 Coming to PS5 and Xbox Series X|S?
No calendar date has been confirmed yet. The official announcement addresses console players directly — "For those who opened the box on consoles, your patch is coming soon" — confirming the console deployment is separate from and later than the Steam PC release. Community players on PlayStation 5 and Xbox awaiting patch parity are advised to create manual cloud backups before major chapter transitions (particularly prior to sewer ladder climbs and Charlotte encounters) to prevent softlocks before the patch deploys. Platform timing is tracked in our [release time and unlock times guide](/guide/release-time-unlock-times-guide/).

### Will There Be More Patches After Update 1.1?
Yes. The announcement closes with "More patches are to come…", so Update 1.1 is the start of the post-launch fix cadence rather than a one-off. This page will be extended as further official notes land.

---

## Related Guides & Performance Dossiers

* **Technical Troubleshooting**: Resolve shader compilation stutter and Direct3D boot errors in the [Hellraiser Revival PC crash and black screen guide](/guide/pc-crash-black-screen-fixes/).
* **System Requirements**: Check recommended hardware thresholds and SSD requirements in the [PC specs guide](/guide/system-requirements-pc-specs/).
* **Global Launch & Timeline**: Review original release time schedules in our [release time and platform guide](/guide/release-time-unlock-times-guide/).
* **Combat & Arsenal**: Equip your character for post-patch challenges with our [weapons tier list and durability guide](/guide/weapons-tier-list-durability/) and the [Bruno's Scalpel boss drop guide](/guide/brunos-scalpel-weapon-guide/).
