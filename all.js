// Инициализация частиц
particlesJS("particles-js", {
    particles: {
        number: {
            value: 100, // Количество частиц
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#9b59b6" // Фиолетовый цвет частиц
        },
        shape: {
            type: "circle", // Круглые частицы
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false, // Отключаем соединение частиц
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        }
    },
    retina_detect: true
});

// Получение времени и обновление
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
setInterval(updateTime, 60000); // Обновление времени каждую минуту
updateTime(); // Первоначальное обновление времени

// Функции калькулятора
function appendToScreen(value) {
    const screen = document.getElementById("calculator-screen");
    if (screen.innerText === '0' && value !== '.') {
        screen.innerText = value;
    } else {
        screen.innerText += value;
    }
}

function clearScreen() {
    document.getElementById("calculator-screen").innerText = '0';
}

function calculateResult() {
    const screen = document.getElementById("calculator-screen");
    try {
        screen.innerText = eval(screen.innerText) || '0';
    } catch {
        screen.innerText = 'Ошибка';
    }
}

// Функция для перетаскивания калькулятора
dragElement(document.getElementById("calculator-container"));

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// При клике на страницу скрываем сообщение и показываем контент
document.body.addEventListener('click', function() {
    document.getElementById('message').style.display = 'none';
    document.getElementById('bio-container').style.opacity = '1';
    document.getElementById('calculator-container').style.opacity = '1';
});