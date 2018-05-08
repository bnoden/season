let vid;
let speed1, speed2;
const qs = e => document.querySelector(e);
const qsa = e => document.querySelectorAll(e);
const vDisplay = qs('#videoDisplay');
const vid1 = qs('#vid1');
const vid2 = qs('#vid2');
const aud1 = qs('#aud1');
const ctrl = qsa('.ctrl');
const MAX_SPEED = qs('.speedSlider-1').max;
const MIN_SPEED = qs('.speedSlider-1').min;
const MAX_SIZE = 480;

const speedSlide = (v, ss) => (v.playbackRate = ss.value);
const opacitySlide = (v, os) =>
  (v.style.filter = `opacity(${os.value * 100}%)`);
const slide1 = () => speedSlide(vid1, qs('.speedSlider-1'));
const slide2 = () => speedSlide(vid2, qs('.speedSlider-2'));
const slide3 = () => opacitySlide(vid1, qs('.opacitySlider-1'));
const slide4 = () => opacitySlide(vid2, qs('.opacitySlider-2'));

const speedup = () => {
  speed1 = vid1.playbackRate;
  speed2 = vid2.playbackRate;
  vid2.playbackRate = speed2 < MAX_SPEED ? speed2 + 0.01 : MAX_SPEED;
  vid1.playbackRate = speed1 < MAX_SPEED ? speed1 + 0.01 : MAX_SPEED;
  qs('.speedSlider-1').value = vid1.playbackRate;
  qs('.speedSlider-2').value = vid2.playbackRate;
};
const slowdown = () => {
  speed1 = vid1.playbackRate;
  speed2 = vid2.playbackRate;
  vid2.playbackRate = speed2 > MIN_SPEED ? speed2 - 0.01 : MIN_SPEED;
  vid1.playbackRate = speed1 > MIN_SPEED ? speed1 - 0.01 : MIN_SPEED;
  qs('.speedSlider-1').value = vid1.playbackRate;
  qs('.speedSlider-2').value = vid2.playbackRate;
};

const reveal = (e, timeout) => {
  setTimeout(() => {
    e.style.visibility = 'visible';
  }, timeout);
};

const hide = (e, timeout) => {
  setTimeout(() => {
    e.style.filter = 'opacity(0%)';
  }, timeout);
};

// TODO: Refactor this bool foolishness.
const toggleControls = bool =>
  [...ctrl].map(c => (c.disabled = !typeof bool ? !c.disabled : bool));

const hideAll = () => [...ctrl].map(c => (c.style.filter = 'opacity(0%)'));
const revealAll = () => [...ctrl].map(c => (c.style.filter = 'opacity(100%)'));

const showUI = t => {
  growUp(8);
  mergeVideos(50);
  setTimeout(() => {
    vid1.style.filter = 'opacity(50%)';
    vid2.style.filter = 'opacity(50%)';
  }, t);
  reveal(qs('.btn-shrink-1'), t);
  reveal(qs('.btn-shrink-2'), t * 2);
  reveal(qs('.btn-slow'), t * 3);
  reveal(qs('.btn-grow-1'), t * 3);
  reveal(qs('.btn-fast'), t * 4);
  reveal(qs('.btn-swap-z'), t * 3);
  reveal(qs('.btn-swap-s'), t * 4);
  reveal(qs('.speedSlider-1'), t * 5);
  reveal(qs('.btn-grow-2'), t * 5);
  reveal(qs('.speedSlider-2'), t * 6);
  reveal(qs('.opacitySlider-1'), t * 7);
  reveal(qs('.opacitySlider-2'), t * 8);
  setTimeout(() => {
    qs('.opacitySlider-1').value = 0.3;
    slide3();
  }, t * 9);
  setTimeout(() => {
    qs('.opacitySlider-2').value = 0.3;
    slide4();
  }, t * 10);
  setTimeout(() => {
    qs('.opacitySlider-1').value = 0.95;
    slide3();
  }, t * 11);
  setTimeout(() => {
    qs('.opacitySlider-2').value = 0.95;
    slide4();
  }, t * 12);
  setTimeout(() => {
    qs('.opacitySlider-1').value = 0.8;
    slide3();
  }, t * 13);
  setTimeout(() => {
    qs('.opacitySlider-2').value = 0.7;
    slide4();
  }, t * 14);
  setTimeout(() => {
    speed2 = 1.8;
    qs('.speedSlider-2').value = speed2;
    slide2();
  }, t * 15);
  setTimeout(() => {
    speed1 = 2.1;
    qs('.speedSlider-1').value = speed1;
    slide1();
  }, t * 16);
  setTimeout(() => {
    allowSwap = 0b1;
    toggleControls();
  }, t * 17);
  hide(qs('.btn-grow-1'), t * 18);
  hide(qs('.btn-slow'), t * 18.4);
  hide(qs('.btn-fast'), t * 18.6);
  hide(qs('.btn-swap-z'), t * 18.8);
  hide(qs('.btn-grow-2'), t * 18.9);
  hide(qs('.btn-swap-s'), t * 19);
  hide(qs('.speedSlider-1'), t * 19.2);
  hide(qs('.speedSlider-2'), t * 19.4);
  hide(qs('.btn-shrink-1'), t * 19.5);
  hide(qs('.opacitySlider-1'), t * 19.7);
  hide(qs('.btn-shrink-2'), t * 19.8);
  hide(qs('.opacitySlider-2'), t * 20);
};

const growUp = t => {
  let w = 48;
  const grow = setInterval(() => {
    let h = w * 0.75;
    vid1.style.width = `${w}px`;
    vid1.style.height = `${h}px`;
    vid2.style.width = `${w}px`;
    vid2.style.height = `${h}px`;
    ++w === MAX_SIZE && clearInterval(grow);
  }, t);
};

const resetSizes = () => {
  vid1.style.width = MAX_SIZE + 'px';
  vid1.style.height = MAX_SIZE * 0.75 + 'px';
  vid2.style.width = MAX_SIZE + 'px';
  vid2.style.height = MAX_SIZE * 0.75 + 'px';
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
  w2 = !w2 ? MAX_SIZE : w2;
  const grow = setInterval(() => {
    let h1 = w1 * 0.75;
    vid1.style.zIndex = '0';
    vid2.style.zIndex = '10';
    vid2.style.width = `${w1}px`;
    vid2.style.height = `${h1}px`;
    ++w1 === w2 && clearInterval(grow);
  }, timeout);
};

// TODO: Refactor for fewer functions, use functional composition
const grow2 = (timeout, w1, w2) => {
  timeout = !timeout ? 2 : timeout;
  w1 = !w1 ? 8 : w1;
  w2 = !w2 ? MAX_SIZE : w2;
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
  w1 = !w1 ? MAX_SIZE : w1;
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
  w1 = !w1 ? MAX_SIZE : w1;
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
    if (vid1.style.width === MAX_SIZE + 'px') {
      vid1.style.width = MAX_SIZE + 'px';
      vid1.style.height = MAX_SIZE * 0.75 + 'px';
      vid2.style.width = MAX_SIZE + 'px';
      vid2.style.height = '360px';
    } else {
      vid2.style.width = MAX_SIZE + 'px';
      vid2.style.height = MAX_SIZE * 0.75 + 'px';
      vid1.style.width = MAX_SIZE + 'px';
      vid1.style.height = MAX_SIZE * 0.75 + 'px';
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

let delighted = 0b0;
const delight = () => {
  if (!delighted) {
    delighted = 0b1;
    qs('.ctr').style.zIndex = 30;

    qs('.message').style.visibility = 'hidden';
    if (vid2.buffered && vid1.buffered && aud1.buffered) {
      aud1.play();
      setTimeout(() => {
        growUp(37);
        vid1.style.visibility = 'visible';
        vid2.style.visibility = 'visible';
      }, 500);
      setTimeout(() => {
        blastOff(20);
      }, 13000);
      setTimeout(() => {
        vid1.play();
      }, 16000);
      setTimeout(() => {
        vid2.play();
      }, 19000);
      setTimeout(() => {
        showUI(750);
      }, 24000);
      setTimeout(() => {
        qs('.ctr').style.zIndex = 30;
      }, 25000);
      setTimeout(() => {
        vDisplay.onmouseleave = () => hideAll();
        vDisplay.onmouseover = () => revealAll();
      }, 25500);
    }
  }
};

const countClicked = count => {
  for (controls of ctrl) {
    count = +controls.dataset.count;
    controls.innerHTML = count;
    const maxmax = 1400;
    if (count > 4) {
      document.body.style.filter =
        'invert(92%) contrast(125%) brightness(130%) hue-rotate(240deg) saturate(200%)';
      let newmax = count * 140 < maxmax ? count * 140 : maxmax;
      grow1(10, 8, newmax);
      grow2(15, 8, newmax);
    }
  }
};

(() => {
  if (
    /MSIE 10/i.test(navigator.userAgent) ||
    /MSIE 9/i.test(navigator.userAgent) ||
    /rv:11.0/i.test(navigator.userAgent) ||
    /Edge\/\d./i.test(navigator.userAgent)
  ) {
    document.body.style.display = 'none';
    window.alert('Please use Chrome or Firefox');
  } else {
    toggleControls();
    setInterval(() => {
      zIndexSwap();
    }, 5255);
  }
})();
