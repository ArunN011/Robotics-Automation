document.addEventListener("DOMContentLoaded", () => {

    const sidebar = document.getElementById("dashboardSidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const menuButton = document.getElementById("mobileMenuButton");
    const logoutButton = document.getElementById("logoutButton");
    const editButton = document.getElementById("editProfileButton");

    const sidebarUserName = document.getElementById("sidebarUserName");
    const sidebarUserRole = document.getElementById("sidebarUserRole");

    const headerUserName = document.getElementById("headerUserName");
    const headerUserRole = document.getElementById("headerUserRole");

    const profileUserName = document.getElementById("profileUserName");
    const profileUserRole = document.getElementById("profileUserRole");
    const profileUserEmail = document.getElementById("profileUserEmail");

    const fullNameField = document.getElementById("fullNameField");
    const emailField = document.getElementById("emailField");
    const roleField = document.getElementById("roleField");
    const workspaceRole = document.getElementById("workspaceRole");

    const storedEmail = localStorage.getItem("userEmail");
    const storedRole = localStorage.getItem("userRole");

    let displayName = "User";
    let displayRole = "User Account";
    let displayEmail = "user@example.com";

    if (storedEmail) {
        displayEmail = storedEmail;

        const emailName = storedEmail
            .split("@")[0]
            .replace(/[._-]+/g, " ")
            .trim();

        if (emailName) {
            displayName = emailName
                .replace(/\b\w/g, character => character.toUpperCase());
        }
    }

    if (storedRole) {
        displayRole = storedRole;
    }

    sidebarUserName.textContent = displayName;
    sidebarUserRole.textContent = displayRole;

    headerUserName.textContent = displayName;
    headerUserRole.textContent = displayRole;

    profileUserName.textContent = displayName;
    profileUserRole.textContent = displayRole;
    profileUserEmail.textContent = displayEmail;

    fullNameField.textContent = displayName;
    emailField.textContent = displayEmail;
    roleField.textContent = displayRole;
    workspaceRole.textContent = displayRole;

    function openSidebar() {

        if (!sidebar || !overlay || !menuButton) {
            return;
        }

        sidebar.classList.add("mobile-open");
        overlay.classList.add("active");
        document.body.classList.add("menu-open");

        menuButton.setAttribute("aria-expanded", "true");
        menuButton.setAttribute("aria-label", "Close navigation");
        menuButton.innerHTML = '<i class="bi bi-x-lg"></i>';
    }

    function closeSidebar() {

        if (!sidebar || !overlay || !menuButton) {
            return;
        }

        sidebar.classList.remove("mobile-open");
        overlay.classList.remove("active");
        document.body.classList.remove("menu-open");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
        menuButton.innerHTML = '<i class="bi bi-list"></i>';
    }

    function toggleSidebar() {

        if (!sidebar) {
            return;
        }

        if (sidebar.classList.contains("mobile-open")) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    if (menuButton) {
        menuButton.addEventListener("click", toggleSidebar);
    }

    if (overlay) {
        overlay.addEventListener("click", closeSidebar);
    }

    document.querySelectorAll(".sidebar-link").forEach(link => {

        if (link.id === "logoutButton") {
            return;
        }

        link.addEventListener("click", () => {

            if (window.innerWidth <= 991) {
                closeSidebar();
            }

        });

    });

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeSidebar();
        }

    });

    window.addEventListener("resize", () => {

        if (window.innerWidth > 991) {
            closeSidebar();
        }

    });

    if (logoutButton) {

        logoutButton.addEventListener("click", event => {

            event.preventDefault();

            localStorage.removeItem("userEmail");
            localStorage.removeItem("userRole");

            window.location.href = "login.html";

        });

    }

    if (editButton) {

        editButton.addEventListener("click", () => {

            window.location.href = "error.html";

        });

    }

    const preferenceInputs = document.querySelectorAll(
        ".toggle input"
    );

    preferenceInputs.forEach(input => {

        const storageKey =
            `profilePreference_${input.id}`;

        const savedValue =
            localStorage.getItem(storageKey);

        if (savedValue !== null) {
            input.checked = savedValue === "true";
        }

        input.addEventListener("change", () => {

            localStorage.setItem(
                storageKey,
                input.checked
            );

        });

    });

    const clickableLinks =
        document.querySelectorAll(
            ".header-icon-button"
        );

    clickableLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= 991) {
                closeSidebar();
            }

        });

    });

    if (typeof gsap !== "undefined") {

        gsap.from(".profile-hero", {
            opacity: 0,
            y: 22,
            duration: 0.75,
            ease: "power3.out"
        });

        gsap.from(".profile-hero-copy > *", {
            opacity: 0,
            y: 15,
            duration: 0.65,
            stagger: 0.1,
            delay: 0.15,
            ease: "power3.out"
        });

        gsap.from(".profile-card", {
            opacity: 0,
            y: 22,
            duration: 0.65,
            stagger: 0.08,
            delay: 0.3,
            ease: "power3.out"
        });

        gsap.from(".profile-note", {
            opacity: 0,
            y: 18,
            duration: 0.65,
            delay: 0.55,
            ease: "power3.out"
        });

        gsap.to(".profile-hero-icon", {
            rotation: 5,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }

});