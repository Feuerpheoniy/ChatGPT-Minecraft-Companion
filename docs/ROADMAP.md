# Development Roadmap

## Phase 1 — first in-game prototype

- [x] Confirm target Bedrock version: 26.66 / engine 1.26.66 (user-reported).
- [x] Create behavior pack and resource pack manifests.
- [x] Add a summonable companion entity with a temporary Allay appearance.
- [ ] Import both packs into a test world.
- [ ] Verify that the entity spawns and its temporary behavior works.

## Phase 2 — companion controls

- [ ] Implement reliable follow behavior.
- [ ] Add stay behavior.
- [ ] Add return-to-player behavior.
- [ ] Add clear in-game feedback for each command.

## Phase 3 — optional AI connection

- [ ] Choose a supported Bedrock networking/hosting approach.
- [ ] Build a small local bridge on Windows.
- [ ] Keep credentials outside the repository.
- [ ] Test with explicit user consent and minimal data transfer.

## Compatibility rule

Do not assume that a feature or Script API version works just because it appears in an example for another Bedrock release. Test against the exact game version before pinning dependencies.
