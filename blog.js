document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") {
    return;
  }

  const hero = document.querySelector(".blog-page-hero");

  if (!hero) {
    return;
  }

  const badge = hero.querySelector(".blog-hero-badge");
  const title = hero.querySelector(".blog-hero-content h1");
  const description = hero.querySelector(".blog-hero-content p");
  const breadcrumb = hero.querySelector(".blog-hero-breadcrumb");
  const network = hero.querySelector(".blog-hero-network");
  const floats = hero.querySelectorAll(".blog-hero-float");
  const dots = hero.querySelectorAll(".blog-network-dot");
  const glowOne = hero.querySelector(".blog-glow-one");
  const glowTwo = hero.querySelector(".blog-glow-two");

  gsap.set([badge, title, description, breadcrumb], {
    opacity: 0,
    y: 35
  });

  gsap.set(network, {
    opacity: 0,
    x: -40
  });

  gsap.set(floats, {
    opacity: 0,
    scale: 0.85
  });

  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out"
    }
  });

  tl.to(network, {
    opacity: 0.7,
    x: 0,
    duration: 0.8
  })
  .to(
    badge,
    {
      opacity: 1,
      y: 0,
      duration: 0.55
    },
    "-=0.45"
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
    floats,
    {
      opacity: 1,
      scale: 1,
      duration: 0.45,
      stagger: 0.12,
      ease: "back.out(1.5)"
    },
    "-=0.25"
  );

  gsap.to(floats, {
    y: -7,
    duration: 1.8,
    repeat: -1,
    yoyo: true,
    stagger: 0.22,
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

  const section = document.querySelector(".real-blog-section");

  if (!section) {
    return;
  }

  const headerItems = section.querySelectorAll(
    ".real-blog-label, .real-blog-header h2, .real-blog-view-all"
  );

  const featured = section.querySelector(".real-blog-featured");
  const toolbar = section.querySelector(".real-blog-toolbar");
  const cards = section.querySelectorAll(".real-blog-card");
  const pagination = section.querySelector(".real-blog-pagination");
  const bottom = section.querySelector(".real-blog-bottom");

  gsap.set(headerItems, {
    opacity: 0,
    y: 30
  });

  gsap.set(featured, {
    opacity: 0,
    y: 45
  });

  gsap.set(toolbar, {
    opacity: 0,
    y: 25
  });

  gsap.set(cards, {
    opacity: 0,
    y: 45
  });

  gsap.set([pagination, bottom], {
    opacity: 0,
    y: 25
  });

  let started = false;

  const revealBlog = () => {
    if (started) {
      return;
    }

    started = true;

    const tl = gsap.timeline();

    tl.to(headerItems, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      stagger: 0.1,
      ease: "power3.out"
    })
    .to(
      featured,
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out"
      },
      "-=0.25"
    )
    .to(
      toolbar,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      },
      "-=0.3"
    )
    .to(
      cards,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.11,
        ease: "power3.out"
      },
      "-=0.2"
    )
    .to(
      pagination,
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power2.out"
      },
      "-=0.15"
    )
    .to(
      bottom,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      },
      "-=0.2"
    );
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealBlog();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  observer.observe(section);
});
document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") {
    return;
  }

  const section = document.querySelector(".blog-newsletter-section");

  if (!section) {
    return;
  }

  const label = section.querySelector(".blog-newsletter-label");
  const heading = section.querySelector(".blog-newsletter-content h2");
  const description = section.querySelector(".blog-newsletter-content > p");
  const form = section.querySelector(".blog-newsletter-form");
  const note = section.querySelector(".blog-newsletter-note");
  const visual = section.querySelector(".blog-newsletter-visual");
  const nodes = section.querySelectorAll(".newsletter-node");
  const orbits = section.querySelectorAll(".newsletter-orbit");
  const signals = section.querySelectorAll(".newsletter-signal");
  const input = section.querySelector("#blogNewsletterEmail");
  const button = section.querySelector("#blogSubscribeBtn");
  const message = section.querySelector("#blogNewsletterMessage");
  const glowOne = section.querySelector(".newsletter-glow-one");
  const glowTwo = section.querySelector(".newsletter-glow-two");

  gsap.set(
    [label, heading, description, form, note],
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

  const revealNewsletter = () => {
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
      form,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out"
      },
      "-=0.25"
    )
    .to(
      note,
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
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
      "-=0.7"
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
      "-=0.35"
    );

    gsap.to(visual, {
      y: -9,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(nodes, {
      y: -7,
      duration: 1.6,
      repeat: -1,
      yoyo: true,
      stagger: 0.18,
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

    gsap.to(signals, {
      scale: 1.8,
      opacity: 0.35,
      duration: 1.1,
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
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

  const subscribe = () => {
    const email = input.value.trim();

    if (!email) {
      message.textContent = "Please enter your email address.";
      message.style.color = "#ff8a8a";
      input.focus();
      return;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      message.textContent = "Please enter a valid email address.";
      message.style.color = "#ff8a8a";
      input.focus();
      return;
    }

    message.textContent = "Thank you. You are subscribed to our updates.";
    message.style.color = "#2ad5ee";
    window.location.href="error.html";

    input.value = "";

    gsap.fromTo(
      message,
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
  };

  if (button) {
    button.addEventListener("click", subscribe);
  }

  if (input) {
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        subscribe();
      }
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealNewsletter();
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

  const section = document.querySelector(".blog-topics-section");

  if (!section) {
    return;
  }

  const headerItems = section.querySelectorAll(
    ".blog-topics-label, .blog-topics-header h2, .blog-topics-header p"
  );

  const cards = section.querySelectorAll(".blog-topic-card");
  const icons = section.querySelectorAll(".blog-topic-icon");
  const banner = section.querySelector(".blog-topic-banner");
  const bannerIcon = section.querySelector(".blog-topic-banner-icon");

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

  gsap.set(banner, {
    opacity: 0,
    y: 30
  });

  let started = false;

  const revealTopics = () => {
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
      banner,
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
      duration: 1.6,
      repeat: -1,
      yoyo: true,
      stagger: 0.15,
      ease: "sine.inOut"
    });

    gsap.to(bannerIcon, {
      rotate: 8,
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
          revealTopics();
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