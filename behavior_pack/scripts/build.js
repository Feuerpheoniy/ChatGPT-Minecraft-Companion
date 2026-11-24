import { system, world } from "@minecraft/server";

const PREFIX = "companion:build";
const MAX_BLOCKS = 500;

function put(dimension, x, y, z, type) {
  dimension.setBlockType({ x, y, z }, type);
}

function buildHouse(player) {
  const p = player.location;
  const dir = player.getViewDirection();
  const fx = Math.round(dir.x);
  const fz = Math.round(dir.z);
  const cx = Math.floor(p.x + fx * 6);
  const cz = Math.floor(p.z + fz * 6);
  const y = Math.floor(p.y);
  const d = player.dimension;

  // Compact 7x7 wooden starter house. The build is deliberately limited
  // to a small, predictable area around the player.
  for (let x = -3; x <= 3; x++) {
    for (let z = -3; z <= 3; z++) {
      put(d, cx + x, y, cz + z, "minecraft:oak_planks");
    }
  }

  for (let x = -3; x <= 3; x++) {
    for (let z = -3; z <= 3; z++) {
      const edge = Math.abs(x) === 3 || Math.abs(z) === 3;
      if (!edge) continue;
      for (let h = 1; h <= 3; h++) {
        const isDoor = (z === 3 && x === 0 && h <= 2);
        const isWindow = h === 2 && ((z === 3 && Math.abs(x) === 2) ||
          (z === -3 && Math.abs(x) === 1) ||
          (x === 3 && Math.abs(z) === 1) ||
          (x === -3 && Math.abs(z) === 1));
        if (isDoor) continue;
        put(d, cx + x, y + h, cz + z,
          isWindow ? "minecraft:glass" : "minecraft:oak_planks");
      }
    }
  }

  for (let x = -3; x <= 3; x++) {
    for (let z = -3; z <= 3; z++) {
      put(d, cx + x, y + 4, cz + z, "minecraft:oak_planks");
    }
  }

  // Simple interior light and a visible entrance marker.
  put(d, cx, y + 2, cz, "minecraft:lantern");
  player.sendMessage("§aChatGPT: Dein kleines Holzhaus ist fertig!");
}

function buildTower(player) {
  const p = player.location;
  const dir = player.getViewDirection();
  const cx = Math.floor(p.x + Math.round(dir.x) * 5);
  const cz = Math.floor(p.z + Math.round(dir.z) * 5);
  const y = Math.floor(p.y);
  const d = player.dimension;

  for (let h = 0; h < 9; h++) {
    for (let x = -1; x <= 1; x++) {
      for (let z = -1; z <= 1; z++) {
        const edge = Math.abs(x) === 1 || Math.abs(z) === 1;
        if (h === 0 || h === 8 || edge) {
          put(d, cx + x, y + h, cz + z,
            h === 8 ? "minecraft:oak_planks" : "minecraft:stone_bricks");
        }
      }
    }
  }
  for (let h = 1; h < 8; h += 3) {
    put(d, cx, y + h, cz + 1, "minecraft:ladder");
  }
  player.sendMessage("§aChatGPT: Dein kleiner Aussichtsturm ist fertig!");
}

world.afterEvents.scriptEventReceive.subscribe((event) => {
  if (event.id !== PREFIX) return;
  const player = event.sourceEntity;
  if (!player || player.typeId !== "minecraft:player") {
    world.sendMessage("§cBitte führe den Bau-Befehl als Spieler aus.");
    return;
  }

  const buildName = event.message.trim().toLowerCase();
  system.run(() => {
    try {
      if (buildName === "haus") {
        buildHouse(player);
      } else if (buildName === "turm") {
        buildTower(player);
      } else if (buildName === "hilfe" || buildName === "") {
        player.sendMessage("§eBefehle: /scriptevent companion:build haus  oder  /scriptevent companion:build turm");
      } else {
        player.sendMessage("§cUnbekannter Bauplan. Nutze 'haus', 'turm' oder 'hilfe'.");
      }
    } catch (error) {
      player.sendMessage("§cDer Bau konnte nicht abgeschlossen werden. Prüfe, ob der Bereich geladen und frei ist.");
    }
  });
});
