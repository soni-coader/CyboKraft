// rotatingText.js
// Usage: import initRotatingText from '@/utils/rotatingText';
// const cleanup = initRotatingText({ ...options });
// call cleanup() to stop.

export default function initRotatingText({
    containerSelector = '.rotating-text', // container that holds .word elements
    wordSelector = '.word',              // selector for the word elements inside container
    interval = 4000,                     // time between rotations (ms)
    letterDelay = 80,                    // per-letter stagger (ms)
    entryDelay = 340,                    // delay before next word letters start (ms)
} = {}) {
    if (typeof window === 'undefined') {
        // SSR: do nothing, return noop clean-up
        return () => { };
    }

    const container = document.querySelector(containerSelector);
    if (!container) return () => { };

    // grab the words NodeList (as array)
    const words = Array.from(container.querySelectorAll(wordSelector));
    if (!words.length) return () => { };

    // ensure each word is split into letter spans
    words.forEach((wordEl) => {
        // keep original text and clear element
        const text = (wordEl.textContent || '').trim();
        // clear existing children (if any)
        wordEl.innerHTML = '';
        // create span per char
        Array.from(text).forEach((ch) => {
            const span = document.createElement('span');
            span.textContent = ch === ' ' ? '\u00A0' : ch; // preserve spaces
            span.className = 'letter';
            wordEl.appendChild(span);
        });
        // make sure the wrapper has position style handled by CSS
        wordEl.style.opacity = '0';
    });

    // state
    let currentIndex = 0;
    const maxIndex = words.length - 1;

    // timers store so we can cleanup reliably
    const timers = [];

    // show first word initially
    const firstWord = words[0];
    if (firstWord) firstWord.style.opacity = '1';

    // the rotate function (one cycle)
    const rotate = () => {
        const currentWord = words[currentIndex];
        const nextIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
        const nextWord = words[nextIndex];

        if (!currentWord || !nextWord) return;

        // rotate out letters of current word
        Array.from(currentWord.children).forEach((letter, i) => {
            const t = setTimeout(() => {
                letter.className = 'letter out';
            }, i * letterDelay);
            timers.push({ type: 'timeout', id: t });
        });

        // reveal and rotate in letters of next word
        nextWord.style.opacity = '1';
        Array.from(nextWord.children).forEach((letter, i) => {
            // set initial behind class immediately so it starts from -90deg
            letter.className = 'letter behind';
            const t = setTimeout(() => {
                letter.className = 'letter in';
            }, entryDelay + i * letterDelay);
            timers.push({ type: 'timeout', id: t });
        });

        // update index for next cycle
        currentIndex = nextIndex;
    };

    // start: immediately run one rotation (mirrors original snippet)
    rotate();

    // then run every `interval` ms
    const intervalId = setInterval(rotate, interval);
    timers.push({ type: 'interval', id: intervalId });

    // cleanup function to clear all timers and intervals
    const cleanup = () => {
        timers.forEach((t) => {
            if (!t) return;
            if (t.type === 'timeout') clearTimeout(t.id);
            if (t.type === 'interval') clearInterval(t.id);
        });
        // optionally reset styles so re-init is clean
        words.forEach((w) => {
            w.style.opacity = '';
            Array.from(w.children).forEach((ln) => {
                ln.className = 'letter';
            });
        });
    };

    return cleanup;
}
