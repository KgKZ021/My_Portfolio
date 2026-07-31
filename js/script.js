// ==========================================
// Main Script Entry Point (ES Modules)
// ==========================================

import { initParticles } from './modules/particles.js';
import { initTypewriter } from './modules/typewriter.js';
import { initHudEffects } from './modules/hud-effects.js';
import { initObserver } from './modules/observer.js';

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initTypewriter();
  initHudEffects();
  initObserver();
});
