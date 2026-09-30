document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") {
    return;
  }

  const hero = document.querySelector(".service-page-hero");

  if (!hero) {
    return;
  }

  const badge = hero.querySelector(".service-hero-badge");
  const title = hero.querySelector(".service-hero-content h1");
  const description = hero.querySelector(".service-hero-content p");
  const breadcrumb = hero.querySelector(".service-hero-breadcrumb");
  const shape = hero.querySelector(".service-hero-shape");
  const network = hero.querySelector(".service-hero-network");
  const particles = hero.querySelectorAll(".service-hero-particles span");
  const dots = hero.querySelectorAll(".network-dot");

  gsap.set([badge, title, description, breadcrumb], {
    opacity: 0,
    y: 35
  });

  gsap.set(shape, {
    opacity: 0,
    x: 80
  });

  gsap.set(network, {
    opacity: 0,
    x: -40
  });

  const timeline = gsap.timeline({
    defaults: {
      ease: "power3.out"
    }
  });

  timeline
    .to(shape, {
      opacity: 0.82,
      x: 0,
      duration: 1
    })
    .to(
      network,
      {
        opacity: 0.65,
        x: 0,
        duration: 0.8
      },
      "-=0.7"
    )
    .to(
      badge,
      {
        opacity: 1,
        y: 0,
        duration: 0.65
      },
      "-=0.45"
    )
    .to(
      title,
      {
        opacity: 1,
        y: 0,
        duration: 0.8
      },
      "-=0.4"
    )
    .to(
      description,
      {
        opacity: 1,
        y: 0,
        duration: 0.65
      },
      "-=0.45"
    )
    .to(
      breadcrumb,
      {
        opacity: 1,
        y: 0,
        duration: 0.6
      },
      "-=0.35"
    );

  gsap.to(shape, {
    x: 12,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(dots, {
    scale: 1.8,
    opacity: 0.9,
    duration: 1.2,
    repeat: -1,
    yoyo: true,
    stagger: 0.15,
    ease: "sine.inOut"
  });

  gsap.to(particles, {
    y: -18,
    x: 10,
    opacity: 0.9,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    stagger: 0.3,
    ease: "sine.inOut"
  });

  gsap.to(".service-hero-grid", {
    backgroundPosition: "45px 45px",
    duration: 10,
    repeat: -1,
    ease: "none"
  });
});

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") {
    return;
  }

  const section = document.querySelector(".service-provide-section");

  if (!section) {
    return;
  }

  const label = section.querySelector(".service-provide-label");
  const heading = section.querySelector(".service-provide-header h2");
  const cards = section.querySelectorAll(".service-provide-card");
  const icons = section.querySelectorAll(".service-provide-icon");

  gsap.set([label, heading], {
    opacity: 0,
    y: 35
  });

  gsap.set(cards, {
    opacity: 0,
    y: 50
  });

  gsap.set(icons, {
    scale: 0.75,
    opacity: 0
  });

  let started = false;

  const revealSection = () => {
    if (started) {
      return;
    }

    started = true;

    const tl = gsap.timeline();

    tl.to(label, {
      opacity: 1,
      y: 0,
      duration: 0.6,
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
      "-=0.35"
    )
    .to(
      cards,
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.16,
        ease: "power3.out"
      },
      "-=0.3"
    )
    .to(
      icons,
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.12,
        ease: "back.out(1.7)"
      },
      "-=0.45"
    );

    gsap.to(icons, {
      y: -5,
      duration: 1.6,
      repeat: -1,
      yoyo: true,
      stagger: 0.15,
      ease: "sine.inOut"
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealSection();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.18
    }
  );

  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") {
    return;
  }

  const section = document.querySelector(".service-why-section");

  if (!section) {
    return;
  }

  const label = section.querySelector(".service-why-label");
  const heading = section.querySelector(".service-why-content h2");
  const description = section.querySelector(".service-why-description");
  const points = section.querySelectorAll(".service-why-point");
  const button = section.querySelector(".service-why-btn");
  const image = section.querySelector(".service-why-image-frame");
  const techItems = section.querySelectorAll(".service-why-tech");
  const rings = section.querySelectorAll(".service-why-ring");
  const glow = section.querySelector(".service-why-image-glow");

  gsap.set(
    [label, heading, description, button, image, ...points, ...techItems],
    {
      opacity: 0,
      y: 35
    }
  );

  let started = false;

  const reveal = () => {
    if (started) {
      return;
    }

    started = true;

    const tl = gsap.timeline();

    tl.to(image, {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 0.9,
      ease: "power3.out"
    })
    .to(
      label,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out"
      },
      "-=0.55"
    )
    .to(
      heading,
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out"
      },
      "-=0.3"
    )
    .to(
      description,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      },
      "-=0.35"
    )
    .to(
      points,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.13,
        ease: "power2.out"
      },
      "-=0.25"
    )
    .to(
      button,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "back.out(1.4)"
      },
      "-=0.2"
    )
    .to(
      techItems,
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.12,
        ease: "back.out(1.5)"
      },
      "-=0.45"
    );

    gsap.to(image, {
      y: -10,
      duration: 2.6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(glow, {
      scale: 1.15,
      opacity: 0.75,
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(rings[0], {
      rotation: 360,
      duration: 18,
      repeat: -1,
      ease: "none"
    });

    gsap.to(rings[1], {
      rotation: -360,
      duration: 25,
      repeat: -1,
      ease: "none"
    });

    gsap.to(techItems, {
      y: -7,
      duration: 1.6,
      repeat: -1,
      yoyo: true,
      stagger: 0.22,
      ease: "sine.inOut"
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  observer.observe(section);
});


document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") {
    return;
  }

  const section = document.querySelector(".robot-pricing-section");

  if (!section) {
    return;
  }

  const label = section.querySelector(".robot-pricing-label");
  const heading = section.querySelector(".robot-pricing-header h2");
  const description = section.querySelector(".robot-pricing-header p");
  const cards = section.querySelectorAll(".robot-price-card");
  const bottomItems = section.querySelectorAll(".robot-pricing-bottom-item");
  const icons = section.querySelectorAll(".robot-price-icon");
  const glowOne = section.querySelector(".pricing-glow-one");
  const glowTwo = section.querySelector(".pricing-glow-two");

  gsap.set([label, heading, description], {
    opacity: 0,
    y: 35
  });

  gsap.set(cards, {
    opacity: 0,
    y: 55
  });

  gsap.set(bottomItems, {
    opacity: 0,
    y: 30
  });

  gsap.set(icons, {
    opacity: 0,
    scale: 0.75
  });

  let started = false;

  const revealPricing = () => {
    if (started) {
      return;
    }

    started = true;

    const tl = gsap.timeline();

    tl.to(label, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: "power3.out"
    })
    .to(
      heading,
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out"
      },
      "-=0.3"
    )
    .to(
      description,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out"
      },
      "-=0.35"
    )
    .to(
      cards,
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.16,
        ease: "power3.out"
      },
      "-=0.25"
    )
    .to(
      icons,
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.12,
        ease: "back.out(1.6)"
      },
      "-=0.45"
    )
    .to(
      bottomItems,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "power2.out"
      },
      "-=0.25"
    );

    gsap.to(glowOne, {
      x: 35,
      y: 25,
      scale: 1.15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(glowTwo, {
      x: -30,
      y: -25,
      scale: 1.12,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(icons, {
      y: -5,
      duration: 1.7,
      repeat: -1,
      yoyo: true,
      stagger: 0.18,
      ease: "sine.inOut"
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealPricing();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  observer.observe(section);
});


document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") {
    return;
  }

  const section = document.querySelector(".service-process-section");

  if (!section) {
    return;
  }

  const label = section.querySelector(".service-process-label");
  const heading = section.querySelector(".service-process-header h2");
  const description = section.querySelector(".service-process-header p");
  const cards = section.querySelectorAll(".service-process-card");
  const icons = section.querySelectorAll(".service-process-icon");
  const bottom = section.querySelector(".service-process-bottom");

  gsap.set([label, heading, description], {
    opacity: 0,
    y: 35
  });

  gsap.set(cards, {
    opacity: 0,
    y: 50
  });

  gsap.set(icons, {
    opacity: 0,
    scale: 0.75
  });

  gsap.set(bottom, {
    opacity: 0,
    y: 30
  });

  let started = false;

  const revealProcess = () => {
    if (started) {
      return;
    }

    started = true;

    const tl = gsap.timeline();

    tl.to(label, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: "power3.out"
    })
    .to(
      heading,
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out"
      },
      "-=0.3"
    )
    .to(
      description,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out"
      },
      "-=0.35"
    )
    .to(
      cards,
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.13,
        ease: "power3.out"
      },
      "-=0.25"
    )
    .to(
      icons,
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.6)"
      },
      "-=0.4"
    )
    .to(
      bottom,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      },
      "-=0.2"
    );

    gsap.to(icons, {
      y: -6,
      duration: 1.7,
      repeat: -1,
      yoyo: true,
      stagger: 0.15,
      ease: "sine.inOut"
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealProcess();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") {
    return;
  }

  const section = document.querySelector(".service-testimonial-section");

  if (!section) {
    return;
  }

  const headerItems = section.querySelectorAll(
    ".service-testimonial-label, .service-testimonial-header h2, .service-testimonial-header p"
  );

  const cards = [...section.querySelectorAll(".service-testimonial-card")];
  const cta = section.querySelector(".service-testimonial-cta");
  const dots = [...section.querySelectorAll(".testimonial-dot")];
  const prevButton = section.querySelector(".service-testimonial-prev");
  const nextButton = section.querySelector(".service-testimonial-next");

  gsap.set(headerItems, {
    opacity: 0,
    y: 35
  });

  gsap.set(cards, {
    opacity: 0,
    y: 45
  });

  gsap.set(cta, {
    opacity: 0,
    y: 30
  });

  let currentIndex = 1;
  let started = false;
  let autoplay;

  const isMobile = () => window.innerWidth <= 767;

  const updateDesktopCards = () => {
    cards.forEach((card, index) => {
      const offset = index - currentIndex;

      gsap.to(card, {
        x: offset * 8,
        scale: index === currentIndex ? 1 : 0.96,
        opacity: 1,
        duration: 0.45,
        ease: "power2.out"
      });

      card.classList.toggle(
        "service-testimonial-active",
        index === currentIndex
      );

      if (dots[index]) {
        dots[index].classList.toggle("active", index === currentIndex);
      }
    });
  };

  const updateMobileCards = () => {
    cards.forEach((card) => {
      card.classList.remove("service-testimonial-active");

      gsap.set(card, {
        x: 0,
        scale: 1,
        opacity: 1,
        clearProps: "transform"
      });
    });
  };

  const updateTestimonials = () => {
    if (isMobile()) {
      updateMobileCards();
    } else {
      updateDesktopCards();
    }
  };

  const next = () => {
    if (isMobile()) {
      return;
    }

    currentIndex = (currentIndex + 1) % cards.length;
    updateDesktopCards();
  };

  const previous = () => {
    if (isMobile()) {
      return;
    }

    currentIndex =
      (currentIndex - 1 + cards.length) % cards.length;

    updateDesktopCards();
  };

  const goTo = (index) => {
    if (isMobile()) {
      return;
    }

    currentIndex = index;
    updateDesktopCards();
  };

  const startAutoplay = () => {
    if (isMobile()) {
      return;
    }

    clearInterval(autoplay);

    autoplay = setInterval(() => {
      next();
    }, 5000);
  };

  const revealSection = () => {
    if (started) {
      return;
    }

    started = true;

    const tl = gsap.timeline();

    tl.to(headerItems, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out"
    })
    .to(
      cards,
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.12,
        ease: "power3.out"
      },
      "-=0.25"
    )
    .to(
      cta,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      },
      "-=0.2"
    );

    updateTestimonials();
    startAutoplay();
  };

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      previous();
      startAutoplay();
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      next();
      startAutoplay();
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goTo(index);
      startAutoplay();
    });
  });

  const slider = section.querySelector(".service-testimonial-slider");

  if (slider) {
    slider.addEventListener("mouseenter", () => {
      if (!isMobile()) {
        clearInterval(autoplay);
      }
    });

    slider.addEventListener("mouseleave", () => {
      if (!isMobile()) {
        startAutoplay();
      }
    });
  }

  window.addEventListener("resize", () => {
    updateTestimonials();
    startAutoplay();
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealSection();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  observer.observe(section);
});


document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") {
    return;
  }

  const section = document.querySelector(".service-stats-section");

  if (!section) {
    return;
  }

  const contentItems = section.querySelectorAll(
    ".service-stats-label, .service-stats-content h2, .service-stats-content > p, .service-stats-btn"
  );

  const cards = section.querySelectorAll(".service-stat-card");
  const icons = section.querySelectorAll(".service-stat-icon");
  const techItems = section.querySelectorAll(".service-tech-item");
  const numbers = section.querySelectorAll(".service-stat-number");
  const glowOne = section.querySelector(".stats-glow-one");
  const glowTwo = section.querySelector(".stats-glow-two");

  gsap.set(contentItems, {
    opacity: 0,
    y: 35
  });

  gsap.set(cards, {
    opacity: 0,
    y: 45
  });

  gsap.set(icons, {
    opacity: 0,
    scale: 0.75
  });

  gsap.set(techItems, {
    opacity: 0,
    y: 25
  });

  let started = false;

  const animateNumber = (element) => {
    const target = Number(element.dataset.target);

    gsap.fromTo(
      element,
      {
        innerText: 0
      },
      {
        innerText: target,
        duration: 1.7,
        ease: "power2.out",
        snap: {
          innerText: 1
        },
        onUpdate: () => {
          element.textContent = Math.round(
            Number(element.textContent)
          );
        }
      }
    );
  };

  const revealSection = () => {
    if (started) {
      return;
    }

    started = true;

    const tl = gsap.timeline();

    tl.to(contentItems, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out"
    })
    .to(
      cards,
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.12,
        ease: "power3.out"
      },
      "-=0.3"
    )
    .to(
      icons,
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.6)"
      },
      "-=0.4"
    )
    .to(
      techItems,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out"
      },
      "-=0.2"
    );

    numbers.forEach((number) => {
      animateNumber(number);
    });

    gsap.to(icons, {
      y: -5,
      duration: 1.6,
      repeat: -1,
      yoyo: true,
      stagger: 0.15,
      ease: "sine.inOut"
    });

    gsap.to(glowOne, {
      x: 30,
      y: 20,
      scale: 1.12,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(glowTwo, {
      x: -25,
      y: -20,
      scale: 1.1,
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealSection();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  observer.observe(section);
});
document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") {
    return;
  }

  const section = document.querySelector(".service-industries-section");

  if (!section) {
    return;
  }

  const headerItems = section.querySelectorAll(
    ".service-industries-label, .service-industries-header h2, .service-industries-header p"
  );

  const cards = section.querySelectorAll(".service-industry-card");
  const icons = section.querySelectorAll(".service-industry-icon");
  const bottom = section.querySelector(".service-industries-bottom");

  gsap.set(headerItems, {
    opacity: 0,
    y: 35
  });

  gsap.set(cards, {
    opacity: 0,
    y: 50
  });

  gsap.set(icons, {
    opacity: 0,
    scale: 0.75
  });

  gsap.set(bottom, {
    opacity: 0,
    y: 30
  });

  let started = false;

  const revealIndustries = () => {
    if (started) {
      return;
    }

    started = true;

    const tl = gsap.timeline();

    tl.to(headerItems, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out"
    })
    .to(
      cards,
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.11,
        ease: "power3.out"
      },
      "-=0.25"
    )
    .to(
      icons,
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.6)"
      },
      "-=0.4"
    )
    .to(
      bottom,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out"
      },
      "-=0.2"
    );

    gsap.to(icons, {
      y: -5,
      duration: 1.7,
      repeat: -1,
      yoyo: true,
      stagger: 0.15,
      ease: "sine.inOut"
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealIndustries();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  observer.observe(section);
});
document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") {
    return;
  }

  const section = document.querySelector(".service-solution-section");

  if (!section) {
    return;
  }

  const label = section.querySelector(".service-solution-label");
  const heading = section.querySelector(".service-solution-content h2");
  const intro = section.querySelector(".service-solution-intro");
  const features = section.querySelectorAll(".service-solution-feature");
  const featureIcons = section.querySelectorAll(
    ".service-solution-feature-icon"
  );
  const button = section.querySelector(".service-solution-btn");
  const note = section.querySelector(".service-solution-note");
  const imageWrap = section.querySelector(".service-solution-image-wrap");
  const image = section.querySelector(".service-solution-image");
  const badges = section.querySelectorAll(".service-solution-badge");
  const orbits = section.querySelectorAll(".service-solution-orbit");
  const glowOne = section.querySelector(".solution-glow-one");
  const glowTwo = section.querySelector(".solution-glow-two");

  gsap.set([label, heading, intro, button, note], {
    opacity: 0,
    y: 35
  });

  gsap.set(features, {
    opacity: 0,
    y: 35
  });

  gsap.set(featureIcons, {
    opacity: 0,
    scale: 0.7
  });

  gsap.set(imageWrap, {
    opacity: 0,
    x: -55,
    scale: 0.94
  });

  gsap.set(badges, {
    opacity: 0,
    scale: 0.85
  });

  let started = false;

  const revealSolution = () => {
    if (started) {
      return;
    }

    started = true;

    const tl = gsap.timeline();

    tl.to(imageWrap, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.9,
      ease: "power3.out"
    })
    .to(
      badges,
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: "back.out(1.6)"
      },
      "-=0.45"
    )
    .to(
      label,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out"
      },
      "-=0.45"
    )
    .to(
      heading,
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out"
      },
      "-=0.3"
    )
    .to(
      intro,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      },
      "-=0.35"
    )
    .to(
      features,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.11,
        ease: "power3.out"
      },
      "-=0.25"
    )
    .to(
      featureIcons,
      {
        opacity: 1,
        scale: 1,
        duration: 0.45,
        stagger: 0.1,
        ease: "back.out(1.6)"
      },
      "-=0.35"
    )
    .to(
      button,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out"
      },
      "-=0.2"
    )
    .to(
      note,
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power2.out"
      },
      "-=0.3"
    );

    gsap.to(image, {
      y: -10,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(badges, {
      y: -6,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      stagger: 0.25,
      ease: "sine.inOut"
    });

    gsap.to(featureIcons, {
      rotate: 4,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
      ease: "sine.inOut"
    });

    gsap.to(orbits[0], {
      rotation: 360,
      duration: 18,
      repeat: -1,
      ease: "none"
    });

    gsap.to(orbits[1], {
      rotation: -360,
      duration: 26,
      repeat: -1,
      ease: "none"
    });

    gsap.to(glowOne, {
      x: 30,
      y: 25,
      scale: 1.12,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(glowTwo, {
      x: -25,
      y: -20,
      scale: 1.12,
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealSolution();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  observer.observe(section);
});
document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") {
    return;
  }

  const section = document.querySelector(".service-cta-section");

  if (!section) {
    return;
  }

  const label = section.querySelector(".service-cta-label");
  const heading = section.querySelector(".service-cta-content h2");
  const description = section.querySelector(".service-cta-content p");
  const actions = section.querySelector(".service-cta-actions");
  const points = section.querySelectorAll(".service-cta-point");
  const visual = section.querySelector(".service-cta-visual");
  const core = section.querySelector(".service-cta-core");
  const nodes = section.querySelectorAll(".service-cta-node");
  const orbits = section.querySelectorAll(".service-cta-orbit");
  const glowOne = section.querySelector(".service-cta-glow-one");
  const glowTwo = section.querySelector(".service-cta-glow-two");

  gsap.set(
    [label, heading, description, actions, ...points],
    {
      opacity: 0,
      y: 35
    }
  );

  gsap.set(visual, {
    opacity: 0,
    x: 50,
    scale: 0.92
  });

  gsap.set(nodes, {
    opacity: 0,
    scale: 0.75
  });

  let started = false;

  const revealCTA = () => {
    if (started) {
      return;
    }

    started = true;

    const tl = gsap.timeline();

    tl.to(label, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: "power3.out"
    })
    .to(
      heading,
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out"
      },
      "-=0.3"
    )
    .to(
      description,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      },
      "-=0.35"
    )
    .to(
      actions,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out"
      },
      "-=0.25"
    )
    .to(
      points,
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out"
      },
      "-=0.25"
    )
    .to(
      visual,
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.85,
        ease: "power3.out"
      },
      "-=0.75"
    )
    .to(
      nodes,
      {
        opacity: 1,
        scale: 1,
        duration: 0.45,
        stagger: 0.1,
        ease: "back.out(1.6)"
      },
      "-=0.4"
    );

    gsap.to(core, {
      scale: 1.08,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(nodes, {
      y: -7,
      duration: 1.6,
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
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
      duration: 17,
      repeat: -1,
      ease: "none"
    });

    gsap.to(orbits[2], {
      rotation: 360,
      duration: 11,
      repeat: -1,
      ease: "none"
    });

    gsap.to(glowOne, {
      x: 30,
      y: -20,
      scale: 1.12,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(glowTwo, {
      x: -25,
      y: 25,
      scale: 1.1,
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealCTA();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.18
    }
  );

  observer.observe(section);
});