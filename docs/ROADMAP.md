# Development Roadmap

## Phase 1 — first in-game prototype

- [x] Confirm target Bedrock version: user reports 26.66.
- [x] Create behavior pack and resource pack manifests.
- [x] Add a summonable companion entity with a temporary Allay appearance.
- [x] Add diamond taming and owner-follow behavior to the entity definition.
- [x] Add a Windows packaging script that builds an outer .mcaddon containing separate .mcpack files.
- [ ] Build and import the .mcaddon on the user's Galaxy S21.
- [ ] Verify spawning, taming, and following in a test world.

## Phase 2 — command building

- [x] Add a Script API event listener for build requests.
- [x] Add a small wooden house blueprint.
- [x] Add a small stone lookout tower blueprint.
- [ ] Test the script module and both builds in the exact Bedrock version.
- [ ] Add more safe, compact blueprints.
- [ ] Later: support natural-language building requests through a controlled blueprint system.

## Phase 3 — companion controls

- [ ] Implement a reliable stay command.
- [ ] Implement a return-to-owner command.
- [ ] Add clear in-game feedback for each command.
- [ ] Test follow behavior around obstacles and across distance changes.

## Phase 4 — custom appearance

- [ ] Replace the temporary Allay appearance with a custom robot/player-like model.
- [ ] Put the ChatGPT logo on the head display, not on the chest.
- [ ] Add suitable animations and sounds.

## Phase 5 — optional AI connection

- [ ] Choose a supported Bedrock networking/hosting approach.
- [ ] Build a small local bridge on Windows.
- [ ] Keep credentials outside the repository.
- [ ] Test with explicit user consent and minimal data transfer.

## Compatibility rule

Do not assume that a feature or Script API version works just because it appears in an example for another Bedrock release. Test against the exact game version before pinning dependencies.
