(() => 'strict-mode')();

let vid;
let spdShow;
let speed;
vid1 = document.getElementById('vid1');
vid2 = document.getElementById('vid2');
aud1 = document.getElementById('aud1');
spdShow = document.querySelector('.speed-display');

const speedup = () => {
  speed = vid2.playbackRate;
  vid2.playbackRate = speed < 32.0 ? speed + 0.05 : 32.0;
  spdShow.innerHTML = `speed: ${(vid2.playbackRate * 100).toFixed()}%`;
};
const slowdown = () => {
  speed = vid2.playbackRate;
  vid2.playbackRate = speed > -8.9 ? speed - 0.05 : -9.0;
  spdShow.innerHTML = `speed: ${(vid2.playbackRate * 100).toFixed()}%`;
};

(() => {
  if (vid2.buffered && vid1.buffered && aud1.buffered) {
    aud1.play();
    let i = 28;
    while (i) {
      speedup();
      i--;
    }
    vid2.play();
    vid1.play();
  }
})();
