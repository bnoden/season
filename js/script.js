(() => 'strict-mode')();

let vid;
let spdShow;
let speed1, speed2;
vid1 = document.getElementById('vid1');
vid2 = document.getElementById('vid2');
aud1 = document.getElementById('aud1');
spdShow = document.querySelector('.speed-display');

const speedup = () => {
  speed1 = vid1.playbackRate;
  speed2 = vid2.playbackRate;
  vid2.playbackRate = speed2 < 4.0 ? speed2 + 0.05 : 4.0;
  vid1.playbackRate = speed1 < 4.0 ? speed1 + 0.04 : 4.0;
  spdShow.innerHTML = `speed: ${(vid2.playbackRate*100).toFixed()}%`;
};
const slowdown = () => {
  speed1 = vid1.playbackRate;
  speed2 = vid2.playbackRate;
  vid2.playbackRate = speed2 > 0.0 ? speed2 - 0.05 : 0;
  vid1.playbackRate = speed1 > 0.0 ? speed1 - 0.02 : 0;
  spdShow.innerHTML = `speed: ${(vid2.playbackRate*100).toFixed()}%`;
};

(() => {
  if (vid2.buffered && vid1.buffered && aud1.buffered) {
    aud1.play();
    let i = 22;
    while (i) {
      speedup();
      i--;
    }
    vid2.play();
    vid1.play();
  }
})();
