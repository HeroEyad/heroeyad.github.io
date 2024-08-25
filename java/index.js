function createParticle(e) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    document.body.appendChild(particle);

    const x = e.clientX;
    const y = e.clientY;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    particle.style.animation = 'fall 2s linear forwards';
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

document.addEventListener('mousemove', createParticle);

function startAnimations() {
    const audio = document.getElementById('backgroundMusic');
    audio.play().then(() => {
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('.card').style.display = 'block';
    });
    syncMusicPlayer();
}

// Music Control
function playMusic() {
    const audio = document.getElementById('backgroundMusic');
    audio.play();
}

function pauseMusic() {
    const audio = document.getElementById('backgroundMusic');
    audio.pause();
}

function syncMusicPlayer() {
    const audio = document.getElementById('backgroundMusic');
    const progress = document.getElementById('musicProgress');

    audio.addEventListener('timeupdate', () => {
        progress.value = (audio.currentTime / audio.duration) * 100;
    });

    progress.addEventListener('input', () => {
        audio.currentTime = (progress.value / 100) * audio.duration;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const youtube = document.getElementById('youtube');
    const twitter = document.getElementById('twitter');
    const github = document.getElementById('github');


    youtube.addEventListener('click', () => {
        window.location.href = 'https://www.youtube.com/c/HeroEyad';
    });

    twitter.addEventListener('click', () => {
        window.location.href = 'https://x.com/HeroEyad_';
    });

    github.addEventListener('click', () => {
        window.location.href = 'https://github.com/HeroEyad';
    })
});
