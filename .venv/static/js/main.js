function selectLevel(level) {
    window.location.href = `/level/${level}`;
}


function blur_image() {
    setTimeout(function () {
        document.getElementById('gomokuImage').classList.add('blur'); 
        const buttons = document.querySelector('.floating-buttons'); 
        buttons.classList.add('visible');
    }, 2000);
}


document.addEventListener('DOMContentLoaded', (event) => {
    blur_image(); 
});
   

