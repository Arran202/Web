document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        if (navLinks.style.display === "flex") {
            navLinks.style.display = "none";
        } else {
            navLinks.style.display = "flex";
            navLinks.style.flexDirection = "column";
            navLinks.style.position = "absolute";
            navLinks.style.top = "50px";
            navLinks.style.right = "20px";
            navLinks.style.backgroundColor = "#ddd";
            navLinks.style.padding = "10px";
            navLinks.style.borderRadius = "5px";
        }
    });

    // 👇 NEW CODE for hint toggling
    const inputBoxes = document.querySelectorAll('.input-box');

    inputBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const hint = box.querySelector('.hint-text');
            if (hint.style.display === "none") {
                hint.style.display = "block";
            } else {
                hint.style.display = "none";
            }
        });
    });
});
