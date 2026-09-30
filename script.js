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


























document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        return;
    }

    const heroSection = document.querySelector(".robotics-eyebrow");

    if (heroSection) {

        gsap.set(".robotics-eyebrow", {
            opacity: 0,
            y: 20
        });

        gsap.set(".robotics-title", {
            opacity: 0,
            x: -55
        });

        gsap.set(".robotics-description", {
            opacity: 0,
            x: -35
        });

        gsap.set(".robotics-actions", {
            opacity: 0,
            y: 20
        });

        gsap.set(".robotics-trust", {
            opacity: 0,
            y: 20
        });

        gsap.set(".robotics-robot", {
            opacity: 0,
            x: 60,
            scale: 0.88
        });

        gsap.set(".visual-orbit", {
            opacity: 0,
            scale: 0.7
        });

        gsap.set(".visual-card", {
            opacity: 0,
            scale: 0.7
        });

        gsap.set(".visual-glow", {
            opacity: 0,
            scale: 0.7
        });

        const heroTimeline = gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        });

        heroTimeline
            .to(".robotics-eyebrow", {
                opacity: 1,
                y: 0,
                duration: 0.5
            })
            .to(".robotics-title", {
                opacity: 1,
                x: 0,
                duration: 0.9
            }, "-=0.2")
            .to(".robotics-description", {
                opacity: 1,
                x: 0,
                duration: 0.7
            }, "-=0.45")
            .to(".robotics-actions", {
                opacity: 1,
                y: 0,
                duration: 0.6
            }, "-=0.3")
            .to(".robotics-trust", {
                opacity: 1,
                y: 0,
                duration: 0.5
            }, "-=0.25")
            .to(".visual-glow", {
                opacity: 1,
                scale: 1,
                duration: 0.8
            }, "-=0.7")
            .to(".visual-orbit", {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.12
            }, "-=0.6")
            .to(".robotics-robot", {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1.1
            }, "-=0.65")
            .to(".visual-card", {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                stagger: 0.12,
                ease: "back.out(1.5)"
            }, "-=0.5");

        gsap.to(".robotics-robot", {
            y: -10,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(".orbit-outer", {
            rotation: 360,
            duration: 30,
            repeat: -1,
            ease: "none"
        });

        gsap.to(".orbit-middle", {
            rotation: -360,
            duration: 22,
            repeat: -1,
            ease: "none"
        });

        gsap.to(".orbit-inner", {
            rotation: 360,
            duration: 15,
            repeat: -1,
            ease: "none"
        });

        gsap.to(".visual-glow", {
            scale: 1.08,
            opacity: 0.65,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        if (document.querySelector(".visual-card-ai")) {
            gsap.to(".visual-card-ai", {
                y: -10,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }

        if (document.querySelector(".visual-card-auto")) {
            gsap.to(".visual-card-auto", {
                y: 10,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }

        if (document.querySelector(".visual-card-data")) {
            gsap.to(".visual-card-data", {
                y: -8,
                duration: 2.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    }

    const animateOnScroll = function (selector, animation, options = {}) {

        const elements = document.querySelectorAll(selector);

        if (!elements.length) {
            return;
        }

        const observer = new IntersectionObserver(function (entries, obs) {

            entries.forEach(function (entry) {

                if (!entry.isIntersecting) {
                    return;
                }

                gsap.to(entry.target, animation);

                obs.unobserve(entry.target);
            });

        }, {
            threshold: options.threshold || 0.15,
            rootMargin: options.rootMargin || "0px 0px -60px 0px"
        });

        elements.forEach(function (element) {
            observer.observe(element);
        });
    };

    const aboutSection = document.querySelector(".about-section");

    if (aboutSection) {

        const aboutTimeline = gsap.timeline({
            paused: true,
            defaults: {
                ease: "power3.out"
            }
        });

        gsap.set(".about-main-image", {
            opacity: 0,
            x: -60
        });

        gsap.set(".about-small-image", {
            opacity: 0,
            y: 40
        });

        gsap.set(".about-label", {
            opacity: 0,
            y: 20
        });

        gsap.set(".about-content h2", {
            opacity: 0,
            x: 50
        });

        gsap.set(".about-description", {
            opacity: 0,
            x: 40
        });

        gsap.set(".about-feature", {
            opacity: 0,
            y: 25
        });

        gsap.set(".about-btn", {
            opacity: 0,
            y: 20
        });

        aboutTimeline
            .to(".about-main-image", {
                opacity: 1,
                x: 0,
                duration: 0.9
            })
            .to(".about-small-image", {
                opacity: 1,
                y: 0,
                duration: 0.7
            }, "-=0.5")
            .to(".about-label", {
                opacity: 1,
                y: 0,
                duration: 0.5
            }, "-=0.5")
            .to(".about-content h2", {
                opacity: 1,
                x: 0,
                duration: 0.8
            }, "-=0.3")
            .to(".about-description", {
                opacity: 1,
                x: 0,
                duration: 0.6
            }, "-=0.4")
            .to(".about-feature", {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.15
            }, "-=0.3")
            .to(".about-btn", {
                opacity: 1,
                y: 0,
                duration: 0.6
            }, "-=0.25");

        let aboutPlayed = false;

        const aboutObserver = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting && !aboutPlayed) {

                    aboutPlayed = true;
                    aboutTimeline.play();

                    if (document.querySelector(".about-small-image")) {
                        gsap.to(".about-small-image", {
                            y: -8,
                            duration: 2.5,
                            repeat: -1,
                            yoyo: true,
                            ease: "sine.inOut"
                        });
                    }
                }

            });

        }, {
            threshold: 0.2
        });

        aboutObserver.observe(aboutSection);
    }

    const servicesSection = document.querySelector(".robot-services-section");

    if (servicesSection) {

        gsap.set(".robot-services-heading", {
            opacity: 0,
            y: 35
        });

        gsap.set(".robot-service-card", {
            opacity: 0,
            y: 45
        });

        let servicesPlayed = false;

        const servicesObserver = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting && !servicesPlayed) {

                    servicesPlayed = true;

                    gsap.to(".robot-services-heading", {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out"
                    });

                    gsap.to(".robot-service-card", {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        stagger: 0.12,
                        delay: 0.2,
                        ease: "power3.out"
                    });

                }

            });

        }, {
            threshold: 0.15
        });

        servicesObserver.observe(servicesSection);
    }

});
const industrySection = document.querySelector(".robot-industries-section");

if (industrySection && typeof gsap !== "undefined") {

    gsap.set(".robot-industries-title", {
        opacity: 0,
        y: 35
    });

    gsap.set(".robot-industries-button", {
        opacity: 0,
        x: 30
    });

    gsap.set(".robot-industry-card", {
        opacity: 0,
        y: 40
    });

    gsap.set(".robot-industry-bottom", {
        opacity: 0,
        y: 30
    });

    const industryObserver = new IntersectionObserver(function (entries, observer) {

        entries.forEach(function (entry) {

            if (!entry.isIntersecting) {
                return;
            }

            gsap.to(".robot-industries-title", {
                opacity: 1,
                y: 0,
                duration: .8,
                ease: "power3.out"
            });

            gsap.to(".robot-industries-button", {
                opacity: 1,
                x: 0,
                duration: .7,
                delay: .15,
                ease: "power3.out"
            });

            gsap.to(".robot-industry-card", {
                opacity: 1,
                y: 0,
                duration: .7,
                stagger: .12,
                delay: .2,
                ease: "power3.out"
            });

            gsap.to(".robot-industry-bottom", {
                opacity: 1,
                y: 0,
                duration: .7,
                delay: .65,
                ease: "power3.out"
            });

            observer.unobserve(entry.target);
        });

    }, {
        threshold: .15
    });

    industryObserver.observe(industrySection);
}
const innovationSection = document.querySelector(".robot-innovation-section");

if (innovationSection && typeof gsap !== "undefined") {

    gsap.set(".robot-innovation-heading", {
        opacity: 0,
        y: 35
    });

    gsap.set(".robot-innovation-main-btn", {
        opacity: 0,
        x: 25
    });

    gsap.set(".robot-innovation-feature", {
        opacity: 0,
        x: -40
    });

    gsap.set(".innovation-card", {
        opacity: 0,
        y: 35
    });

    gsap.set(".innovation-bottom", {
        opacity: 0,
        y: 25
    });

    const innovationObserver = new IntersectionObserver(function (entries, observer) {

        entries.forEach(function (entry) {

            if (!entry.isIntersecting) {
                return;
            }

            gsap.to(".robot-innovation-heading", {
                opacity: 1,
                y: 0,
                duration: .8,
                ease: "power3.out"
            });

            gsap.to(".robot-innovation-main-btn", {
                opacity: 1,
                x: 0,
                duration: .7,
                delay: .1,
                ease: "power3.out"
            });

            gsap.to(".robot-innovation-feature", {
                opacity: 1,
                x: 0,
                duration: .8,
                delay: .15,
                ease: "power3.out"
            });

            gsap.to(".innovation-card", {
                opacity: 1,
                y: 0,
                duration: .65,
                stagger: .12,
                delay: .25,
                ease: "power3.out"
            });

            gsap.to(".innovation-bottom", {
                opacity: 1,
                y: 0,
                duration: .7,
                delay: .65,
                ease: "power3.out"
            });

            gsap.to(".innovation-feature-number", {
                y: -5,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            observer.unobserve(entry.target);
        });

    }, {
        threshold: .15
    });

    innovationObserver.observe(innovationSection);
}
const projectsSection = document.querySelector(".robot-projects-section");

if (projectsSection && typeof gsap !== "undefined") {

    gsap.set(".robot-projects-title", {
        opacity: 0,
        y: 35
    });

    gsap.set(".robot-projects-btn", {
        opacity: 0,
        x: 25
    });

    gsap.set(".robot-project-card", {
        opacity: 0,
        y: 40
    });

    gsap.set(".robot-projects-bottom", {
        opacity: 0,
        y: 25
    });

    const projectsObserver = new IntersectionObserver(function (entries, observer) {

        entries.forEach(function (entry) {

            if (!entry.isIntersecting) {
                return;
            }

            gsap.to(".robot-projects-title", {
                opacity: 1,
                y: 0,
                duration: .8,
                ease: "power3.out"
            });

            gsap.to(".robot-projects-btn", {
                opacity: 1,
                x: 0,
                duration: .7,
                delay: .1,
                ease: "power3.out"
            });

            gsap.to(".robot-project-card", {
                opacity: 1,
                y: 0,
                duration: .7,
                stagger: .12,
                delay: .2,
                ease: "power3.out"
            });

            gsap.to(".robot-projects-bottom", {
                opacity: 1,
                y: 0,
                duration: .7,
                delay: .65,
                ease: "power3.out"
            });

            observer.unobserve(entry.target);
        });

    }, {
        threshold: .15
    });

    projectsObserver.observe(projectsSection);
}
document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        return;
    }

    const section = document.querySelector(".robot-testimonial-section");

    if (!section) {
        return;
    }

    const cards = Array.from(
        section.querySelectorAll(".robot-testimonial-card")
    );

    const dots = Array.from(
        section.querySelectorAll(".testimonial-dot")
    );

    const prevButton = section.querySelector("#testimonialPrev");
    const nextButton = section.querySelector("#testimonialNext");

    if (!cards.length) {
        return;
    }

    let currentIndex = 0;
    let autoPlay = null;
    let hasStarted = false;
    let startX = 0;

    function isMobile() {
        return window.innerWidth <= 767;
    }

    function updateDots() {

        dots.forEach(function (dot, index) {
            dot.classList.toggle(
                "active",
                index === currentIndex
            );
        });

    }

    function clearAutoplay() {

        if (autoPlay) {
            clearInterval(autoPlay);
            autoPlay = null;
        }

    }

    function startAutoplay() {

        clearAutoplay();

        if (isMobile()) {
            return;
        }

        autoPlay = setInterval(function () {
            nextTestimonial();
        }, 5000);

    }

    function animateMobileCards() {

        cards.forEach(function (card, index) {

            gsap.killTweensOf(card);

            gsap.set(card, {
                clearProps: "transform,opacity,visibility",
                position: "relative",
                x: 0,
                y: 0,
                scale: 1,
                rotationY: 0,
                opacity: 1,
                visibility: "visible"
            });

            card.style.zIndex = String(index + 1);
            card.style.position = "relative";
        });

        updateDots();
    }

    function animateDesktopCards(animate = true) {

        cards.forEach(function (card, index) {

            let position = index - currentIndex;

            if (position > 1) {
                position -= cards.length;
            }

            if (position < -1) {
                position += cards.length;
            }

            gsap.killTweensOf(card);

            if (position === 0) {

                gsap.to(card, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    rotationY: 0,
                    visibility: "visible",
                    duration: animate ? 0.6 : 0,
                    ease: "power3.out"
                });

                card.style.zIndex = "5";

            } else if (position === -1) {

                gsap.to(card, {
                    x: "-390px",
                    y: 0,
                    scale: 0.82,
                    opacity: 0.38,
                    rotationY: 12,
                    visibility: "visible",
                    duration: animate ? 0.6 : 0,
                    ease: "power3.out"
                });

                card.style.zIndex = "2";

            } else if (position === 1) {

                gsap.to(card, {
                    x: "390px",
                    y: 0,
                    scale: 0.82,
                    opacity: 0.38,
                    rotationY: -12,
                    visibility: "visible",
                    duration: animate ? 0.6 : 0,
                    ease: "power3.out"
                });

                card.style.zIndex = "2";

            } else {

                gsap.to(card, {
                    x: 0,
                    y: 0,
                    scale: 0.7,
                    opacity: 0,
                    rotationY: 0,
                    visibility: "hidden",
                    duration: animate ? 0.4 : 0,
                    ease: "power3.out"
                });

                card.style.zIndex = "1";
            }

        });

        updateDots();
    }

    function updateCards(animate = true) {

        if (isMobile()) {
            animateMobileCards();
        } else {
            animateDesktopCards(animate);
        }

    }

    function nextTestimonial() {

        if (!cards.length) {
            return;
        }

        currentIndex++;

        if (currentIndex >= cards.length) {
            currentIndex = 0;
        }

        updateCards(true);

        if (!isMobile()) {
            startAutoplay();
        }

    }

    function previousTestimonial() {

        if (!cards.length) {
            return;
        }

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = cards.length - 1;
        }

        updateCards(true);

        if (!isMobile()) {
            startAutoplay();
        }

    }

    function goToTestimonial(index) {

        if (index < 0 || index >= cards.length) {
            return;
        }

        currentIndex = index;

        updateCards(true);

        if (!isMobile()) {
            startAutoplay();
        }

    }

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            nextTestimonial();
        });
    }

    if (prevButton) {
        prevButton.addEventListener("click", function () {
            previousTestimonial();
        });
    }

    dots.forEach(function (dot, index) {

        dot.addEventListener("click", function () {
            goToTestimonial(index);
        });

    });

    section.addEventListener("mouseenter", function () {

        if (!isMobile()) {
            clearAutoplay();
        }

    });

    section.addEventListener("mouseleave", function () {

        if (hasStarted && !isMobile()) {
            startAutoplay();
        }

    });

    section.addEventListener("touchstart", function (event) {

        startX = event.changedTouches[0].screenX;

    }, {
        passive: true
    });

    section.addEventListener("touchend", function (event) {

        if (isMobile()) {
            return;
        }

        const endX = event.changedTouches[0].screenX;
        const distance = endX - startX;

        if (Math.abs(distance) < 50) {
            return;
        }

        if (distance < 0) {
            nextTestimonial();
        } else {
            previousTestimonial();
        }

    }, {
        passive: true
    });

    let resizeTimer;

    window.addEventListener("resize", function () {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function () {

            updateCards(false);

            if (isMobile()) {
                clearAutoplay();
            } else if (hasStarted) {
                startAutoplay();
            }

        }, 150);

    });

    const observer = new IntersectionObserver(function (entries, observerInstance) {

        entries.forEach(function (entry) {

            if (!entry.isIntersecting) {
                return;
            }

            hasStarted = true;

            gsap.from(".robot-testimonial-heading", {
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: "power3.out"
            });

            gsap.from(".robot-testimonial-stage", {
                opacity: 0,
                y: 35,
                duration: 0.9,
                delay: 0.15,
                ease: "power3.out"
            });

            gsap.from(".robot-testimonial-controls", {
                opacity: 0,
                y: 20,
                duration: 0.6,
                delay: 0.35,
                ease: "power3.out"
            });

            updateCards(false);

            if (!isMobile()) {
                startAutoplay();
            }

            observerInstance.unobserve(entry.target);

        });

    }, {
        threshold: 0.15
    });

    observer.observe(section);

});

const ctaSection = document.querySelector(".robot-cta-section");

if (ctaSection && typeof gsap !== "undefined") {

    gsap.set(".robot-cta-content", {
        opacity: 0,
        x: -50
    });

    gsap.set(".robot-cta-visual", {
        opacity: 0,
        x: 50,
        scale: .9
    });

    gsap.set(".robot-cta-actions", {
        opacity: 0,
        y: 20
    });

    let ctaAnimated = false;

    const ctaObserver = new IntersectionObserver(function (entries, observer) {

        entries.forEach(function (entry) {

            if (!entry.isIntersecting || ctaAnimated) {
                return;
            }

            ctaAnimated = true;

            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });

            tl.to(".robot-cta-content", {
                opacity: 1,
                x: 0,
                duration: .9
            })
            .to(".robot-cta-visual", {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1
            }, "-=.6")
            .to(".robot-cta-actions", {
                opacity: 1,
                y: 0,
                duration: .6
            }, "-=.35");

            observer.unobserve(entry.target);
        });

    }, {
        threshold: .2
    });

    ctaObserver.observe(ctaSection);

    gsap.to(".cta-circle-one", {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: "none"
    });

    gsap.to(".cta-circle-two", {
        rotation: -360,
        duration: 18,
        repeat: -1,
        ease: "none"
    });

    gsap.to(".cta-circle-three", {
        rotation: 360,
        duration: 12,
        repeat: -1,
        ease: "none"
    });

    gsap.to(".cta-core", {
        scale: 1.06,
        boxShadow: "0 0 50px rgba(42,213,238,.22)",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".cta-node-one", {
        y: -8,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".cta-node-two", {
        x: 8,
        duration: 2.7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".cta-node-three", {
        y: 8,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".cta-node-four", {
        x: -8,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
}































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