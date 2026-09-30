document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.getElementById("backButton");
    const errorNumber = document.getElementById("errorNumber");
    const errorIcon = document.getElementById("errorIcon");
    const errorTitle = document.getElementById("errorTitle");
    const errorText = document.getElementById("errorText");
    const errorActions = document.getElementById("errorActions");
    const errorStatus = document.querySelector(".error-status");
    const glowOne = document.querySelector(".error-glow-one");
    const glowTwo = document.querySelector(".error-glow-two");

    backButton.addEventListener("click", () => {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "index.html";
        }
    });

    if (typeof gsap !== "undefined") {
        gsap.set([
            errorIcon,
            errorNumber,
            errorTitle,
            errorText,
            errorActions,
            errorStatus
        ], {
            opacity: 0,
            y: 35
        });

        const timeline = gsap.timeline();

        timeline
            .to(errorIcon, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power3.out"
            })
            .fromTo(errorNumber,
                {
                    opacity: 0,
                    scale: 0.6,
                    y: 45
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1,
                    ease: "back.out(1.5)"
                },
                "-=0.3"
            )
            .to(errorTitle, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out"
            }, "-=0.45")
            .to(errorText, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out"
            }, "-=0.35")
            .to(errorActions, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out"
            }, "-=0.3")
            .to(errorStatus, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power3.out"
            }, "-=0.25");

        gsap.to(errorNumber, {
            textShadow: "0 0 30px rgba(42,213,238,0.28), 0 0 80px rgba(42,213,238,0.12)",
            duration: 1.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(errorIcon, {
            y: -8,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(glowOne, {
            x: 45,
            y: 25,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(glowTwo, {
            x: -45,
            y: -25,
            duration: 5.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
});