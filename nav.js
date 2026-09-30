const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileSidebar = document.getElementById("mobileSidebar");
const closeBtn = document.getElementById("closeBtn");
const navOverlay = document.getElementById("navOverlay");
const mobileLinks = document.querySelectorAll(".mobile-link, .mobile-register");

function openMenu() {
    mobileSidebar.classList.add("active");
    navOverlay.classList.add("active");
    document.body.classList.add("menu-open");
    hamburgerBtn.setAttribute("aria-expanded", "true");
}

function closeMenu() {
    mobileSidebar.classList.remove("active");
    navOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
}

hamburgerBtn.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);

navOverlay.addEventListener("click", closeMenu);

mobileLinks.forEach(function(link) {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeMenu();
    }
});

window.addEventListener("resize", function() {
    if (window.innerWidth > 991) {
        closeMenu();
    }
});










const footer = document.querySelector(".robot-footer");

if (footer && typeof gsap !== "undefined") {

    gsap.set(".robot-footer-brand", {
        opacity: 0,
        x: -30
    });

    gsap.set(".robot-footer-column", {
        opacity: 0,
        y: 30
    });

    gsap.set(".robot-footer-bottom-inner", {
        opacity: 0,
        y: 20
    });

    let footerAnimated = false;

    const footerObserver = new IntersectionObserver(function (entries, observer) {

        entries.forEach(function (entry) {

            if (!entry.isIntersecting || footerAnimated) {
                return;
            }

            footerAnimated = true;

            const footerTimeline = gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });

            footerTimeline
                .to(".robot-footer-brand", {
                    opacity: 1,
                    x: 0,
                    duration: .7
                })
                .to(".robot-footer-column", {
                    opacity: 1,
                    y: 0,
                    duration: .6,
                    stagger: .12
                }, "-=.4")
                .to(".robot-footer-bottom-inner", {
                    opacity: 1,
                    y: 0,
                    duration: .5
                }, "-=.2");

            observer.unobserve(entry.target);
        });

    }, {
        threshold: .15
    });

    footerObserver.observe(footer);
}