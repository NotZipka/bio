const siteTitle = "NotZepka";
let index = 0;
let direction = 1;

function animateTitle() {
    let title = siteTitle.substring(0, index);
    document.title = title;

    if (index === siteTitle.length || index === 0) {
        direction *= -1;
    }
    index += direction;
}

setInterval(animateTitle, 300);
