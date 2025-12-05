# $WYNNRIP - Memorial Meme Coin Website

A dark, atmospheric landing page for the $WYNNRIP meme coin with a haunting cemetery/memorial theme.

## Features

- Dark green gradient background with glowing neon green accents
- Animated 3D-style tombstone in the hero section
- Floating particle/firefly animation system
- Fog and mist overlay effects
- Smooth scroll animations using Framer Motion
- Responsive design for all devices
- Interactive glowing social media buttons

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion (animations)
- React Icons

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Social Links

Edit the `socialLinks` array in the `Footer` component in `src/App.jsx`:

```javascript
const socialLinks = [
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "#", // Replace with your Twitter URL
    color: "hover:text-[#1DA1F2]"
  },
  // ... more links
]
```

### Modify Colors

Update colors in `tailwind.config.js`:

```javascript
colors: {
  'cemetery-dark': '#0a1f0a',
  'cemetery-darker': '#051008',
  'cemetery-green': '#0d2818',
  'neon-green': '#00ff41',
}
```

### Adjust Animations

Modify animation timings in `tailwind.config.js` under the `keyframes` section.

## Project Structure

```
wynnrip/
├── src/
│   ├── App.jsx          # Main component with all sections
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind directives and custom styles
├── image/
│   └── 600x600.avif     # Cemetery image asset
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── postcss.config.js    # PostCSS configuration
```

## Sections

1. **Hero Section** - Features the glowing tombstone with "JAMES WYNN" and memorial text
2. **About Section** - The legend of James Wynn's liquidation
3. **Tokenomics Section** - Token supply, liquidity, and tax information
4. **How to Buy Section** - Step-by-step guide to purchasing $WYNNRIP
5. **Footer** - Social links and disclaimer

## Disclaimer

$WYNNRIP is a meme coin with no intrinsic value or expectation of financial return. For entertainment purposes only.

## License

MIT
