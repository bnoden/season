(() => 'strict-mode')();

let vid;
let speed1, speed2;
const vid1 = document.querySelector('#vid1');
const vid2 = document.querySelector('#vid2');
const aud1 = document.querySelector('#aud1');
const spdDisplay1 = document.querySelector('.speed-display-1');
const spdDisplay2 = document.querySelector('.speed-display-2');
const speedSlider1 = document.querySelector('#speedSlider-1');
const speedSlider2 = document.querySelector('#speedSlider-2');
const opacitySlider1 = document.querySelector('#opacitySlider-1');
const opacitySlider2 = document.querySelector('#opacitySlider-2');
const ctrl = document.querySelector('.ctrl');
const maxSpeed = speedSlider1.max;
const minSpeed = speedSlider1.min;
const qs = el => document.querySelector(el);
const qsa = el => document.querySelectorAll(el);

const speedSlide = (v, ss) => {
  v.playbackRate = ss.value;
};
const opacitySlide = (v, os) => {
  v.style.opacity = os.value;
};
const setSpeedDisplay = (el, display, str) => {
  display.innerHTML = `${str} <span>${leadingZeroes(
    (el.playbackRate * 100).toFixed()
  )}</span>${(el.playbackRate * 100).toFixed()}%`;
};
const slide1 = () => {
  speedSlide(vid1, speedSlider1);
  setSpeedDisplay(vid1, spdDisplay1, 'speed one:');
};
const slide2 = () => {
  speedSlide(vid2, speedSlider2);
  setSpeedDisplay(vid2, spdDisplay2, 'speed two:');
};
const slide3 = () => {
  opacitySlide(vid1, opacitySlider1);
};
const slide4 = () => {
  opacitySlide(vid2, opacitySlider2);
};

const speedup = () => {
  speed1 = vid1.playbackRate;
  speed2 = vid2.playbackRate;
  vid2.playbackRate = speed2 < maxSpeed ? speed2 + 0.01 : maxSpeed;
  vid1.playbackRate = speed1 < maxSpeed ? speed1 + 0.01 : maxSpeed;
  speedSlider1.value = vid1.playbackRate;
  speedSlider2.value = vid2.playbackRate;
  setSpeedDisplay(vid1, spdDisplay1, 'speed one:');
  setSpeedDisplay(vid2, spdDisplay2, 'speed two:');
};
const slowdown = () => {
  speed1 = vid1.playbackRate;
  speed2 = vid2.playbackRate;
  vid2.playbackRate = speed2 > minSpeed ? speed2 - 0.01 : minSpeed;
  vid1.playbackRate = speed1 > minSpeed ? speed1 - 0.01 : minSpeed;
  speedSlider1.value = vid1.playbackRate;
  speedSlider2.value = vid2.playbackRate;
  setSpeedDisplay(vid1, spdDisplay1, 'speed one:');
  setSpeedDisplay(vid2, spdDisplay2, 'speed two:');
};

const reveal = (el, timeout) => {
  setTimeout(() => {
    el.style.visibility = 'visible';
  }, timeout);
};

const hide = (el, timeout) => {
  setTimeout(() => {
    el.style.opacity = 0;
  }, timeout);
};
const disableAll = () => {
  // qs('.btn-blastoff').disabled = true;
  qs('.btn-shrink-2').disabled = true;
  qs('.btn-shrink-1').disabled = true;
  qs('.btn-grow-2').disabled = true;
  qs('.btn-grow-1').disabled = true;
  qs('.btn-slow').disabled = true;
  qs('.btn-fast').disabled = true;
  qs('.btn-swap-z').disabled = true;
  qs('.btn-swap-s').disabled = true;
  speedSlider1.disabled = true;
  speedSlider2.disabled = true;
  opacitySlider1.disabled = true;
  opacitySlider2.disabled = true;
};
const enableAll = () => {
  // qs('.btn-blastoff').disabled = false;
  qs('.btn-shrink-2').disabled = false;
  qs('.btn-shrink-1').disabled = false;
  qs('.btn-grow-2').disabled = false;
  qs('.btn-grow-1').disabled = false;
  qs('.btn-slow').disabled = false;
  qs('.btn-fast').disabled = false;
  qs('.btn-swap-z').disabled = false;
  qs('.btn-swap-s').disabled = false;
  speedSlider1.disabled = false;
  speedSlider2.disabled = false;
  opacitySlider1.disabled = false;
  opacitySlider2.disabled = false;
};
const hideAll = () => {
  if (qs('.ctr').style.visibility === 'visible') {
    spdDisplay1.style.opacity = 0;
    spdDisplay2.style.opacity = 0;
    // qs('.btn-blastoff').style.opacity = 0;
    qs('.btn-shrink-2').style.opacity = 0;
    qs('.btn-shrink-1').style.opacity = 0;
    qs('.btn-grow-2').style.opacity = 0;
    qs('.btn-grow-1').style.opacity = 0;
    qs('.btn-slow').style.opacity = 0;
    qs('.btn-fast').style.opacity = 0;
    qs('.btn-swap-z').style.opacity = 0;
    qs('.btn-swap-s').style.opacity = 0;
    speedSlider1.style.opacity = 0;
    speedSlider2.style.opacity = 0;
    opacitySlider1.style.opacity = 0;
    opacitySlider2.style.opacity = 0;
  }
};

const revealAll = () => {
  if (qs('.ctr').style.visibility === 'visible') {
    spdDisplay1.style.opacity = 1;
    spdDisplay2.style.opacity = 1;
    // qs('.btn-blastoff').style.opacity = 1;
    qs('.btn-shrink-2').style.opacity = 1;
    qs('.btn-shrink-1').style.opacity = 1;
    qs('.btn-grow-2').style.opacity = 1;
    qs('.btn-grow-1').style.opacity = 1;
    qs('.btn-slow').style.opacity = 1;
    qs('.btn-fast').style.opacity = 1;
    qs('.btn-swap-z').style.opacity = 1;
    qs('.btn-swap-s').style.opacity = 1;
    speedSlider1.style.opacity = 1;
    speedSlider2.style.opacity = 1;
    opacitySlider1.style.opacity = 1;
    opacitySlider2.style.opacity = 1;
  }
};

const showUI = t => {
  growUp(8);
  mergeVideos(50);
  setTimeout(() => {
    vid1.style.opacity = 0.5;
    vid2.style.opacity = 0.5;
  }, t);
  reveal(spdDisplay1, t);
  reveal(spdDisplay2, t * 2);
  reveal(qs('.btn-slow'), t * 3);
  reveal(qs('.btn-fast'), t * 4);
  reveal(qs('.btn-swap-z'), t * 3);
  reveal(qs('.btn-swap-s'), t * 4);
  reveal(speedSlider1, t * 5);
  reveal(speedSlider2, t * 6);
  reveal(opacitySlider1, t * 7);
  reveal(opacitySlider2, t * 8);
  setTimeout(() => {
    opacitySlider1.value = 0.3;
    vid1.style.opacity = opacitySlider1.value;
  }, t * 9);
  setTimeout(() => {
    opacitySlider2.value = 0.3;
    vid2.style.opacity = opacitySlider2.value;
  }, t * 10);
  setTimeout(() => {
    opacitySlider1.value = 0.7;
    vid1.style.opacity = opacitySlider1.value;
  }, t * 11);
  setTimeout(() => {
    opacitySlider2.value = 0.7;
    vid2.style.opacity = opacitySlider2.value;
  }, t * 12);
  setTimeout(() => {
    opacitySlider1.value = 1;
    vid1.style.opacity = opacitySlider1.value;
  }, t * 13);
  setTimeout(() => {
    opacitySlider2.value = 1;
    vid2.style.opacity = opacitySlider2.value;
  }, t * 14);
  setTimeout(() => {
    speed2 = 1.8;
    speedSlider2.value = speed2;
    vid2.playbackRate = speedSlider2.value;
    setSpeedDisplay(vid2, spdDisplay2, 'speed two:');
  }, t * 15);
  setTimeout(() => {
    speed1 = 2.1;
    speedSlider1.value = speed1;
    vid1.playbackRate = speedSlider1.value;
    setSpeedDisplay(vid1, spdDisplay1, 'speed one:');
  }, t * 16);
  setTimeout(() => {
    allowSwap = 0b1;
    enableAll();
  }, t * 17);
  hide(spdDisplay1, t * 18);
  hide(spdDisplay2, t * 18.2);
  hide(qs('.btn-slow'), t * 18.4);
  hide(qs('.btn-fast'), t * 18.6);
  hide(qs('.btn-swap-z'), t * 18.8);
  hide(qs('.btn-swap-s'), t * 19);
  hide(speedSlider1, t * 19.2);
  hide(speedSlider2, t * 19.4);
  hide(opacitySlider1, t * 19.7);
  hide(opacitySlider2, t * 20);
  qs('.ctr').style.visibility = 'visible';
};

const growUp = t => {
  let w = 48;
  const grow = setInterval(() => {
    let h = w * 0.75;
    vid1.style.width = `${w}px`;
    vid1.style.height = `${h}px`;
    vid2.style.width = `${w}px`;
    vid2.style.height = `${h}px`;
    ++w === 480 && clearInterval(grow);
  }, t);
};

const resetSizes = () => {
  vid1.style.width = '480px';
  vid1.style.height = '360px';
  vid2.style.width = '480px';
  vid2.style.height = '360px';
};

let allowGrow = false;
const toggleGrow = () => {
  if (allowGrow !== true) {
    allowGrow = true;
  } else {
    allowGrow = false;
    resetSizes();
  }
};

const grow1 = (timeout, w1, w2) => {
  timeout = !timeout ? 2 : timeout;
  w1 = !w1 ? 8 : w1;
  w2 = !w2 ? 480 : w2;
  const grow = setInterval(() => {
    let h1 = w1 * 0.75;
    vid1.style.zIndex = '0';
    vid2.style.zIndex = '10';
    vid2.style.width = `${w1}px`;
    vid2.style.height = `${h1}px`;
    ++w1 === w2 && clearInterval(grow);
  }, timeout);
};

const grow2 = (timeout, w1, w2) => {
  timeout = !timeout ? 2 : timeout;
  w1 = !w1 ? 8 : w1;
  w2 = !w2 ? 480 : w2;
  const grow = setInterval(() => {
    let h = w1 * 0.75;
    vid1.style.zIndex = '10';
    vid2.style.zIndex = '0';
    vid1.style.width = `${w1}px`;
    vid1.style.height = `${h}px`;
    ++w1 === w2 && clearInterval(grow);
  }, timeout);
};

const shrink1 = (timeout, w1, w2) => {
  timeout = !timeout ? 2 : timeout;
  w1 = !w1 ? 480 : w1;
  w2 = !w2 ? 8 : w2;
  const shrink = setInterval(() => {
    let h1 = w1 * 0.75;
    vid1.style.zIndex = '0';
    vid2.style.zIndex = '10';
    vid2.style.width = `${w1}px`;
    vid2.style.height = `${h1}px`;
    --w1 === w2 && clearInterval(shrink);
  }, timeout);
};
const shrink2 = (timeout, w1, w2) => {
  timeout = !timeout ? 2 : timeout;
  w1 = !w1 ? 480 : w1;
  w2 = !w2 ? 8 : w2;
  const shrink = setInterval(() => {
    let h1 = w1 * 0.75;
    vid2.style.zIndex = '0';
    vid1.style.zIndex = '10';
    vid1.style.width = `${w1}px`;
    vid1.style.height = `${h1}px`;
    --w1 === w2 && clearInterval(shrink);
  }, timeout);
};

const blastOff = t => {
  let center = 50;
  const lift = setInterval(() => {
    vid2.style.transform = `translate(-50%, -${center}%)`;
    center++ === 500 && clearInterval(lift);
  }, t);
};

const videoTranslateX = (v, x, v2, x2) => {
  v.style.transform = `translate(-${x}%, -50%)`;
  if (v2 && x2) v2.style.transform = `translate(-${x2}%, -50%)`;
};
const videoTranslateY = (v, x, v2, x2) => {
  v.style.transform = `translate(-50%, -${x}%)`;
  if (v2 && x2) v2.style.transform = `translate(-50%, -${x2}%)`;
};

const mergeVideos = t => {
  let center = 100;
  let left = -50;
  let right = 150;
  let count = 1;
  const merge = setInterval(() => {
    videoTranslateX(vid1, left, vid2, right);
    left++;
    right--;
    if (center-- === 0) clearInterval(merge);
  }, t);
};

let allowSwap = 0b0;

const sizeSwap = () => {
  if (allowSwap) {
    if (vid1.style.width === '480px') {
      vid1.style.width = '240px';
      vid1.style.height = '180px';
      vid2.style.width = '480px';
      vid2.style.height = '360px';
    } else {
      vid2.style.width = '240px';
      vid2.style.height = '180px';
      vid1.style.width = '480px';
      vid1.style.height = '360px';
    }
  }
};

const zIndexSwap = () => {
  if (allowSwap) {
    if (vid1.style.zIndex === '10') {
      vid1.style.zIndex = '0';
      vid2.style.zIndex = '10';
    } else {
      vid1.style.zIndex = '10';
      vid2.style.zIndex = '0';
    }
  }
};

const leadingZeroes = str => {
  let zeroes = '';
  if (str.length === 2) {
    zeroes = '0';
  } else if (str.length === 1) {
    zeroes = '00';
  }
  return zeroes;
};

let delighted = 0b0;
const delight = () => {
  if (!delighted) {
    delighted = 0b1;
    qs('.ctr').style.zIndex = 30;
    vid1.style.visibility = 'visible';
    vid2.style.visibility = 'visible';
    qs('.instructions').style.display = 'none';
    if (vid2.buffered && vid1.buffered && aud1.buffered) {
      aud1.play();
      setTimeout(() => {
        growUp(37);
      }, 500);
      setTimeout(() => {
        blastOff(20);
      }, 18000);
      setTimeout(() => {
        vid1.play();
      }, 21150);
      setTimeout(() => {
        vid2.play();
      }, 24000);
      setTimeout(() => {
        showUI(750);
      }, 29000);
      setTimeout(() => {
        qs('.ctr').style.zIndex = 30;
      }, 30000);
    }
  }
};

(() => {
  disableAll();
  qs('.ctr').style.visibility = 'hidden';
})();
