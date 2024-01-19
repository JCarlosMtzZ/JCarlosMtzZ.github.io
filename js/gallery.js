var id;
const body = document.body;

document.querySelectorAll('.p-container img').forEach(i => {
    i.onclick = () => {
        let popup = document.querySelector('.popup-item');
        popup.style.animation = 'show 0.5s ease-out';
        popup.style.display = 'block';
        id = i.getAttribute('id').toString();
        document.getElementById(id + '-popup').style.display = 'block';

        body.style.overflow = 'hidden';
    }
});
document.querySelector('.popup-item span').onclick = () => {
    document.getElementById(id + '-popup').style.display = 'none';
    let popup = document.querySelector('.popup-item');
    popup.style.animation = 'hide 0.4s ease-out';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 400);

    body.style.overflow = 'auto'
};

function launch(T) {
    let path = T.src.replace("/s90-Ic42/","/s590-Ic42/");
    let view = document.getElementById(id + "-view-item");
    view.style.opacity = 0;

    setTimeout(function() {
        view.src = path;
        view.style.opacity = 1;
    }, 250);   
}

