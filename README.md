# ChatGPT Minecraft Companion

A Bedrock Edition companion add-on project for Minecraft on Android, with development and testing supported from a Windows PC.

## Goal

Create a custom in-game companion that can appear in the player's Minecraft world, follow or respond to simple commands, and later connect to an AI service through a separate bridge.

**Important limitation:** a Bedrock add-on entity is not a real multiplayer player account. The first version will be a custom companion entity (NPC-like), not a second human player. AI chat and remote control will be added only after the basic add-on works reliably.

## Target setup

- Minecraft Bedrock Edition on Android (Google Play)
- Samsung Galaxy S21 for playing and testing
- Windows PC/laptop for project files and any optional bridge service
- GitHub repository for source control

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
5. **Polish:** model, animations, sounds, and installation guide.

## Safety and privacy

- Never commit API keys, passwords, or private tokens.
- Keep any AI credentials in a local environment file that is excluded by `.gitignore`.
- The companion should not send chat or world data anywhere unless that behavior is clearly configured and understood.

## Current status

This repository starts with the project structure and technical plan. The exact Bedrock version and Script API version will be pinned when the first playable prototype is validated.
