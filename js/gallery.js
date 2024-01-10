var id;
const body = document.body;

document.querySelectorAll('.p-container img').forEach(i => {
    i.onclick = () => {
        let popup = document.querySelector('.popup-item');
        popup.style.animation = 'show 0.5s ease-out';
        popup.style.display = 'block';

        id = i.getAttribute('id').toString() + '-popup';
        document.getElementById(id).style.display = 'block';

        
        body.classList.toggle('locked');
        //document.querySelector('.popup-item video').src = i.getAttribute('src');
    }
});
document.querySelector('.popup-item span').onclick = () => {
    let popup = document.querySelector('.popup-item');
    popup.style.animation = 'hide 0.5s ease-out';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 500);
    
    document.getElementById(id).style.display = 'none';

    if (body.classList.contains('locked')) {
        body.style.overflow = 'auto';
    }
};

function launch(T) {
    console.log(T)
    let path = T.src;
    let view = document.querySelector(".view-item");
    view.style.opacity = 0;

    setTimeout(function() {
        view.src = path;
        view.style.opacity = 1;
    }, 250);
    
}
    