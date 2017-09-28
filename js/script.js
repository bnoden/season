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
const opacitySlider1 = document.getElementById('opacitySlider-1');
const opacitySlider2 = document.getElementById('opacitySlider-2');
const maxSpeed = speedSlider1.max;
const minSpeed = speedSlider1.min;

const speedSlide = (v, ss) => {
  v.playbackRate = ss.value;
};
const opacitySlide = (v, os) => {
  v.style.opacity = os.value;
};
function slide1() {
  speedSlide(vid1, speedSlider1);
  spdDisplay1.innerHTML = `speed one: ${(vid1.playbackRate * 100).toFixed()}%`;
}
function slide2() {
  speedSlide(vid2, speedSlider2);
  spdDisplay2.innerHTML = `speed two: ${(vid2.playbackRate * 100).toFixed()}%`;
}
function slide3() {
  opacitySlide(vid1, opacitySlider1);
}
function slide4() {
  opacitySlide(vid2, opacitySlider2);
}

const speedup = () => {
  speed1 = vid1.playbackRate;
  speed2 = vid2.playbackRate;
  vid2.playbackRate = speed2 < maxSpeed ? speed2 + 0.01 : maxSpeed;
  vid1.playbackRate = speed1 < maxSpeed ? speed1 + 0.01 : maxSpeed;
  speedSlider1.value = vid1.playbackRate;
  speedSlider2.value = vid2.playbackRate;
  spdDisplay1.innerHTML = `speed one: ${(vid1.playbackRate * 100).toFixed()}%`;
  spdDisplay2.innerHTML = `speed two: ${(vid2.playbackRate * 100).toFixed()}%`;
};
const slowdown = () => {
  speed1 = vid1.playbackRate;
  speed2 = vid2.playbackRate;
  vid2.playbackRate = speed2 > minSpeed ? speed2 - 0.01 : minSpeed;
  vid1.playbackRate = speed1 > minSpeed ? speed1 - 0.01 : minSpeed;
  speedSlider1.value = vid1.playbackRate;
  speedSlider2.value = vid2.playbackRate;
  spdDisplay1.innerHTML = `speed one: ${(vid1.playbackRate * 100).toFixed()}%`;
  spdDisplay2.innerHTML = `speed two: ${(vid2.playbackRate * 100).toFixed()}%`;
};

function showUI(t) {
  setTimeout(() => {
    document.querySelector('.speed-display-1').style.visibility = 'visible';
  }, t);
  setTimeout(() => {
    document.querySelector('.speed-display-2').style.visibility = 'visible';
  }, t*2);
  setTimeout(() => {
    document.querySelector('.btn-slow').style.visibility = 'visible';
  }, t*3);
  setTimeout(() => {
    document.querySelector('.btn-fast').style.visibility = 'visible';
  }, t*4);
  setTimeout(() => {
    document.getElementById('speedSlider-1').style.visibility = 'visible';
  }, t*5);
  setTimeout(() => {
    document.getElementById('speedSlider-2').style.visibility = 'visible';
  }, t*6);
  setTimeout(() => {
    document.getElementById('opacitySlider-1').style.visibility = 'visible';
  }, t*7);
  setTimeout(() => {
    document.getElementById('opacitySlider-2').style.visibility = 'visible';
  }, t*8);

  setTimeout(() => {
    opacitySlider1.value = 0.3;
    vid1.style.opacity = opacitySlider1.value;
  }, t*9);
  setTimeout(() => {
    opacitySlider2.value = 0.3;
    vid2.style.opacity = opacitySlider2.value;
  }, t*10);
  setTimeout(() => {
    opacitySlider1.value = 1;
    vid1.style.opacity = opacitySlider1.value;
  }, t*11);
  setTimeout(() => {
    opacitySlider2.value = 1;
    vid2.style.opacity = opacitySlider2.value;
  }, t*12);
  setTimeout(() => {
    opacitySlider1.value = 0.7;
    vid1.style.opacity = opacitySlider1.value;
  }, t*13);
  setTimeout(() => {
    opacitySlider2.value = 0.7;
    vid2.style.opacity = opacitySlider2.value;
  }, t*14);
  setTimeout(() => {
    speed2 = 1.8;
    speedSlider2.value = speed2;
    vid2.playbackRate = speedSlider2.value;
    spdDisplay2.innerHTML = `speed two: ${(vid2.playbackRate * 100).toFixed()}%`;
  }, t*15);
  setTimeout(() => {
    speed1 = 2.1;
    speedSlider1.value = speed1;
    vid1.playbackRate = speedSlider1.value;
    spdDisplay1.innerHTML = `speed two: ${(vid1.playbackRate * 100).toFixed()}%`;
  }, t*16);

}

(() => {
  if (vid2.buffered && vid1.buffered && aud1.buffered) {
    aud1.play();
    vid2.play();
    vid1.play();
    setTimeout(() => {
      showUI(500);
    }, 3000);
  }
})();
