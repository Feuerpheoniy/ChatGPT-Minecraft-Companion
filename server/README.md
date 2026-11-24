# Optional AI Bridge

This folder is reserved for a later, separately running bridge program.

The bridge is **not required** for the first in-game companion prototype. We will first prove that the behavior pack and resource pack import and run correctly in Bedrock.

When implemented, the bridge should:
- keep credentials in local environment variables;
- expose only the minimum commands needed by the companion;
- avoid collecting or transmitting world/chat data by default;
- clearly document any network connection and data sent.

A local bridge does not automatically make an Android Bedrock client accept arbitrary server connections or behave like a multiplayer player. The supported connection method must be verified before implementation.
