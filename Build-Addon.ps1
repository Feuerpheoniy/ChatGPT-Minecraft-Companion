# Build-Addon.ps1
# Run this script from the repository root in Windows PowerShell.
# It creates a valid .mcaddon container with separate .mcpack files inside.

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$bp = Join-Path $root "behavior_pack"
$rp = Join-Path $root "resource_pack"
$outDir = Join-Path $root "dist"
$tempDir = Join-Path $env:TEMP ("ChatGPTCompanion-" + [guid]::NewGuid().ToString("N"))

if (!(Test-Path (Join-Path $bp "manifest.json"))) { throw "Behavior pack manifest.json not found." }
if (!(Test-Path (Join-Path $rp "manifest.json"))) { throw "Resource pack manifest.json not found." }

New-Item -ItemType Directory -Force -Path $outDir | Out-Null
New-Item -ItemType Directory -Force -Path $tempDir | Out-Null

try {
    $bpZip = Join-Path $tempDir "ChatGPT-Companion-Behavior.zip"
    $rpZip = Join-Path $tempDir "ChatGPT-Companion-Resources.zip"
    $bpMcpack = Join-Path $tempDir "ChatGPT-Companion-Behavior.mcpack"
    $rpMcpack = Join-Path $tempDir "ChatGPT-Companion-Resources.mcpack"
    $addonZip = Join-Path $outDir "ChatGPT-Minecraft-Companion-0.2.zip"
    $addonFile = Join-Path $outDir "ChatGPT-Minecraft-Companion-0.2.mcaddon"

    Compress-Archive -Path (Join-Path $bp "*") -DestinationPath $bpZip -Force
    Compress-Archive -Path (Join-Path $rp "*") -DestinationPath $rpZip -Force
    Move-Item $bpZip $bpMcpack -Force
    Move-Item $rpZip $rpMcpack -Force
    Compress-Archive -Path @($bpMcpack, $rpMcpack) -DestinationPath $addonZip -Force
    Move-Item $addonZip $addonFile -Force

    Write-Host "Created: $addonFile" -ForegroundColor Green
    Write-Host "Import this .mcaddon file into Minecraft Bedrock."
}
finally {
    if (Test-Path $tempDir) { Remove-Item $tempDir -Recurse -Force }
}
