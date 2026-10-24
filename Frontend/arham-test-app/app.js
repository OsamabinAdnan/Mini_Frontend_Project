/**
 * Arham's Super Phonics Adventure - Interactive Engine
 * Designed for 6-Year-Old Phonics & Spelling Test Preparation
 */

// =========================================================
// 1. Audio Engine (Web Audio API Synthesizer)
// Zero external dependencies - ultra reliable and instant!
// =========================================================
const AudioSynth = {
  ctx: null,
  isMuted: false,

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },

  playTone(freq, type = 'sine', duration = 0.2, startDelay = 0, gainLevel = 0.2) {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      const startTime = this.ctx.currentTime + startDelay;
      osc.type = type;
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(gainLevel, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  },

  playPop() {
    this.playTone(480, 'sine', 0.08, 0, 0.25);
  },

  playCorrect() {
    // Joyful arpeggio: C5, E5, G5, C6
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      this.playTone(freq, 'triangle', 0.25, idx * 0.08, 0.25);
    });
  },

  playStar() {
    // Star sparkle chime
    const notes = [784, 988, 1175, 1568];
    notes.forEach((freq, idx) => {
      this.playTone(freq, 'sine', 0.35, idx * 0.07, 0.28);
    });
  },

  playGentleTryAgain() {
    // Gentle encouraging wobble (soft downward tone, never harsh!)
    this.playTone(392, 'sine', 0.18, 0, 0.2);
    this.playTone(349, 'sine', 0.25, 0.12, 0.18);
  },

  playTrainWhistle() {
    // Train choo-choo chord
    this.playTone(587.33, 'triangle', 0.35, 0, 0.2);
    this.playTone(739.99, 'triangle', 0.35, 0, 0.2);
    this.playTone(587.33, 'triangle', 0.45, 0.3, 0.2);
    this.playTone(739.99, 'triangle', 0.45, 0.3, 0.2);
  },

  playFanfare() {
    // Royal celebration chords
    const chord1 = [523.25, 659.25, 783.99]; // C
    const chord2 = [587.33, 739.99, 880.00]; // D
    const chord3 = [783.99, 987.77, 1174.66, 1567.98]; // G

    chord1.forEach(f => this.playTone(f, 'triangle', 0.3, 0, 0.2));
    chord2.forEach(f => this.playTone(f, 'triangle', 0.3, 0.25, 0.2));
    chord3.forEach(f => this.playTone(f, 'triangle', 0.7, 0.55, 0.25));
  }
};

// =========================================================
// 2. Speech Synthesis Engine (Kid-Friendly Voice Pronunciation)
// =========================================================
const SpeechEngine = {
  isSpeaking: false,
  isSlowMode: true, // Kid mode by default
  currentUtterances: [],

  stopAll() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.currentUtterances = [];
    this.isSpeaking = false;
  },

  speak(text, onEndCallback = null) {
    if (!('speechSynthesis' in window)) return;
    this.stopAll();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = this.isSlowMode ? 0.75 : 0.95;
    utterance.pitch = 1.15; // Cheerful, slightly higher pitch for kids
    utterance.lang = 'en-US';

    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(v =>
      v.name.includes('Natural') ||
      v.name.includes('Samantha') ||
      v.name.includes('Google US English') ||
      (v.lang.startsWith('en') && !v.name.includes('David'))
    );
    if (preferred) utterance.voice = preferred;

    utterance.onstart = () => { this.isSpeaking = true; };
    utterance.onend = () => {
      this.isSpeaking = false;
      if (onEndCallback) onEndCallback();
    };
    utterance.onerror = () => { this.isSpeaking = false; };

    window.speechSynthesis.speak(utterance);
  },

  /**
   * SPELL LETTER-BY-LETTER:
   * Guarantees that double letters like 'ee' are NEVER read as a single 'e'!
   * For 'Sheep' it distinctly speaks: "S... H... E... E... P... Sheep!"
   * Also triggers visual letter karaoke lighting on the card!
   */
  speakLetterByLetter(wordObj, cardId = null) {
    if (!('speechSynthesis' in window)) return;
    this.stopAll();

    const letters = wordObj.word.toUpperCase().split('');
    const cardEl = cardId ? document.getElementById(cardId) : null;
    const letterSpans = cardEl ? cardEl.querySelectorAll('.spell-letter') : [];

    let delay = 0;
    const letterGap = this.isSlowMode ? 750 : 550;

    letters.forEach((letter, index) => {
      setTimeout(() => {
        // Highlight active letter on card
        letterSpans.forEach((sp, idx) => {
          sp.classList.toggle('active-spell', idx === index);
        });

        // Speak individual letter
        const u = new SpeechSynthesisUtterance(letter);
        u.rate = 0.7;
        u.pitch = 1.2;
        u.lang = 'en-US';
        window.speechSynthesis.speak(u);

        // Sound pop
        AudioSynth.playTone(400 + index * 45, 'sine', 0.12, 0, 0.22);
      }, delay);

      delay += letterGap;
    });

    // Remove letter highlight and pronounce the complete word
    setTimeout(() => {
      letterSpans.forEach(sp => sp.classList.remove('active-spell'));

      const u = new SpeechSynthesisUtterance(wordObj.word);
      u.rate = 0.8;
      u.pitch = 1.1;
      u.lang = 'en-US';
      window.speechSynthesis.speak(u);

      AudioSynth.playCorrect();
    }, delay + 200);
  },

  /**
   * PHONICS BLEND:
   * Speaks the phonics sounds: e.g. "sh... ee... p... Sheep!"
   */
  speakPhonicsBlend(wordObj) {
    if (!('speechSynthesis' in window)) return;
    this.stopAll();

    const parts = wordObj.phonics || [wordObj.word];
    let delay = 0;

    parts.forEach((sound, index) => {
      setTimeout(() => {
        const u = new SpeechSynthesisUtterance(sound);
        u.rate = 0.65;
        u.pitch = 1.2;
        u.lang = 'en-US';
        window.speechSynthesis.speak(u);
        AudioSynth.playTone(380 + index * 50, 'sine', 0.14, 0, 0.2);
      }, delay);
      delay += 700;
    });

    // Finally say the full word
    setTimeout(() => {
      const u = new SpeechSynthesisUtterance(wordObj.word);
      u.rate = 0.8;
      u.pitch = 1.1;
      u.lang = 'en-US';
      window.speechSynthesis.speak(u);
      AudioSynth.playPop();
    }, delay + 200);
  },

  speakDigraph(catId) {
    const tip = SOUND_CATEGORIES[catId];
    if (tip) {
      this.speak(`${tip.title}! ${tip.phonicsTip}`);
    }
  }
};

// =========================================================
// 3. Application State & Storage
// =========================================================
const AppState = {
  childName: localStorage.getItem('arham_child_name') || 'Arham',
  stars: parseInt(localStorage.getItem('arham_phonics_stars') || '0', 10),
  masteredWords: JSON.parse(localStorage.getItem('arham_mastered_words') || '[]'),
  currentMode: 'safari',
  activeSafariFilter: 'all',

  // Game states
  streak: 0,

  // Missing sound game
  missingCurrentWord: null,

  // Listen detective game
  detectiveTarget: null,
  detectiveOptions: [],

  // Letter train
  builderTarget: null,
  builderCurrentLetters: [],
  builderAvailableTiles: [],

  // Memory game
  memoryCards: [],
  memoryFlipped: [],
  memoryMatchesCount: 0,
  memoryLock: false,

  // Monday Test Simulator
  testQuestions: [],
  testCurrentIndex: 0,
  testScore: 0,
  testWrongWords: [],

  save() {
    localStorage.setItem('arham_phonics_stars', this.stars.toString());
    localStorage.setItem('arham_mastered_words', JSON.stringify(this.masteredWords));
    localStorage.setItem('arham_child_name', this.childName);
  },

  addStar(amount = 1) {
    this.stars += amount;
    this.save();
    UI.updateStarsDisplay();
    AudioSynth.playStar();
    Confetti.burst(15);
  },

  toggleMastery(wordId) {
    const idx = this.masteredWords.indexOf(wordId);
    if (idx > -1) {
      this.masteredWords.splice(idx, 1);
    } else {
      this.masteredWords.push(wordId);
      this.addStar(1);
    }
    this.save();
  }
};

// =========================================================
// 4. Confetti Burst Particle Generator
// =========================================================
const Confetti = {
  canvas: null,
  ctx: null,
  particles: [],
  animId: null,

  init() {
    this.canvas = document.getElementById('confetti-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    window.addEventListener('resize', () => this.resize());
  },

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  },

  burst(count = 35) {
    this.init();
    if (!this.canvas || !this.ctx) return;

    const colors = ['#f59e0b', '#ec4899', '#06b6d4', '#10b981', '#8b5cf6', '#ef4444'];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: window.innerWidth / 2 + (Math.random() - 0.5) * 120,
        y: window.innerHeight / 2 - 80 + (Math.random() - 0.5) * 80,
        vx: (Math.random() - 0.5) * 14,
        vy: -Math.random() * 12 - 4,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 10,
        life: 1,
        decay: Math.random() * 0.02 + 0.015
      });
    }

    if (!this.animId) {
      this.animate();
    }
  },

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.rotation += p.vRot;
      p.life -= p.decay;

      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.globalAlpha = p.life;
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      this.animId = requestAnimationFrame(() => this.animate());
    } else {
      this.animId = null;
    }
  }
};

// =========================================================
// 5. UI Controller & Game Modes
// =========================================================
const UI = {
  init() {
    this.updateStarsDisplay();
    this.renderSafariCards();
    this.bindEvents();
    this.initMissingSoundGame();
    this.initListenGame();
    this.initBuilderGame();
    this.initMemoryGame();
  },

  updateStarsDisplay() {
    const starEl = document.getElementById('star-count-text');
    if (starEl) starEl.textContent = AppState.stars;
  },

  bindEvents() {
    // Mode Navigation Tabs
    const modeTabs = document.querySelectorAll('.mode-tab-btn');
    modeTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const mode = tab.getAttribute('data-mode');
        this.switchMode(mode);
        AudioSynth.playPop();
      });
    });

    // Sound Filter Chips (Safari Mode)
    const filterChips = document.querySelectorAll('.filter-chip');
    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        AppState.activeSafariFilter = chip.getAttribute('data-filter');
        this.renderSafariCards();
        AudioSynth.playPop();

        // Speak the sound if a specific category was clicked
        if (AppState.activeSafariFilter !== 'all') {
          SpeechEngine.speakDigraph(AppState.activeSafariFilter);
        }
      });
    });

    // Speed Toggle Button
    const speedBtn = document.getElementById('btn-voice-speed');
    if (speedBtn) {
      speedBtn.addEventListener('click', () => {
        SpeechEngine.isSlowMode = !SpeechEngine.isSlowMode;
        speedBtn.textContent = SpeechEngine.isSlowMode ? '🐢 Turtle Speed' : '🐰 Bunny Speed';
        AudioSynth.playPop();
        SpeechEngine.speak(SpeechEngine.isSlowMode ? 'Turtle speed on!' : 'Bunny speed on!');
      });
    }

    // Sound Mute Toggle
    const muteBtn = document.getElementById('btn-sound-mute');
    if (muteBtn) {
      muteBtn.addEventListener('click', () => {
        AudioSynth.isMuted = !AudioSynth.isMuted;
        muteBtn.textContent = AudioSynth.isMuted ? '🔇 Sound Off' : '🔊 Sound On';
        AudioSynth.playPop();
      });
    }

    // Print Checklist Button
    const printBtn = document.getElementById('btn-print-sheet');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Modal Close
    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        document.getElementById('certificate-modal').classList.remove('active');
      });
    }
  },

  switchMode(mode) {
    AppState.currentMode = mode;

    // Update active tab button
    document.querySelectorAll('.mode-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
    });

    // Update active panel
    document.querySelectorAll('.activity-panel').forEach(panel => {
      panel.classList.toggle('active', panel.id === `panel-${mode}`);
    });

    // Trigger mode initializations if needed
    if (mode === 'missing') this.newMissingQuestion();
    if (mode === 'listen') this.newListenQuestion();
    if (mode === 'builder') this.newBuilderWord();
    if (mode === 'memory') this.initMemoryGame();
    if (mode === 'test') this.startMondayTest();
  },

  // -------------------------------------------------------
  // Safari Mode (Flashcards)
  // -------------------------------------------------------
  renderSafariCards() {
    const grid = document.getElementById('safari-cards-grid');
    if (!grid) return;

    const words = getWordsByCategory(AppState.activeSafariFilter);
    grid.innerHTML = '';

    // Update Phonics Tip Banner
    const tipWrap = document.getElementById('phonics-tip-wrap');
    if (tipWrap) {
      if (AppState.activeSafariFilter === 'all') {
        tipWrap.innerHTML = `
          <div class="tip-icon">✨</div>
          <div class="tip-text">
            <strong>Welcome Explorer!</strong> Tap any card to hear the word and phonics breakdown. Master all 35 words for Monday!
          </div>
        `;
      } else {
        const cat = SOUND_CATEGORIES[AppState.activeSafariFilter];
        tipWrap.innerHTML = `
          <div class="tip-icon">${cat.badge}</div>
          <div class="tip-text">
            <strong>${cat.title}:</strong> ${cat.phonicsTip}
          </div>
          <button class="btn-listen-sound" onclick="SpeechEngine.speakDigraph('${cat.id}')">
            🔊 Hear Sound
          </button>
        `;
      }
    }

    words.forEach(w => {
      const isMastered = AppState.masteredWords.includes(w.id);
      const card = document.createElement('div');
      card.className = `word-card cat-${w.cat}`;
      card.id = `card-${w.id}`;

      // Build letter-by-letter spans so that each letter lights up during spelling!
      const targetStart = w.pre.length;
      const targetEnd = targetStart + w.sound.length;
      const coloredWordHtml = w.word.split('').map((char, idx) => {
        const isTarget = (idx >= targetStart && idx < targetEnd);
        return `<span class="spell-letter ${isTarget ? 'sound-char ' + w.cat : ''}" data-idx="${idx}">${char}</span>`;
      }).join('');

      // Phonics breakdown badges
      const phonicsBadges = w.phonics.map(p => {
        const isTarget = p.toLowerCase() === w.sound.toLowerCase();
        return `<span class="phonics-pill ${isTarget ? 'is-target' : ''}">${p}</span>`;
      }).join('');

      card.innerHTML = `
        <span class="card-badge-tag">${w.sound.toUpperCase()}</span>
        <button class="mastery-star-btn ${isMastered ? 'learned' : ''}" title="Star this word!" onclick="UI.toggleCardStar('${w.id}')">
          ⭐
        </button>
        <div class="card-illustration-wrap" onclick="SpeechEngine.speak('${w.word}')">
          ${w.svg}
        </div>
        <div class="card-word-title" id="word-title-${w.id}">${coloredWordHtml}</div>
        <div class="phonics-pills-row">${phonicsBadges}</div>
        <div class="card-sentence">"${w.sentence}"</div>
        <div class="card-buttons-row">
          <button class="btn-card-action primary" title="Hear full word" onclick="SpeechEngine.speak('${w.word}')">
            🔊 Say
          </button>
          <button class="btn-card-action spell-btn" title="Spell every single letter" onclick="SpeechEngine.speakLetterByLetter(WORDS_DATA.find(x => x.id === '${w.id}'), 'card-${w.id}')">
            🔤 Spell Letters
          </button>
          <button class="btn-card-action secondary" title="Phonics sound-out" onclick="SpeechEngine.speakPhonicsBlend(WORDS_DATA.find(x => x.id === '${w.id}'))">
            🎵 Phonics
          </button>
        </div>
      `;

      grid.appendChild(card);
    });
  },

  toggleCardStar(wordId) {
    AppState.toggleMastery(wordId);
    const starBtn = document.querySelector(`#card-${wordId} .mastery-star-btn`);
    if (starBtn) {
      starBtn.classList.toggle('learned', AppState.masteredWords.includes(wordId));
    }
  },

  // -------------------------------------------------------
  // Mode 2: Missing Sound Pop
  // -------------------------------------------------------
  initMissingSoundGame() {
    const quadBtns = document.querySelectorAll('.choice-btn-big');
    quadBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const chosen = btn.getAttribute('data-sound');
        this.checkMissingAnswer(chosen, btn);
      });
    });
  },

  newMissingQuestion() {
    const word = getRandomWord('all', AppState.missingCurrentWord ? AppState.missingCurrentWord.id : null);
    AppState.missingCurrentWord = word;

    const imgBox = document.getElementById('missing-img-box');
    const wordDisplay = document.getElementById('missing-word-display');
    const streakEl = document.getElementById('missing-streak-count');

    if (imgBox) imgBox.innerHTML = word.svg;
    if (streakEl) streakEl.textContent = AppState.streak;

    if (wordDisplay) {
      wordDisplay.innerHTML = `
        <span>${word.pre}</span>
        <div class="missing-slot-box">?</div>
        <span>${word.suf}</span>
      `;
    }

    // Reset button animations
    document.querySelectorAll('.choice-btn-big').forEach(b => {
      b.classList.remove('correct-anim', 'wrong-anim');
    });

    // Speak prompt
    SpeechEngine.speak(`What sound is missing in: ${word.word}?`);
  },

  checkMissingAnswer(chosenSound, btnElement) {
    if (!AppState.missingCurrentWord) return;
    const correctSound = AppState.missingCurrentWord.sound.toLowerCase();

    if (chosenSound.toLowerCase() === correctSound) {
      btnElement.classList.add('correct-anim');
      AudioSynth.playCorrect();
      AppState.streak += 1;
      AppState.addStar(1);

      // Fill in slot
      const slot = document.querySelector('.missing-slot-box');
      if (slot) {
        slot.textContent = correctSound;
        slot.style.background = '#86efac';
        slot.style.borderColor = '#16a34a';
        slot.style.color = '#15803d';
      }

      SpeechEngine.speak(`Yes! ${correctSound} makes ${AppState.missingCurrentWord.word}!`);

      setTimeout(() => {
        this.newMissingQuestion();
      }, 1300);
    } else {
      btnElement.classList.add('wrong-anim');
      AudioSynth.playGentleTryAgain();
      AppState.streak = 0;
      const streakEl = document.getElementById('missing-streak-count');
      if (streakEl) streakEl.textContent = 0;
      SpeechEngine.speak(`Try again! Listen carefully: ${AppState.missingCurrentWord.word}`);
      setTimeout(() => {
        btnElement.classList.remove('wrong-anim');
      }, 600);
    }
  },

  // -------------------------------------------------------
  // Mode 3: Listen & Find (Detective Quiz)
  // -------------------------------------------------------
  initListenGame() {
    const listenAgainBtn = document.getElementById('btn-listen-again');
    if (listenAgainBtn) {
      listenAgainBtn.addEventListener('click', () => {
        if (AppState.detectiveTarget) {
          SpeechEngine.speak(`Find the picture for: ${AppState.detectiveTarget.word}`);
          AudioSynth.playPop();
        }
      });
    }
  },

  newListenQuestion() {
    const target = getRandomWord('all');
    AppState.detectiveTarget = target;

    // Pick 3 distractors
    const pool = WORDS_DATA.filter(w => w.id !== target.id);
    const shuffled = pool.sort(() => 0.5 - Math.random());
    const options = [target, shuffled[0], shuffled[1], shuffled[2]].sort(() => 0.5 - Math.random());
    AppState.detectiveOptions = options;

    const grid = document.getElementById('detective-grid');
    if (!grid) return;
    grid.innerHTML = '';

    options.forEach(opt => {
      const card = document.createElement('div');
      card.className = 'detective-pic-card';
      card.innerHTML = `
        <div class="pic-wrap">${opt.svg}</div>
      `;
      card.addEventListener('click', () => {
        this.checkDetectiveAnswer(opt, card);
      });
      grid.appendChild(card);
    });

    SpeechEngine.speak(`Can you find: ${target.word}?`);
  },

  checkDetectiveAnswer(selectedWord, cardEl) {
    if (!AppState.detectiveTarget) return;

    if (selectedWord.id === AppState.detectiveTarget.id) {
      cardEl.style.borderColor = '#22c55e';
      cardEl.style.boxShadow = '0 8px 0 #15803d';
      AudioSynth.playCorrect();
      AppState.addStar(1);
      SpeechEngine.speak(`Super job! That is ${selectedWord.word}!`);

      setTimeout(() => {
        this.newListenQuestion();
      }, 1400);
    } else {
      cardEl.style.borderColor = '#ef4444';
      AudioSynth.playGentleTryAgain();
      SpeechEngine.speak(`That is ${selectedWord.word}. Let's find: ${AppState.detectiveTarget.word}!`);
      setTimeout(() => {
        cardEl.style.borderColor = '#e2e8f0';
      }, 800);
    }
  },

  // -------------------------------------------------------
  // Mode 4: Letter Train (Half-Word Fill-In Exercise)
  // e.g. "fish" as "fi_ _" or "shop" as "s_o_p"
  // -------------------------------------------------------
  initBuilderGame() {
    // Mode switcher buttons: Phonics Blanks (fi_ _) vs Mixed Blanks (s_o_p)
    const phonicsModeBtn = document.getElementById('btn-train-phonics');
    const mixedModeBtn = document.getElementById('btn-train-mixed');

    if (phonicsModeBtn) {
      phonicsModeBtn.addEventListener('click', () => {
        AppState.trainPattern = 'phonics';
        phonicsModeBtn.classList.add('active');
        if (mixedModeBtn) mixedModeBtn.classList.remove('active');
        AudioSynth.playPop();
        this.newBuilderWord();
      });
    }

    if (mixedModeBtn) {
      mixedModeBtn.addEventListener('click', () => {
        AppState.trainPattern = 'alternating';
        mixedModeBtn.classList.add('active');
        if (phonicsModeBtn) phonicsModeBtn.classList.remove('active');
        AudioSynth.playPop();
        this.newBuilderWord();
      });
    }

    const clearBtn = document.getElementById('btn-builder-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.resetBuilderBlanks();
        AudioSynth.playPop();
      });
    }

    const soundBtn = document.getElementById('btn-builder-hear');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        if (AppState.builderTarget) {
          SpeechEngine.speak(`The word is: ${AppState.builderTarget.word}`);
        }
      });
    }

    // Physical Keyboard typing listener
    if (!this.hasKeydownListener) {
      window.addEventListener('keydown', (e) => {
        if (AppState.currentMode !== 'builder') return;
        const key = e.key.toLowerCase();
        if (key >= 'a' && key <= 'z') {
          this.inputBuilderLetter(key);
        } else if (e.key === 'Backspace') {
          this.backspaceBuilderLetter();
        }
      });
      this.hasKeydownListener = true;
    }
  },

  newBuilderWord() {
    const word = getRandomWord('all');
    AppState.builderTarget = word;
    const chars = word.word.toLowerCase().split('');
    const pattern = AppState.trainPattern || 'phonics';

    // Determine which indices are PRE-FILLED and which are MISSING BLANKS
    const slots = [];
    const missingChars = [];

    if (pattern === 'phonics') {
      // Missing the target digraph: e.g. "fish" -> "fi_ _" or "sheep" -> "_ _ e e p"
      const targetStart = word.pre.length;
      const targetEnd = targetStart + word.sound.length;

      chars.forEach((c, idx) => {
        const isMissing = (idx >= targetStart && idx < targetEnd);
        slots.push({
          idx,
          correctChar: c,
          isPrefilled: !isMissing,
          userChar: !isMissing ? c : ''
        });
        if (isMissing) missingChars.push(c);
      });
    } else {
      // Alternating / scattered blanks: e.g. "shop" -> "s_o_p" or "fish" -> "f_s_"
      chars.forEach((c, idx) => {
        const isMissing = (idx % 2 === 1); // alternate odd indices
        slots.push({
          idx,
          correctChar: c,
          isPrefilled: !isMissing,
          userChar: !isMissing ? c : ''
        });
        if (isMissing) missingChars.push(c);
      });
    }

    AppState.trainSlots = slots;

    // Build letter tiles tray: missing letters + 3-4 friendly distractors
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const distractors = [];
    while (distractors.length < 3) {
      const randChar = alphabet[Math.floor(Math.random() * alphabet.length)];
      if (!missingChars.includes(randChar) && !distractors.includes(randChar)) {
        distractors.push(randChar);
      }
    }

    const tilePool = [...missingChars, ...distractors]
      .sort(() => 0.5 - Math.random())
      .map((letter, id) => ({ id, letter, used: false }));

    AppState.trainTilePool = tilePool;

    // Update Stage UI
    const preview = document.getElementById('builder-preview-img');
    if (preview) preview.innerHTML = word.svg;

    this.renderBuilderSlots();
    this.renderBuilderTiles();

    // Voice instruction
    const missingCount = missingChars.length;
    SpeechEngine.speak(`Can you complete ${word.word}? Fill in the missing ${missingCount} letters!`);
  },

  renderBuilderSlots() {
    const slotsRow = document.getElementById('train-slots-row');
    if (!slotsRow) return;
    slotsRow.innerHTML = '';

    // Find first active blank index
    let activeBlankFound = false;

    AppState.trainSlots.forEach((slot, idx) => {
      const slotEl = document.createElement('div');
      slotEl.className = 'train-slot';
      slotEl.id = `train-slot-${idx}`;

      if (slot.isPrefilled) {
        slotEl.classList.add('prefilled');
        slotEl.textContent = slot.correctChar;
      } else if (slot.userChar) {
        slotEl.classList.add('filled');
        slotEl.textContent = slot.userChar;
        // Tap filled letter to remove it
        slotEl.title = 'Tap to remove';
        slotEl.addEventListener('click', () => {
          this.removeTrainLetterAt(idx);
        });
      } else {
        slotEl.classList.add('blank');
        if (!activeBlankFound) {
          slotEl.classList.add('active');
          activeBlankFound = true;
        }
        slotEl.textContent = '_';
      }

      slotsRow.appendChild(slotEl);
    });
  },

  renderBuilderTiles() {
    const pool = document.getElementById('train-tiles-pool');
    if (!pool) return;
    pool.innerHTML = '';

    AppState.trainTilePool.forEach((tile) => {
      const tileBtn = document.createElement('button');
      tileBtn.className = `letter-tile-btn ${tile.used ? 'used' : ''}`;
      tileBtn.textContent = tile.letter;
      tileBtn.id = `train-tile-${tile.id}`;
      tileBtn.addEventListener('click', () => {
        this.useTrainTile(tile);
      });
      pool.appendChild(tileBtn);
    });
  },

  useTrainTile(tile) {
    if (tile.used) return;
    this.inputBuilderLetter(tile.letter, tile);
  },

  inputBuilderLetter(letter, tileObj = null) {
    // Find first empty missing slot
    const emptySlot = AppState.trainSlots.find(s => !s.isPrefilled && !s.userChar);
    if (!emptySlot) return;

    emptySlot.userChar = letter;

    // If tileObj was not passed (e.g. from physical keyboard), find matching unused tile
    if (!tileObj) {
      tileObj = AppState.trainTilePool.find(t => t.letter === letter && !t.used);
    }
    if (tileObj) {
      tileObj.used = true;
      emptySlot.tileId = tileObj.id;
    }

    AudioSynth.playTone(480, 'sine', 0.12, 0, 0.22);
    // Speak letter name clearly
    const u = new SpeechSynthesisUtterance(letter.toUpperCase());
    u.rate = 0.9;
    window.speechSynthesis.speak(u);

    this.renderBuilderSlots();
    this.renderBuilderTiles();

    // Check if all missing slots are now filled
    const allFilled = AppState.trainSlots.every(s => s.userChar);
    if (allFilled) {
      this.checkBuilderSpelling();
    }
  },

  removeTrainLetterAt(slotIndex) {
    const slot = AppState.trainSlots[slotIndex];
    if (!slot || slot.isPrefilled || !slot.userChar) return;

    if (slot.tileId !== undefined) {
      const tile = AppState.trainTilePool.find(t => t.id === slot.tileId);
      if (tile) tile.used = false;
    }

    slot.userChar = '';
    delete slot.tileId;

    AudioSynth.playPop();
    this.renderBuilderSlots();
    this.renderBuilderTiles();
  },

  backspaceBuilderLetter() {
    // Remove the most recently filled blank slot
    const filledSlots = AppState.trainSlots.filter(s => !s.isPrefilled && s.userChar);
    if (filledSlots.length > 0) {
      const last = filledSlots[filledSlots.length - 1];
      this.removeTrainLetterAt(last.idx);
    }
  },

  resetBuilderBlanks() {
    AppState.trainSlots.forEach(s => {
      if (!s.isPrefilled) s.userChar = '';
    });
    AppState.trainTilePool.forEach(t => t.used = false);
    this.renderBuilderSlots();
    this.renderBuilderTiles();
  },

  checkBuilderSpelling() {
    const spelled = AppState.trainSlots.map(s => s.userChar).join('');
    const target = AppState.builderTarget.word.toLowerCase();

    if (spelled === target) {
      AudioSynth.playTrainWhistle();
      Confetti.burst(30);
      AppState.addStar(2);
      SpeechEngine.speak(`Awesome! You completed ${AppState.builderTarget.word}!`);

      setTimeout(() => {
        this.newBuilderWord();
      }, 1600);
    } else {
      AudioSynth.playGentleTryAgain();
      SpeechEngine.speak(`Almost! Check the letters of ${AppState.builderTarget.word} and try again!`);
      setTimeout(() => {
        this.resetBuilderBlanks();
      }, 1000);
    }
  },

  // -------------------------------------------------------
  // Mode 5: Memory Match Game
  // -------------------------------------------------------
  initMemoryGame() {
    // Pick 4 random words for 8 cards (4 pairs)
    const words = getRandomWords(4, 'all');
    let deck = [];

    words.forEach(w => {
      deck.push({ type: 'img', wordId: w.id, content: w.svg, wordObj: w });
      deck.push({ type: 'text', wordId: w.id, content: w.word, wordObj: w });
    });

    // Shuffle deck
    deck.sort(() => 0.5 - Math.random());
    AppState.memoryCards = deck;
    AppState.memoryFlipped = [];
    AppState.memoryMatchesCount = 0;
    AppState.memoryLock = false;

    const grid = document.getElementById('memory-grid');
    if (!grid) return;
    grid.innerHTML = '';

    deck.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'memory-card';
      card.id = `mem-${index}`;

      const frontContent = item.type === 'img'
        ? item.content
        : `<div class="memory-word-text">${item.content}</div>`;

      card.innerHTML = `
        <div class="memory-inner">
          <div class="memory-face back">⭐</div>
          <div class="memory-face front">${frontContent}</div>
        </div>
      `;

      card.addEventListener('click', () => {
        this.flipMemoryCard(index);
      });

      grid.appendChild(card);
    });
  },

  flipMemoryCard(index) {
    if (AppState.memoryLock) return;
    const cardEl = document.getElementById(`mem-${index}`);
    if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;

    cardEl.classList.add('flipped');
    AudioSynth.playPop();

    const cardData = AppState.memoryCards[index];
    SpeechEngine.speak(cardData.wordObj.word);
    AppState.memoryFlipped.push({ index, data: cardData });

    if (AppState.memoryFlipped.length === 2) {
      AppState.memoryLock = true;
      const [first, second] = AppState.memoryFlipped;

      if (first.data.wordId === second.data.wordId) {
        // Matched!
        setTimeout(() => {
          document.getElementById(`mem-${first.index}`).classList.add('matched');
          document.getElementById(`mem-${second.index}`).classList.add('matched');
          AudioSynth.playCorrect();
          AppState.addStar(1);
          AppState.memoryMatchesCount += 1;
          AppState.memoryFlipped = [];
          AppState.memoryLock = false;

          if (AppState.memoryMatchesCount === 4) {
            AudioSynth.playFanfare();
            SpeechEngine.speak("Awesome memory champion! All pairs matched!");
            setTimeout(() => this.initMemoryGame(), 2000);
          }
        }, 500);
      } else {
        // Not matched - flip back
        setTimeout(() => {
          document.getElementById(`mem-${first.index}`).classList.remove('flipped');
          document.getElementById(`mem-${second.index}`).classList.remove('flipped');
          AppState.memoryFlipped = [];
          AppState.memoryLock = false;
        }, 900);
      }
    }
  },

  // -------------------------------------------------------
  // Mode 6: Monday Practice Test
  // -------------------------------------------------------
  startMondayTest() {
    // 10 randomized questions from across all 4 categories
    const testWords = getRandomWords(10, 'all');
    AppState.testQuestions = testWords;
    AppState.testCurrentIndex = 0;
    AppState.testScore = 0;
    AppState.testWrongWords = [];

    this.renderTestQuestion();
  },

  renderTestQuestion() {
    const qIndex = AppState.testCurrentIndex;
    const total = AppState.testQuestions.length;

    // Progress bar
    const progressFill = document.getElementById('test-progress-fill');
    if (progressFill) {
      progressFill.style.width = `${((qIndex) / total) * 100}%`;
    }

    const counterText = document.getElementById('test-counter-text');
    if (counterText) {
      counterText.textContent = `Question ${qIndex + 1} of ${total}`;
    }

    const currentWord = AppState.testQuestions[qIndex];
    const imgBox = document.getElementById('test-img-box');
    if (imgBox) imgBox.innerHTML = currentWord.svg;

    // Generate 3 choices: 1 correct + 2 distractors
    const distractors = WORDS_DATA.filter(w => w.id !== currentWord.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);

    const options = [currentWord, distractors[0], distractors[1]].sort(() => 0.5 - Math.random());

    const list = document.getElementById('test-options-list');
    if (!list) return;
    list.innerHTML = '';

    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'test-option-btn';
      btn.innerHTML = `
        <span>${opt.word}</span>
        <span>👉</span>
      `;
      btn.addEventListener('click', () => {
        this.submitTestAnswer(opt, currentWord);
      });
      list.appendChild(btn);
    });

    SpeechEngine.speak(`Spell this picture: ${currentWord.word}`);
  },

  submitTestAnswer(selectedWord, correctWord) {
    if (selectedWord.id === correctWord.id) {
      AppState.testScore += 1;
      AudioSynth.playCorrect();
    } else {
      AudioSynth.playGentleTryAgain();
      AppState.testWrongWords.push(correctWord);
    }

    AppState.testCurrentIndex += 1;

    if (AppState.testCurrentIndex < AppState.testQuestions.length) {
      this.renderTestQuestion();
    } else {
      this.finishMondayTest();
    }
  },

  finishMondayTest() {
    // Fill progress to 100%
    const progressFill = document.getElementById('test-progress-fill');
    if (progressFill) progressFill.style.width = '100%';

    AudioSynth.playFanfare();
    Confetti.burst(50);
    AppState.addStar(5);

    // Show Certificate Modal
    const modal = document.getElementById('certificate-modal');
    if (modal) {
      const nameEl = document.getElementById('cert-name-text');
      const scoreEl = document.getElementById('cert-score-text');
      const reviewBox = document.getElementById('cert-review-words');

      if (nameEl) nameEl.textContent = AppState.childName;
      if (scoreEl) scoreEl.textContent = `${AppState.testScore} / 10 ⭐`;

      if (reviewBox) {
        if (AppState.testWrongWords.length === 0) {
          reviewBox.innerHTML = `
            <div style="color: #16a34a; font-weight: 700; margin-top: 10px;">
              🎉 Perfect 100%! Ready to ace Monday's test!
            </div>
          `;
        } else {
          const list = AppState.testWrongWords.map(w => `<strong>${w.word}</strong> (${w.sound})`).join(', ');
          reviewBox.innerHTML = `
            <div style="color: #ea580c; font-weight: 600; font-size: 0.95rem; margin-top: 10px;">
              📝 Quick practice before Monday: ${list}
            </div>
          `;
        }
      }

      modal.classList.add('active');
    }

    SpeechEngine.speak(`Congratulations ${AppState.childName}! You finished the test with ${AppState.testScore} out of 10!`);
  }
};

// Initialize App on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  UI.init();
});
