export const BRAND = {
  name: 'WealthAdvisors',
  since: 2005,
  tagline: 'Grow your wealth with Integrity & Expertise.',
  location: 'Jaipur, Rajasthan',
  aum: '100+ Cr',
  families: '1,400+',
  amcs: 45,
  insurers: 15,
}

// A beautiful SVG-based hero background (no external image needed)
export const HERO_IMAGE = 'data:image/svg+xml,' + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0A2540"/>
      <stop offset="50%" style="stop-color:#0c3060"/>
      <stop offset="100%" style="stop-color:#0A2540"/>
    </linearGradient>
    <linearGradient id="building1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#1a4a7a;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#0d2f50;stop-opacity:1"/>
    </linearGradient>
    <linearGradient id="building2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#2260a0;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#0f3560;stop-opacity:1"/>
    </linearGradient>
    <linearGradient id="glass" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#0066FF;stop-opacity:0.15"/>
      <stop offset="100%" style="stop-color:#0056b3;stop-opacity:0.05"/>
    </linearGradient>
    <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#0d1f3c"/>
      <stop offset="100%" style="stop-color:#1a3a6e"/>
    </linearGradient>
  </defs>
  <!-- Sky -->
  <rect width="1200" height="700" fill="url(#sky)"/>
  <!-- Stars -->
  <circle cx="100" cy="80" r="1.5" fill="white" opacity="0.6"/>
  <circle cx="250" cy="40" r="1" fill="white" opacity="0.5"/>
  <circle cx="400" cy="60" r="1.5" fill="white" opacity="0.4"/>
  <circle cx="600" cy="30" r="1" fill="white" opacity="0.7"/>
  <circle cx="800" cy="50" r="1.5" fill="white" opacity="0.5"/>
  <circle cx="950" cy="35" r="1" fill="white" opacity="0.6"/>
  <circle cx="1100" cy="70" r="1.5" fill="white" opacity="0.4"/>
  <!-- Background buildings -->
  <rect x="0" y="300" width="120" height="400" fill="#0c2a4a" opacity="0.7"/>
  <rect x="80" y="250" width="100" height="450" fill="#0e2f52" opacity="0.7"/>
  <rect x="1050" y="280" width="150" height="420" fill="#0c2a4a" opacity="0.7"/>
  <!-- Main tall building center -->
  <rect x="450" y="80" width="200" height="620" fill="url(#building2)"/>
  <!-- Glass panels on main building -->
  <rect x="460" y="90" width="40" height="60" fill="url(#glass)" rx="1"/>
  <rect x="510" y="90" width="40" height="60" fill="url(#glass)" rx="1"/>
  <rect x="560" y="90" width="40" height="60" fill="url(#glass)" rx="1"/>
  <rect x="610" y="90" width="30" height="60" fill="url(#glass)" rx="1"/>
  <rect x="460" y="165" width="40" height="60" fill="url(#glass)" rx="1"/>
  <rect x="510" y="165" width="40" height="60" fill="url(#glass)" rx="1"/>
  <rect x="560" y="165" width="40" height="60" fill="url(#glass)" rx="1"/>
  <rect x="610" y="165" width="30" height="60" fill="url(#glass)" rx="1"/>
  <rect x="460" y="240" width="40" height="60" fill="url(#glass)" rx="1"/>
  <rect x="510" y="240" width="40" height="60" fill="url(#glass)" rx="1"/>
  <rect x="560" y="240" width="40" height="60" fill="url(#glass)" rx="1"/>
  <!-- Lit windows -->
  <rect x="470" y="100" width="20" height="40" fill="#FFD700" opacity="0.4" rx="1"/>
  <rect x="520" y="175" width="20" height="40" fill="#FFD700" opacity="0.3" rx="1"/>
  <rect x="570" y="100" width="20" height="40" fill="#FFD700" opacity="0.35" rx="1"/>
  <!-- Left building -->
  <rect x="200" y="180" width="180" height="520" fill="url(#building1)"/>
  <rect x="210" y="195" width="35" height="50" fill="url(#glass)" rx="1"/>
  <rect x="255" y="195" width="35" height="50" fill="url(#glass)" rx="1"/>
  <rect x="300" y="195" width="35" height="50" fill="url(#glass)" rx="1"/>
  <rect x="210" y="260" width="35" height="50" fill="url(#glass)" rx="1"/>
  <rect x="255" y="260" width="35" height="50" fill="url(#glass)" rx="1"/>
  <rect x="300" y="260" width="35" height="50" fill="url(#glass)" rx="1"/>
  <rect x="215" y="200" width="15" height="35" fill="#FFD700" opacity="0.3" rx="1"/>
  <rect x="305" y="265" width="15" height="35" fill="#FFD700" opacity="0.35" rx="1"/>
  <!-- Right building -->
  <rect x="720" y="150" width="220" height="550" fill="url(#building1)"/>
  <rect x="730" y="165" width="40" height="55" fill="url(#glass)" rx="1"/>
  <rect x="780" y="165" width="40" height="55" fill="url(#glass)" rx="1"/>
  <rect x="830" y="165" width="40" height="55" fill="url(#glass)" rx="1"/>
  <rect x="880" y="165" width="40" height="55" fill="url(#glass)" rx="1"/>
  <rect x="730" y="235" width="40" height="55" fill="url(#glass)" rx="1"/>
  <rect x="780" y="235" width="40" height="55" fill="url(#glass)" rx="1"/>
  <rect x="830" y="235" width="40" height="55" fill="url(#glass)" rx="1"/>
  <rect x="735" y="170" width="20" height="40" fill="#FFD700" opacity="0.3" rx="1"/>
  <rect x="835" y="240" width="20" height="40" fill="#FFD700" opacity="0.4" rx="1"/>
  <!-- Ground -->
  <rect x="0" y="650" width="1200" height="50" fill="#071828"/>
  <!-- Glow effect -->
  <ellipse cx="600" cy="650" rx="400" ry="60" fill="#0056b3" opacity="0.15"/>
</svg>
`)
