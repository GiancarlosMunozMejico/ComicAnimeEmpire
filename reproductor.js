// Obtener elementos del reproductor
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-container');
const volume = document.getElementById('volume');
const volumeValue = document.getElementById('volumeValue');

// Lista de canciones
const songs = [
  {
    title: 'This Game (No Game No Life OP)',
    artist: 'Konomi Suzuki',
    cover: 'portadasaudio/nogamenolife.png',
    file: 'audio/OPNOGAMENOLIFE.mp3'
  },
  {
    title: 'RIP',
    artist: 'eicateve x hrchem x TOHRU MiTSUHASHi',
    cover: 'portadasaudio/rip.png',
    file: 'audio/RIP.mp3'
  },
  {
    title: 'Whats Up People',
    artist: 'Hideki Taniuchi and Yoshihisa Hirano',
    cover: 'img/portada1.jpg',
    file: 'audio/op2deathnote.mp3'
  },
  {
    title: 'Kawaki wo Ameku',
    artist: 'Minami',
    cover: 'img/portada1.jpg',
    file: 'audio/opdomesticnokanojo.mp3'
  },
  {
    title: 'Moshimo',
    artist: 'Daisuke',
    cover: 'img/portada1.jpg',
    file: 'audio/op12narutoshippuden.mp3'
  },
  {
    title: 'Zankoku na Yume to Nemure',
    artist: 'Minami Kuribayashi',
    cover: 'img/portada1.jpg',
    file: 'audio/opkaifuku.mp3'
  },
  {
    title: 'Resister',
    artist: 'Asca',
    cover: 'img/portada1.jpg',
    file: 'audio/op7sao.mp3'
  },
  {
    title: 'Gamushara',
    artist: 'Miyuna',
    cover: 'img/portada1.jpg',
    file: 'audio/op5blackclover.mp3'
  },
  {
    title: 'Realize',
    artist: 'Konomi Suzuki',
    cover: 'img/portada1.jpg',
    file: 'audio/op3rezero.mp3'
  },
  {
    title: 'The Rumbling',
    artist: 'SiM',
    cover: 'img/portada1.jpg',
    file: 'audio/op7snk.mp3'
  },
  {
    title: 'Co shu Nie',
    artist: 'Asphyxia',
    cover: 'img/portada1.jpg',
    file: 'audio/op3tokyoghoul.mp3'
  },
  {
    title: 'Two souls-toward the truth',
    artist: 'FripSide',
    cover: 'img/portada1.jpg',
    file: 'audio/op2owarinoseraph.mp3'
  },
  {
    title: 'OP 5 YUGIOH ARC V',
    artist: '¡Yu-Gi-Oh! Arc V',
    cover: 'img/portada1.jpg',
    file: 'audio/op5yugioharcv.mp3'
  },
  {
    title: 'OP NEW PRINCE OF TENNIS',
    artist: 'Fujisawa Norisama',
    cover: 'img/portada1.jpg',
    file: 'audio/oprinceoftennis.mp3'
  },

  {
    title: 'Cry Baby',
    artist: 'Hige Dandism',
    cover: 'img/portada1.jpg',
    file: 'audio/op1tokyorevengers.mp3'
  },

  // Agrega más canciones aquí
];

let currentSongIndex = 0; // Índice de la canción actual

// Función para cargar la canción actual
function loadSong() {
  const currentSong = songs[currentSongIndex];
  audio.src = currentSong.file;
  document.getElementById('title').textContent = currentSong.title;
  document.getElementById('artist').textContent = currentSong.artist;
  document.getElementById('cover').style.backgroundImage = `url(${currentSong.cover})`;
  audio.play(); // Reproducir la canción cargada automáticamente
}

// Función para reproducir o pausar la canción
function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'; // Icono de pausa
  } else {
    audio.pause();
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>'; // Icono de reproducción
  }
}

// Función para reproducir la canción anterior
function playPreviousSong() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = songs.length - 1;
  }
  loadSong();
}

// Función para reproducir la siguiente canción
function playNextSong() {
  currentSongIndex++;
  if (currentSongIndex >= songs.length) {
    currentSongIndex = 0;
  }
  loadSong();
}

// Función para actualizar el progreso de la canción
function updateProgress() {
  const { currentTime, duration } = audio;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Función para actualizar el volumen
function updateVolume() {
  audio.volume = volume.value / 100;
  volumeValue.textContent = `${volume.value}%`;
}

// Event listeners
playPauseBtn.addEventListener('click', togglePlayPause);
prevBtn.addEventListener('click', playPreviousSong);
nextBtn.addEventListener('click', playNextSong);
audio.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('click', function (e) {
  const { offsetX } = e;
  const progressWidth = this.clientWidth;
  const duration = audio.duration;
  audio.currentTime = (offsetX / progressWidth) * duration;
});
volume.addEventListener('input', updateVolume);

// Event listener para el evento 'ended' del elemento de audio
audio.addEventListener('ended', playNextSong);

// Cargar la primera canción al cargar la página
loadSong();