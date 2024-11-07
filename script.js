let clickCount = 0;
const avatar = document.getElementById('avatar');
const profileContainer = document.getElementById('profile-container');
const backgroundMusic = document.getElementById('background-music');
const overlay = document.getElementById('overlay');

// Функция для воспроизведения музыки и отображения профиля
function showProfile() {
    overlay.style.opacity = '0'; // Начинаем с затемненного экрана
    backgroundMusic.volume = 0.2; // Начинаем с тихого звука
    backgroundMusic.play();

    setTimeout(() => {
        backgroundMusic.volume = 0.8; // Увеличиваем звук
        overlay.style.display = 'none'; // Убираем черный экран
        profileContainer.style.display = 'block'; // Показываем профиль
        profileContainer.style.opacity = 0; // Сначала скрываем
        fadeInProfile(); // Функция для плавного появления профиля
    }, 1000); // Ждем завершения анимации
}

// Функция для плавного появления профиля
function fadeInProfile() {
    let opacity = 0;
    const interval = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.05;
            profileContainer.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 50); // Интервал для плавного появления
}

// Обработчик события клика
avatar.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
        alert("ТЫ ХУЕСОС"); // Сообщение вместо скримера
    }
});

// Обработчик клика по черному экрану
overlay.addEventListener('click', showProfile);

// Запускаем при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    backgroundMusic.play(); // Начинаем воспроизведение музыки
});