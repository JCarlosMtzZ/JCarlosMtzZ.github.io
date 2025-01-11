window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    const body = document.body;

    setTimeout(() => {
        loader.classList.add('loader--hidden');
        loader.addEventListener('transitionend', () => {
            body.style.overflow = 'auto';
            body.removeChild(loader);
        })
    }, 100);
});