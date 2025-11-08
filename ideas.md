# CodeSwitch Website - Design Vision

## Design Style Choice: **Cyberpunk Tech-Noir meets Hip-Hop Culture**

### Color Palette
- **Primary Background**: Deep charcoal (#0a0a0a) with subtle grid patterns
- **Secondary Background**: Dark slate (#1a1a1a)
- **Accent Primary**: Electric cyan (#00d9ff) - represents code/tech
- **Accent Secondary**: Vibrant purple (#a855f7) - represents creativity/music
- **Accent Tertiary**: Neon green (#10b981) - represents growth/success
- **Text Primary**: Off-white (#f5f5f5)
- **Text Secondary**: Light gray (#a3a3a3)
- **Border/Divider**: Cyan with glow effect

### Typography
- **Headings**: "Space Grotesk" - geometric, tech-forward sans-serif
- **Body**: "Inter" - clean, readable for longer content
- **Code/Accent**: "JetBrains Mono" - monospace for tech elements

### Visual Elements

#### Git Branch Visualization
- Interactive SVG diagram showing 4 branches merging into main
- Each branch represents an EP with different accent color
- Animated connection lines showing the flow
- Nodes at each EP with album artwork
- Hover states reveal track details

#### Section Layout
- **Hero**: Full viewport with animated gradient background, large typography introducing CodeSwitch concept
- **Branch Visualization**: Horizontal scrolling timeline showing the 4 phases
- **EP Sections**: Alternating left/right layout with floating cards (dark grey bg, cyan border glow)
- **About**: Split layout with artist photo and bio
- **Footer**: Links to music platforms and social media

#### Design Patterns
- Floating sections with subtle glow effects (dark grey bg + cyan border)
- Terminal/code aesthetic with monospace fonts for labels
- Glitch effects on hover for headings
- Gradient overlays on images
- Particle effects in background (subtle, not distracting)
- Smooth scroll with parallax on key sections

### Interactive Elements
- Branch diagram: Click nodes to navigate to EP sections
- EP cards: Hover reveals track listing with fade-in animation
- Smooth scroll navigation with section highlighting
- Play button icons linking to Bandcamp/streaming
- Animated text reveals on scroll

### Content Structure

1. **Hero Section**
   - Large "CodeSwitch" title with glitch effect
   - Tagline: "A Four-EP Journey Through the Software Development Lifecycle"
   - Scroll indicator

2. **Concept Introduction**
   - Split view: Left shows code snippet metaphor, Right explains the dual meaning
   - Floating card design

3. **Branch Visualization**
   - Interactive timeline showing all 4 EPs
   - Visual representation of Discovery → Design → Development → Delivery

4. **EP Sections** (4 sections, one per EP)
   - Discovery (Sep 2020) - Green accent
   - (By) DESIGN (Sep 2025) - Cyan accent
   - Development (Coming Soon) - Purple accent
   - Delivery (Coming Soon) - Orange accent
   
   Each section includes:
   - EP title and release date
   - Phase description
   - Album artwork
   - Track listing (for released EPs)
   - Link to listen

5. **About Yinka Diz**
   - Artist bio
   - Washington D.C. connection
   - New Money Music Group
   - Credits (Kofi Cooks production, Adam Lewis mixing)

6. **Footer**
   - Social links (Bandcamp, Linktree)
   - Copyright New Money Music Group
   - "Nothing by accident, everything by design" tagline

### Technical Approach
- Dark theme by default
- CSS custom properties for colors
- Tailwind utilities for layout
- Framer Motion or CSS animations for interactions
- SVG for branch visualization
- Responsive breakpoints: mobile-first design
- Optimized images with proper aspect ratios (1920x1080 minimum for backgrounds)

### Inspiration References
- GitHub's branch visualization UI
- Cyberpunk 2077 UI aesthetics
- Terminal/command line interfaces
- Hip-hop album websites (minimalist, bold typography)
- Code editor themes (dark mode)
