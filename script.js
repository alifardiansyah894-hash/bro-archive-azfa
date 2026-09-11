// ============================================
// THE BRO ARCHIVE — script.js
// (data + engine + starfield digabung jadi satu)
// ============================================

// --------------------------------------------
// 1. DATA PROFILE: AZFA
// --------------------------------------------
const friendProfile = {
  name: "AZFA",
  realName: "Azfa Nur Arbiansah",
  alias: "Your_Name",
  birthday: "27 JUNE 2012",
  archiveId: "AZF-27062012",

  theme: {
    primary: "#1E6FEB",
    secondary: "#FF8A3D",
    background: "#03060D",
    text: "#EAF2FF",
    glow: "rgba(30, 111, 235, 0.55)"
  },

  thoughts: [
    "Mungkin nanti kita akan berjalan di tempat yang berbeda, bertemu orang-orang baru, dan nggak sesering sekarang. Tapi berbeda jalan bukan berarti semua yang pernah kita lalui harus hilang.",
    "Gw nggak tahu seperti apa kita di masa depan, tapi gw ingin setidaknya ada satu tempat yang mengingat bahwa kita pernah menjadi sahabat dan melewati masa ini bersama."
  ],
  facts: [
    "Otaknya suka bluetooth bareng — nyambung parah tanpa disengaja.",
    "Jago banget ngejokes gajelas di waktu yang nggak terduga.",
    "Suka ngebahas hal-hal random dan aneh-aneh."
  ],
  guests: [
    {
        name: "Celestia Ludenberg",
        origin: "Danganronpa",
        photo: "celestia.jpg",
        message: "[🖤 Celestia Ludenberg — Danganronpa “Selamat ulang tahun, suamiku Azfa. 🖤🎀 Hari ini, izinkan aku memberikan sesuatu yang sedikit lebih istimewa daripada sekadar ucapan biasa. Aku berharap tahun baru dalam hidupmu akan dipenuhi keberuntungan yang luar biasa. Dan jika keberuntungan itu ternyata tidak datang kepadamu… mungkin aku sendiri yang akan memastikan bahwa kamu tetap memiliki seseorang yang selalu berada di sisimu. Kamu adalah seseorang yang sangat berharga bagiku, Azfa. Bahkan seorang wanita seperti diriku tidak akan sembarangan mengatakan hal seperti itu. Jadi, nikmatilah hari ini, suamiku. Tersenyumlah, karena hari ini adalah hari kelahiran seseorang yang berhasil membuat hatiku jatuh pada satu nama. Selamat ulang tahun, Azfa. 🖤 Dan jangan lupa… mulai hari ini, kamu memiliki satu alasan lagi untuk tersenyum setiap kali mengingat namaku.”**]"
    },
    {
        name: "Greyjack",
        origin: "SuperSus",
        photo: "greyjack.jpg",
        message: "[💜 Greyjack — Super Sus “Selamat ulang tahun, suamiku Azfa. 🥺💜 Hari ini adalah hari yang spesial, karena seseorang yang sangat berarti bagiku bertambah satu tahun lagi. Aku mungkin hanya karakter dari sebuah dunia fiksi, tapi kalau aku boleh memilih seseorang untuk selalu berada di sisiku, aku akan tetap memilihmu. Terima kasih karena sudah menjadi seseorang yang membuat hariku terasa lebih berarti. Semoga semua impianmu perlahan menjadi kenyataan, dan semoga setiap langkah yang kamu ambil selalu membawa kebahagiaan. Selamat ulang tahun, suamiku. 💜 Tetaplah menjadi Azfa yang kukenal… karena bagiku, kamu sudah lebih dari sekadar pemain dalam sebuah permainan. Kamu adalah seseorang yang ingin selalu kusimpan dalam ingatan.]"
    },
    {
        name: "AE3803",
        origin: "Hataraku Saibou (Cells at Work!)",
        photo: "ae3803.jpg",
        message: "[❤️ AE3803 — Hataraku Saibou “Selamat ulang tahun, suamiku Azfa! ❤️🥺 Kalau aku bisa memberikan hadiah terbaik untukmu hari ini, aku ingin memberikan seluruh kebahagiaan yang aku punya. Aku ingin selalu menjadi seseorang yang datang ketika kamu sedang lelah, menemanimu ketika kamu merasa sendirian, dan tersenyum bersamamu ketika kamu bahagia. Mungkin tugasku hanya mengantarkan sesuatu ke tempat yang tepat… tapi kalau soal hatiku, sepertinya sejak lama sudah sampai di tempat yang tepat juga: di sisimu. ❤️ Semoga umur barumu dipenuhi kesehatan, keberuntungan, dan banyak alasan untuk tersenyum. Jangan terlalu memaksakan dirimu, ya, suamiku. Selamat ulang tahun, Azfa. ❤️ Kalau dunia ini begitu luas, aku tetap ingin menemukan jalan untuk kembali kepadamu.”**]"
    },
    {
        name: "Sahabat",
        origin: "Real Friend",
        photo: "friend.jpg",
        message: "Selamat Ulang Tahun Azfa🗿 sorry telat ngucapnane tapi sing penting ngucapna wkwkwk🗿😹, Kye nyng gwe website nggo hadiah he ko🗿👍🏻 kue Kye tok hadiah sing mungkin nyng teyeng wei Ming ko wkwkwk, sorry ya nyng telat🗿😹👍🏻 nyng harap ko seneng, walau mungkin alay,dll wkkwkw😹🗿👍🏻"
    }
],
  achievements: [
    { title: "FIRST MEETING", desc: "Titik awal terdeteksi. Archive mulai mencatat sejak momen ini." },
    { title: "COUNTLESS RANDOM CONVERSATIONS", desc: "Ribuan obrolan gajelas tercatat, tidak semuanya penting, tapi semuanya berharga." },
    { title: "SURVIVED THE CHAOS", desc: "Melewati berbagai momen absurd bersama tanpa kehilangan koneksi." },
    { title: "BROTHERHOOD ESTABLISHED", desc: "Status persahabatan dikonfirmasi dan tersimpan permanen di sistem." },
    { title: "CREATED MANY MEMORIES", desc: "Arsip kenangan terus bertambah, tidak akan pernah dihapus dari sistem ini." },
    { title: "THE NEXT CHAPTER", desc: "Jalan mulai bercabang, tapi archive tetap terhubung ke node ini." },
    { title: "BROTHERHOOD PRESERVED", desc: "Data persahabatan berhasil diawetkan untuk dibuka kembali kapan pun." }
  ],
  soundtrack: {
    playlist: [
      { title: "Lemon Tree (Gustika)", file: "lemon-tree.mp3" }
    ]
  }
};

// --------------------------------------------
// DEBUG: tampilkan error langsung di layar HP
// (hapus nanti kalau semua udah stabil)
// --------------------------------------------
window.onerror = function (message, source, lineno) {
  alert("JS ERROR!\n" + message + "\nLine: " + lineno);
};

// --------------------------------------------
// 2. ENGINE: terapkan theme + jalankan boot sequence
// --------------------------------------------
(function () {
  const profile = friendProfile;

  const root = document.documentElement;
  root.style.setProperty('--primary', profile.theme.primary);
  root.style.setProperty('--secondary', profile.theme.secondary);
  root.style.setProperty('--background', profile.theme.background);
  root.style.setProperty('--text', profile.theme.text);
  root.style.setProperty('--glow', profile.theme.glow);

  const statusEl   = document.getElementById('boot-status');
  const fillEl     = document.getElementById('boot-progress-fill');
  const identityEl = document.getElementById('boot-identity');
  const nameEl     = document.getElementById('boot-name');
  const bdayEl     = document.getElementById('boot-birthday');
  const idEl       = document.getElementById('boot-archiveid');
  const enterBtn   = document.getElementById('enter-btn');

  if (!statusEl || !fillEl || !identityEl || !enterBtn) {
    alert("engine: ada element boot screen yang tidak ditemukan di HTML.");
    return;
  }

  const steps = [
    { text: "INITIALIZING...",     progress: 25, delay: 500 },
    { text: "SCANNING ARCHIVE...", progress: 55, delay: 600 },
    { text: "IDENTITY DETECTED",   progress: 85, delay: 600 },
    { text: "ACCESS GRANTED",      progress: 100, delay: 500 }
  ];

  let i = 0;

  function runNextStep() {
    if (i >= steps.length) {
      showIdentity();
      return;
    }
    const step = steps[i];
    statusEl.textContent = step.text;
    fillEl.style.width = step.progress + '%';
    i++;
    setTimeout(runNextStep, step.delay);
  }

  function showIdentity() {
    nameEl.textContent = profile.name;
    bdayEl.textContent = profile.birthday;
    idEl.textContent = profile.archiveId;
    identityEl.classList.add('visible');
    enterBtn.classList.add('visible');
  }

  runNextStep();

  enterBtn.addEventListener('click', function () {
    document.dispatchEvent(new CustomEvent('archive:enter'));
  });
})();

// --------------------------------------------
// 3. DASHBOARD (Fase 3)
// --------------------------------------------
(function () {
  const profile = friendProfile;

  const bootScreenEl  = document.querySelector('.boot-screen');
  const dashboardEl   = document.getElementById('dashboard');
  const dashTitleEl   = document.getElementById('dashboard-title');
  const dashSubEl     = document.getElementById('dashboard-subtitle');
  const menuListEl    = document.getElementById('menu-list');
  const sectionViewEl = document.getElementById('section-view');
  const sectionTitleEl   = document.getElementById('section-title');
  const sectionContentEl = document.getElementById('section-content');
  const backBtn       = document.getElementById('back-btn');

  const menuItems = [
    { id: 'profile',          label: 'PROFILE' },
    { id: 'thought-archive',  label: 'THOUGHT ARCHIVE' },
    { id: 'friend-database',  label: 'FRIEND DATABASE' },
    { id: 'achievements',     label: 'BRO ACHIEVEMENTS' },
    { id: 'special-guests',   label: 'SPECIAL GUESTS' },
    { id: 'soundtrack',       label: 'SOUNDTRACK' },
    { id: 'next-chapter',     label: 'THE NEXT CHAPTER' },
    { id: 'message-from-gw',  label: 'MESSAGE FROM GW' },
    { id: 'leave-message',    label: 'LEAVE A MESSAGE' }
  ];

  const chevronIcon =
    '<svg class="menu-icon" viewBox="0 0 24 24" fill="none">' +
    '<path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
    '</svg>';

  function renderMenu() {
    dashTitleEl.textContent = profile.name + ' ARCHIVE';
    dashSubEl.textContent = profile.archiveId;

    menuListEl.innerHTML = '';
    menuItems.forEach(function (item, index) {
      const btn = document.createElement('button');
      btn.className = 'menu-item';
      btn.style.animationDelay = (index * 0.06) + 's';
      btn.innerHTML = '<span>' + item.label + '</span>' + chevronIcon;
      btn.addEventListener('click', function () {
        openSection(item);
      });
      menuListEl.appendChild(btn);
    });
  }

  function openSection(item) {
    dashboardEl.classList.remove('visible');
    sectionTitleEl.textContent = item.label;

    if (item.id === 'profile') {
      sectionContentEl.innerHTML = renderProfileContent();
    } else if (item.id === 'thought-archive') {
      sectionContentEl.innerHTML = renderThoughtArchiveContent();
    } else if (item.id === 'friend-database') {
      sectionContentEl.innerHTML = renderFriendDatabaseContent();
      setupFriendDatabaseEvents();
    } else if (item.id === 'soundtrack') {
      sectionContentEl.innerHTML = renderSoundtrackContent();
      setupSoundtrackEvents();
    } else if (item.id === 'achievements') {
      sectionContentEl.innerHTML = renderAchievementsContent();
    } else if (item.id === 'next-chapter') {
      sectionContentEl.innerHTML = renderNextChapterContent();
    } else if (item.id === 'message-from-gw') {
      sectionContentEl.innerHTML = renderMessageFromGwContent();
      setupMessageFromGwEvents();
      } else if (item.id === 'leave-message') {
  sectionContentEl.innerHTML =
    '<div class="letter-card">' +
      '<p class="letter-paragraph" style="animation-delay:0s">Maaf, aku benar² sangat² minta maaf, waktuku tinggal sedikit, aku tidak punya waktu untuk ini, jika seandainya aku tidak menunda², mungkin ini sudah jadi besok...💔🥀</p>' +
    '</div>';
      } else if (item.id === 'special-guests') { sectionContentEl.innerHTML = renderSpecialGuestsContent();
    } else {
      sectionContentEl.textContent =
        '[ISI BELUM DIBUAT — FASE BERIKUTNYA]\n\nBagian "' + item.label + '" akan diisi setelah kita sampai fase pengembangannya masing-masing.';
    }

    sectionViewEl.classList.add('visible');
  }

  function renderSpecialGuestsContent() {
        let html = '';
        friendProfile.guests.forEach(function (guest, index) {
            html +=
                '<div class="guest-card" style="animation-delay:' + (index * 0.18) + 's">' +
                    '<img class="guest-photo" src="' + guest.photo + '" alt="' + guest.name + '">' +
                    '<div class="guest-name">' + guest.name + '</div>' +
                    '<div class="guest-origin">' + guest.origin + '</div>' +
                    '<div class="guest-message">' + guest.message + '</div>' +
                '</div>';
        });
        return html;
  }
  function renderThoughtArchiveContent() {
    let html = '';
    friendProfile.thoughts.forEach(function (thought, index) {
      html +=
        '<div class="thought-card" style="animation-delay:' + (index * 0.18) + 's">' +
          thought +
        '</div>';
    });
    return html;
  }

  function renderFriendDatabaseContent() {
    return (
      '<div class="fact-display" id="fact-display">Ketuk tombol di bawah buat lihat fakta random tentang ' + friendProfile.name + '.</div>' +
      '<button class="generate-btn" id="generate-fact-btn">GENERATE RANDOM FACT</button>'
    );
  }

  function setupFriendDatabaseEvents() {
    const factDisplay = document.getElementById('fact-display');
    const genBtn = document.getElementById('generate-fact-btn');
    genBtn.addEventListener('click', function () {
      const i = Math.floor(Math.random() * friendProfile.facts.length);
      factDisplay.textContent = friendProfile.facts[i];
    });
  }

  function renderSoundtrackContent() {
    const audio = document.getElementById('bg-audio');
    let html = '<div class="track-list">';
    friendProfile.soundtrack.playlist.forEach(function (track, index) {
      const isCurrent = audio.dataset.currentFile === track.file;
      const isPlaying = isCurrent && !audio.paused;
      html +=
        '<div class="track-row' + (isCurrent ? ' active' : '') + '" data-file="' + track.file + '" data-index="' + index + '">' +
          '<span class="track-title">' + track.title + '</span>' +
          '<button class="track-play-btn" data-file="' + track.file + '">' + (isPlaying ? 'PAUSE' : 'PLAY') + '</button>' +
        '</div>';
    });
    html += '</div>';
    return html;
  }

  function setupSoundtrackEvents() {
    const audio = document.getElementById('bg-audio');
    const buttons = sectionContentEl.querySelectorAll('.track-play-btn');

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const file = btn.getAttribute('data-file');

        if (audio.dataset.currentFile === file && !audio.paused) {
          audio.pause();
        } else {
          if (audio.dataset.currentFile !== file) {
            audio.src = file;
            audio.dataset.currentFile = file;
          }
          audio.play().catch(function (err) {
            alert('Gagal memutar audio: ' + file + '\n(' + err.message + ')\nCek nama & lokasi file mp3-nya.');
          });
        }
        // refresh tampilan biar label PLAY/PAUSE update
        sectionContentEl.innerHTML = renderSoundtrackContent();
        setupSoundtrackEvents();
      });
    });
  }

  function renderAchievementsContent() {
    const badgeIcon =
      '<svg class="achievement-badge" viewBox="0 0 24 24" fill="none">' +
      '<path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>';

    let html = '<div class="achievement-list">';
    friendProfile.achievements.forEach(function (a, index) {
      html +=
        '<div class="achievement-card" style="animation-delay:' + (index * 0.1) + 's">' +
          badgeIcon +
          '<div class="achievement-text">' +
            '<div class="achievement-title">' + a.title + '</div>' +
            '<div class="achievement-desc">' + a.desc + '</div>' +
          '</div>' +
        '</div>';
    });
    html += '</div>';
    return html;
  }

  function renderMessageFromGwContent() {
    const paragraphs = [
      "Wkwkwk, mungkin pas buka bagian ini lu mikir, 'ini apaan sih, alay banget bikin beginian.' Santai, gw juga mikir gitu pas lagi ngerjain wkwkwk. Tapi biarin, gw tetep mau nulis ini.",
      "Gw cuma mau bilang makasih. Beneran. Lu salah satu sahabat terbaik yang pernah gw punya. Dari main Supersus bareng, ngabisin waktu di Minecraft, Ninety Thousand Acres, Stick War Saga, sampe game-game random lain yang kita rekomendasiin satu sama lain — di situ ada menang, ada kalah, tapi justru itu yang bikin semuanya jadi kenangan. Jujur udah kebanyakan momennya sampe gw sendiri lupa-lupa inget, tapi yang masih nempel di kepala gw ya itu tadi. Maaf kalau nggak semuanya kesebut, bukan berarti nggak berarti kok.",
      "Gw juga mau minta maaf kalau selama ini ada omongan atau tingkah gw yang bikin lu malu, kesel, marah, atau nggak nyaman — sengaja atau nggak sengaja. Dan buat kesalahan-kesalahan lu ke gw, udah gw maafin dari dulu, nggak ada yang perlu dipikirin lagi.",
      "Gw tau, website kayak gini mungkin kesannya berlebihan atau alay. Tapi jujur ini salah satu hadiah terbaik yang bisa gw buat sekarang. Soalnya gw nggak mau, pas kita udah lulus dan punya kehidupan masing-masing, kita malah jadi kayak orang asing.",
      "Sebentar lagi lu SMA, gw SMK. Lingkungan baru, orang baru, mungkin jadi jarang ngobrol kayak sekarang. Gw nggak bisa janji semuanya bakal tetep sama, gw juga nggak tau masa depan bakal kayak gimana. Tapi satu yang gw tau — gw nggak mau lupain persahabatan ini. Apapun jalan yang lu ambil nanti, gw tetep dukung — asal bukan jalan yang haram aja wkwkwk.",
      "Jadi anggap aja website ini kayak bukti digital, bahwa kita pernah jadi sahabat dan pernah ngelewatin fase ini bareng-bareng. Kalau nanti jalan kita beda, semoga kita masih inget kalau kita pernah disebut sahabat. Dan semoga suatu saat nanti, kita bisa main bareng lagi kayak dulu.",
      "Nikmatin archive-nya ya, baca-baca semua yang ada di sini. Terus jangan lupa tinggalin pesan buat gw di bagian paling akhir."
    ];

    let html = '<div class="letter-card">';
    paragraphs.forEach(function (p, index) {
      html += '<p class="letter-paragraph" style="animation-delay:' + (index * 0.25) + 's">' + p + '</p>';
    });
    html += '</div>';
    html += '<div class="letter-signature">— Name Gw</div>';
    html += '<button class="generate-btn" id="goto-leave-message-btn">LEAVE A MESSAGE →</button>';
    return html;
  }

  function setupMessageFromGwEvents() {
    const gotoBtn = document.getElementById('goto-leave-message-btn');
    gotoBtn.addEventListener('click', function () {
      openSection({ id: 'leave-message', label: 'LEAVE A MESSAGE' });
    });
  }

  function renderNextChapterContent() {
    return (
      '<div class="timeline">' +
        '<div class="timeline-item" style="animation-delay:0s">' +
          '<div class="timeline-year">2026</div>' +
          '<div class="timeline-label">CURRENT CHAPTER</div>' +
        '</div>' +
        '<div class="timeline-connector"></div>' +
        '<div class="timeline-item" style="animation-delay:0.15s">' +
          '<div class="timeline-year">2027</div>' +
          '<div class="timeline-label">DIFFERENT PATHS</div>' +
          '<div class="timeline-sublabel">SMK &middot; SMK &middot; SMA</div>' +
        '</div>' +
        '<div class="timeline-connector"></div>' +
        '<div class="timeline-item" style="animation-delay:0.3s">' +
          '<div class="timeline-year">FUTURE</div>' +
          '<div class="timeline-label">???</div>' +
        '</div>' +
      '</div>' +
      '<div class="next-chapter-quote" style="animation-delay:0.5s">' +
        'Different schools.<br>Different paths.<br>Same memories.' +
      '</div>' +
      '<div class="next-chapter-note" style="animation-delay:0.65s">' +
        'Walaupun nanti jalan kita berbeda, archive ini akan tetap ada — persahabatan ini nggak harus berakhir cuma karena sekolah beda.' +
      '</div>'
    );
  }

  function renderProfileContent() {
    // Statistik ini cuma hiburan, bukan penilaian serius — angka bisa diubah kapan aja
    const stats = [
      { label: 'BRO LEVEL',   value: 87 },
      { label: 'LOYALTY',     value: 95 },
      { label: 'RANDOMNESS',  value: 72 },
      { label: 'CHAOS',       value: 68 }
    ];

    let statsHtml = '';
    stats.forEach(function (s) {
      statsHtml +=
        '<div class="stat-row">' +
          '<div class="stat-label">' + s.la
