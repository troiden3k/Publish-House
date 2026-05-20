document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");
    if (!logo) return;

    const text = logo.textContent.trim();
    logo.textContent = "";

    text.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.innerHTML = char === " " ? "&nbsp;" : char;
        logo.appendChild(span);

        setTimeout(() => span.classList.add("visible"), i * 60);
    });
});













document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".book-item");
    let currentIndex = 0;

    function update() {
        items.forEach((el, i) => {
            el.classList.remove("active","prev","next");

            if(i === currentIndex) el.classList.add("active");
            else if(i === (currentIndex - 1 + items.length)%items.length) el.classList.add("prev");
            else if(i === (currentIndex + 1)%items.length) el.classList.add("next");
        });
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        update();
    }, 3500);

    update();
});


document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");
    if (!logo) return;

    const text = logo.textContent.trim();
    logo.textContent = "";

    text.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.innerHTML = char === " " ? "&nbsp;" : char;
        logo.appendChild(span);

        setTimeout(() => span.classList.add("visible"), i * 60);
    });
});











document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");
    if (!logo) return;

    const text = logo.textContent.trim();
    logo.textContent = "";

    text.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.innerHTML = char === " " ? "&nbsp;" : char;
        logo.appendChild(span);

        setTimeout(() => span.classList.add("visible"), i * 60);
    });
});

















document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo");
    if (!logo) return;

    const text = logo.textContent.trim();
    logo.textContent = "";

    text.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.innerHTML = char === " " ? "&nbsp;" : char;
        logo.appendChild(span);

        setTimeout(() => span.classList.add("visible"), i * 60);
    });
});