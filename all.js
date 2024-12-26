function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    timeElement.textContent = `${hours}:${minutes} ${date}.${month}.${year}`;
}
setInterval(updateTime, 60000);
updateTime();

document.body.addEventListener('click', function() {
    console.log('Страница была нажата');
    const message = document.getElementById('message');
    const bio = document.getElementById('bio-container');
    const calculator = document.getElementById('calculator-container');
    const audio = document.getElementById('music');

    if (message) {
        message.style.display = 'none';
        console.log('Сообщение скрыто');
    } else {
        console.error('Элемент #message не найден');
    }

    if (bio) {
        bio.style.opacity = '1';
        console.log('Био отображено');
    } else {
        console.error('Элемент #bio-container не найден');
    }

    if (audio) {
        audio.volume = 0.5;
        audio.play().then(() => {
            console.log('Музыка воспроизводится');
        }).catch((error) => {
            console.error('Ошибка при воспроизведении музыки:', error);
        });
    } else {
        console.error('Элемент #music не найден');
    }
});
