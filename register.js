document.addEventListener("DOMContentLoaded", () => {
  const roleButtons = document.querySelectorAll(".robot-register-role");
  const roleInput = document.getElementById("registerRole");
  const roleStatus = document.getElementById("registerRoleStatus");

  const passwordInput = document.getElementById("registerPassword");
  const confirmPasswordInput = document.getElementById(
    "registerConfirmPassword"
  );

  const passwordToggle = document.getElementById(
    "registerPasswordToggle"
  );

  const confirmPasswordToggle = document.getElementById(
    "registerConfirmPasswordToggle"
  );

  const form = document.getElementById("robotRegisterForm");
  const createAccountLink = document.getElementById(
    "registerCreateAccount"
  );

  const firstName = document.getElementById("registerFirstName");
  const lastName = document.getElementById("registerLastName");
  const email = document.getElementById("registerEmail");
  const phone = document.getElementById("registerPhone");
  const terms = document.getElementById("registerTerms");

  const firstNameError = document.getElementById("firstNameError");
  const lastNameError = document.getElementById("lastNameError");
  const emailError = document.getElementById("registerEmailError");
  const phoneError = document.getElementById("registerPhoneError");
  const passwordError = document.getElementById(
    "registerPasswordError"
  );
  const confirmPasswordError = document.getElementById(
    "registerConfirmPasswordError"
  );
  const termsError = document.getElementById("termsError");

  const roleNames = {
    client: "Client account selected",
    admin: "Admin account selected"
  };

  roleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedRole = button.dataset.role;

      roleButtons.forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      roleInput.value = selectedRole;

      roleStatus.innerHTML = `
        <i class="fa-solid fa-circle-info"></i>
        ${roleNames[selectedRole]}
      `;
    });
  });

  const setupPasswordToggle = (button, input) => {
    if (!button || !input) {
      return;
    }

    const icon = button.querySelector("i");

    button.addEventListener("click", () => {
      const shouldShow = input.type === "password";

      input.type = shouldShow ? "text" : "password";

      icon.className = shouldShow
        ? "fa-regular fa-eye-slash"
        : "fa-regular fa-eye";

      button.setAttribute(
        "aria-label",
        shouldShow ? "Hide password" : "Show password"
      );
    });
  };

  setupPasswordToggle(passwordToggle, passwordInput);
  setupPasswordToggle(confirmPasswordToggle, confirmPasswordInput);

  const clearInputError = (element, input) => {
    element.textContent = "";
    input.style.borderColor = "";
  };

  const setInputError = (element, input, message) => {
    element.textContent = message;
    input.style.borderColor = "#db5b68";
  };

  const clearAllErrors = () => {
    clearInputError(firstNameError, firstName);
    clearInputError(lastNameError, lastName);
    clearInputError(emailError, email);
    clearInputError(phoneError, phone);
    clearInputError(passwordError, passwordInput);
    clearInputError(
      confirmPasswordError,
      confirmPasswordInput
    );

    termsError.textContent = "";
  };

  const validateForm = () => {
    clearAllErrors();

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = passwordInput.value;
    const confirmPasswordValue = confirmPasswordInput.value;

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phonePattern =
      /^[0-9+\-\s()]{7,20}$/;

    let valid = true;

    if (!firstNameValue) {
      setInputError(
        firstNameError,
        firstName,
        "First name is required."
      );
      valid = false;
    }

    if (!lastNameValue) {
      setInputError(
        lastNameError,
        lastName,
        "Last name is required."
      );
      valid = false;
    }

    if (!emailValue) {
      setInputError(
        emailError,
        email,
        "Email address is required."
      );
      valid = false;
    } else if (!emailPattern.test(emailValue)) {
      setInputError(
        emailError,
        email,
        "Enter a valid email address."
      );
      valid = false;
    }

    if (!phoneValue) {
      setInputError(
        phoneError,
        phone,
        "Phone number is required."
      );
      valid = false;
    } else if (!phonePattern.test(phoneValue)) {
      setInputError(
        phoneError,
        phone,
        "Enter a valid phone number."
      );
      valid = false;
    }

    if (!passwordValue) {
      setInputError(
        passwordError,
        passwordInput,
        "Password is required."
      );
      valid = false;
    } else if (passwordValue.length < 6) {
      setInputError(
        passwordError,
        passwordInput,
        "Use at least 6 characters."
      );
      valid = false;
    }

    if (!confirmPasswordValue) {
      setInputError(
        confirmPasswordError,
        confirmPasswordInput,
        "Please confirm your password."
      );
      valid = false;
    } else if (passwordValue !== confirmPasswordValue) {
      setInputError(
        confirmPasswordError,
        confirmPasswordInput,
        "Passwords do not match."
      );
      valid = false;
    }

    if (!terms.checked) {
      termsError.textContent =
        "Please accept the terms and privacy policy.";
      valid = false;
    }

    return valid;
  };

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      validateForm();
    });
  }

  if (createAccountLink) {
    createAccountLink.addEventListener("click", (event) => {
      const valid = validateForm();

      if (!valid) {
        event.preventDefault();

        const firstError = form.querySelector(
          "input[style*='border-color']"
        );

        if (firstError) {
          firstError.focus();
        }

        return;
      }
    });
  }

  if (typeof gsap !== "undefined") {
    const page = document.querySelector(".robot-register-page");
    const visual = document.querySelector(
      ".robot-register-visual"
    );
    const card = document.querySelector(
      ".robot-register-card-wrap"
    );
    const back = document.querySelector(
      ".robot-register-back"
    );
    const floating = document.querySelectorAll(
      ".robot-register-floating"
    );

    gsap.set([visual, card, back, floating], {
      opacity: 0
    });

    gsap.fromTo(
      visual,
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
      card,
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
      back,
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
      floating,
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

    gsap.to(floating, {
      y: -8,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      stagger: 0.22,
      ease: "sine.inOut"
    });

    gsap.to(".register-orbit-large", {
      rotation: 360,
      duration: 22,
      repeat: -1,
      ease: "none"
    });

    gsap.to(".register-orbit-medium", {
      rotation: -360,
      duration: 16,
      repeat: -1,
      ease: "none"
    });

    gsap.to(".register-orbit-small", {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "none"
    });

    gsap.to(".robot-register-core", {
      scale: 1.06,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(".robot-register-node", {
      y: -7,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      stagger: 0.18,
      ease: "sine.inOut"
    });
  }
});