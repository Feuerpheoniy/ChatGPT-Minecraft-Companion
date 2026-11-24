# Development Roadmap

## Phase 1 — playable companion

- [ ] Confirm the exact Minecraft Bedrock version on the Android device.
- [ ] Create behavior pack and resource pack manifests.
- [ ] Add a custom companion entity with a simple placeholder appearance.
- [ ] Import both packs into a test world.
- [ ] Verify that the entity spawns and behaves correctly.

## Phase 2 — simple controls

- [ ] Add follow behavior.
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
