// Arham's Super Phonics Word Bank & Premium Artwork
// Total: 35 words across Sh, Ch, Oa, Ee with phonics breakdown & rich vector illustrations

const SOUND_CATEGORIES = {
  sh: {
    id: "sh",
    title: "Sh Words",
    badge: "🦈",
    color: "#0284c7",
    bgGradient: "linear-gradient(135deg, #e0f2fe, #bae6fd)",
    bannerColor: "#0284c7",
    phonicsTip: "The 'sh' sound says /sh/, like putting a finger to your lips: 'shhh'!",
    sampleSound: "sh"
  },
  ch: {
    id: "ch",
    title: "Ch Words",
    badge: "🥪",
    color: "#ea580c",
    bgGradient: "linear-gradient(135deg, #ffedd5, #fed7aa)",
    bannerColor: "#ea580c",
    phonicsTip: "The 'ch' sound says /ch/, like a happy train chugging 'chug-chug'!",
    sampleSound: "ch"
  },
  oa: {
    id: "oa",
    title: "Oa Words",
    badge: "⛵",
    color: "#7c3aed",
    bgGradient: "linear-gradient(135deg, #f3e8ff, #ddd6fe)",
    bannerColor: "#7c3aed",
    phonicsTip: "When 'o' and 'a' go walking, the 'o' does the talking! It says long /oʊ/ like Boat!",
    sampleSound: "oa"
  },
  ee: {
    id: "ee",
    title: "Ee Words",
    badge: "🐝",
    color: "#16a34a",
    bgGradient: "linear-gradient(135deg, #dcfce7, #bbf7d0)",
    bannerColor: "#16a34a",
    phonicsTip: "Double 'ee' makes a happy smiling /iː/ sound, like a cheerful bee buzzing!",
    sampleSound: "ee"
  }
};

const WORDS_DATA = [
  // ==================== SH WORDS (9) ====================
  {
    id: "sheep",
    word: "Sheep",
    cat: "sh",
    pre: "",
    sound: "sh",
    suf: "eep",
    sentence: "The fluffy sheep grazes peacefully on the green hill!",
    hint: "A gentle farm animal covered in soft white wool.",
    phonics: ["sh", "ee", "p"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sh-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#E0F2FE"/><stop offset="100%" stop-color="#BAE6FD"/></linearGradient>
        <linearGradient id="sh-hill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#86EFAC"/><stop offset="100%" stop-color="#22C55E"/></linearGradient>
        <linearGradient id="sh-wool" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="#E2E8F0"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#sh-bg)"/>
      <ellipse cx="60" cy="115" rx="55" ry="18" fill="url(#sh-hill)"/>
      <circle cx="28" cy="106" r="3" fill="#FFFFFF"/><circle cx="28" cy="106" r="1.2" fill="#FACC15"/>
      <circle cx="92" cy="108" r="3" fill="#FFFFFF"/><circle cx="92" cy="108" r="1.2" fill="#FACC15"/>
      <rect x="42" y="80" width="7" height="22" rx="3.5" fill="#334155"/>
      <rect x="71" y="80" width="7" height="22" rx="3.5" fill="#334155"/>
      <circle cx="45" cy="58" r="20" fill="url(#sh-wool)"/>
      <circle cx="75" cy="58" r="20" fill="url(#sh-wool)"/>
      <circle cx="60" cy="45" r="22" fill="url(#sh-wool)"/>
      <circle cx="60" cy="72" r="18" fill="url(#sh-wool)"/>
      <circle cx="36" cy="70" r="15" fill="url(#sh-wool)"/>
      <circle cx="84" cy="70" r="15" fill="url(#sh-wool)"/>
      <ellipse cx="60" cy="65" rx="15" ry="16" fill="#FED7AA"/>
      <ellipse cx="42" cy="58" rx="8" ry="4.5" fill="#F472B6" transform="rotate(-15 42 58)"/>
      <ellipse cx="78" cy="58" rx="8" ry="4.5" fill="#F472B6" transform="rotate(15 78 58)"/>
      <circle cx="54" cy="47" r="7" fill="#FFFFFF"/>
      <circle cx="66" cy="47" r="7" fill="#FFFFFF"/>
      <circle cx="60" cy="45" r="7" fill="#FFFFFF"/>
      <circle cx="54" cy="63" r="3.2" fill="#0F172A"/>
      <circle cx="66" cy="63" r="3.2" fill="#0F172A"/>
      <circle cx="55" cy="61.5" r="1.3" fill="#FFFFFF"/>
      <circle cx="67" cy="61.5" r="1.3" fill="#FFFFFF"/>
      <circle cx="48" cy="68" r="3.5" fill="#FDA4AF"/>
      <circle cx="72" cy="68" r="3.5" fill="#FDA4AF"/>
      <path d="M57 72 Q60 76 63 72" stroke="#E11D48" stroke-width="2" fill="none" stroke-linecap="round"/>
      <circle cx="60" cy="84" r="3" fill="#FACC15"/>
    </svg>`
  },
  {
    id: "fish",
    word: "Fish",
    cat: "sh",
    pre: "fi",
    sound: "sh",
    suf: "",
    sentence: "The vibrant clownfish swims playfully through bright bubbles!",
    hint: "It lives in water, breathes with gills, and has shiny fins.",
    phonics: ["f", "i", "sh"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fish-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ECFEFF"/><stop offset="100%" stop-color="#CFFAFE"/></linearGradient>
        <linearGradient id="fish-body" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FB923C"/><stop offset="100%" stop-color="#EA580C"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#fish-bg)"/>
      <circle cx="26" cy="36" r="6" fill="#38BDF8" opacity="0.65"/>
      <circle cx="24" cy="34" r="2" fill="#FFFFFF" opacity="0.8"/>
      <circle cx="36" cy="22" r="4" fill="#38BDF8" opacity="0.5"/>
      <circle cx="18" cy="54" r="3" fill="#38BDF8" opacity="0.5"/>
      <path d="M86 60 L106 40 Q101 60 106 80 Z" fill="#F97316"/>
      <path d="M88 60 L103 46 Q99 60 103 74 Z" fill="#FED7AA" opacity="0.8"/>
      <ellipse cx="58" cy="60" rx="34" ry="25" fill="url(#fish-body)"/>
      <path d="M52 35 Q59 60 52 85" stroke="#FFFFFF" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M72 40 Q77 60 72 80" stroke="#FFFFFF" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M58 35 Q66 18 76 33 Z" fill="#EA580C"/>
      <path d="M52 83 Q60 96 68 85 Z" fill="#EA580C"/>
      <ellipse cx="60" cy="64" rx="8" ry="5" fill="#FB923C" transform="rotate(-15 60 64)"/>
      <circle cx="40" cy="54" r="6.5" fill="#FFFFFF"/>
      <circle cx="39" cy="54" r="4" fill="#0F172A"/>
      <circle cx="38" cy="52" r="1.8" fill="#FFFFFF"/>
      <circle cx="41" cy="56" r="0.9" fill="#FFFFFF"/>
      <circle cx="44" cy="66" r="4" fill="#FDA4AF"/>
      <path d="M26 62 Q31 65 28 68" stroke="#9A3412" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "brush",
    word: "Brush",
    cat: "sh",
    pre: "bru",
    sound: "sh",
    suf: "",
    sentence: "I brush my teeth and hair to stay clean and neat!",
    hint: "We use it to tidy our hair or make our teeth sparkle.",
    phonics: ["b", "r", "u", "sh"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="brush-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FAF5FF"/><stop offset="100%" stop-color="#F3E8FF"/></linearGradient>
        <linearGradient id="handle-grad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#A78BFA"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#brush-bg)"/>
      <path d="M94 22 L96 28 L102 30 L96 32 L94 38 L92 32 L86 30 L92 28 Z" fill="#F59E0B"/>
      <path d="M24 36 L25 40 L29 41 L25 42 L24 46 L23 42 L19 41 L23 40 Z" fill="#EC4899"/>
      <rect x="54" y="66" width="12" height="42" rx="6" fill="url(#handle-grad)"/>
      <rect x="57" y="68" width="6" height="36" rx="3" fill="#DDD6FE"/>
      <ellipse cx="60" cy="44" rx="26" ry="24" fill="url(#handle-grad)"/>
      <ellipse cx="60" cy="44" rx="21" ry="19" fill="#C084FC"/>
      <g fill="#F43F5E">
        <circle cx="50" cy="35" r="3.2"/><circle cx="60" cy="33" r="3.2"/><circle cx="70" cy="35" r="3.2"/>
        <circle cx="45" cy="44" r="3.2"/><circle cx="55" cy="43" r="3.2"/><circle cx="65" cy="43" r="3.2"/><circle cx="75" cy="44" r="3.2"/>
        <circle cx="50" cy="53" r="3.2"/><circle cx="60" cy="54" r="3.2"/><circle cx="70" cy="53" r="3.2"/>
      </g>
      <ellipse cx="48" cy="35" rx="5" ry="9" fill="#FFFFFF" opacity="0.45" transform="rotate(-30 48 35)"/>
    </svg>`
  },
  {
    id: "ship",
    word: "Ship",
    cat: "sh",
    pre: "",
    sound: "sh",
    suf: "ip",
    sentence: "The great ocean ship voyages across sparkling blue seas!",
    hint: "A grand water vessel that travels across the deep ocean.",
    phonics: ["sh", "i", "p"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ship-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#EFF6FF"/><stop offset="100%" stop-color="#DBEAFE"/></linearGradient>
        <linearGradient id="hull-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0284C7"/><stop offset="100%" stop-color="#0369A1"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#ship-bg)"/>
      <circle cx="92" cy="24" r="9" fill="#FFFFFF" opacity="0.85"/>
      <circle cx="102" cy="24" r="12" fill="#FFFFFF" opacity="0.85"/>
      <circle cx="68" cy="18" r="6" fill="#E2E8F0"/>
      <circle cx="74" cy="10" r="8" fill="#F1F5F9"/>
      <rect x="64" y="28" width="12" height="18" fill="#EF4444" rx="2"/>
      <rect x="62" y="26" width="16" height="5" fill="#1E293B" rx="1.5"/>
      <rect x="40" y="42" width="42" height="18" fill="#FFFFFF" rx="4"/>
      <rect x="46" y="46" width="7" height="7" rx="1.5" fill="#38BDF8"/>
      <rect x="58" y="46" width="7" height="7" rx="1.5" fill="#38BDF8"/>
      <rect x="70" y="46" width="7" height="7" rx="1.5" fill="#38BDF8"/>
      <path d="M20 58 L100 58 L90 84 L30 84 Z" fill="url(#hull-grad)"/>
      <path d="M22 62 L98 62 L93 72 L27 72 Z" fill="#0EA5E9"/>
      <line x1="28" y1="84" x2="92" y2="84" stroke="#DC2626" stroke-width="4"/>
      <circle cx="44" cy="74" r="3.5" fill="#FACC15"/>
      <circle cx="60" cy="74" r="3.5" fill="#FACC15"/>
      <circle cx="76" cy="74" r="3.5" fill="#FACC15"/>
      <path d="M5 88 Q25 80 45 88 T85 88 T125 88 L125 120 L0 120 L0 88 Z" fill="#0284C7"/>
      <path d="M0 98 Q25 90 55 98 T105 98 T135 98 L135 120 L0 120 Z" fill="#0369A1"/>
    </svg>`
  },
  {
    id: "shrimp",
    word: "Shrimp",
    cat: "sh",
    pre: "",
    sound: "sh",
    suf: "rimp",
    sentence: "The cute little pink shrimp curls its tail under the sea!",
    hint: "A small pink ocean crustacean with long feelers.",
    phonics: ["sh", "r", "i", "m", "p"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shrimp-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FFF1F2"/><stop offset="100%" stop-color="#FFE4E6"/></linearGradient>
        <linearGradient id="shrimp-body" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FB7185"/><stop offset="100%" stop-color="#E11D48"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#shrimp-bg)"/>
      <circle cx="86" cy="28" r="5" fill="#FDA4AF" opacity="0.6"/>
      <circle cx="96" cy="20" r="7" fill="#FDA4AF" opacity="0.6"/>
      <path d="M38 44 Q16 22 10 32" stroke="#FB7185" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M42 42 Q28 15 20 20" stroke="#FB7185" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M38 52 C38 40 55 38 70 44 C85 52 89 68 82 84 C76 94 62 96 54 88 C48 80 54 72 62 70"
            stroke="url(#shrimp-body)" stroke-width="20" fill="none" stroke-linecap="round"/>
      <path d="M40 52 C40 44 55 42 66 46 C78 52 82 66 78 78"
            stroke="#FDA4AF" stroke-width="12" fill="none" stroke-linecap="round"/>
      <path d="M50 90 L38 100 Q48 96 54 92 Z" fill="#BE123C"/>
      <path d="M54 92 L44 106 Q56 98 60 94 Z" fill="#E11D48"/>
      <circle cx="39" cy="46" r="5" fill="#0F172A"/>
      <circle cx="38" cy="44.5" r="2" fill="#FFFFFF"/>
      <path d="M46 66 L40 76 M54 70 L50 80 M64 74 L62 84" stroke="#BE123C" stroke-width="3" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "dish",
    word: "Dish",
    cat: "sh",
    pre: "di",
    sound: "sh",
    suf: "",
    sentence: "Mom served a fresh red strawberry on my shining dish!",
    hint: "A round dining plate used to serve food.",
    phonics: ["d", "i", "sh"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dish-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#F8FAFC"/><stop offset="100%" stop-color="#E2E8F0"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#dish-bg)"/>
      <rect x="16" y="44" width="4.5" height="42" rx="2" fill="#94A3B8"/>
      <path d="M13 30 L13 44 L23 44 L23 30 M16 30 L16 38 M20 30 L20 38" stroke="#94A3B8" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <rect x="100" y="46" width="4.5" height="40" rx="2" fill="#94A3B8"/>
      <ellipse cx="102" cy="34" rx="7" ry="11" fill="#94A3B8"/>
      <ellipse cx="60" cy="62" rx="38" ry="34" fill="#CBD5E1"/>
      <ellipse cx="60" cy="60" rx="36" ry="32" fill="#0284C7"/>
      <ellipse cx="60" cy="60" rx="31" ry="27" fill="#FFFFFF"/>
      <ellipse cx="60" cy="60" rx="23" ry="19" fill="#F1F5F9"/>
      <circle cx="60" cy="58" r="11" fill="#EF4444"/>
      <polygon points="56,50 60,46 64,50" fill="#22C55E"/>
      <circle cx="58" cy="56" r="1" fill="#FDE047"/><circle cx="62" cy="57" r="1" fill="#FDE047"/><circle cx="60" cy="61" r="1" fill="#FDE047"/>
      <path d="M74 44 L76 48 L80 49 L76 51 L74 55 L72 51 L68 49 L72 48 Z" fill="#F59E0B"/>
    </svg>`
  },
  {
    id: "shop",
    word: "Shop",
    cat: "sh",
    pre: "",
    sound: "sh",
    suf: "op",
    sentence: "We visit the cheerful neighborhood toy shop!",
    hint: "A store where people buy treats, gifts, or toys.",
    phonics: ["sh", "o", "p"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shop-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FEF3C7"/><stop offset="100%" stop-color="#FDE68A"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#shop-bg)"/>
      <rect x="24" y="44" width="72" height="56" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
      <rect x="30" y="56" width="24" height="28" rx="3" fill="#BAE6FD"/>
      <line x1="42" y1="56" x2="42" y2="84" stroke="#FFFFFF" stroke-width="2"/>
      <line x1="30" y1="70" x2="54" y2="70" stroke="#FFFFFF" stroke-width="2"/>
      <circle cx="37" cy="76" r="4" fill="#EC4899"/>
      <rect x="62" y="56" width="26" height="44" rx="3" fill="#F43F5E"/>
      <circle cx="82" cy="78" r="3" fill="#FACC15"/>
      <rect x="66" y="62" width="18" height="14" rx="2" fill="#FFE4E6"/>
      <g>
        <path d="M18 44 L23 28 L33 28 L30 44 Z" fill="#EF4444"/>
        <path d="M30 44 L33 28 L43 28 L40 44 Z" fill="#FFFFFF"/>
        <path d="M40 44 L43 28 L53 28 L50 44 Z" fill="#EF4444"/>
        <path d="M50 44 L53 28 L63 28 L60 44 Z" fill="#FFFFFF"/>
        <path d="M60 44 L63 28 L73 28 L70 44 Z" fill="#EF4444"/>
        <path d="M70 44 L73 28 L83 28 L80 44 Z" fill="#FFFFFF"/>
        <path d="M80 44 L83 28 L93 28 L90 44 Z" fill="#EF4444"/>
        <path d="M90 44 L93 28 L101 30 L98 44 Z" fill="#FFFFFF"/>
      </g>
      <rect x="40" y="16" width="40" height="15" rx="4" fill="#F59E0B" stroke="#D97706" stroke-width="1.5"/>
      <text x="60" y="27" font-size="9" font-weight="900" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">SHOP</text>
    </svg>`
  },
  {
    id: "shark",
    word: "Shark",
    cat: "sh",
    pre: "",
    sound: "sh",
    suf: "ark",
    sentence: "The friendly shark glides fast through ocean waves!",
    hint: "A fast ocean swimmer with a tall triangular dorsal fin.",
    phonics: ["sh", "ar", "k"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shark-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#E0F2FE"/><stop offset="100%" stop-color="#BAE6FD"/></linearGradient>
        <linearGradient id="shark-body" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#64748B"/><stop offset="100%" stop-color="#334155"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#shark-bg)"/>
      <path d="M56 46 C58 24 72 18 78 28 C76 38 70 46 68 48 Z" fill="#334155"/>
      <path d="M90 56 L112 34 Q106 58 112 82 Z" fill="#334155"/>
      <path d="M18 60 C28 42 68 42 94 54 C88 78 48 82 18 60 Z" fill="url(#shark-body)"/>
      <path d="M22 62 C38 76 66 78 88 62 C80 74 60 78 34 70 Z" fill="#F8FAFC"/>
      <path d="M44 64 L36 82 Q48 76 52 66 Z" fill="#334155"/>
      <circle cx="34" cy="53" r="4" fill="#0F172A"/>
      <circle cx="33" cy="51.5" r="1.5" fill="#FFFFFF"/>
      <path d="M28 62 Q36 67 42 61" stroke="#0F172A" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <polygon points="32,62 34,65 36,62" fill="#FFFFFF"/>
      <polygon points="36,62 38,65 40,62" fill="#FFFFFF"/>
      <line x1="48" y1="54" x2="46" y2="60" stroke="#1E293B" stroke-width="2" stroke-linecap="round"/>
      <line x1="52" y1="54" x2="50" y2="60" stroke="#1E293B" stroke-width="2" stroke-linecap="round"/>
      <path d="M5 92 Q25 84 50 92 T100 92 T125 92" stroke="#0284C7" stroke-width="5" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "shelf",
    word: "Shelf",
    cat: "sh",
    pre: "",
    sound: "sh",
    suf: "elf",
    sentence: "I keep my favorite storybooks on the wooden shelf!",
    hint: "A flat board on the wall for books and toys.",
    phonics: ["sh", "e", "l", "f"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shelf-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FEFCE8"/><stop offset="100%" stop-color="#FEF08A"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#shelf-bg)"/>
      <rect x="14" y="80" width="92" height="16" rx="4" fill="#B45309"/>
      <rect x="14" y="80" width="92" height="5" rx="2" fill="#D97706"/>
      <path d="M28 96 L28 108 L38 96 Z" fill="#78350F"/>
      <path d="M82 96 L82 108 L92 96 Z" fill="#78350F"/>
      <rect x="24" y="42" width="13" height="38" rx="2.5" fill="#EF4444"/>
      <line x1="27" y1="46" x2="27" y2="76" stroke="#FECACA" stroke-width="2"/>
      <rect x="40" y="36" width="14" height="44" rx="2.5" fill="#3B82F6"/>
      <line x1="44" y1="42" x2="44" y2="76" stroke="#BFDBFE" stroke-width="2.5"/>
      <rect x="57" y="46" width="11" height="34" rx="2.5" fill="#FACC15"/>
      <rect x="71" y="44" width="11" height="36" rx="2.5" fill="#10B981" transform="rotate(18 71 80)"/>
      <path d="M88 66 L98 66 L96 80 L90 80 Z" fill="#F97316"/>
      <circle cx="93" cy="60" r="7" fill="#22C55E"/>
      <circle cx="87" cy="62" r="5" fill="#16A34A"/>
      <circle cx="99" cy="62" r="5" fill="#16A34A"/>
    </svg>`
  },

  // ==================== CH WORDS (8) ====================
  {
    id: "chat",
    word: "Chat",
    cat: "ch",
    pre: "",
    sound: "ch",
    suf: "at",
    sentence: "Friends love to chat and laugh together during playtime!",
    hint: "Talking in a friendly, cheerful way.",
    phonics: ["ch", "a", "t"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="chat-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FFF7ED"/><stop offset="100%" stop-color="#FFEDD5"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#chat-bg)"/>
      <path d="M28 30 C48 30 68 30 68 48 C68 64 52 64 42 64 L32 76 L35 64 C24 64 18 60 18 48 C18 30 28 30 28 30 Z" fill="#FB923C"/>
      <circle cx="34" cy="48" r="4" fill="#FFFFFF"/>
      <circle cx="44" cy="48" r="4" fill="#FFFFFF"/>
      <circle cx="54" cy="48" r="4" fill="#FFFFFF"/>
      <path d="M72 48 C88 48 104 50 104 68 C104 82 90 82 82 82 L76 94 L78 82 C68 82 62 78 62 68 C62 50 72 48 72 48 Z" fill="#06B6D4"/>
      <circle cx="78" cy="65" r="2.5" fill="#FFFFFF"/>
      <circle cx="88" cy="65" r="2.5" fill="#FFFFFF"/>
      <path d="M78 72 Q83 77 88 72" stroke="#FFFFFF" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "bench",
    word: "Bench",
    cat: "ch",
    pre: "ben",
    sound: "ch",
    suf: "",
    sentence: "We sit on the wooden park bench to rest and share snacks!",
    hint: "A long seat made of wood in a garden or park.",
    phonics: ["b", "e", "n", "ch"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bench-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#F0FDF4"/><stop offset="100%" stop-color="#DCFCE7"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#bench-bg)"/>
      <ellipse cx="60" cy="104" rx="52" ry="12" fill="#86EFAC"/>
      <path d="M30 68 L25 98 M37 72 L32 98" stroke="#334155" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M85 68 L80 98 M92 72 L87 98" stroke="#334155" stroke-width="4.5" stroke-linecap="round"/>
      <rect x="20" y="36" width="80" height="9" rx="3" fill="#D97706"/>
      <rect x="20" y="49" width="80" height="9" rx="3" fill="#B45309"/>
      <polygon points="16,66 104,66 96,77 12,77" fill="#F59E0B"/>
      <polygon points="12,77 96,77 94,81 12,81" fill="#D97706"/>
      <circle cx="100" cy="98" r="3.5" fill="#EC4899"/>
      <circle cx="100" cy="98" r="1.5" fill="#FACC15"/>
    </svg>`
  },
  {
    id: "lunch",
    word: "Lunch",
    cat: "ch",
    pre: "lun",
    sound: "ch",
    suf: "",
    sentence: "My lunchbox has a yummy sandwich and a crunchy red apple!",
    hint: "A delicious meal we eat in the middle of the school day.",
    phonics: ["l", "u", "n", "ch"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lunch-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FEF2F2"/><stop offset="100%" stop-color="#FEE2E2"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#lunch-bg)"/>
      <rect x="18" y="52" width="84" height="46" rx="9" fill="#3B82F6"/>
      <rect x="22" y="55" width="76" height="7" rx="2.5" fill="#60A5FA"/>
      <path d="M26 50 L56 26 L56 50 Z" fill="#FDE68A"/>
      <path d="M30 46 L56 34" stroke="#22C55E" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M32 49 L56 38" stroke="#EF4444" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="78" cy="44" r="15" fill="#EF4444"/>
      <circle cx="74" cy="40" r="3.5" fill="#FECACA" opacity="0.7"/>
      <path d="M78 29 Q80 23 84 25" stroke="#78350F" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <ellipse cx="85" cy="27" rx="4.5" ry="2.5" fill="#22C55E" transform="rotate(-30 85 27)"/>
      <rect x="68" y="64" width="24" height="28" rx="3.5" fill="#F59E0B"/>
      <line x1="80" y1="56" x2="80" y2="64" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "chin",
    word: "Chin",
    cat: "ch",
    pre: "",
    sound: "ch",
    suf: "in",
    sentence: "Hold your chin high with a proud and happy smile!",
    hint: "The bottom part of your face below your mouth.",
    phonics: ["ch", "i", "n"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="chin-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FFFBEB"/><stop offset="100%" stop-color="#FEF3C7"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#chin-bg)"/>
      <circle cx="60" cy="48" r="38" fill="#FED7AA"/>
      <path d="M22 42 C28 16 92 16 98 42 C88 28 76 26 60 28 C44 26 32 28 22 42 Z" fill="#78350F"/>
      <circle cx="47" cy="46" r="4.5" fill="#0F172A"/>
      <circle cx="73" cy="46" r="4.5" fill="#0F172A"/>
      <circle cx="46" cy="44.5" r="1.5" fill="#FFFFFF"/>
      <circle cx="72" cy="44.5" r="1.5" fill="#FFFFFF"/>
      <circle cx="40" cy="54" r="4.5" fill="#FDA4AF"/>
      <circle cx="80" cy="54" r="4.5" fill="#FDA4AF"/>
      <path d="M52 58 Q60 66 68 58" stroke="#E11D48" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M54 78 Q60 84 66 78" stroke="#F97316" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <path d="M20 98 L48 84" stroke="#EF4444" stroke-width="5" stroke-linecap="round"/>
      <polygon points="56,82 44,77 46,89" fill="#EF4444"/>
    </svg>`
  },
  {
    id: "cheek",
    word: "Cheek",
    cat: "ch",
    pre: "",
    sound: "ch",
    suf: "eek",
    sentence: "Grandma gave me a warm kiss on my rosy cheek!",
    hint: "The soft round side of your face below your eye.",
    phonics: ["ch", "ee", "k"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cheek-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FDF2F8"/><stop offset="100%" stop-color="#FCE7F3"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#cheek-bg)"/>
      <circle cx="60" cy="60" r="40" fill="#FED7AA"/>
      <path d="M40 52 Q47 45 54 52" stroke="#1E293B" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M66 52 Q73 45 80 52" stroke="#1E293B" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="36" cy="65" r="11" fill="#FB7185"/>
      <circle cx="84" cy="65" r="11" fill="#FB7185"/>
      <path d="M36 60 L37 63 L40 64 L37 65 L36 68 L35 65 L32 64 L35 63 Z" fill="#FFFFFF"/>
      <path d="M84 60 L85 63 L88 64 L85 65 L84 68 L83 65 L80 64 L83 63 Z" fill="#FFFFFF"/>
      <path d="M48 66 Q60 80 72 66" stroke="#E11D48" stroke-width="4" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "chess",
    word: "Chess",
    cat: "ch",
    pre: "",
    sound: "ch",
    suf: "ess",
    sentence: "Chess is an exciting board game with kings and knight horses!",
    hint: "A board game played with pieces on black and white squares.",
    phonics: ["ch", "e", "ss"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="chess-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FAF5FF"/><stop offset="100%" stop-color="#EDE9FE"/></linearGradient>
        <linearGradient id="knight-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FDE047"/><stop offset="100%" stop-color="#D97706"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#chess-bg)"/>
      <rect x="22" y="92" width="76" height="14" rx="3.5" fill="#334155"/>
      <rect x="32" y="92" width="12" height="14" fill="#F8FAFC"/>
      <rect x="56" y="92" width="12" height="14" fill="#F8FAFC"/>
      <rect x="80" y="92" width="12" height="14" fill="#F8FAFC"/>
      <path d="M40 86 L80 86 L76 75 L44 75 Z" fill="#B45309"/>
      <path d="M45 75 C45 66 38 56 46 40 C52 28 68 22 74 34 C72 36 68 34 66 38 C76 44 76 60 75 75 Z" fill="url(#knight-grad)"/>
      <path d="M46 40 C38 44 34 52 42 56 C46 56 52 52 50 46 Z" fill="url(#knight-grad)"/>
      <circle cx="56" cy="40" r="3" fill="#78350F"/>
      <circle cx="55" cy="39" r="1" fill="#FFFFFF"/>
      <path d="M72 36 Q80 42 76 50 Q82 56 76 62" stroke="#92400E" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M86 28 L88 32 L92 33 L88 34 L86 38 L84 34 L80 33 L84 32 Z" fill="#FACC15"/>
    </svg>`
  },
  {
    id: "chop",
    word: "Chop",
    cat: "ch",
    pre: "",
    sound: "ch",
    suf: "op",
    sentence: "We chop fresh sweet carrots to cook in dinner soup!",
    hint: "To cut something into smaller pieces with a knife.",
    phonics: ["ch", "o", "p"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="chop-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ECFDF5"/><stop offset="100%" stop-color="#D1FAE5"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#chop-bg)"/>
      <rect x="18" y="72" width="84" height="28" rx="7" fill="#D97706"/>
      <rect x="22" y="74" width="76" height="7" rx="2.5" fill="#F59E0B"/>
      <ellipse cx="38" cy="68" rx="9" ry="6.5" fill="#F97316"/>
      <ellipse cx="56" cy="68" rx="9" ry="6.5" fill="#F97316"/>
      <ellipse cx="78" cy="67" rx="14" ry="8" fill="#F97316"/>
      <path d="M88 67 L100 62 M88 67 L102 68 M88 67 L99 74" stroke="#22C55E" stroke-width="3" stroke-linecap="round"/>
      <g transform="rotate(-25 60 40)">
        <path d="M38 34 L82 34 L78 52 L38 50 Z" fill="#E2E8F0"/>
        <path d="M38 50 L78 52" stroke="#94A3B8" stroke-width="2.5"/>
        <rect x="18" y="37" width="20" height="11" rx="3.5" fill="#0F172A"/>
        <circle cx="23" cy="42.5" r="1.8" fill="#CBD5E1"/>
        <circle cx="31" cy="42.5" r="1.8" fill="#CBD5E1"/>
      </g>
      <path d="M46 54 L46 62 M52 50 L52 60" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "chimp",
    word: "Chimp",
    cat: "ch",
    pre: "",
    sound: "ch",
    suf: "imp",
    sentence: "The playful little chimp swings happily holding a banana!",
    hint: "A clever and playful monkey friend.",
    phonics: ["ch", "i", "m", "p"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="chimp-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FEF3C7"/><stop offset="100%" stop-color="#FDE68A"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#chimp-bg)"/>
      <circle cx="30" cy="56" r="16" fill="#78350F"/>
      <circle cx="30" cy="56" r="10" fill="#FED7AA"/>
      <circle cx="90" cy="56" r="16" fill="#78350F"/>
      <circle cx="90" cy="56" r="10" fill="#FED7AA"/>
      <circle cx="60" cy="58" r="32" fill="#78350F"/>
      <path d="M44 48 C44 38 54 38 60 45 C66 38 76 38 76 48 C76 60 68 64 60 64 C52 64 44 60 44 48 Z" fill="#FED7AA"/>
      <ellipse cx="60" cy="70" rx="20" ry="15" fill="#FED7AA"/>
      <circle cx="52" cy="48" r="3.5" fill="#0F172A"/>
      <circle cx="68" cy="48" r="3.5" fill="#0F172A"/>
      <circle cx="51" cy="46.5" r="1.3" fill="#FFFFFF"/>
      <circle cx="67" cy="46.5" r="1.3" fill="#FFFFFF"/>
      <circle cx="56" cy="64" r="1.8" fill="#78350F"/>
      <circle cx="64" cy="64" r="1.8" fill="#78350F"/>
      <path d="M48 72 Q60 82 72 72" stroke="#78350F" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M42 94 Q60 106 78 94 Q70 110 42 94 Z" fill="#FACC15"/>
    </svg>`
  },

  // ==================== OA WORDS (8) ====================
  {
    id: "road",
    word: "Road",
    cat: "oa",
    pre: "r",
    sound: "oa",
    suf: "d",
    sentence: "The long winding road carries cars across the sunny hills!",
    hint: "A paved path for cars, bikes, and buses to travel.",
    phonics: ["r", "oa", "d"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="road-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#E0F2FE"/><stop offset="100%" stop-color="#BAE6FD"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#road-bg)"/>
      <circle cx="18" cy="65" r="38" fill="#86EFAC"/>
      <circle cx="102" cy="65" r="42" fill="#4ADE80"/>
      <polygon points="53,46 67,46 100,112 20,112" fill="#334155"/>
      <line x1="60" y1="50" x2="60" y2="56" stroke="#FACC15" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="62" x2="60" y2="72" stroke="#FACC15" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="60" y1="78" x2="60" y2="92" stroke="#FACC15" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="60" y1="98" x2="60" y2="110" stroke="#FACC15" stroke-width="6" stroke-linecap="round"/>
      <rect x="52" y="70" width="16" height="10" rx="3.5" fill="#EF4444"/>
      <rect x="55" y="66" width="10" height="6" rx="2" fill="#93C5FD"/>
      <circle cx="55" cy="80" r="2" fill="#0F172A"/><circle cx="65" cy="80" r="2" fill="#0F172A"/>
    </svg>`
  },
  {
    id: "goal",
    word: "Goal",
    cat: "oa",
    pre: "g",
    sound: "oa",
    suf: "l",
    sentence: "The soccer ball flew into the net for an exciting goal!",
    hint: "Kicking the soccer ball right into the goal net.",
    phonics: ["g", "oa", "l"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goal-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ECFDF5"/><stop offset="100%" stop-color="#D1FAE5"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#goal-bg)"/>
      <rect x="10" y="86" width="100" height="24" rx="5" fill="#22C55E"/>
      <rect x="20" y="32" width="7" height="56" rx="2.5" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.5"/>
      <rect x="93" y="32" width="7" height="56" rx="2.5" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.5"/>
      <rect x="20" y="32" width="80" height="7" rx="2.5" fill="#FFFFFF" stroke="#94A3B8" stroke-width="1.5"/>
      <g stroke="#CBD5E1" stroke-width="1.5" opacity="0.85">
        <line x1="27" y1="46" x2="93" y2="46"/><line x1="27" y1="60" x2="93" y2="60"/><line x1="27" y1="74" x2="93" y2="74"/>
        <line x1="40" y1="39" x2="40" y2="86"/><line x1="55" y1="39" x2="55" y2="86"/><line x1="70" y1="39" x2="70" y2="86"/><line x1="82" y1="39" x2="82" y2="86"/>
      </g>
      <circle cx="76" cy="48" r="13" fill="#FFFFFF" stroke="#0F172A" stroke-width="2.5"/>
      <polygon points="76,41 81,45 79,51 73,51 71,45" fill="#0F172A"/>
      <path d="M52 48 L60 48 M48 44 L58 46 M50 52 L60 50" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "goat",
    word: "Goat",
    cat: "oa",
    pre: "g",
    sound: "oa",
    suf: "t",
    sentence: "The cute goat hops on rocks and rings its golden bell!",
    hint: "A horned farm animal that loves to climb and say maa!",
    phonics: ["g", "oa", "t"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goat-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#F0FDF4"/><stop offset="100%" stop-color="#DCFCE7"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#goat-bg)"/>
      <ellipse cx="60" cy="112" rx="52" ry="18" fill="#86EFAC"/>
      <rect x="42" y="78" width="6.5" height="24" rx="2.5" fill="#E2E8F0"/>
      <rect x="68" y="78" width="6.5" height="24" rx="2.5" fill="#E2E8F0"/>
      <ellipse cx="56" cy="68" rx="25" ry="17" fill="#F8FAFC"/>
      <ellipse cx="74" cy="52" rx="13" ry="15" fill="#E2E8F0"/>
      <path d="M72 38 Q70 24 60 26" stroke="#CA8A04" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M78 38 Q78 22 86 24" stroke="#CA8A04" stroke-width="4" fill="none" stroke-linecap="round"/>
      <ellipse cx="86" cy="52" rx="7" ry="3.5" fill="#FDA4AF" transform="rotate(20 86 52)"/>
      <circle cx="74" cy="48" r="3" fill="#0F172A"/>
      <circle cx="73" cy="47" r="1.2" fill="#FFFFFF"/>
      <path d="M74 65 L71 74 L77 65 Z" fill="#CBD5E1"/>
      <circle cx="64" cy="62" r="4" fill="#FACC15"/>
    </svg>`
  },
  {
    id: "boat",
    word: "Boat",
    cat: "oa",
    pre: "b",
    sound: "oa",
    suf: "t",
    sentence: "Our red sailboat floats peacefully across the sunny lake!",
    hint: "A small water vessel with sails or oars.",
    phonics: ["b", "oa", "t"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="boat-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#E0F2FE"/><stop offset="100%" stop-color="#BAE6FD"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#boat-bg)"/>
      <circle cx="96" cy="24" r="11" fill="#FACC15"/>
      <rect x="58" y="24" width="4.5" height="50" rx="2.5" fill="#78350F"/>
      <path d="M62 26 L94 58 L62 58 Z" fill="#EF4444"/>
      <path d="M58 32 L34 58 L58 58 Z" fill="#FFFFFF"/>
      <polygon points="58,24 58,17 50,20.5" fill="#F59E0B"/>
      <path d="M20 72 L100 72 L88 92 L32 92 Z" fill="#0284C7"/>
      <path d="M24 72 L96 72 L90 82 L30 82 Z" fill="#38BDF8"/>
      <path d="M8 94 Q25 86 42 94 T75 94 T108 94 T125 94" stroke="#0284C7" stroke-width="4.5" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "coat",
    word: "Coat",
    cat: "oa",
    pre: "c",
    sound: "oa",
    suf: "t",
    sentence: "Wear your cozy warm blue coat when it is chilly outside!",
    hint: "Warm outer clothing worn over other clothes in cold weather.",
    phonics: ["c", "oa", "t"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="coat-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#EFF6FF"/><stop offset="100%" stop-color="#DBEAFE"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#coat-bg)"/>
      <path d="M36 34 L84 34 L94 96 L26 96 Z" fill="#2563EB"/>
      <path d="M36 34 L16 66 L26 70 L42 50 Z" fill="#1D4ED8"/>
      <path d="M84 34 L104 66 L94 70 L78 50 Z" fill="#1D4ED8"/>
      <path d="M40 32 C48 42 72 42 80 32 C86 42 76 48 60 46 C44 48 34 42 40 32 Z" fill="#F8FAFC"/>
      <line x1="60" y1="46" x2="60" y2="96" stroke="#1E3A8A" stroke-width="3.5"/>
      <circle cx="60" cy="54" r="3.5" fill="#FACC15"/>
      <circle cx="60" cy="68" r="3.5" fill="#FACC15"/>
      <circle cx="60" cy="82" r="3.5" fill="#FACC15"/>
      <rect x="34" y="74" width="16" height="12" rx="2.5" fill="#1D4ED8"/>
      <rect x="70" y="74" width="16" height="12" rx="2.5" fill="#1D4ED8"/>
    </svg>`
  },
  {
    id: "toad",
    word: "Toad",
    cat: "oa",
    pre: "t",
    sound: "oa",
    suf: "d",
    sentence: "The green bumpy toad hops on a floating water lily pad!",
    hint: "An amphibian with bumpy skin that hops like a frog.",
    phonics: ["t", "oa", "d"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="toad-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#F0FDF4"/><stop offset="100%" stop-color="#DCFCE7"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#toad-bg)"/>
      <ellipse cx="60" cy="98" rx="50" ry="14" fill="#4ADE80"/>
      <path d="M60 98 L110 98" stroke="#15803D" stroke-width="2.5"/>
      <ellipse cx="30" cy="76" rx="15" ry="11" fill="#15803D"/>
      <ellipse cx="90" cy="76" rx="15" ry="11" fill="#15803D"/>
      <ellipse cx="60" cy="70" rx="30" ry="22" fill="#22C55E"/>
      <ellipse cx="60" cy="74" rx="20" ry="13" fill="#FEF08A"/>
      <circle cx="45" cy="46" r="11" fill="#22C55E"/>
      <circle cx="75" cy="46" r="11" fill="#22C55E"/>
      <circle cx="45" cy="46" r="7" fill="#FACC15"/>
      <circle cx="75" cy="46" r="7" fill="#FACC15"/>
      <circle cx="46" cy="45" r="4" fill="#0F172A"/>
      <circle cx="76" cy="45" r="4" fill="#0F172A"/>
      <circle cx="44" cy="43" r="1.5" fill="#FFFFFF"/>
      <circle cx="74" cy="43" r="1.5" fill="#FFFFFF"/>
      <circle cx="50" cy="62" r="3" fill="#15803D"/>
      <circle cx="70" cy="62" r="3" fill="#15803D"/>
      <circle cx="60" cy="58" r="2.5" fill="#15803D"/>
      <path d="M52 68 Q60 74 68 68" stroke="#166534" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "roast",
    word: "Roast",
    cat: "oa",
    pre: "r",
    sound: "oa",
    suf: "st",
    sentence: "The golden roast dinner on the platter smells delicious!",
    hint: "Meat cooked warmly in the oven until golden brown.",
    phonics: ["r", "oa", "s", "t"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="roast-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FFFBEB"/><stop offset="100%" stop-color="#FEF3C7"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#roast-bg)"/>
      <ellipse cx="60" cy="88" rx="48" ry="16" fill="#CBD5E1"/>
      <ellipse cx="60" cy="85" rx="44" ry="13" fill="#F8FAFC"/>
      <ellipse cx="58" cy="64" rx="28" ry="20" fill="#D97706"/>
      <ellipse cx="56" cy="60" rx="24" ry="16" fill="#F59E0B"/>
      <path d="M80 58 L98 44" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round"/>
      <circle cx="98" cy="42" r="4" fill="#FFFFFF"/>
      <circle cx="100" cy="47" r="4" fill="#FFFFFF"/>
      <circle cx="78" cy="58" r="11" fill="#D97706"/>
      <path d="M46 34 Q42 22 48 14" stroke="#F97316" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.6"/>
      <path d="M60 32 Q56 20 62 12" stroke="#F97316" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.6"/>
      <circle cx="38" cy="74" r="3.5" fill="#22C55E"/>
      <circle cx="45" cy="77" r="3.5" fill="#16A34A"/>
    </svg>`
  },
  {
    id: "toast",
    word: "Toast",
    cat: "oa",
    pre: "t",
    sound: "oa",
    suf: "st",
    sentence: "I enjoy warm crispy toast with melting golden butter!",
    hint: "Sliced bread made warm and crispy in a toaster.",
    phonics: ["t", "oa", "s", "t"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="toast-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FEFCE8"/><stop offset="100%" stop-color="#FEF08A"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#toast-bg)"/>
      <path d="M28 46 C28 30 42 28 60 28 C78 28 92 30 92 46 L88 94 C88 98 84 100 80 100 L40 100 C36 100 32 98 32 94 Z" fill="#B45309"/>
      <path d="M32 46 C32 34 45 32 60 32 C75 32 88 34 88 46 L84 92 C84 94 82 96 78 96 L42 96 C38 96 36 94 36 92 Z" fill="#FDE047"/>
      <ellipse cx="60" cy="62" rx="20" ry="18" fill="#F59E0B" opacity="0.75"/>
      <rect x="50" y="52" width="18" height="16" rx="3.5" fill="#FEF08A" stroke="#EAB308" stroke-width="2"/>
      <ellipse cx="59" cy="72" rx="14" ry="5" fill="#FEF08A"/>
      <path d="M86 36 L88 39 L92 40 L88 41 L86 44 L85 41 L81 40 L85 39 Z" fill="#F59E0B"/>
    </svg>`
  },

  // ==================== EE WORDS (10) ====================
  {
    id: "street",
    word: "Street",
    cat: "ee",
    pre: "str",
    sound: "ee",
    suf: "t",
    sentence: "Bicycles and cars travel down our friendly town street!",
    hint: "A paved public road lined with pretty houses.",
    phonics: ["s", "t", "r", "ee", "t"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="street-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#E0F2FE"/><stop offset="100%" stop-color="#BAE6FD"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#street-bg)"/>
      <rect x="16" y="42" width="28" height="34" fill="#F472B6" rx="2.5"/>
      <polygon points="14,42 30,26 46,42" fill="#FB7185"/>
      <rect x="25" y="58" width="10" height="18" fill="#FDF2F8" rx="2"/>
      <rect x="48" y="36" width="30" height="40" fill="#FACC15" rx="2.5"/>
      <polygon points="46,36 63,20 80,36" fill="#F97316"/>
      <rect x="55" y="46" width="9" height="9" fill="#93C5FD" rx="1.5"/>
      <rect x="80" y="46" width="26" height="30" fill="#2DD4BF" rx="2.5"/>
      <polygon points="78,46 93,32 108,46" fill="#0D9488"/>
      <rect x="8" y="76" width="104" height="36" rx="5" fill="#475569"/>
      <line x1="18" y1="94" x2="36" y2="94" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="52" y1="94" x2="70" y2="94" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="86" y1="94" x2="104" y2="94" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round"/>
      <rect x="82" y="28" width="3.5" height="48" fill="#1E293B"/>
      <circle cx="83.5" cy="28" r="6" fill="#FEF08A"/>
    </svg>`
  },
  {
    id: "bee",
    word: "Bee",
    cat: "ee",
    pre: "b",
    sound: "ee",
    suf: "",
    sentence: "The fuzzy bumblebee makes sweet golden honey in its hive!",
    hint: "A yellow and black flying insect that buzzes around blossoms.",
    phonics: ["b", "ee"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bee-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FEFCE8"/><stop offset="100%" stop-color="#FEF08A"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#bee-bg)"/>
      <ellipse cx="50" cy="36" rx="13" ry="20" fill="#BAE6FD" opacity="0.8" transform="rotate(-20 50 36)"/>
      <ellipse cx="70" cy="36" rx="13" ry="20" fill="#BAE6FD" opacity="0.8" transform="rotate(20 70 36)"/>
      <path d="M12 76 Q24 92 36 76 Q44 64 40 54" stroke="#94A3B8" stroke-width="2.5" stroke-dasharray="3 3" fill="none"/>
      <ellipse cx="60" cy="65" rx="26" ry="22" fill="#FACC15"/>
      <path d="M52 45 Q61 52 52 85" stroke="#1E293B" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M68 45 Q77 52 68 85" stroke="#1E293B" stroke-width="7" fill="none" stroke-linecap="round"/>
      <polygon points="34,65 28,65 34,69" fill="#1E293B"/>
      <circle cx="78" cy="60" r="4" fill="#0F172A"/>
      <circle cx="77" cy="58.5" r="1.5" fill="#FFFFFF"/>
      <circle cx="76" cy="68" r="3.5" fill="#FDA4AF"/>
      <path d="M80 65 Q84 68 86 64" stroke="#1E293B" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M78 46 Q84 38 86 42" stroke="#1E293B" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <circle cx="87" cy="42" r="2.5" fill="#1E293B"/>
    </svg>`
  },
  {
    id: "reed",
    word: "Reed",
    cat: "ee",
    pre: "r",
    sound: "ee",
    suf: "d",
    sentence: "Tall green reeds sway gently in the breeze by the duck pond!",
    hint: "Tall, slender grass-like plants growing in water or wet ground.",
    phonics: ["r", "ee", "d"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="reed-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#F0FDF4"/><stop offset="100%" stop-color="#DCFCE7"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#reed-bg)"/>
      <ellipse cx="60" cy="106" rx="50" ry="14" fill="#BAE6FD"/>
      <path d="M28 104 Q45 100 60 104 T92 104" stroke="#38BDF8" stroke-width="2.5" fill="none"/>
      <path d="M42 106 Q46 60 40 20" stroke="#15803D" stroke-width="4.5" fill="none" stroke-linecap="round"/>
      <path d="M60 106 Q60 50 64 16" stroke="#16A34A" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M78 106 Q74 65 80 24" stroke="#15803D" stroke-width="4.5" fill="none" stroke-linecap="round"/>
      <path d="M44 80 Q28 65 22 68" stroke="#22C55E" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <path d="M62 70 Q80 55 88 58" stroke="#22C55E" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <rect x="36" y="22" width="9" height="26" rx="4.5" fill="#78350F"/>
      <rect x="60" y="18" width="9" height="30" rx="4.5" fill="#5A280B"/>
      <rect x="76" y="26" width="9" height="24" rx="4.5" fill="#78350F"/>
    </svg>`
  },
  {
    id: "queen",
    word: "Queen",
    cat: "ee",
    pre: "qu",
    sound: "ee",
    suf: "n",
    sentence: "The kind queen wears a sparkling jewel crown and royal gown!",
    hint: "A female royal ruler who wears a sparkling crown.",
    phonics: ["qu", "ee", "n"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="queen-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FAF5FF"/><stop offset="100%" stop-color="#F3E8FF"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#queen-bg)"/>
      <polygon points="34,44 40,22 52,32 60,16 68,32 80,22 86,44" fill="#FACC15"/>
      <circle cx="40" cy="22" r="3" fill="#EF4444"/>
      <circle cx="60" cy="16" r="3.5" fill="#3B82F6"/>
      <circle cx="80" cy="22" r="3" fill="#EF4444"/>
      <circle cx="60" cy="62" r="24" fill="#FED7AA"/>
      <circle cx="40" cy="58" r="11" fill="#78350F"/>
      <circle cx="80" cy="58" r="11" fill="#78350F"/>
      <path d="M36 84 C36 84 44 76 60 76 C76 76 84 84 84 84 L92 112 L28 112 Z" fill="#7C3AED"/>
      <path d="M42 80 C52 86 68 86 78 80 L74 92 C64 96 56 96 46 92 Z" fill="#F8FAFC"/>
      <circle cx="53" cy="60" r="3.5" fill="#0F172A"/>
      <circle cx="67" cy="60" r="3.5" fill="#0F172A"/>
      <circle cx="52" cy="58.5" r="1.3" fill="#FFFFFF"/>
      <circle cx="66" cy="58.5" r="1.3" fill="#FFFFFF"/>
      <circle cx="47" cy="66" r="4" fill="#FDA4AF"/>
      <circle cx="73" cy="66" r="4" fill="#FDA4AF"/>
      <path d="M55 69 Q60 73 65 69" stroke="#E11D48" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "sweet",
    word: "Sweet",
    cat: "ee",
    pre: "sw",
    sound: "ee",
    suf: "t",
    sentence: "The giant rainbow swirl lollipop is colorful and deliciously sweet!",
    hint: "Having the pleasant sugary taste of candy or honey.",
    phonics: ["sw", "ee", "t"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sweet-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FDF2F8"/><stop offset="100%" stop-color="#FCE7F3"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#sweet-bg)"/>
      <rect x="57" y="65" width="6" height="48" rx="3" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <path d="M60 68 L48 62 Q55 70 48 78 Z" fill="#F43F5E"/>
      <path d="M60 68 L72 62 Q65 70 72 78 Z" fill="#F43F5E"/>
      <circle cx="60" cy="68" r="4" fill="#FB7185"/>
      <circle cx="60" cy="42" r="28" fill="#F43F5E"/>
      <path d="M60 42 C60 28 76 28 76 42 C76 56 44 56 44 42 C44 18 84 18 84 42"
            stroke="#FEF08A" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M60 42 C60 48 54 48 54 42 C54 32 72 32 72 42"
            stroke="#38BDF8" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M90 22 L92 26 L96 27 L92 28 L90 32 L88 28 L84 27 L88 26 Z" fill="#F59E0B"/>
    </svg>`
  },
  {
    id: "eel",
    word: "Eel",
    cat: "ee",
    pre: "",
    sound: "ee",
    suf: "l",
    sentence: "The teal electric eel zips like lightning through the ocean!",
    hint: "A long, snakelike fish that swims in deep ocean waters.",
    phonics: ["ee", "l"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="eel-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ECFEFF"/><stop offset="100%" stop-color="#CFFAFE"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#eel-bg)"/>
      <circle cx="30" cy="28" r="4.5" fill="#38BDF8" opacity="0.6"/>
      <circle cx="45" cy="20" r="7" fill="#38BDF8" opacity="0.6"/>
      <polygon points="46,74 52,74 48,82 54,82 44,92 48,84 42,84" fill="#FACC15"/>
      <polygon points="84,32 88,32 85,38 90,38 82,46 85,40 80,40" fill="#FACC15"/>
      <path d="M25 56 C35 36 52 36 65 52 C78 68 90 68 98 48"
            stroke="#06B6D4" stroke-width="16" fill="none" stroke-linecap="round"/>
      <path d="M25 56 C35 40 52 40 65 54 C78 68 90 66 96 50"
            stroke="#67E8F9" stroke-width="7" fill="none" stroke-linecap="round"/>
      <circle cx="23" cy="56" r="9" fill="#0891B2"/>
      <circle cx="21" cy="53" r="3" fill="#0F172A"/>
      <circle cx="20" cy="52" r="1.2" fill="#FFFFFF"/>
      <path d="M18 59 Q22 63 25 59" stroke="#0F172A" stroke-width="2" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "see",
    word: "See",
    cat: "ee",
    pre: "s",
    sound: "ee",
    suf: "",
    sentence: "I open my bright eyes wide to see the colorful world!",
    hint: "To look with your eyes at things and people around you.",
    phonics: ["s", "ee"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="see-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#F0F9FF"/><stop offset="100%" stop-color="#E0F2FE"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#see-bg)"/>
      <ellipse cx="60" cy="60" rx="44" ry="30" fill="#FFFFFF" stroke="#38BDF8" stroke-width="3.5"/>
      <circle cx="60" cy="60" r="22" fill="#0284C7"/>
      <circle cx="60" cy="60" r="17" fill="#38BDF8"/>
      <circle cx="60" cy="60" r="11" fill="#0F172A"/>
      <circle cx="54" cy="53" r="5.5" fill="#FFFFFF"/>
      <circle cx="67" cy="66" r="3" fill="#FFFFFF"/>
      <path d="M20 44 Q60 24 100 44" stroke="#0369A1" stroke-width="4.5" fill="none" stroke-linecap="round"/>
      <path d="M98 26 L100 30 L104 31 L100 33 L98 37 L96 33 L92 31 L96 30 Z" fill="#F59E0B"/>
    </svg>`
  },
  {
    id: "sweep",
    word: "Sweep",
    cat: "ee",
    pre: "sw",
    sound: "ee",
    suf: "p",
    sentence: "I help mom sweep up every speck of dust with the broom!",
    hint: "Cleaning a floor with a bristled broom.",
    phonics: ["sw", "ee", "p"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sweep-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FEFCE8"/><stop offset="100%" stop-color="#FEF08A"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#sweep-bg)"/>
      <line x1="90" y1="18" x2="48" y2="76" stroke="#B45309" stroke-width="8" stroke-linecap="round"/>
      <line x1="90" y1="18" x2="48" y2="76" stroke="#D97706" stroke-width="5" stroke-linecap="round"/>
      <rect x="41" y="72" width="16" height="7" rx="2.5" fill="#DC2626" transform="rotate(-35 49 75)"/>
      <path d="M46 76 L20 100 C22 106 36 108 56 94 L54 82 Z" fill="#FACC15"/>
      <path d="M25 98 L48 80 M34 102 L50 82 M44 102 L53 84" stroke="#CA8A04" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="18" cy="102" r="3" fill="#38BDF8"/>
      <circle cx="14" cy="94" r="4" fill="#F59E0B"/>
      <path d="M10 84 L12 87 L15 88 L12 89 L10 92 L9 89 L6 88 L9 87 Z" fill="#EC4899"/>
      <path d="M14 108 Q40 110 62 100" stroke="#93C5FD" stroke-width="3" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "peel",
    word: "Peel",
    cat: "ee",
    pre: "p",
    sound: "ee",
    suf: "l",
    sentence: "Peel the yellow banana skin down to eat the sweet fruit!",
    hint: "To take off the outer skin of a fruit like an apple or banana.",
    phonics: ["p", "ee", "l"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="peel-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FEF9C3"/><stop offset="100%" stop-color="#FEF08A"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#peel-bg)"/>
      <rect x="56" y="88" width="9" height="16" rx="2.5" fill="#65A30D"/>
      <path d="M40 66 C40 82 48 94 60 94 C72 94 80 82 80 66 Z" fill="#FACC15"/>
      <path d="M40 66 Q26 50 20 58 Q32 74 42 70 Z" fill="#EAB308"/>
      <path d="M80 66 Q94 50 100 58 Q88 74 78 70 Z" fill="#EAB308"/>
      <path d="M44 66 C44 38 52 24 60 24 C68 24 76 38 76 66 Z" fill="#FEFCE8"/>
      <ellipse cx="60" cy="24" rx="7" ry="3.5" fill="#FDE047"/>
      <circle cx="54" cy="44" r="2.5" fill="#713F12"/>
      <circle cx="66" cy="44" r="2.5" fill="#713F12"/>
      <path d="M56 50 Q60 55 64 50" stroke="#713F12" stroke-width="2" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "tree",
    word: "Tree",
    cat: "ee",
    pre: "tr",
    sound: "ee",
    suf: "",
    sentence: "Red apples grow on branches of the big leafy green tree!",
    hint: "A tall woody plant with a trunk, branches, and green leaves.",
    phonics: ["t", "r", "ee"],
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tree-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#F0FDF4"/><stop offset="100%" stop-color="#DCFCE7"/></linearGradient>
      </defs>
      <rect width="120" height="120" rx="26" fill="url(#tree-bg)"/>
      <ellipse cx="60" cy="108" rx="50" ry="12" fill="#86EFAC"/>
      <path d="M48 68 L44 104 L76 104 L72 68 Z" fill="#78350F"/>
      <path d="M56 70 L54 100" stroke="#9A3412" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="40" cy="52" r="20" fill="#22C55E"/>
      <circle cx="80" cy="52" r="20" fill="#22C55E"/>
      <circle cx="60" cy="36" r="26" fill="#4ADE80"/>
      <circle cx="42" cy="38" r="18" fill="#16A34A"/>
      <circle cx="78" cy="38" r="18" fill="#16A34A"/>
      <circle cx="44" cy="46" r="5" fill="#EF4444"/><polygon points="44,40 46,38 48,40" fill="#15803D"/>
      <circle cx="70" cy="40" r="5" fill="#EF4444"/><polygon points="70,34 72,32 74,34" fill="#15803D"/>
      <circle cx="58" cy="56" r="5" fill="#EF4444"/><polygon points="58,50 60,48 62,50" fill="#15803D"/>
      <circle cx="80" cy="60" r="5" fill="#EF4444"/><polygon points="80,54 82,52 84,54" fill="#15803D"/>
    </svg>`
  }
];

// Helper functions for easy filtering & selection
function getWordsByCategory(cat) {
  if (!cat || cat === 'all') return WORDS_DATA;
  return WORDS_DATA.filter(w => w.cat === cat);
}

function getRandomWord(cat = 'all', excludeId = null) {
  let list = getWordsByCategory(cat);
  if (excludeId && list.length > 1) {
    list = list.filter(w => w.id !== excludeId);
  }
  return list[Math.floor(Math.random() * list.length)];
}

function getRandomWords(count = 4, cat = 'all') {
  const pool = [...getWordsByCategory(cat)];
  const shuffled = pool.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
