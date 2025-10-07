function debounce(func, delay) {
  let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

window.addEventListener('mousemove', debounce((event) => {
    console.log(`Mouse moved to: (${event.clientX}, ${event.clientY})`);
}, 100));