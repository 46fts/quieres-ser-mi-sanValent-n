function showLove() {
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("music").play(); // Reproducir música al aceptar
}

function moveNoBtn() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    document.getElementById("noBtn").style.left = `${x}px`;
    document.getElementById("noBtn").style.top = `${y}px`;
}

// Generar corazones flotantes
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);
