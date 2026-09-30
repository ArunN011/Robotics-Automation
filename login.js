document.addEventListener("DOMContentLoaded", () => {
  const roleCards = document.querySelectorAll(".robot-role-card");
  const selectedRole = document.getElementById("selectedRole");
  const selectedRoleText = document.getElementById("selectedRoleText");
  const loginForm = document.getElementById("robotLoginForm");
  const emailInput = document.getElementById("loginEmail");
  const passwordInput = document.getElementById("loginPassword");
  const passwordToggle = document.getElementById("passwordToggle");
  const passwordToggleIcon = passwordToggle
    ? passwordToggle.querySelector("i")
    : null;
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const submitButton = document.querySelector(".robot-login-submit");
  const submitText = submitButton
    ? submitButton.querySelector("span")
    : null;
  const submitIcon = submitButton
    ? submitButton.querySelector("i")
    : null;
  const rememberMe = document.getElementById("rememberMe");

  const roleNames = {
    user: "User login selected",
    admin: "Admin login selected"
  };

  const resetLoginButton = () => {
    if (!submitButton) {
      return;
    }

    submitButton.classList.remove("loading");
    submitButton.disabled = false;

    if (submitText) {
      submitText.textContent = "Sign In";
    }

    if (submitIcon) {
      submitIcon.className = "fa-solid fa-arrow-up-right-from-square";
    }
  };

  const resetLoginState = () => {
    resetLoginButton();

    if (emailError) {
      emailError.textContent = "";
    }

    if (passwordError) {
      passwordError.textContent = "";
    }

    if (emailInput) {
      emailInput.style.borderColor = "";
    }

    if (passwordInput) {
      passwordInput.style.borderColor = "";
    }
  };

  roleCards.forEach((card) => {
    card.addEventListener("click", () => {
      const role = card.dataset.role;

      roleCards.forEach((item) => {
        item.classList.remove("active");
      });

      card.classList.add("active");

      if (selectedRole) {
        selectedRole.value = role;
      }

      if (selectedRoleText) {
        selectedRoleText.innerHTML = `
          <i class="fa-solid fa-circle-info"></i>
          ${roleNames[role]}
        `;
      }
    });
  });

  if (passwordToggle && passwordInput && passwordToggleIcon) {
    passwordToggle.addEventListener("click", () => {
      const isPassword = passwordInput.type === "password";

      passwordInput.type = isPassword ? "text" : "password";

      passwordToggleIcon.className = isPassword
        ? "fa-regular fa-eye-slash"
        : "fa-regular fa-eye";

      passwordToggle.setAttribute(
        "aria-label",
        isPassword ? "Hide password" : "Show password"
      );
    });
  }

  const clearErrors = () => {
    if (emailError) {
      emailError.textContent = "";
    }

    if (passwordError) {
      passwordError.textContent = "";
    }

    if (emailInput) {
      emailInput.style.borderColor = "";
    }

    if (passwordInput) {
      passwordInput.style.borderColor = "";
    }
  };

  const showEmailError = (message) => {
    if (emailError) {
      emailError.textContent = message;
    }

    if (emailInput) {
      emailInput.style.borderColor = "#db5b68";
    }
  };

  const showPasswordError = (message) => {
    if (passwordError) {
      passwordError.textContent = message;
    }

    if (passwordInput) {
      passwordInput.style.borderColor = "#db5b68";
    }
  };

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      clearErrors();

      const email = emailInput.value.trim();
      const password = passwordInput.value;
      const role = selectedRole.value;

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      let valid = true;

      if (!email) {
        showEmailError("Please enter your email address.");
        valid = false;
      } else if (!emailPattern.test(email)) {
        showEmailError("Please enter a valid email address.");
        valid = false;
      }

      if (!password) {
        showPasswordError("Please enter your password.");
        valid = false;
      } else if (password.length < 6) {
        showPasswordError("Password must contain at least 6 characters.");
        valid = false;
      }

      if (!valid) {
        return;
      }

      localStorage.setItem("userEmail", email);
      localStorage.setItem("userRole", role);

      if (rememberMe && rememberMe.checked) {
        localStorage.setItem("rememberLogin", "true");
      } else {
        localStorage.removeItem("rememberLogin");
      }

      submitButton.classList.add("loading");
      submitButton.disabled = true;

      if (submitText) {
        submitText.textContent = "Signing In...";
      }

      if (submitIcon) {
        submitIcon.className = "fa-solid fa-spinner fa-spin";
      }

      setTimeout(() => {
        if (role === "admin") {
          window.location.href = "admin-dashboard.html";
        } else {
          window.location.href = "user-dashboard.html";
        }
      }, 700);
    });
  }

  const rememberedEmail = localStorage.getItem("userEmail");
  const rememberedRole = localStorage.getItem("userRole");
  const rememberLogin = localStorage.getItem("rememberLogin");

  if (
    rememberLogin === "true" &&
    rememberedEmail &&
    emailInput
  ) {
    emailInput.value = rememberedEmail;

    if (rememberedRole === "admin" || rememberedRole === "user") {
      selectedRole.value = rememberedRole;

      roleCards.forEach((card) => {
        card.classList.toggle(
          "active",
          card.dataset.role === rememberedRole
        );
      });

      if (selectedRoleText) {
        selectedRoleText.innerHTML = `
          <i class="fa-solid fa-circle-info"></i>
          ${roleNames[rememberedRole]}
        `;
      }
    }

    if (rememberMe) {
      rememberMe.checked = true;
    }
  }

  const resetOnPageShow = () => {
    resetLoginButton();
  };

  window.addEventListener("pageshow", resetOnPageShow);

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      resetLoginButton();
    }
  });

  const animatedItems = document.querySelectorAll(
    ".robot-login-back, .robot-login-visual, .robot-login-card-wrap, .robot-login-floating"
  );

  if (typeof gsap !== "undefined") {
    gsap.set(animatedItems, {
      opacity: 0
    });

    gsap.fromTo(
      ".robot-login-visual",
      {
        x: -45,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out"
      }
    );

    gsap.fromTo(
      ".robot-login-card-wrap",
      {
        x: 45,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        delay: 0.1,
        ease: "power3.out"
      }
    );

    gsap.fromTo(
      ".robot-login-back",
      {
        y: -15,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out"
      }
    );

    gsap.fromTo(
      ".robot-login-floating",
      {
        scale: 0.7,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.12,
        delay: 0.5,
        ease: "back.out(1.6)"
      }
    );

    gsap.to(".robot-login-floating", {
      y: -8,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      stagger: 0.22,
      ease: "sine.inOut"
    });

    gsap.to(".orbit-large", {
      rotation: 360,
      duration: 22,
      repeat: -1,
      ease: "none"
    });

    gsap.to(".orbit-medium", {
      rotation: -360,
      duration: 16,
      repeat: -1,
      ease: "none"
    });

    gsap.to(".orbit-small", {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "none"
    });

    gsap.to(".robot-orbit-core", {
      scale: 1.06,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(".robot-orbit-node", {
      y: -7,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      stagger: 0.18,
      ease: "sine.inOut"
    });
  } else {
    animatedItems.forEach((item) => {
      item.style.opacity = "1";
    });
  }

  resetLoginState();
});