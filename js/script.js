(() => 'strict-mode')();

let vid;
let spdShow;
let speed;
vid1 = document.getElementById('vid1');
vid2 = document.getElementById('vid2');
aud1 = document.getElementById('aud1');
spdShow = document.querySelector('.speed-display');

const speedup = () => {
  speed = vid1.playbackRate;
  vid1.playbackRate = speed < 32.0 ? speed + 0.05 : 32.0;
  vid2.playbackRate = vid1.playbackRate*0.75;
  spdShow.innerHTML = `speed: ${(vid1.playbackRate * 100).toFixed()}%`;
};
const slowdown = () => {
  speed = vid1.playbackRate;
  vid1.playbackRate = speed > -8.9 ? speed - 0.05 : -9.0;
  vid2.playbackRate = vid1.playbackRate*0.75;
  spdShow.innerHTML = `speed: ${(vid1.playbackRate * 100).toFixed()}%`;
};

(() => {
  if (vid1.buffered && vid2.buffered && aud1.buffered) {
    aud1.play();
    let i = 28;
    while (i) {
      speedup();
      i--;
    }
    vid1.play();
    vid2.play();
  }
})();
