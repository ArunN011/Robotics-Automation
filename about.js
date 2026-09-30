const aboutHero = document.querySelector(".about-page-hero");

if (aboutHero && typeof gsap !== "undefined") {

    gsap.set(".about-page-badge", {
        opacity: 0,
        y: 20
    });

    gsap.set(".about-page-hero h1", {
        opacity: 0,
        y: 35
    });

    gsap.set(".about-page-hero p", {
        opacity: 0,
        y: 25
    });

    gsap.set(".about-page-breadcrumb", {
        opacity: 0,
        y: 20
    });

    gsap.set(".about-mini-item", {
        opacity: 0,
        y: 20
    });

    gsap.set(".about-page-tech-orb", {
        opacity: 0,
        scale: .8
    });

    const aboutHeroTimeline = gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });

    aboutHeroTimeline
        .to(".about-page-badge", {
            opacity: 1,
            y: 0,
            duration: .5
        })
        .to(".about-page-hero h1", {
            opacity: 1,
            y: 0,
            duration: .8
        }, "-=.2")
        .to(".about-page-hero p", {
            opacity: 1,
            y: 0,
            duration: .6
        }, "-=.4")
        .to(".about-page-breadcrumb", {
            opacity: 1,
            y: 0,
            duration: .5
        }, "-=.3")
        .to(".about-mini-item", {
            opacity: 1,
            y: 0,
            duration: .5,
            stagger: .1
        }, "-=.2")
        .to(".about-page-tech-orb", {
            opacity: 1,
            scale: 1,
            duration: .9,
            ease: "back.out(1.4)"
        }, "-=.5");

    gsap.to(".orb-ring-one", {
        rotation: 360,
        duration: 24,
        repeat: -1,
        ease: "none"
    });

    gsap.to(".orb-ring-two", {
        rotation: -360,
        duration: 17,
        repeat: -1,
        ease: "none"
    });

    gsap.to(".orb-ring-three", {
        rotation: 360,
        duration: 12,
        repeat: -1,
        ease: "none"
    });

    gsap.to(".tech-orb-core", {
        scale: 1.07,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".orb-node-one", {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".orb-node-two", {
        x: 8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".orb-node-three", {
        x: -8,
        duration: 2.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

}

const whySection = document.querySelector(".robot-why-section");

if (whySection && typeof gsap !== "undefined") {

    gsap.set(".robot-why-heading", {
        opacity: 0,
        y: 35
    });

    gsap.set(".robot-why-btn", {
        opacity: 0,
        x: 25
    });

    gsap.set(".robot-why-main-card", {
        opacity: 0,
        x: -45
    });

    gsap.set(".robot-why-card", {
        opacity: 0,
        y: 35
    });

    let whyAnimated = false;

    const whyObserver = new IntersectionObserver(function (entries, observer) {

        entries.forEach(function (entry) {

            if (!entry.isIntersecting || whyAnimated) {
                return;
            }

            whyAnimated = true;

            const timeline = gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });

            timeline
                .to(".robot-why-heading", {
                    opacity: 1,
                    y: 0,
                    duration: .8
                })
                .to(".robot-why-btn", {
                    opacity: 1,
                    x: 0,
                    duration: .6
                }, "-=.5")
                .to(".robot-why-main-card", {
                    opacity: 1,
                    x: 0,
                    duration: .8
                }, "-=.35")
                .to(".robot-why-card", {
                    opacity: 1,
                    y: 0,
                    duration: .6,
                    stagger: .12
                }, "-=.45");

            gsap.to(".why-main-icon", {
                y: -6,
                duration: 2.4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            observer.unobserve(entry.target);
        });

    }, {
        threshold: .15
    });

    whyObserver.observe(whySection);
}

const blogSection = document.querySelector(".robot-blog-section");

if (blogSection && typeof gsap !== "undefined") {

    gsap.set(".robot-blog-heading", {
        opacity: 0,
        y: 35
    });

    gsap.set(".robot-blog-main-btn", {
        opacity: 0,
        x: 25
    });

    gsap.set(".robot-blog-card", {
        opacity: 0,
        y: 40
    });

    gsap.set(".robot-blog-bottom", {
        opacity: 0,
        y: 25
    });

    let blogAnimated = false;

    const blogObserver = new IntersectionObserver(function (entries, observer) {

        entries.forEach(function (entry) {

            if (!entry.isIntersecting || blogAnimated) {
                return;
            }

            blogAnimated = true;

            const timeline = gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });

            timeline
                .to(".robot-blog-heading", {
                    opacity: 1,
                    y: 0,
                    duration: .8
                })
                .to(".robot-blog-main-btn", {
                    opacity: 1,
                    x: 0,
                    duration: .6
                }, "-=.5")
                .to(".robot-blog-card", {
                    opacity: 1,
                    y: 0,
                    duration: .7,
                    stagger: .12
                }, "-=.35")
                .to(".robot-blog-bottom", {
                    opacity: 1,
                    y: 0,
                    duration: .6
                }, "-=.2");

            observer.unobserve(entry.target);
        });

    }, {
        threshold: .15
    });

    blogObserver.observe(blogSection);
}
const teamSection = document.querySelector(".robot-team-section");

if (teamSection && typeof gsap !== "undefined") {

    gsap.set(".robot-team-heading", {
        opacity: 0,
        y: 35
    });

    gsap.set(".robot-team-btn", {
        opacity: 0,
        x: 25
    });

    gsap.set(".robot-team-card", {
        opacity: 0,
        y: 40
    });

    let teamAnimated = false;

    const teamObserver = new IntersectionObserver(function (entries, observer) {

        entries.forEach(function (entry) {

            if (!entry.isIntersecting || teamAnimated) {
                return;
            }

            teamAnimated = true;

            const timeline = gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });

            timeline
                .to(".robot-team-heading", {
                    opacity: 1,
                    y: 0,
                    duration: .8
                })
                .to(".robot-team-btn", {
                    opacity: 1,
                    x: 0,
                    duration: .6
                }, "-=.5")
                .to(".robot-team-card", {
                    opacity: 1,
                    y: 0,
                    duration: .7,
                    stagger: .12
                }, "-=.35");

            observer.unobserve(entry.target);
        });

    }, {
        threshold: .15
    });

    teamObserver.observe(teamSection);
}
const faqSection = document.querySelector(".robot-faq-section");

if (faqSection) {

    const faqItems = faqSection.querySelectorAll(".robot-faq-item");

    faqItems.forEach(function (item) {

        const question = item.querySelector(".robot-faq-question");
        const answer = item.querySelector(".robot-faq-answer");

        question.addEventListener("click", function () {

            const isActive = item.classList.contains("active");

            faqItems.forEach(function (otherItem) {

                otherItem.classList.remove("active");

                const otherAnswer = otherItem.querySelector(".robot-faq-answer");

                otherAnswer.style.maxHeight = null;

            });

            if (!isActive) {

                item.classList.add("active");

                answer.style.maxHeight = answer.scrollHeight + "px";

            }

        });

    });

    if (typeof gsap !== "undefined") {

        gsap.set(".robot-faq-heading", {
            opacity: 0,
            y: 35
        });

        gsap.set(".robot-faq-btn", {
            opacity: 0,
            x: 25
        });

        gsap.set(".robot-faq-intro", {
            opacity: 0,
            x: -35
        });

        gsap.set(".robot-faq-item", {
            opacity: 0,
            y: 25
        });

        gsap.set(".robot-faq-bottom", {
            opacity: 0,
            y: 20
        });

        let faqAnimated = false;

        const faqObserver = new IntersectionObserver(function (entries, observer) {

            entries.forEach(function (entry) {

                if (!entry.isIntersecting || faqAnimated) {
                    return;
                }

                faqAnimated = true;

                const timeline = gsap.timeline({
                    defaults: {
                        ease: "power3.out"
                    }
                });

                timeline
                    .to(".robot-faq-heading", {
                        opacity: 1,
                        y: 0,
                        duration: .8
                    })
                    .to(".robot-faq-btn", {
                        opacity: 1,
                        x: 0,
                        duration: .6
                    }, "-=.5")
                    .to(".robot-faq-intro", {
                        opacity: 1,
                        x: 0,
                        duration: .8
                    }, "-=.4")
                    .to(".robot-faq-item", {
                        opacity: 1,
                        y: 0,
                        duration: .55,
                        stagger: .1
                    }, "-=.45")
                    .to(".robot-faq-bottom", {
                        opacity: 1,
                        y: 0,
                        duration: .6
                    }, "-=.2");

                gsap.to(".robot-faq-intro-icon", {
                    y: -6,
                    duration: 2.2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });

                observer.unobserve(entry.target);

            });

        }, {
            threshold: .15
        });

        faqObserver.observe(faqSection);
    }
}
const processSection = document.querySelector(".robot-process-section");

if (processSection && typeof gsap !== "undefined") {

    gsap.set(".robot-process-header", {
        opacity: 0,
        y: 35
    });

    gsap.set(".robot-process-step", {
        opacity: 0,
        y: 40
    });

    gsap.set(".robot-process-highlight", {
        opacity: 0,
        y: 25
    });

    let processAnimated = false;

    const processObserver = new IntersectionObserver(function (entries, observer) {

        entries.forEach(function (entry) {

            if (!entry.isIntersecting || processAnimated) {
                return;
            }

            processAnimated = true;

            const timeline = gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });

            timeline
                .to(".robot-process-header", {
                    opacity: 1,
                    y: 0,
                    duration: .8
                })
                .to(".robot-process-step", {
                    opacity: 1,
                    y: 0,
                    duration: .65,
                    stagger: .13
                }, "-=.35")
                .to(".robot-process-highlight", {
                    opacity: 1,
                    y: 0,
                    duration: .7
                }, "-=.25");

            gsap.to(".robot-process-line span", {
                x: 180,
                duration: 2.5,
                repeat: -1,
                ease: "none"
            });

            gsap.to(".robot-process-icon", {
                y: -5,
                duration: 2.2,
                repeat: -1,
                yoyo: true,
                stagger: .12,
                ease: "sine.inOut"
            });

            gsap.to(".robot-process-highlight-icon", {
                rotation: 8,
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

    processObserver.observe(processSection);
}
document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") {
    return;
  }

  const ctaSection = document.querySelector(".robot-cta-section");

  if (!ctaSection) {
    return;
  }

  const badge = ctaSection.querySelector(".robot-cta-badge");
  const heading = ctaSection.querySelector("h2");
  const description = ctaSection.querySelector(".robot-cta-content p");
  const actions = ctaSection.querySelector(".robot-cta-actions");
  const trustItems = ctaSection.querySelectorAll(".robot-cta-trust-item");
  const visual = ctaSection.querySelector(".robot-cta-visual");
  const core = ctaSection.querySelector(".robot-cta-core");
  const nodes = ctaSection.querySelectorAll(".robot-cta-node");
  const orbits = ctaSection.querySelectorAll(".robot-cta-orbit");
  const pulse = ctaSection.querySelector(".robot-cta-pulse");

  gsap.set(
    [
      badge,
      heading,
      description,
      actions,
      ...trustItems,
      visual
    ],
    {
      opacity: 0,
      y: 35
    }
  );

  const revealCTA = () => {
    const timeline = gsap.timeline();

    timeline
      .to(badge, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out"
      })
      .to(
        heading,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        },
        "-=0.4"
      )
      .to(
        description,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        },
        "-=0.45"
      )
      .to(
        actions,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        },
        "-=0.35"
      )
      .to(
        trustItems,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.1,
          ease: "power2.out"
        },
        "-=0.3"
      )
      .to(
        visual,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        },
        "-=0.7"
      );

    gsap.to(core, {
      scale: 1.08,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(nodes, {
      y: -8,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      stagger: 0.25,
      ease: "sine.inOut"
    });

    gsap.to(orbits[0], {
      rotation: 360,
      duration: 22,
      repeat: -1,
      ease: "none"
    });

    gsap.to(orbits[1], {
      rotation: -360,
      duration: 16,
      repeat: -1,
      ease: "none"
    });

    gsap.to(orbits[2], {
      rotation: 360,
      duration: 11,
      repeat: -1,
      ease: "none"
    });

    gsap.to(pulse, {
      scale: 1.35,
      opacity: 0,
      duration: 2.3,
      repeat: -1,
      ease: "power2.out"
    });
  };

  let started = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          started = true;
          revealCTA();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  observer.observe(ctaSection);
});