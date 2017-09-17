(() => 'strict-mode')();

let vid;
let spdShow;
let speed;
vid1 = document.getElementById('vid1');
vid2 = document.getElementById('vid2');
spdShow = document.querySelector('.speed-display');

const speedup = () => {
  speed = vid1.playbackRate;
  vid1.playbackRate = speed < 32.0 ? speed + 0.05 : 32.0;
  vid2.playbackRate = vid1.playbackRate;
  spdShow.innerHTML = `speed: ${(vid1.playbackRate * 100).toFixed()}%`;
  console.log(vid1.playbackRate);
  console.log(vid2.playbackRate);
};
const slowdown = () => {
  speed = vid1.playbackRate;
  vid1.playbackRate = speed > -8.9 ? speed - 0.05 : -9.0;
  vid2.playbackRate = vid1.playbackRate
  spdShow.innerHTML = `speed: ${(vid1.playbackRate * 100).toFixed()}%`;
  console.log(vid1.playbackRate);
  console.log(vid2.playbackRate);
};

(() => {
  if (vid1.buffered && vid2.buffered) {
    let i = 28;
    vid1.play();
    vid2.play();
    while (i) {
      speedup();
      i--;
    }
  }
})();
