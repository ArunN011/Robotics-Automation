document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") {
    return;
  }

  const hero = document.querySelector(".contact-page-hero");

  if (!hero) {
    return;
  }

  const badge = hero.querySelector(".contact-hero-badge");
  const title = hero.querySelector(".contact-hero-content h1");
  const description = hero.querySelector(".contact-hero-content p");
  const breadcrumb = hero.querySelector(".contact-hero-breadcrumb");
  const network = hero.querySelector(".contact-hero-network");
  const visual = hero.querySelector(".contact-hero-visual");
  const nodes = hero.querySelectorAll(".contact-visual-node");
  const rings = hero.querySelectorAll(".contact-visual-ring");
  const signals = hero.querySelectorAll(".contact-visual-signal");
  const glowOne = hero.querySelector(".contact-glow-one");
  const glowTwo = hero.querySelector(".contact-glow-two");
  const core = hero.querySelector(".contact-visual-core");

  gsap.set([badge, title, description, breadcrumb], {
    opacity: 0,
    y: 35
  });

  gsap.set(network, {
    opacity: 0,
    x: -35
  });

  gsap.set(visual, {
    opacity: 0,
    x: 45,
    scale: 0.9
  });

  gsap.set(nodes, {
    opacity: 0,
    scale: 0.75
  });

  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out"
    }
  });

  tl.to(network, {
    opacity: 0.65,
    x: 0,
    duration: 0.75
  })
  .to(
    badge,
    {
      opacity: 1,
      y: 0,
      duration: 0.55
    },
    "-=0.4"
  )
  .to(
    title,
    {
      opacity: 1,
      y: 0,
      duration: 0.75
    },
    "-=0.3"
  )
  .to(
    description,
    {
      opacity: 1,
      y: 0,
      duration: 0.6
    },
    "-=0.35"
  )
  .to(
    breadcrumb,
    {
      opacity: 1,
      y: 0,
      duration: 0.55
    },
    "-=0.3"
  )
  .to(
    visual,
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.8
    },
    "-=0.6"
  )
  .to(
    nodes,
    {
      opacity: 1,
      scale: 1,
      duration: 0.45,
      stagger: 0.1,
      ease: "back.out(1.5)"
    },
    "-=0.35"
  );

  gsap.to(core, {
    scale: 1.07,
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

  gsap.to(rings[0], {
    rotation: 360,
    duration: 22,
    repeat: -1,
    ease: "none"
  });

  gsap.to(rings[1], {
    rotation: -360,
    duration: 17,
    repeat: -1,
    ease: "none"
  });

  gsap.to(signals, {
    scale: 1.8,
    opacity: 0.35,
    duration: 1.1,
    repeat: -1,
    yoyo: true,
    stagger: 0.2,
    ease: "sine.inOut"
  });

  gsap.to(network, {
    y: -7,
    duration: 3.5,
    repeat: -1,
    yoyo: true,
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
});
document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") {
    return;
  }

  const section = document.querySelector(".contact-info-section");

  if (!section) {
    return;
  }

  const headerItems = section.querySelectorAll(
    ".contact-info-label, .contact-info-header h2, .contact-info-header p"
  );

  const detailCards = section.querySelectorAll(".contact-detail-card");
  const detailIcons = section.querySelectorAll(".contact-detail-icon");
  const bottomCard = section.querySelector(".contact-detail-bottom");
  const formWrap = section.querySelector(".contact-info-form-wrap");

  gsap.set(headerItems, {
    opacity: 0,
    y: 35
  });

  gsap.set(detailCards, {
    opacity: 0,
    x: -35
  });

  gsap.set(detailIcons, {
    opacity: 0,
    scale: 0.75
  });

  gsap.set(bottomCard, {
    opacity: 0,
    y: 25
  });

  gsap.set(formWrap, {
    opacity: 0,
    x: 35
  });

  let started = false;

  const revealContact = () => {
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
      detailCards,
      {
        opacity: 1,
        x: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: "power3.out"
      },
      "-=0.25"
    )
    .to(
      detailIcons,
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
      bottomCard,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out"
      },
      "-=0.2"
    )
    .to(
      formWrap,
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power3.out"
      },
      "-=0.65"
    );
  };

  const form = section.querySelector("#contactInfoForm");
  const status = section.querySelector("#contactFormStatus");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = section.querySelector("#contactName").value.trim();
      const email = section.querySelector("#contactEmail").value.trim();
      const phone = section.querySelector("#contactPhone").value.trim();
      const service = section.querySelector("#contactService").value;
      const message = section.querySelector("#contactMessage").value.trim();

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      status.textContent = "";
      status.style.color = "#2a9d72";

      if (!name) {
        status.textContent = "Please enter your name.";
        status.style.color = "#d35b5b";
        return;
      }

      if (!email || !emailPattern.test(email)) {
        status.textContent = "Please enter a valid email address.";
        status.style.color = "#d35b5b";
        return;
      }

      if (!phone) {
        status.textContent = "Please enter your phone number.";
        status.style.color = "#d35b5b";
        return;
      }

      if (!service) {
        status.textContent = "Please select a service.";
        status.style.color = "#d35b5b";
        return;
      }

      if (!message) {
        status.textContent = "Please enter your message.";
        status.style.color = "#d35b5b";
        return;
      }

      status.textContent = "Message submitted successfully.";

      gsap.fromTo(
        status,
        {
          opacity: 0,
          y: 8
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out"
        }
      );

      form.reset();

      setTimeout(() => {
        window.location.href = "error.html";
      }, 900);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealContact();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.14
    }
  );

  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") {
    return;
  }

  const section = document.querySelector(".contact-map-section");

  if (!section) {
    return;
  }

  const headerItems = section.querySelectorAll(
    ".contact-map-label, .contact-map-header h2, .contact-map-header p"
  );

  const locationCard = section.querySelector(".contact-location-card");
  const locationItems = section.querySelectorAll(".contact-location-item");
  const locationIcon = section.querySelector(".contact-location-icon");
  const button = section.querySelector(".contact-location-btn");
  const mapBox = section.querySelector(".contact-map-box");
  const badge = section.querySelector(".contact-map-badge");

  gsap.set(headerItems, {
    opacity: 0,
    y: 35
  });

  gsap.set(locationCard, {
    opacity: 0,
    x: -40
  });

  gsap.set(locationItems, {
    opacity: 0,
    y: 25
  });

  gsap.set(locationIcon, {
    opacity: 0,
    scale: 0.75
  });

  gsap.set(button, {
    opacity: 0,
    y: 20
  });

  gsap.set(mapBox, {
    opacity: 0,
    x: 40
  });

  gsap.set(badge, {
    opacity: 0,
    y: -12
  });

  let started = false;

  const revealMapSection = () => {
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
      locationCard,
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power3.out"
      },
      "-=0.3"
    )
    .to(
      locationItems,
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.1,
        ease: "power2.out"
      },
      "-=0.4"
    )
    .to(
      locationIcon,
      {
        opacity: 1,
        scale: 1,
        duration: 0.45,
        ease: "back.out(1.6)"
      },
      "-=0.25"
    )
    .to(
      button,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out"
      },
      "-=0.2"
    )
    .to(
      mapBox,
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out"
      },
      "-=0.75"
    )
    .to(
      badge,
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      },
      "-=0.3"
    );

    gsap.to(locationIcon, {
      y: -5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(badge, {
      y: -4,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealMapSection();
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

  const section = document.querySelector(".contact-social-section");

  if (!section) {
    return;
  }

  const headerItems = section.querySelectorAll(
    ".contact-social-label, .contact-social-header h2, .contact-social-header p"
  );

  const cards = section.querySelectorAll(".contact-social-card");
  const icons = section.querySelectorAll(".contact-social-icon");
  const bottom = section.querySelector(".contact-social-bottom");
  const bottomLinks = section.querySelectorAll(
    ".contact-social-bottom-links a"
  );

  gsap.set(headerItems, {
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

  gsap.set(bottom, {
    opacity: 0,
    y: 30
  });

  gsap.set(bottomLinks, {
    opacity: 0,
    scale: 0.8
  });

  let started = false;

  const revealSocial = () => {
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
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out"
      },
      "-=0.25"
    )
    .to(
      icons,
      {
        opacity: 1,
        scale: 1,
        duration: 0.45,
        stagger: 0.08,
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
    )
    .to(
      bottomLinks,
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.08,
        ease: "back.out(1.5)"
      },
      "-=0.3"
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
          revealSocial();
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

  const section = document.querySelector(".contact-faq-section");

  if (!section) {
    return;
  }

  const headerItems = section.querySelectorAll(
    ".contact-faq-label, .contact-faq-header h2, .contact-faq-header p"
  );

  const intro = section.querySelector(".contact-faq-intro");
  const introIcon = section.querySelector(".contact-faq-intro-icon");
  const faqItems = section.querySelectorAll(".contact-faq-item");
  const bottom = section.querySelector(".contact-faq-bottom");

  gsap.set(headerItems, {
    opacity: 0,
    y: 35
  });

  gsap.set(intro, {
    opacity: 0,
    x: -40
  });

  gsap.set(faqItems, {
    opacity: 0,
    x: 40
  });

  gsap.set(introIcon, {
    opacity: 0,
    scale: 0.75
  });

  gsap.set(bottom, {
    opacity: 0,
    y: 30
  });

  faqItems.forEach((item) => {
    const question = item.querySelector(".contact-faq-question");

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      faqItems.forEach((currentItem) => {
        currentItem.classList.remove("active");
      });

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  let started = false;

  const revealFAQ = () => {
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
      intro,
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power3.out"
      },
      "-=0.25"
    )
    .to(
      introIcon,
      {
        opacity: 1,
        scale: 1,
        duration: 0.45,
        ease: "back.out(1.6)"
      },
      "-=0.4"
    )
    .to(
      faqItems,
      {
        opacity: 1,
        x: 0,
        duration: 0.55,
        stagger: 0.09,
        ease: "power3.out"
      },
      "-=0.35"
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

    gsap.to(introIcon, {
      y: -5,
      duration: 1.6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealFAQ();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.14
    }
  );

  observer.observe(section);
});