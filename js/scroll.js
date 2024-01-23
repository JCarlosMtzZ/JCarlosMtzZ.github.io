window.addEventListener('beforeunload', function () {
    window.scrollTo(0, 0);
});
document.getElementById('scroll-up').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.getElementById('scroll-down').addEventListener('click', function() {
    var element = document.querySelector('#about');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
});