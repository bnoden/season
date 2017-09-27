(() => 'strict-mode')();

let vid;
let speed1, speed2;
const vid1 = document.getElementById('vid1');
const vid2 = document.getElementById('vid2');
const aud1 = document.getElementById('aud1');
const spdDisplay1 = document.querySelector('.speed-display-1');
const spdDisplay2 = document.querySelector('.speed-display-2');
const speedSlider1 = document.getElementById('speedSlider-1');
const speedSlider2 = document.getElementById('speedSlider-2');
const maxSpeed = speedSlider1.max;
const minSpeed = speedSlider1.min;

const speedSlide = (v, ss) => {
  v.playbackRate = ss.value;
}
function slide1() {
  speedSlide(vid1, speedSlider1);
  spdDisplay1.innerHTML = `speed one: ${(vid1.playbackRate*100).toFixed()}%`;
}
function slide2() {
  speedSlide(vid2, speedSlider2);
  spdDisplay2.innerHTML = `speed two: ${(vid2.playbackRate*100).toFixed()}%`;
}

const speedup = () => {
  speed1 = vid1.playbackRate;
  speed2 = vid2.playbackRate;
  vid2.playbackRate = speed2 < maxSpeed ? speed2 + 0.01 : maxSpeed;
  vid1.playbackRate = speed1 < maxSpeed ? speed1 + 0.01 : maxSpeed;
  speedSlider1.value = vid1.playbackRate;
  speedSlider2.value = vid2.playbackRate;
  spdDisplay1.innerHTML = `speed one: ${(vid1.playbackRate*100).toFixed()}%`;
  spdDisplay2.innerHTML = `speed two: ${(vid2.playbackRate*100).toFixed()}%`;
};
const slowdown = () => {
  speed1 = vid1.playbackRate;
  speed2 = vid2.playbackRate;
  vid2.playbackRate = speed2 > minSpeed ? speed2 - 0.01 : minSpeed;
  vid1.playbackRate = speed1 > minSpeed ? speed1 - 0.01 : minSpeed;
  speedSlider1.value = vid1.playbackRate;
  speedSlider2.value = vid2.playbackRate;
  spdDisplay1.innerHTML = `speed one: ${(vid1.playbackRate*100).toFixed()}%`;
  spdDisplay2.innerHTML = `speed two: ${(vid2.playbackRate*100).toFixed()}%`;
};

(() => {
  if (vid2.buffered && vid1.buffered && aud1.buffered) {
    aud1.play();
    // let i = 110;
    // while (i) {
    //   speedup();
    //   i--;
    // }
    vid2.play();
    vid1.play();
    speedSlider1.value = 2.1;
    speedSlider2.value = 1.8;
    vid1.playbackRate = speedSlider1.value;
    vid2.playbackRate = speedSlider2.value;
    spdDisplay1.innerHTML = `speed one: ${(vid1.playbackRate*100).toFixed()}%`;
    spdDisplay2.innerHTML = `speed two: ${(vid2.playbackRate*100).toFixed()}%`;
  }
})();
