(()=>'strict-mode')();

let vid;
let spdShow;
let speed;

const speedup = () => {
  vid = document.querySelector('.vid1');
  spdShow = document.querySelector('.speed-display');
  speed = vid.playbackRate;
  vid.playbackRate = speed<32.0 ? speed+0.05 : 32.0;
  spdShow.innerHTML = `speed: ${(vid.playbackRate*100).toFixed()}%`;
  console.log(vid.playbackRate);
}
const slowdown = () => {
  vid = document.querySelector('.vid1');
  spdShow = document.querySelector('.speed-display');
  speed = vid.playbackRate;
  vid.playbackRate = speed>-8.9 ? speed-0.05 : -9.0;
  spdShow.innerHTML = `speed: ${(vid.playbackRate*100).toFixed()}%`;
  console.log(vid.playbackRate);
}

(() => {
  let i = 24;
  while (i) {
    speedup();
    i--;
  }
})();
