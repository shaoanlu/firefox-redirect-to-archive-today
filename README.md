# Archive.today Redirector

A simple Firefox addon that redirects the current webpage to its corresponding page on archive.today with a single click.

## Installation

### From Source

1. **Download or clone this repository**
   ```bash
   git clone https://github.com/yourusername/archive-today-redirector.git
   cd archive-today-redirector
   ```

2. **Create icon files** (if not included)
   - You'll need `icon16.png` (16x16 pixels) and `icon48.png` (48x48 pixels)
   - You can use any image editor to create simple icons or download free icons

3. **Load the addon in Firefox**
   - Open Firefox and navigate to `about:debugging`
   - Click "This Firefox" in the left sidebar
   - Click "Load Temporary Add-on"
   - Navigate to the addon folder and select `manifest.json`

The method above loads the addon **temporarily** - it will be removed when you restart Firefox. 

## Usage

1. Navigate to any webpage you want to archive
2. Click the Archive.today Redirector icon in your Firefox toolbar
3. You'll be redirected to `https://archive.today/[your-url]`
4. Archive.today will either show you existing archives or create a new one

## Files Structure

```
archive-today-redirector/
├── manifest.json       # Addon configuration and permissions
├── background.js       # Core functionality
├── icon16.png         # Toolbar icon (16x16)
├── icon48.png         # Addon manager icon (48x48)
└── README.md          # This file
```

## Permissions

This addon requires the following permissions:

- **activeTab** - To access the URL of the current tab when you click the button
- **tabs** - To update the current tab with the archive.today URL

## How It Works

1. When you click the toolbar button, the addon captures the current page URL
2. It checks if you're already on an archive page (archive.today, archive.is, or archive.ph)
3. If not, it encodes the URL and redirects to `https://archive.today/[encoded-url]`
4. Archive.today handles the rest - finding existing archives or creating new ones

## Acknowledgement
The icons are from [flaticon](https://www.flaticon.com/free-icon/box_685383?term=archive&page=1&position=48&origin=search&related_id=685383).
