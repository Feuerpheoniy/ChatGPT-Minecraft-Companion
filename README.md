# ChatGPT Minecraft Companion

A Bedrock Edition companion add-on project for Minecraft on Android, with development and testing supported from a Windows PC.

## Goal

Create a custom in-game companion that can appear in the player's Minecraft world, follow or respond to simple commands, and later connect to an AI service through a separate bridge.

**Important limitation:** a Bedrock add-on entity is not a real multiplayer player account. The first version is a custom companion entity (NPC-like), not a second human player. AI chat and remote control will be added only after the basic add-on works reliably.

## Target setup

- Minecraft Bedrock Edition on Android (Google Play)
- Target game version: 26.66 (engine version 1.26.66, as reported by the user)
- Samsung Galaxy S21 for playing and testing
- Windows PC/laptop for project files and any optional bridge service
- GitHub repository for source control

## Current prototype: 0.1

The first behavior/resource pack files are now in the repository:

- `behavior_pack/manifest.json`
- `behavior_pack/entities/chatgpt_companion.json`
- `resource_pack/manifest.json`
- German and English entity-name translations

The entity currently uses the vanilla Allay appearance as a temporary placeholder. It can look at nearby players, wander, and move toward a player holding a diamond. This is a basic test behavior, not yet a true owner-based follow command or ChatGPT connection.

## First in-game test

1. Import/enable both the behavior pack and resource pack in a new test world.
2. Enable cheats in that test world.
3. Run: `/summon companion:chatgpt_companion`
4. Hold a diamond and check whether the companion approaches you.
5. Check whether its name appears as **ChatGPT-Begleiter**.

If the entity does not load or the game reports a content error, send the exact error text or a screenshot. Do not enable experimental toggles unless the game specifically reports that one is required.

## Project layout

- `behavior_pack/` — companion entity behavior and gameplay logic
- `resource_pack/` — companion appearance, model, and textures
- `server/` — optional local bridge for later AI connectivity
- `config/` — local configuration examples (never commit API keys)
- `docs/` — setup notes and development milestones

## Planned milestones

1. **Add-on foundation:** valid behavior/resource pack manifests and a companion entity.
2. **In-game testing:** import the packs into Bedrock and spawn the companion in a test world.
3. **Basic commands:** follow, stay, and return.
4. **Optional AI bridge:** connect the companion to an AI service through a separately running program, with credentials kept locally.
5. **Polish:** custom model, animations, sounds, and installation guide.

## Safety and privacy

- Never commit API keys, passwords, or private tokens.
- Keep any AI credentials in a local environment file that is excluded by `.gitignore`.
- The companion should not send chat or world data anywhere unless that behavior is clearly configured and understood.
