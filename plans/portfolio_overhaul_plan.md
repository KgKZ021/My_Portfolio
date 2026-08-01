# Architectural Blueprint: Minimalist Frosted Glass Game Developer Portfolio Overhaul

## Executive Summary
This document specifies the architectural plan to transition Kaung Khant Zaw's portfolio from a maximalist HUD aesthetic into a **Clean, Minimalist Frosted Glass** game developer portfolio. It retains the dark space theme and interactive canvas particle background while eliminating heavy corner brackets and maximalist borders in favor of generous whitespace (`padding: 7rem 1.5rem`), refined font weights (`Rajdhani 500/600`, clean typography), and subtle frosted glass cards.

---

## Architecture & System Design

```mermaid
graph TD
    App[index.html - Semantic Entry] --> Nav[Navbar - Frosted Glass Glassmorphism]
    App --> Hero[Hero - Particle Canvas & Clean Typography]
    App --> About[About - Minimalist Bio Card]
    App --> Skills[Skills Specs - Clean Tech Tags & Badges]
    App --> Exp[Experience - Minimalist Timeline Node]
    App --> Projects[Featured Projects - Borderless Glass Cards & Video Previews]
    App --> Edu[Education & Certs - Univ of Debrecen Glass Card]
    App --> Footer[Footer - Clean Terminal Footer]

    subgraph Refined SCSS Engine
        Vars[_variables.scss] --> StyleMain[style.scss]
        Base[_base.scss --> Spacing[Generous Padding 7rem]] --> StyleMain
        Comp[_components.scss --> GlassCards[Frosted Glass & No Brackets]] --> StyleMain
    end
```

---

## Key Design Adjustments
1. **Generous Whitespace & Spacing**: Increased section padding to `padding: 7rem 1.5rem` for an airy, expansive developer showcase.
2. **Refined Typography & Lighter Font Weights**: Utilizing `Rajdhani 500/600` and `Chakra Petch 400` for clean, readable, professional body text.
3. **Removed Heavy Corner Brackets**: Replaced `.hud-card` corner brackets with clean 1px rounded frosted glass cards (`backdrop-filter: blur(16px)`), subtle borders (`rgba(0, 243, 255, 0.15)`), and smooth hover elevation (`translateY(-4px)`).
4. **Preserved Particle Background**: Retained the interactive HTML5 `<canvas>` particle network and space ambient glow.
