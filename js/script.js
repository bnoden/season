(() => 'strict-mode')();

let vid;
let speed1, speed2;
const qs = el => document.querySelector(el);
const qsa = el => document.querySelectorAll(el);
const vid1 = qs('#vid1');
const vid2 = qs('#vid2');
const aud1 = qs('#aud1');
const ctrl = qsa('.ctrl');
const maxSpeed = qs('.speedSlider-1').max;
const minSpeed = qs('.speedSlider-1').min;

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
  speedSlide(vid1, qs('.speedSlider-1'));
  setSpeedDisplay(vid1, qs('.speed-display-1'), 'speed one:');
};
const slide2 = () => {
  speedSlide(vid2, qs('.speedSlider-2'));
  setSpeedDisplay(vid2, qs('.speed-display-2'), 'speed two:');
};
const slide3 = () => {
  opacitySlide(vid1, qs('.opacitySlider-1'));
};
const slide4 = () => {
  opacitySlide(vid2, qs('.opacitySlider-2'));
};

const speedup = () => {
  speed1 = vid1.playbackRate;
  speed2 = vid2.playbackRate;
  vid2.playbackRate = speed2 < maxSpeed ? speed2 + 0.01 : maxSpeed;
  vid1.playbackRate = speed1 < maxSpeed ? speed1 + 0.01 : maxSpeed;
  qs('.speedSlider-1').value = vid1.playbackRate;
  qs('.speedSlider-2').value = vid2.playbackRate;
  setSpeedDisplay(vid1, qs('.speed-display-1'), 'speed one:');
  setSpeedDisplay(vid2, qs('.speed-display-2'), 'speed two:');
};
const slowdown = () => {
  speed1 = vid1.playbackRate;
  speed2 = vid2.playbackRate;
  vid2.playbackRate = speed2 > minSpeed ? speed2 - 0.01 : minSpeed;
  vid1.playbackRate = speed1 > minSpeed ? speed1 - 0.01 : minSpeed;
  qs('.speedSlider-1').value = vid1.playbackRate;
  qs('.speedSlider-2').value = vid2.playbackRate;
  setSpeedDisplay(vid1, qs('.speed-display-1'), 'speed one:');
  setSpeedDisplay(vid2, qs('.speed-display-2'), 'speed two:');
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
const toggleControls = bool => {
  for (let controls of ctrl) {
    controls.disabled = !typeof bool ? !controls.disabled : bool;
  }
};

const hideAll = () => {
  for (let controls of ctrl) {
    controls.style.opacity = 0;
  }
};

const revealAll = () => {
  for (let controls of ctrl) {
    controls.style.opacity = 1;
  }
};

const showUI = t => {
  growUp(8);
  mergeVideos(50);
  setTimeout(() => {
    vid1.style.opacity = 0.5;
    vid2.style.opacity = 0.5;
  }, t);
  reveal(qs('.speed-display-1'), t);
  reveal(qs('.speed-display-2'), t * 2);
  reveal(qs('.btn-slow'), t * 3);
  reveal(qs('.btn-fast'), t * 4);
  reveal(qs('.btn-swap-z'), t * 3);
  reveal(qs('.btn-swap-s'), t * 4);
  reveal(qs('.speedSlider-1'), t * 5);
  reveal(qs('.speedSlider-2'), t * 6);
  reveal(qs('.opacitySlider-1'), t * 7);
  reveal(qs('.opacitySlider-2'), t * 8);
  setTimeout(() => {
    qs('.opacitySlider-1').value = 0.3;
    vid1.style.opacity = qs('.opacitySlider-1').value;
  }, t * 9);
  setTimeout(() => {
    qs('.opacitySlider-2').value = 0.3;
    vid2.style.opacity = qs('.opacitySlider-2').value;
  }, t * 10);
  setTimeout(() => {
    qs('.opacitySlider-1').value = 0.7;
    vid1.style.opacity = qs('.opacitySlider-1').value;
  }, t * 11);
  setTimeout(() => {
    qs('.opacitySlider-2').value = 0.7;
    vid2.style.opacity = qs('.opacitySlider-2').value;
  }, t * 12);
  setTimeout(() => {
    qs('.opacitySlider-1').value = 1;
    vid1.style.opacity = qs('.opacitySlider-1').value;
  }, t * 13);
  setTimeout(() => {
    qs('.opacitySlider-2').value = 1;
    vid2.style.opacity = qs('.opacitySlider-2').value;
  }, t * 14);
  setTimeout(() => {
    speed2 = 1.8;
    qs('.speedSlider-2').value = speed2;
    vid2.playbackRate = qs('.speedSlider-2').value;
    setSpeedDisplay(vid2, qs('.speed-display-2'), 'speed two:');
  }, t * 15);
  setTimeout(() => {
    speed1 = 2.1;
    qs('.speedSlider-1').value = speed1;
    vid1.playbackRate = qs('.speedSlider-1').value;
    setSpeedDisplay(vid1, qs('.speed-display-1'), 'speed one:');
  }, t * 16);
  setTimeout(() => {
    allowSwap = 0b1;
    toggleControls();
  }, t * 17);
  hide(qs('.speed-display-1'), t * 18);
  hide(qs('.speed-display-2'), t * 18.2);
  hide(qs('.btn-slow'), t * 18.4);
  hide(qs('.btn-fast'), t * 18.6);
  hide(qs('.btn-swap-z'), t * 18.8);
  hide(qs('.btn-swap-s'), t * 19);
  hide(qs('.speedSlider-1'), t * 19.2);
  hide(qs('.speedSlider-2'), t * 19.4);
  hide(qs('.opacitySlider-1'), t * 19.7);
  hide(qs('.opacitySlider-2'), t * 20);
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
    qs('.message').style.visibility = 'hidden';
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
  toggleControls();
  qs('.ctr').style.visibility = 'hidden';
})();
