 /* ==========================================
        VASTUDESH - script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("show-menu");

            const icon = menuBtn.querySelector("i");

            if (navLinks.classList.contains("show-menu")) {
                icon.classList.replace("fa-bars", "fa-xmark");
            } else {
                icon.classList.replace("fa-xmark", "fa-bars");
            }

        });

    }

    /* =========================
       STICKY HEADER
    ========================= */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 80) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

    /* =========================
       HERO SLIDER
    ========================= */

    const slides = document.querySelectorAll(".slide");

    if (slides.length > 0) {

        let index = 0;

        setInterval(() => {

            slides[index].classList.remove("active");

            index++;

            if (index >= slides.length)
                index = 0;

            slides[index].classList.add("active");

        }, 5000);

    }

    /* =========================
       BACK TO TOP
    ========================= */

    const backBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if (!backBtn) return;

        backBtn.style.display =
            window.scrollY > 500 ? "block" : "none";

    });

    if (backBtn) {

        backBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* =========================
       LOGIN POPUP
    ========================= */

    const modal = document.getElementById("loginModal");

    const loginBtn = document.getElementById("loginBtn");

    const closeBtn = document.querySelector(".close-btn");

    const loginTab = document.getElementById("loginTab");

    const signupTab = document.getElementById("signupTab");

    const loginForm = document.getElementById("loginForm");

    const signupForm = document.getElementById("signupForm");

    if (loginBtn && modal) {

        loginBtn.addEventListener("click", function (e) {

            e.preventDefault();

            modal.style.display = "flex";

        });

    }

    if (closeBtn) {

        closeBtn.addEventListener("click", () => {

            modal.style.display = "none";

        });

    }

    window.addEventListener("click", function (e) {

        if (e.target === modal) {

            modal.style.display = "none";

        }

    });

    if (loginTab && signupTab) {

        loginTab.addEventListener("click", () => {

            loginForm.style.display = "block";

            signupForm.style.display = "none";

            loginTab.classList.add("active");

            signupTab.classList.remove("active");

        });

        signupTab.addEventListener("click", () => {

            signupForm.style.display = "block";

            loginForm.style.display = "none";

            signupTab.classList.add("active");

            loginTab.classList.remove("active");

        });

    }

});