# ME Placement Tool

**Now available for Minecraft 1.20.1 & 1.21.1**

A powerful add-on mod for **Applied Energistics 2**. Place blocks, AE2 cable parts, and fluids directly from your ME network with a single click.

Designed to streamline your ME network construction with intuitive controls and powerful automation.

![Hero Image](public/hero-preview.png) <!-- Placeholder if image exists, otherwise it's fine -->

## Features

- **18-Slot Configuration**: Configure up to 18 different items in each tool. Switch between them instantly using the radial menu.
- **Undo Support**: Made a mistake? Press `Ctrl + Left-click` to undo your last placement operation.
- **Smart Dyeing**: Cable tool automatically uses dye from your offhand, ME network, or inventory.
- **Visual Preview**: See exactly where blocks will be placed before you click with the ghost preview system.
- **JEI/REI Integration**: Drag items directly from JEI or REI into the tool configuration GUI.
- **Auto-Crafting**: Items unavailable but craftable? The tool will automatically request crafting.

## Included Tools

### ME Placement Tool
The essential tool for placing blocks, AE2 cable parts, and fluids directly from your ME network.
- Place regular blocks from ME network
- Support AE2 cable parts (buses, panels)
- Place fluids directly
- 18-slot configuration with radial menu

### ME Multiblock Placement Tool
Place multiple blocks at once using intelligent BFS algorithm. Perfect for large-scale construction.
- Place 1, 8, 64, 256, or 1024 blocks
- Smart BFS expansion algorithm
- Visual preview before placement

### ME Cable Placement Tool
Specialized tool for efficient AE2 cable placement with smart dyeing and multiple placement modes.
- Line Mode: straight cable runs
- Plane Fill: rectangular coverage
- Plane Branching: tree-like networks
- Smart dyeing system

## Network Binding

Place the tool into an **ME Wireless Access Point** to bind it to your network. The tool will draw items and energy from the connected network.

## Development

This website is built with React, TypeScript, and Vite.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

### Build

```bash
npm run build
```

## License

ME Placement Tool. Not affiliated with Applied Energistics 2.
