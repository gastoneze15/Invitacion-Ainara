function openInvite() {
    document.getElementById("cover").style.display = "none";
    document.getElementById("invite").classList.remove("hidden");
    window.scrollTo(0, 0);
}

const eventDate = new Date("September 13, 2026 13:30:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
}, 1000);

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 90) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const intro = document.querySelector(".envelope-intro");

window.addEventListener("scroll", () => {
    if (!intro) return;

    if (window.scrollY > 140) {
        intro.classList.add("envelope-open");
    } else {
        intro.classList.remove("envelope-open");
    }
});

const particles = document.querySelector(".particles");

for (let i = 0; i < 18; i++) {

    const particle = document.createElement("span");

    const size = Math.random() * 26 + 16;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${Math.random() * 100}%`;

    particle.style.animationDuration =
        `${Math.random() * 14 + 10}s`;

    particle.style.animationDelay =
        `${Math.random() * 8}s`;

    particle.style.opacity =
        Math.random() * 0.35;

    particles.appendChild(particle);
}


const params = new URLSearchParams(window.location.search);

const guestName = params.get("nombre") || "Invitado";
const guestAdults = params.get("adultos") || "1";
const guestMinors = params.get("menores") || "0";

const adultsLabel = guestAdults === "1" ? "adulto" : "adultos";
const minorsLabel = guestMinors === "1" ? "menor" : "menores";

let invitationText = `${guestAdults} ${adultsLabel}`;

if (guestMinors !== "0") {
    invitationText += ` y ${guestMinors} ${minorsLabel}`;
}

document.getElementById("guestName").textContent = guestName;
document.getElementById("guestAdults").textContent = invitationText;



document.addEventListener("DOMContentLoaded", () => {
    const bgMusic = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    if (!bgMusic || !musicBtn) return;

    bgMusic.volume = 0.35;

    function startMusic() {
        bgMusic.play()
            .then(() => {
                musicBtn.textContent = "❚❚";
            })
            .catch(() => {
                musicBtn.textContent = "▶";
            });

        document.removeEventListener("click", startMusic);
        document.removeEventListener("touchstart", startMusic);
    }

    document.addEventListener("click", startMusic);
    document.addEventListener("touchstart", startMusic);

    musicBtn.addEventListener("click", (e) => {
        e.stopPropagation();

        if (bgMusic.paused) {
            bgMusic.play();
            musicBtn.textContent = "❚❚";
        } else {
            bgMusic.pause();
            musicBtn.textContent = "▶";
        }
    });
});
const whatsappPhone = "5491158335480";

const whatsappConfirmBtn = document.getElementById("confirmBtn");
const whatsappLessBtn = document.getElementById("confirmLessBtn");
const whatsappDeclineBtn = document.getElementById("declineBtn");

const messageConfirm = `¡Hola Kim! 

${guestName} confirma su asistencia al bautismo y primer añito de Ainara.

La invitación es para ${invitationText}.

¡Nos vemos el 13 de septiembre! `;

const messageLess = `¡Hola Kim! 

${guestName} confirma su asistencia al bautismo y primer añito de Ainara, pero asistirán menos personas de las indicadas.

Cantidad final de asistentes: `;

const messageDecline = `¡Hola Kim! 

${guestName} no podrá asistir al bautismo y primer añito de Ainara.

Les deseo que tengan un día hermoso y muchas felicidades. `;

function whatsappUrl(message) {
    return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
}
