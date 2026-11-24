# ChatGPT Minecraft Companion

A Bedrock Edition companion add-on project for Minecraft on Android, with development and packaging supported from a Windows PC.

## Goal

Create a custom in-game companion that can appear in the player's Minecraft world, follow or respond to simple commands, and later connect to an AI service through a separate bridge.

**Important limitation:** a Bedrock add-on entity is not a real multiplayer player account. The current prototype is an NPC-like companion, not a second human player. AI chat and remote control are not implemented yet.

## Target setup

- Minecraft Bedrock Edition on Android (Google Play)
- Target game version reported by the user: 26.66
- Samsung Galaxy S21 for playing and testing
- Windows PC/laptop for project files and packaging
- GitHub repository for source control

## Current prototype: 0.2

- The companion still uses the vanilla Allay appearance as a temporary placeholder.
- The companion can be tamed with a diamond.
- Once tamed, it is configured to follow its owner, look at nearby players, and wander when it has no follow target.
- It can be summoned in a test world with `/summon companion:chatgpt_companion`.

This behavior has been added to the source but has **not yet been tested in the user's Minecraft world**. The custom robot/player-like model, face-screen ChatGPT logo, stay/return commands, and AI chat are still future work.

## Build the .mcaddon on Windows

The repository includes `Build-Addon.ps1`. From the repository folder, run PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\Build-Addon.ps1
```

The script creates:

```
dist/ChatGPT-Minecraft-Companion-0.2.mcaddon
```

The .mcaddon is a ZIP container holding two separate .mcpack files. Each pack's `manifest.json` is placed at the root of its own .mcpack.

Transfer the generated file to the Android device and open it with Minecraft. In Minecraft, activate both **ChatGPT Companion - Behavior** and **ChatGPT Companion - Resources** in the test world's pack settings.

## First in-game test

1. Import the generated .mcaddon file.
2. Create a new test world and enable both companion packs.
3. Enable cheats in that test world.
4. Run: `/summon companion:chatgpt_companion`
5. Hold a diamond and interact with the companion to tame it.
6. Walk away and check whether it follows you.

If Minecraft reports an import or content error, send the exact error text or a screenshot. The packaging script fixes the archive layout, but the final import and runtime behavior still need an on-device test. Do not enable experimental toggles unless Minecraft specifically says one is required.

## Project layout

- `behavior_pack/` — companion entity behavior and gameplay logic
- `resource_pack/` — companion appearance, model, and textures
- `Build-Addon.ps1` — creates the distributable .mcaddon on Windows
- `dist/` — generated output (not committed)
- `docs/` — setup notes and development milestones

## Planned milestones

1. **Add-on foundation:** valid behavior/resource pack manifests and a companion entity.
2. **In-game testing:** import the packs into Bedrock and verify spawning, taming, and following.
3. **Basic commands:** follow, stay, and return.
4. **Custom appearance:** robot/player-like model, animations, and ChatGPT logo on the head display.
5. **Optional AI bridge:** connect the companion to an AI service through a separately running program, with credentials kept locally.

## Safety and privacy

- Never commit API keys, passwords, or private tokens.
- Keep any AI credentials in a local environment file that is excluded by `.gitignore`.
- The companion should not send chat or world data anywhere unless that behavior is clearly configured and understood.
