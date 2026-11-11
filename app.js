/**
 * POKÉMON TCG — BOOSTER DE 11 CARTAS & UMBREON + SYLVEON COUPLE CARD
 * - Cartas 1 a 6: Cartas Pokémon reais existentes (Scarlet & Violet 151)
 * - Cartas 7, 8, 9 e 10: Cartas Raras Ilustrativas reais existentes (Full Art / SIR)
 * - Carta 11 (Última Carta): Umbreon & Sylveon ex (Casal) com Pedido de Encontro
 * - 100% discreto antes de cada carta ser virada (sem spoilers!)
 */

(function () {
  'use strict';

  // =========================================================================
  // CONFIGURAÇÃO DO PEDIDO DE ENCONTRO (Personalizável via URL, PHP ou Modal)
  // =========================================================================
  const urlParams = new URLSearchParams(window.location.search);
  const inviteConfig = {
    personName:
      (window.INITIAL_INVITE_CONFIG && window.INITIAL_INVITE_CONFIG.personName) ||
      urlParams.get('para') ||
      urlParams.get('nome') ||
      'Você',
    questionTitle:
      (window.INITIAL_INVITE_CONFIG && window.INITIAL_INVITE_CONFIG.questionTitle) ||
      urlParams.get('pergunta') ||
      'Aceitas sair comigo?',
    customMessage:
      (window.INITIAL_INVITE_CONFIG && window.INITIAL_INVITE_CONFIG.customMessage) ||
      urlParams.get('msg') ||
      'Assim como a Lua do Umbreon e os laços da Sylveon, a nossa combinação é lendária! Vamos viver um encontro especial juntos?',
    datePlace:
      (window.INITIAL_INVITE_CONFIG && window.INITIAL_INVITE_CONFIG.datePlace) ||
      urlParams.get('local') ||
      'Jantar especial + Passeio sob as estrelas ✨'
  };

  // =========================================================================
  // AS EXATAS 11 CARTAS DO PACOTE
  // =========================================================================
  const PACK_CARDS = [
    {
      slot: 1,
      id: 'sv3pt5-25',
      name: 'Pikachu',
      subtitle: 'Scarlet & Violet 151 • #025/165',
      rarityLabel: 'Comum ●',
      tier: 'normal',
      imageUrl: 'https://images.pokemontcg.io/sv3pt5/25_hires.png',
      fallbackSprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      color: '#facc15'
    },
    {
      slot: 2,
      id: 'sm1-9',
      name: 'Rowlet',
      subtitle: 'Sun & Moon • #009/149',
      rarityLabel: 'Comum ●',
      tier: 'normal',
      imageUrl: 'https://images.pokemontcg.io/sm1/9_hires.png',
      backupUrl: 'https://images.pokemontcg.io/swsh3/11_hires.png',
      fallbackSprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png',
      color: '#4ade80'
    },
    {
      slot: 3,
      id: 'sv3pt5-4',
      name: 'Charmander',
      subtitle: 'Scarlet & Violet 151 • #004/165',
      rarityLabel: 'Comum ●',
      tier: 'normal',
      imageUrl: 'https://images.pokemontcg.io/sv3pt5/4_hires.png',
      fallbackSprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
      color: '#fb923c'
    },
    {
      slot: 4,
      id: 'sv3pt5-7',
      name: 'Squirtle',
      subtitle: 'Scarlet & Violet 151 • #007/165',
      rarityLabel: 'Comum ●',
      tier: 'normal',
      imageUrl: 'https://images.pokemontcg.io/sv3pt5/7_hires.png',
      fallbackSprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
      color: '#38bdf8'
    },
    {
      slot: 5,
      id: 'sv3pt5-133',
      name: 'Eevee',
      subtitle: 'Scarlet & Violet 151 • #133/165',
      rarityLabel: 'Comum ●',
      tier: 'normal',
      imageUrl: 'https://images.pokemontcg.io/sv3pt5/133_hires.png',
      fallbackSprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png',
      color: '#fbbf24'
    },
    {
      slot: 6,
      id: 'sv3pt5-39',
      name: 'Jigglypuff',
      subtitle: 'Scarlet & Violet 151 • #039/165',
      rarityLabel: 'Comum ●',
      tier: 'normal',
      imageUrl: 'https://images.pokemontcg.io/sv3pt5/39_hires.png',
      fallbackSprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png',
      color: '#f472b6'
    },
    // --- SÉTIMA, OITAVA, NONA E DÉCIMA CARTA: CARTAS RARAS ILUSTRATIVAS (GENGAR, ROWLET, JIRACHI E MEW) ---
    {
      slot: 7,
      id: 'swsh11tg-TG06',
      name: 'Gengar (Ilustração Rara)',
      subtitle: 'Lost Origin Trainer Gallery • Full Art #TG06/TG30',
      rarityLabel: '★ Rara Ilustrativa ★',
      tier: 'rare',
      imageUrl: 'https://images.pokemontcg.io/swsh11tg/TG06_hires.png',
      backupUrl: 'https://images.pokemontcg.io/swsh8/271_hires.png',
      fallbackSprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png',
      color: '#a855f7'
    },
    {
      slot: 8,
      id: 'sma-SV47',
      name: 'Decidueye-GX (Ilustração Rara)',
      subtitle: 'Hidden Fates Shiny Vault • Full Art #SV47/SV94',
      rarityLabel: '★ Rara Ilustrativa ★',
      tier: 'rare',
      imageUrl: 'https://images.pokemontcg.io/sma/SV47_hires.png',
      backupUrl: 'https://images.pokemontcg.io/swsh45sv/SV001_hires.png',
      fallbackSprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/724.png',
      color: '#4ade80'
    },
    {
      slot: 9,
      id: 'xyp-XY67a',
      name: 'Jirachi (Ilustração Rara Especial)',
      subtitle: 'Promo Collection • Full Art #XY67a',
      rarityLabel: '★★ Ilustração Rara Especial ★★',
      tier: 'rare',
      imageUrl: 'https://images.pokemontcg.io/xyp/XY67a_hires.png',
      backupUrl: 'https://images.pokemontcg.io/swsh10/170_hires.png',
      fallbackSprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png',
      color: '#facc15'
    },
    {
      slot: 10,
      id: 'sv3pt5-205',
      name: 'Mew ex (Ilustração Rara Especial)',
      subtitle: 'Scarlet & Violet 151 • SIR Full Art #205/165',
      rarityLabel: '★★ Ilustração Rara Especial ★★',
      tier: 'rare',
      imageUrl: 'https://images.pokemontcg.io/sv3pt5/205_hires.png',
      backupUrl: 'https://images.pokemontcg.io/swsh12pt5gg/GG10_hires.png',
      fallbackSprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png',
      color: '#ec4899'
    },
    // --- DÉCIMA PRIMEIRA CARTA (ÚLTIMA CARTA): UMBREON & SYLVEON CASAL + PEDIDO ---
    {
      slot: 11,
      id: 'umbreon-sylveon-couple-011',
      name: 'Umbreon & Sylveon ex 💖',
      subtitle: 'Tag Team • Ilustração Secreta de Casal #011/011',
      rarityLabel: '★★★ Carta Mítica do Destino ★★★',
      tier: 'love',
      imageUrl: null,
      color: '#ff4d94'
    }
  ];

  // =========================================================================
  // ESTADO DA APLICAÇÃO
  // =========================================================================
  let currentCardIndex = 0;
  let revealedStates = new Array(11).fill(false);
  let isAnimatingCard = false;
  let soundEnabled = true;

  // =========================================================================
  // SISTEMA DE ÁUDIO SINTETIZADO (WEB AUDIO API)
  // =========================================================================
  let audioCtx = null;

  function getAudioCtx() {
    if (!soundEnabled) return null;
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playTone(freq, type, duration, delay = 0, gainVal = 0.14) {
    const ctx = getAudioCtx();
    if (!ctx) return;
    const now = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(gainVal, now + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  function playPackSlashAndOpenSound() {
    // Corte afiado + rasgo metálico + subida mágica das cartas
    playTone(320, 'sawtooth', 0.15, 0.0, 0.14);
    playTone(580, 'sawtooth', 0.18, 0.08, 0.15);
    playTone(210, 'triangle', 0.3, 0.35, 0.14);
    const notes = [440, 554.37, 659.25, 880, 1108.73];
    notes.forEach((f, idx) => {
      playTone(f, 'triangle', 0.42, 0.68 + idx * 0.075, 0.15);
    });
  }

  function playNormalRevealSound() {
    playTone(440, 'sine', 0.14, 0, 0.12);
    playTone(659.25, 'triangle', 0.24, 0.07, 0.14);
  }

  function playRareRevealSound() {
    playTone(240, 'sawtooth', 0.22, 0, 0.11);
    playTone(360, 'sawtooth', 0.24, 0.14, 0.12);
    const fanfare = [523.25, 659.25, 783.99, 1046.5, 1318.5];
    fanfare.forEach((f, idx) => {
      playTone(f, 'triangle', 0.55, 0.36 + idx * 0.08, 0.16);
    });
  }

  function playMythicLoveRevealSound() {
    playTone(196.0, 'sine', 0.35, 0.0, 0.14);
    playTone(293.66, 'sine', 0.35, 0.2, 0.15);
    playTone(392.0, 'triangle', 0.4, 0.4, 0.16);
    const melody = [
      { f: 523.25, d: 0.3, t: 0.75 },
      { f: 659.25, d: 0.3, t: 0.92 },
      { f: 783.99, d: 0.35, t: 1.09 },
      { f: 1046.5, d: 0.5, t: 1.28 },
      { f: 987.77, d: 0.3, t: 1.62 },
      { f: 1046.5, d: 0.9, t: 1.85 },
      { f: 1318.5, d: 1.1, t: 1.85 }
    ];
    melody.forEach((n) => {
      playTone(n.f, 'triangle', n.d, n.t, 0.18);
    });
  }

  function playCelebrationFanfare() {
    const chords = [523.25, 659.25, 783.99, 1046.5, 1318.5, 1567.98];
    chords.forEach((f, i) => {
      playTone(f, 'triangle', 0.6, i * 0.09, 0.18);
    });
  }

  // =========================================================================
  // SISTEMA DE PARTÍCULAS EM CANVAS (ESTRELAS, BRILHOS E CORAÇÕES)
  // =========================================================================
  const canvas = document.getElementById('fxCanvas');
  const ctx = canvas ? canvas.getContext('2d') : null;
  let particles = [];

  function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function spawnParticles(options) {
    if (!canvas) return;
    const {
      x = window.innerWidth / 2,
      y = window.innerHeight / 2,
      count = 35,
      colors = ['#ffcb05', '#ffffff', '#38bdf8'],
      shapes = ['circle', 'star'],
      speedMin = 2,
      speedMax = 9,
      sizeMin = 4,
      sizeMax = 11,
      gravity = 0.08
    } = options;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = speedMin + Math.random() * (speedMax - speedMin);
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        size: sizeMin + Math.random() * (sizeMax - sizeMin),
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        alpha: 1,
        decay: 0.01 + Math.random() * 0.014,
        gravity,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.15
      });
    }
  }

  function drawHeart(ctx, size) {
    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(0, topCurveHeight);
    ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
    ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, (size + topCurveHeight) / 1.4, 0, size);
    ctx.bezierCurveTo(0, (size + topCurveHeight) / 1.4, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
    ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
    ctx.closePath();
    ctx.fill();
  }

  function drawStar(ctx, spikes, outerR, innerR) {
    let rot = (Math.PI / 2) * 3;
    let x = 0;
    let y = 0;
    const step = Math.PI / spikes;
    ctx.beginPath();
    ctx.moveTo(0, -outerR);
    for (let i = 0; i < spikes; i++) {
      x = Math.cos(rot) * outerR;
      y = Math.sin(rot) * outerR;
      ctx.lineTo(x, y);
      rot += step;
      x = Math.cos(rot) * innerR;
      y = Math.sin(rot) * innerR;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(0, -outerR);
    ctx.closePath();
    ctx.fill();
  }

  function animateParticles() {
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.vRot;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;

        if (p.shape === 'heart') {
          drawHeart(ctx, p.size * 1.3);
        } else if (p.shape === 'star') {
          drawStar(ctx, 4, p.size, p.size * 0.42);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.55, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // =========================================================================
  // ELEMENTOS DO DOM
  // =========================================================================
  const screenFlash = document.getElementById('screenFlash');
  const packScene = document.getElementById('packScene');
  const packAuraRing = document.getElementById('packAuraRing');
  const packInnerBeams = document.getElementById('packInnerBeams');
  const packSlashEffect = document.getElementById('packSlashEffect');
  const packCtaArea = document.getElementById('packCtaArea');
  const boosterPack = document.getElementById('giantBoosterPack');
  const btnOpenPack = document.getElementById('btnOpenPack');

  const revealStage = document.getElementById('revealStage');
  const progressCounterBadge = document.getElementById('progressCounterBadge');
  const rarityTierBanner = document.getElementById('rarityTierBanner');
  const progressPipsContainer = document.getElementById('progressPips');
  const revealedCountText = document.getElementById('revealedCountText');

  const arenaGodRays = document.getElementById('arenaGodRays');
  const loveMagicCircle = document.getElementById('loveMagicCircle');
  const shockwaveRing = document.getElementById('shockwaveRing');
  const stackShadow1 = document.getElementById('stackShadow1');
  const stackShadow2 = document.getElementById('stackShadow2');

  const card3dWrapper = document.getElementById('card3dWrapper');
  const card3dInner = document.getElementById('card3dInner');
  const cardFrontContent = document.getElementById('cardFrontContent');

  const cardCaptionName = document.getElementById('cardCaptionName');
  const cardCaptionSub = document.getElementById('cardCaptionSub');

  const btnActionCard = document.getElementById('btnActionCard');
  const btnPrevCard = document.getElementById('btnPrevCard');
  const btnRestartPack = document.getElementById('btnRestartPack');

  const inviteResponsePanel = document.getElementById('inviteResponsePanel');
  const inviteHeadlineText = document.getElementById('inviteHeadlineText');
  const inviteSubText = document.getElementById('inviteSubText');
  const btnAcceptLove = document.getElementById('btnAcceptLove');
  const btnDodgeNo = document.getElementById('btnDodgeNo');

  const trayGrid = document.getElementById('trayGrid');

  const btnSoundToggle = document.getElementById('btnSoundToggle');
  const btnCustomizeInvite = document.getElementById('btnCustomizeInvite');
  const customizeModal = document.getElementById('customizeModal');
  const btnSaveCustom = document.getElementById('btnSaveCustom');
  const btnCloseCustom = document.getElementById('btnCloseCustom');

  const celebrationModal = document.getElementById('celebrationModal');
  const btnCloseCelebration = document.getElementById('btnCloseCelebration');

  // =========================================================================
  // PRELOAD DAS IMAGENS OFICIAIS (VERSO + 10 PRIMEIRAS CARTAS + UMBREON & SYLVEON)
  // =========================================================================
  function preloadCardImages() {
    const preloadList = [
      'https://archives.bulbagarden.net/media/upload/2/24/151_Booster.png',
      'https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png'
    ];
    PACK_CARDS.forEach((card) => {
      if (card.imageUrl) preloadList.push(card.imageUrl);
      if (card.backupUrl) preloadList.push(card.backupUrl);
    });
    preloadList.forEach((url) => {
      const img = new Image();
      img.referrerPolicy = 'no-referrer';
      img.src = url;
    });
  }
  preloadCardImages();

  // =========================================================================
  // INTERAÇÃO 3D NO BOOSTER PACK E NA CARTA ATIVA
  // =========================================================================
  if (boosterPack) {
    boosterPack.addEventListener('mousemove', (e) => {
      if (isOpeningPack) return;
      const rect = boosterPack.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      boosterPack.style.transform = `rotateY(${x * 22}deg) rotateX(${-y * 22}deg) scale(1.03)`;
    });
    boosterPack.addEventListener('mouseleave', () => {
      if (isOpeningPack) return;
      boosterPack.style.transform = '';
    });
  }

  if (card3dWrapper) {
    card3dWrapper.addEventListener('mousemove', (e) => {
      const rect = card3dWrapper.getBoundingClientRect();
      const relX = ((e.clientX - rect.left) / rect.width) * 100;
      const relY = ((e.clientY - rect.top) / rect.height) * 100;
      card3dWrapper.style.setProperty('--pointer-x', `${relX}%`);
      card3dWrapper.style.setProperty('--pointer-y', `${relY}%`);

      const tiltX = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
      const tiltY = ((e.clientY - rect.top) / rect.height - 0.5) * -18;
      card3dWrapper.style.transform = `rotateY(${tiltX}deg) rotateX(${tiltY}deg)`;
    });

    card3dWrapper.addEventListener('mouseleave', () => {
      card3dWrapper.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
  }

  // =========================================================================
  // RENDERIZAÇÃO DA 11ª CARTA: UMBREON & SYLVEON EX (CASAL FULL-ART)
  // =========================================================================
  function buildUmbreonSylveonCoupleCardHTML() {
    const dedicationText =
      inviteConfig.personName && inviteConfig.personName !== 'Você'
        ? `✨ Especial para ${escapeHtml(inviteConfig.personName)} ✨`
        : '✨ Dupla do Destino • Luar & Fitas do Amor ✨';

    return `
      <div class="couple-card-fullart">
        <div class="couple-card-canvas">
          <!-- Decoração do Céu: Lua Crescente do Umbreon + Fitas da Sylveon -->
          <div class="couple-sky-decor">
            <div class="umbreon-crescent-moon"></div>
            <div class="sylveon-ribbon-glow"></div>
          </div>

          <!-- Cabeçalho Oficial TAG TEAM -->
          <div class="couple-card-header">
            <span class="tag-team-badge">TAG TEAM</span>
            <span class="couple-card-title">Umbreon &amp; Sylveon ex</span>
            <div class="couple-card-hp">
              <span>HP ∞</span>
              <span class="dual-type-orb orb-dark" title="Noturno / Luar">🌙</span>
              <span class="dual-type-orb orb-fairy" title="Fada / Amor">💖</span>
            </div>
          </div>

          <!-- Ilustração Central: Umbreon & Sylveon Juntos como Casal -->
          <div class="couple-art-stage">
            <div class="couple-heart-aura"></div>
            <div class="couple-floating-hearts">
              <span class="couple-mini-heart">🌙</span>
              <span class="couple-main-heart">💖</span>
              <span class="couple-mini-heart">✨</span>
            </div>
            <div class="couple-pokemon-pair">
              <img class="poke-couple-sprite umbreon-sprite"
                   src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png"
                   alt="Umbreon">
              <img class="poke-couple-sprite sylveon-sprite"
                   src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png"
                   alt="Sylveon">
            </div>
          </div>

          <div class="couple-dedication-ribbon">${dedicationText}</div>

          <!-- Habilidade & Ataque Especial do Pedido de Encontro -->
          <div class="couple-card-text-panel">
            <div class="couple-ability-line">
              <span class="couple-ability-tag">Habilidade de Casal</span>
              <strong>Sincronia Lunar:</strong> Quando Umbreon e Sylveon estão juntos, cada momento brilha mais forte que uma constelação!
            </div>

            <div class="couple-invite-attack-box">
              <div class="couple-attack-top">
                <span class="couple-attack-name-tag">🌙💖 Ataque Especial GX</span>
                <span class="couple-attack-dmg">∞ 💖</span>
              </div>
              <div class="couple-question-headline">
                ${escapeHtml(inviteConfig.questionTitle)}
              </div>
              <div class="couple-question-body">
                ${escapeHtml(inviteConfig.customMessage)}
              </div>
            </div>
          </div>

          <!-- Rodapé da Carta -->
          <div class="couple-card-footer">
            <span>📍 ${escapeHtml(inviteConfig.datePlace)}</span>
            <span>★★★ 011/011 CASAL SECRETO</span>
          </div>
        </div>
      </div>
    `;
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderCardFront(card) {
    if (card.tier === 'love') {
      cardFrontContent.innerHTML = `
        ${buildUmbreonSylveonCoupleCardHTML()}
        <div class="card-holo-overlay"></div>
        <div class="card-sparkles-overlay"></div>
      `;
      return;
    }

    const backupSrc = card.backupUrl || card.imageUrl.replace('_hires.png', '.png');
    cardFrontContent.innerHTML = `
      <img class="real-pokemon-card-img"
           src="${card.imageUrl}"
           alt="${escapeHtml(card.name)}"
           onerror="if(!this.dataset.triedBackup){this.dataset.triedBackup='1';this.src='${backupSrc}';}else{this.onerror=null;this.src='${card.fallbackSprite}';this.style.objectFit='contain';this.style.padding='24px';this.style.background='radial-gradient(circle, #1e293b, #0f172a)';}" />
      <div class="card-holo-overlay"></div>
      <div class="card-sparkles-overlay"></div>
    `;
  }

  // =========================================================================
  // BARRA DE PROGRESSO E BANDEJA DE 11 CARTAS (100% DISCRETA ANTES DE REVELAR!)
  // =========================================================================
  function renderProgressAndTray() {
    const totalRevealed = revealedStates.filter(Boolean).length;
    if (revealedCountText) {
      revealedCountText.textContent = String(totalRevealed);
    }

    // 1. Pips de 1 a 11 (Sem spoilers para cartas ainda fechadas!)
    progressPipsContainer.innerHTML = '';
    PACK_CARDS.forEach((card, idx) => {
      const pip = document.createElement('div');
      pip.className = 'step-pip';

      if (idx === currentCardIndex) {
        pip.classList.add('active');
      }

      if (revealedStates[idx]) {
        if (card.tier === 'rare') {
          pip.classList.add('revealed-rare');
          pip.textContent = `${card.slot}★`;
        } else if (card.tier === 'love') {
          pip.classList.add('revealed-love');
          pip.textContent = '11💖';
        } else {
          pip.classList.add('revealed-normal');
          pip.textContent = String(card.slot);
        }
        pip.title = `Carta ${card.slot}: ${card.name}`;
      } else {
        // Ainda não revelada: parece idêntica a qualquer outra carta!
        pip.textContent = String(card.slot);
        pip.title = `Carta #${card.slot}`;
      }

      pip.addEventListener('click', () => {
        if (isAnimatingCard) return;
        const firstUnrevealed = revealedStates.indexOf(false);
        if (revealedStates[idx] || idx === firstUnrevealed) {
          loadCardSlot(idx);
        }
      });
      progressPipsContainer.appendChild(pip);
    });

    // 2. Bandeja inferior das 11 cartas (Mostra o verso original enquanto não for revelada!)
    trayGrid.innerHTML = '';
    PACK_CARDS.forEach((card, idx) => {
      const slotEl = document.createElement('div');
      slotEl.className = 'tray-slot';
      if (idx === currentCardIndex) slotEl.classList.add('active-slot');

      if (revealedStates[idx]) {
        if (card.tier === 'rare') slotEl.classList.add('revealed-rare-slot');
        if (card.tier === 'love') slotEl.classList.add('revealed-love-slot');

        if (card.tier === 'love') {
          slotEl.innerHTML = `
            <div class="tray-love-mini">
              <span style="font-size:1.15rem;">🌙💖</span>
              <span style="font-size:0.54rem; margin-top:2px;">UMBREON &amp; SYLVEON</span>
            </div>
          `;
        } else {
          slotEl.innerHTML = `
            <img class="tray-slot-thumb" src="${card.imageUrl}" alt="${escapeHtml(card.name)}">
          `;
        }
      } else {
        // Verso original discreto para todas as cartas fechadas
        slotEl.innerHTML = `
          <div class="tray-unrevealed-back">
            <span class="tray-slot-num">#${card.slot}</span>
          </div>
        `;
      }

      slotEl.addEventListener('click', () => {
        if (isAnimatingCard) return;
        const firstUnrevealed = revealedStates.indexOf(false);
        if (revealedStates[idx] || idx === firstUnrevealed) {
          loadCardSlot(idx);
        }
      });

      trayGrid.appendChild(slotEl);
    });
  }

  // =========================================================================
  // CARREGAR UMA CARTA NO PALCO CENTRAL (SEM SPOILERS SE NÃO REVELADA!)
  // =========================================================================
  function loadCardSlot(index) {
    currentCardIndex = index;
    const card = PACK_CARDS[index];
    const isAlreadyRevealed = revealedStates[index];

    // Atualizar sombras das cartas restantes no baralho
    const remainingAfterThis = PACK_CARDS.length - 1 - index;
    if (stackShadow1) stackShadow1.style.display = remainingAfterThis >= 1 ? 'block' : 'none';
    if (stackShadow2) stackShadow2.style.display = remainingAfterThis >= 2 ? 'block' : 'none';

    // Resetar efeitos visuais até que esteja revelada
    document.body.classList.remove('mode-rare-revealed', 'mode-love-revealed');
    arenaGodRays.className = 'arena-god-rays';
    loveMagicCircle.className = 'love-magic-circle';
    shockwaveRing.className = 'shockwave-ring';

    card3dWrapper.classList.remove('subtle-rare-gleam', 'is-rare', 'is-love');
    card3dInner.classList.remove('anim-reveal-normal', 'anim-reveal-rare', 'anim-reveal-love');

    progressCounterBadge.textContent = `CARTA ${card.slot} DE 11`;
    renderCardFront(card);

    if (isAlreadyRevealed) {
      // Se já foi revelada, restaura o visual correspondente à raridade dela
      card3dInner.style.transform = 'rotateY(180deg)';
      applyRevealedAtmosphere(card);
      updateCaptionAndButtons(true);
    } else {
      // Se ainda NÃO foi revelada, mantém tudo 100% discreto!
      card3dInner.style.transform = 'rotateY(0deg)';
      rarityTierBanner.className = 'rarity-tier-banner tier-normal';
      rarityTierBanner.textContent = 'Scarlet & Violet — 151';

      if (card.tier !== 'normal') {
        // Apenas um reflexo quase imperceptível ao passar o mouse na borda
        card3dWrapper.classList.add('subtle-rare-gleam');
      }
      updateCaptionAndButtons(false);
    }

    renderProgressAndTray();
  }

  function applyRevealedAtmosphere(card) {
    rarityTierBanner.className = 'rarity-tier-banner';
    if (card.tier === 'normal') {
      rarityTierBanner.classList.add('tier-normal');
      rarityTierBanner.textContent = `${card.name} • ${card.rarityLabel}`;
    } else if (card.tier === 'rare') {
      rarityTierBanner.classList.add('tier-rare');
      rarityTierBanner.textContent = `✨ ${card.rarityLabel} ✨`;
      card3dWrapper.classList.add('is-rare');
      arenaGodRays.classList.add('active-rare');
      document.body.classList.add('mode-rare-revealed');
    } else if (card.tier === 'love') {
      rarityTierBanner.classList.add('tier-love');
      rarityTierBanner.textContent = `🌙💖 ${card.rarityLabel} 💖🌙`;
      card3dWrapper.classList.add('is-love');
      arenaGodRays.classList.add('active-love');
      loveMagicCircle.classList.add('active');
      document.body.classList.add('mode-love-revealed');
    }
  }

  function updateCaptionAndButtons(isRevealed) {
    const card = PACK_CARDS[currentCardIndex];
    btnPrevCard.style.display = currentCardIndex > 0 ? 'inline-flex' : 'none';

    if (!isRevealed) {
      // Discreto para todas as cartas antes de virar!
      cardCaptionName.textContent = `Carta #${card.slot} de 11`;
      cardCaptionSub.textContent = 'Clique na carta ou no botão abaixo para virar';
      btnActionCard.innerHTML = `<span>✨ Virar Carta #${card.slot}</span>`;
      btnActionCard.style.display = 'inline-flex';
      inviteResponsePanel.classList.remove('visible');
    } else {
      cardCaptionName.textContent = card.name;
      cardCaptionSub.textContent = `${card.subtitle} • ${card.rarityLabel}`;

      if (currentCardIndex < PACK_CARDS.length - 1) {
        const nextSlot = PACK_CARDS[currentCardIndex + 1].slot;
        // Botão neutro para não dar spoiler da próxima carta!
        btnActionCard.innerHTML = `<span>Próxima Carta (#${nextSlot}/11) ➔</span>`;
        btnActionCard.style.display = 'inline-flex';
        inviteResponsePanel.classList.remove('visible');
      } else {
        // 11ª Carta Revelada! Exibir o painel de resposta do Pedido de Encontro!
        btnActionCard.style.display = 'none';
        inviteHeadlineText.textContent = `💖 ${inviteConfig.questionTitle}`;
        inviteSubText.textContent = `${inviteConfig.customMessage} (${inviteConfig.datePlace})`;
        inviteResponsePanel.classList.add('visible');
      }
    }
  }

  // =========================================================================
  // EXECUTAR ANIMAÇÃO DE REVELAÇÃO DA CARTA ATUAL (3 NÍVEIS DE DETALHE!)
  // =========================================================================
  function triggerCardReveal() {
    if (isAnimatingCard) return;
    if (revealedStates[currentCardIndex]) {
      if (currentCardIndex < PACK_CARDS.length - 1) {
        loadCardSlot(currentCardIndex + 1);
      }
      return;
    }

    isAnimatingCard = true;
    const card = PACK_CARDS[currentCardIndex];
    const rect = card3dWrapper.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    card3dInner.style.transform = '';
    card3dInner.classList.remove('anim-reveal-normal', 'anim-reveal-rare', 'anim-reveal-love');
    void card3dInner.offsetWidth;

    if (card.tier === 'normal') {
      // ---------------------------------------------------------------------
      // NÍVEL 1: CARTA NORMAL (CARTAS 1 A 6)
      // ---------------------------------------------------------------------
      playNormalRevealSound();
      card3dInner.classList.add('anim-reveal-normal');

      setTimeout(() => {
        spawnParticles({
          x: centerX,
          y: centerY,
          count: 26,
          colors: [card.color, '#ffffff', '#ffcb05'],
          shapes: ['circle', 'star'],
          speedMin: 2,
          speedMax: 8
        });
      }, 240);

      setTimeout(() => {
        card3dInner.classList.remove('anim-reveal-normal');
        card3dInner.style.transform = 'rotateY(180deg)';
        revealedStates[currentCardIndex] = true;
        isAnimatingCard = false;
        applyRevealedAtmosphere(card);
        updateCaptionAndButtons(true);
        renderProgressAndTray();
      }, 730);

    } else if (card.tier === 'rare') {
      // ---------------------------------------------------------------------
      // NÍVEL 2: CARTA RARA ILUSTRATIVA (7, 8, 9 E 10) — SURPRESA AO VIRAR!
      // ---------------------------------------------------------------------
      playRareRevealSound();
      card3dInner.classList.add('anim-reveal-rare');

      // Brilho súbito no momento do clique
      spawnParticles({
        x: centerX,
        y: centerY,
        count: 32,
        colors: ['#ffcb05', '#f59e0b', '#ffffff'],
        shapes: ['star'],
        speedMin: 3,
        speedMax: 9
      });

      // No meio do giro, revela a atmosfera rara + onda de choque + explosão de estrelas
      setTimeout(() => {
        shockwaveRing.className = 'shockwave-ring boom-rare';
        applyRevealedAtmosphere(card);
        spawnParticles({
          x: centerX,
          y: centerY,
          count: 75,
          colors: ['#ffcb05', '#ec4899', '#60a5fa', '#a855f7', '#ffffff'],
          shapes: ['star', 'circle'],
          speedMin: 4,
          speedMax: 13,
          sizeMin: 5,
          sizeMax: 13
        });
      }, 520);

      setTimeout(() => {
        card3dInner.classList.remove('anim-reveal-rare');
        card3dInner.style.transform = 'rotateY(180deg)';
        revealedStates[currentCardIndex] = true;
        isAnimatingCard = false;
        updateCaptionAndButtons(true);
        renderProgressAndTray();
      }, 1580);

    } else if (card.tier === 'love') {
      // ---------------------------------------------------------------------
      // NÍVEL 3: CARTA 11 (UMBREON & SYLVEON CASAL + PEDIDO DE ENCONTRO!)
      // ---------------------------------------------------------------------
      playMythicLoveRevealSound();
      card3dInner.classList.add('anim-reveal-love');

      // Fase 1: Vórtice Lunar Dourado (Umbreon) + Rosa Fada (Sylveon)
      spawnParticles({
        x: centerX,
        y: centerY,
        count: 55,
        colors: ['#ff4d94', '#fbbf24', '#60a5fa', '#ffffff'],
        shapes: ['heart', 'star'],
        speedMin: 3,
        speedMax: 10
      });

      // Fase 2: Flash Cósmico + Supernova de Corações quando a carta vira!
      setTimeout(() => {
        if (screenFlash) {
          screenFlash.className = 'screen-flash flash-love';
        }
        shockwaveRing.className = 'shockwave-ring boom-love';
        applyRevealedAtmosphere(card);

        spawnParticles({
          x: centerX,
          y: centerY,
          count: 135,
          colors: ['#ff4d94', '#fbbf24', '#ff85c0', '#60a5fa', '#ffffff'],
          shapes: ['heart', 'star'],
          speedMin: 5,
          speedMax: 16,
          sizeMin: 7,
          sizeMax: 16,
          gravity: 0.05
        });
      }, 860);

      // Fase 3: Chuva lateral de corações e estrelas lunares
      setTimeout(() => {
        spawnParticles({
          x: window.innerWidth * 0.25,
          y: window.innerHeight * 0.35,
          count: 50,
          colors: ['#ff4d94', '#fbbf24', '#ffffff'],
          shapes: ['heart', 'star'],
          speedMin: 3,
          speedMax: 11
        });
        spawnParticles({
          x: window.innerWidth * 0.75,
          y: window.innerHeight * 0.35,
          count: 50,
          colors: ['#ff4d94', '#fbbf24', '#60a5fa'],
          shapes: ['heart', 'star'],
          speedMin: 3,
          speedMax: 11
        });
      }, 1650);

      setTimeout(() => {
        card3dInner.classList.remove('anim-reveal-love');
        card3dInner.style.transform = 'rotateY(180deg)';
        revealedStates[currentCardIndex] = true;
        isAnimatingCard = false;
        updateCaptionAndButtons(true);
        renderProgressAndTray();
      }, 2800);
    }
  }

  // =========================================================================
  // ANIMAÇÃO CINEMATOGRÁFICA DE ABERTURA DO PACOTE BOOSTER
  // =========================================================================
  let isOpeningPack = false;

  function openBoosterPack() {
    if (isOpeningPack) return;
    isOpeningPack = true;

    boosterPack.style.transform = '';
    if (packCtaArea) packCtaArea.style.opacity = '0';
    playPackSlashAndOpenSound();

    const rect = boosterPack.getBoundingClientRect();
    const topSeamY = rect.top + rect.height * 0.135;

    // ETAPA 1 (0ms): Tensão + Corte de Energia atravessando o lacre superior!
    boosterPack.classList.add('stage-charge');
    if (packSlashEffect) packSlashEffect.classList.add('slash-active');
    if (packAuraRing) packAuraRing.classList.add('intense');

    // Faíscas acompanhando a linha do corte da esquerda para a direita
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        spawnParticles({
          x: rect.left + (rect.width * (i / 5)),
          y: topSeamY,
          count: 16,
          colors: ['#ffffff', '#ffcb05', '#38bdf8'],
          shapes: ['star', 'circle'],
          speedMin: 3,
          speedMax: 10,
          sizeMin: 4,
          sizeMax: 9
        });
      }, i * 55);
    }

    // ETAPA 2 (420ms): Lacre superior é arrancado e feixes de luz saem de dentro do pacote!
    setTimeout(() => {
      boosterPack.classList.add('stage-ripped');
      if (packInnerBeams) packInnerBeams.classList.add('beams-active');

      spawnParticles({
        x: rect.left + rect.width / 2,
        y: topSeamY,
        count: 65,
        colors: ['#ffcb05', '#38bdf8', '#ee1515', '#ffffff'],
        shapes: ['star', 'circle'],
        speedMin: 4,
        speedMax: 14
      });
    }, 420);

    // ETAPA 3 (920ms): As 11 cartas sobem de dentro do pacote enquanto a embalagem desliza!
    setTimeout(() => {
      boosterPack.classList.add('stage-emerge');
    }, 920);

    // ETAPA 4 (1550ms): Flash de transição e entrada da pilha de 11 cartas no centro!
    setTimeout(() => {
      if (screenFlash) {
        screenFlash.className = 'screen-flash flash-active';
      }
      packScene.classList.add('hidden');
      revealStage.classList.add('active');
      currentCardIndex = 0;
      revealedStates = new Array(11).fill(false);
      loadCardSlot(0);
      isOpeningPack = false;
    }, 1620);
  }

  function resetToClosedPack() {
    revealStage.classList.remove('active');
    packScene.classList.remove('hidden');
    boosterPack.classList.remove('stage-charge', 'stage-ripped', 'stage-emerge');
    if (packSlashEffect) packSlashEffect.classList.remove('slash-active');
    if (packInnerBeams) packInnerBeams.classList.remove('beams-active');
    if (packAuraRing) packAuraRing.classList.remove('intense');
    if (packCtaArea) packCtaArea.style.opacity = '1';
    if (screenFlash) screenFlash.className = 'screen-flash';
    document.body.classList.remove('mode-rare-revealed', 'mode-love-revealed');
    currentCardIndex = 0;
    revealedStates = new Array(11).fill(false);
    isAnimatingCard = false;
  }

  // =========================================================================
  // EVENT LISTENERS PRINCIPAIS
  // =========================================================================
  if (boosterPack) {
    boosterPack.addEventListener('click', openBoosterPack);
  }
  if (btnOpenPack) {
    btnOpenPack.addEventListener('click', openBoosterPack);
  }

  if (card3dWrapper) {
    card3dWrapper.addEventListener('click', () => {
      if (!revealedStates[currentCardIndex]) {
        triggerCardReveal();
      } else if (currentCardIndex < PACK_CARDS.length - 1) {
        loadCardSlot(currentCardIndex + 1);
      }
    });
  }

  if (btnActionCard) {
    btnActionCard.addEventListener('click', () => {
      if (!revealedStates[currentCardIndex]) {
        triggerCardReveal();
      } else if (currentCardIndex < PACK_CARDS.length - 1) {
        loadCardSlot(currentCardIndex + 1);
      }
    });
  }

  if (btnPrevCard) {
    btnPrevCard.addEventListener('click', () => {
      if (!isAnimatingCard && currentCardIndex > 0) {
        loadCardSlot(currentCardIndex - 1);
      }
    });
  }

  if (btnRestartPack) {
    btnRestartPack.addEventListener('click', resetToClosedPack);
  }

  // Botão "Aceitar Encontro!" na 11ª carta
  if (btnAcceptLove) {
    btnAcceptLove.addEventListener('click', () => {
      playCelebrationFanfare();
      celebrationModal.classList.add('open');

      for (let i = 0; i < 4; i++) {
        setTimeout(() => {
          spawnParticles({
            x: window.innerWidth * (0.2 + Math.random() * 0.6),
            y: window.innerHeight * (0.2 + Math.random() * 0.4),
            count: 85,
            colors: ['#ff4d94', '#fbbf24', '#60a5fa', '#ffffff'],
            shapes: ['heart', 'star'],
            speedMin: 4,
            speedMax: 14,
            sizeMin: 6,
            sizeMax: 15
          });
        }, i * 320);
      }
    });
  }

  if (btnDodgeNo) {
    const playfulTexts = [
      'Tem certeza? 🥺',
      'Umbreon & Sylveon estão torcendo! 🌙💖',
      'Ataque de Casal Super Efetivo! ✨',
      'Não dá pra escapar dessa Master Ball! 💜',
      'SIM, EU ACEITO! 💖'
    ];
    let dodgeCount = 0;

    const dodgeAction = () => {
      dodgeCount++;
      if (dodgeCount >= playfulTexts.length) {
        btnAcceptLove.click();
        return;
      }
      btnDodgeNo.textContent = playfulTexts[dodgeCount - 1];
      const offsetX = (Math.random() - 0.5) * 140;
      const offsetY = (Math.random() - 0.5) * 50;
      btnDodgeNo.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };

    btnDodgeNo.addEventListener('mouseenter', dodgeAction);
    btnDodgeNo.addEventListener('click', dodgeAction);
  }

  if (btnCloseCelebration) {
    btnCloseCelebration.addEventListener('click', () => {
      celebrationModal.classList.remove('open');
    });
  }

  if (btnSoundToggle) {
    btnSoundToggle.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      btnSoundToggle.textContent = soundEnabled ? '🔊' : '🔇';
    });
  }
})();
