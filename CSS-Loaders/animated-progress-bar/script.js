var percent = document.querySelector('.percent');
var progress = document.querySelector('.progress');
var text = document.querySelector('.text');
var count = 4;
var per = 16;
var loading = setInterval(animate, 50);

function animate() {
    if (count == 100 && per == 400) {
        percent.classList.add('text-blink');
        clearInterval(loading);
        text.style.display = 'block';
    } else {
        per += 4;
        count += 1;
        progress.style.width = per + 'px';
        percent.textContent = count + '%';
    }
}