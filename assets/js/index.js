let particlesEnabled = true;
function createParticle(event) {
  if (!particlesEnabled) return;

  const particle = document.createElement("div");
  particle.className = "particle";
  document.body.appendChild(particle);

  particle.style.left = `${event.clientX}px`;
  particle.style.top = `${event.clientY}px`;
  particle.style.animation = "fall 2s linear forwards";

  particle.addEventListener("animationend", () => particle.remove());
}

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyP") {
    particlesEnabled = !particlesEnabled;
    document.querySelectorAll(".particle").forEach((p) => p.remove());

    const disableMessage = document.querySelector(".particle-disable");
    disableMessage.style.display = "block";
    setTimeout(() => (disableMessage.style.display = "none"), 500);
  }
});

window.addEventListener("load", () => {
  const artworks = [
    ["assets/pics/ocs/eydoo.gif", "Artwork by Gumbalino", "https://twitter.com/gumbalino", "Gumbalino"],
    ["assets/pics/ocs/wife.png", "Artwork by Ame", "https://x.com/yusxki_", "yusxki_"],
    ["assets/pics/ocs/newicon.png", "Artwork by KirbyTheDemon", "https://twitter.com/kirbythedemon", "KirbyTheDemon"],
    ["assets/pics/ocs/icon.png", "Artwork by Bitto", "https://www.youtube.com/@Bitto1070", "Bitto"],
    ["assets/pics/ocs/header.jpg", "Artwork by Brayden023", "https://x.com/Brayden0238", "Brayden023"],
    ["assets/pics/ocs/hero.png", "Artwork by Bitto", "https://www.youtube.com/@Bitto1070", "Bitto"],
    ["assets/pics/ocs/um.jpg", "Artwork by GasterManiaNG", "https://x.com/gastermanialol", "GasterManiaNG"],
    ["assets/pics/ocs/idk.png", "Artwork by Bitto", "https://www.youtube.com/@Bitto1070", "Bitto"],
    ["assets/pics/ocs/rhythm.jpg", "Artwork by Bitto", "https://www.youtube.com/@Bitto1070", "Bitto"],
    ["assets/pics/ocs/Well.jpg", "Artwork by herofan21500", "https://soundcloud.com/no-one-798324826", "herofan21500"],
    ["assets/pics/ocs/thisispeakbrowtf.jpg", "Artwork by ShultzNG", "https://x.com/ShultzNG", "ShultzNG"],
    ["assets/pics/ocs/peakinthepeak.png", "Artwork by Dozziyokii", "https://www.youtube.com/@Dozziyokii", "Dozziyokii"],
    ["assets/pics/ocs/memory.png", "Artwork by Gumbalino", "https://twitter.com/gumbalino", "Gumbalino"],
  ];

  const highlightedArtists = new Set(["Gumbalino", "Ame", "KirbyTheDemon", "Bitto", "Brayden023", "GasterManiaNG", "herofan21500", "ShultzNG", "Dozziyokii"]);

  const [imgSrc, creditText, creditLink, artist] = artworks[Math.floor(Math.random() * artworks.length)];
  const profilePic = document.getElementById("profilePicture");
  const artistCredit = document.getElementById("artistCredit");

  profilePic.src = imgSrc;
  artistCredit.innerText = creditText;
  artistCredit.href = creditLink;
  if (highlightedArtists.has(artist)) artistCredit.style.color = "cyan";
});

document.addEventListener("mousemove", createParticle);

function syncMusicPlayer() {
  const audio = document.getElementById("backgroundMusic");
  const progress = document.getElementById("musicProgress");

  audio.addEventListener("timeupdate", () => {
    if (audio.duration) progress.value = (audio.currentTime / audio.duration) * 100;
  });

  progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
  });
}

let fadeIntervals = [];

function fadeMusic(targetVolume, duration) {
  fadeIntervals.forEach(clearInterval);
  const audio = document.getElementById("backgroundMusic");
  let step = (targetVolume - audio.volume) / (duration / 10);

  const interval = setInterval(() => {
    if ((step > 0 && audio.volume < targetVolume) || (step < 0 && audio.volume > targetVolume)) audio.volume = Math.min(Math.max(audio.volume + step, 0), 1);
    else {
      clearInterval(interval);
      if (targetVolume === 0) audio.pause();
    }
  }, 10);

  fadeIntervals.push(interval);
}

function playMusic() {
  document.querySelector(".playMus").style.display = "none";
  document.querySelector(".pauseMus").style.display = "block";

  const audio = document.getElementById("backgroundMusic");
  audio.volume = 0;
  audio.play();
  fadeMusic(1, 1500);
}

function pauseMusic() {
  document.querySelector(".playMus").style.display = "block";
  document.querySelector(".pauseMus").style.display = "none";
  fadeMusic(0, 1500);
}

document.addEventListener("DOMContentLoaded", () => {
  syncMusicPlayer();

  const socialLinks = {
    youtube: "https://www.youtube.com/c/HeroEyad",
    twitter: "https://x.com/HeroEyad_",
    github: "https://github.com/HeroEyad",
    bluesky: "https://bsky.app/profile/heroeyad.xyz",
    roblox: "https://www.roblox.com/users/156861409/profile",
    //gamebanana: "https://gamebanana.com/members/1826250",
  };

  Object.entries(socialLinks).forEach(([id, url]) => {
    const button = document.getElementById(id);
    button?.addEventListener("click", () => (window.location.href = url));
  });
});

document.querySelector(".card").style.display = "block";

document.addEventListener("click", function startMusic() {
  const audio = document.getElementById("backgroundMusic");
  const titleElement = document.getElementById("musicTitle");

  const musicTracks = {
    "assets/music/an_undecided_secret.mp3": "Itny - Bitto",
    "assets/music/moveitboy.mp3": "Move it Boy - Pizza Tower",
    "assets/music/pa.mp3": "Potato Salad - Seezee_ & Terionic",
    "assets/music/spacey.mp3": "Spacey Pumpkins - Pizza Tower",
  };

  const selectedTrack = Object.keys(musicTracks)[Math.floor(Math.random() * 4)];
  audio.src = selectedTrack;
  audio.loop = true;
  titleElement.textContent = musicTracks[selectedTrack] || "Unknown Title";

  document.querySelector(".playMus").style.display = "none";
  document.querySelector(".pauseMus").style.display = "block";
  document.querySelector(".card").style.height = "500px";
  document.querySelector(".music-player").style.display = "block";

  audio.play();
  fadeMusic(1, 2000);

  document.removeEventListener("click", startMusic);
});
window.addEventListener("blur", pauseMusic);
window.addEventListener("focus", playMusic);
