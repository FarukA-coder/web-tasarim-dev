const channels = [
  {
    title: "TRT World",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/TRT_World_logo.png",
    stream: "https://tv-trtworld.live.trt.com.tr/master_720.m3u8"
  },
  {
    title: "TRT Türk",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/TRT_T%C3%BCrk_logo.png",
    stream: "https://tv-trtturk.live.trt.com.tr/master_720.m3u8"
  },
  {
    title: "PowerTürk TV",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Power_T%C3%BCrk_logo.png",
    stream: "https://livetv.powerapp.com.tr/powerturk/powerturk.smil/playlist.m3u8"
  },
  {
    title: "Power HD",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Power_TV_logo.png",
    stream: "https://livetv.powerapp.com.tr/powerhd/powerhd.smil/playlist.m3u8"
  },
  {
    title: "NR1 Türk",
    image: "https://upload.wikimedia.org/wikipedia/tr/3/35/Nr1t%C3%BCrk.png",
    stream: "https://mn-nrtturk.mncdn.com/nrtturk/nrtturk/playlist.m3u8"
  }
];

const grid = document.getElementById('channel-grid');
const playerModal = document.getElementById('playerModal');
const video = document.getElementById('videoPlayer');
const closeBtn = document.getElementById('closePlayer');

channels.forEach(ch => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${ch.image}" alt="${ch.title}">
    <h3>${ch.title}</h3>
    <p>Canlı Yayın</p>
  `;
  card.addEventListener('click', () => playChannel(ch.stream));
  grid.appendChild(card);
});

let hlsInstance = null;

function playChannel(url) {
  playerModal.classList.add('active');
  if (hlsInstance) {
    try { hlsInstance.destroy(); } catch {}
    hlsInstance = null;
  }

  if (Hls.isSupported()) {
    hlsInstance = new Hls();
    hlsInstance.loadSource(url);
    hlsInstance.attachMedia(video);
    hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => video.play());
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = url;
    video.play();
  } else {
    alert("Tarayıcın bu canlı yayını desteklemiyor.");
  }
}

closeBtn.addEventListener('click', () => {
  playerModal.classList.remove('active');
  if (hlsInstance) {
    try { hlsInstance.destroy(); } catch {}
    hlsInstance = null;
  }
  video.pause();
  video.src = '';
});
