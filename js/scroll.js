//window.addEventListener('beforeunload', function () {
//    window.scrollTo(0, 0);
//});
document.getElementById('scroll-down').addEventListener('click', function() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});
document.getElementById('scroll-up').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});