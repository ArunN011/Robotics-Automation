document.addEventListener("DOMContentLoaded", () => {

    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
    }

    const sidebar = document.getElementById("dashboardSidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const menuButton = document.getElementById("mobileMenuButton");
    const logoutButton = document.getElementById("logoutButton");

    const sidebarUserName = document.getElementById("sidebarUserName");
    const sidebarUserRole = document.getElementById("sidebarUserRole");
    const headerUserName = document.getElementById("headerUserName");
    const headerUserRole = document.getElementById("headerUserRole");
    const accessUserName = document.getElementById("accessUserName");

    const savedEmail = localStorage.getItem("userEmail");
    const savedRole = (
        localStorage.getItem("userRole") || ""
    ).toLowerCase().trim();

    if (!savedEmail || !savedRole) {
        window.location.replace("login.html");
        return;
    }

    if (savedRole !== "admin") {

        if (savedRole === "user") {
            window.location.replace("user-dashboard.html");
            return;
        }

        localStorage.removeItem("userEmail");
        localStorage.removeItem("userRole");
        localStorage.removeItem("stacklyLoggedIn");
        localStorage.removeItem("isLoggedIn");

        window.location.replace("login.html");
        return;
    }

    function formatName(email) {

        if (!email) {
            return "Admin";
        }

        const value = email
            .split("@")[0]
            .replace(/[._-]+/g, " ")
            .trim();

        if (!value) {
            return "Admin";
        }

        return value.replace(
            /\b\w/g,
            character => character.toUpperCase()
        );
    }

    const displayName = formatName(savedEmail);

    sidebarUserName.textContent = displayName;
    headerUserName.textContent = displayName;
    accessUserName.textContent = displayName;

    sidebarUserRole.textContent = "Administrator";
    headerUserRole.textContent = "Administrator";

    let sidebarOpen = false;
    let savedScrollPosition = 0;

    function getCurrentScroll() {

        return Math.max(
            0,
            Math.round(
                window.scrollY ||
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0
            )
        );
    }

    function lockScroll() {

        savedScrollPosition = getCurrentScroll();

        document.documentElement.style.overflow = "hidden";

        document.body.style.position = "fixed";
        document.body.style.top = `-${savedScrollPosition}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.width = "100%";
        document.body.style.overflow = "hidden";
        document.body.style.touchAction = "none";

        document.body.classList.add("menu-open");
    }

    function unlockScroll() {

        document.documentElement.style.overflow = "";

        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        document.body.style.touchAction = "";

        document.body.classList.remove("menu-open");

        requestAnimationFrame(() => {

            window.scrollTo({
                top: savedScrollPosition,
                left: 0,
                behavior: "auto"
            });

        });
    }

    function openSidebar() {

        if (
            sidebarOpen ||
            !sidebar ||
            !overlay ||
            !menuButton
        ) {
            return;
        }

        sidebarOpen = true;

        lockScroll();

        sidebar.classList.add("mobile-open");
        overlay.classList.add("active");

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        menuButton.setAttribute(
            "aria-label",
            "Close navigation"
        );

        menuButton.innerHTML =
            '<i class="bi bi-x-lg"></i>';
    }

    function closeSidebar() {

        if (!sidebarOpen) {
            return;
        }

        sidebarOpen = false;

        if (sidebar) {
            sidebar.classList.remove("mobile-open");
        }

        if (overlay) {
            overlay.classList.remove("active");
        }

        if (menuButton) {

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open navigation"
            );

            menuButton.innerHTML =
                '<i class="bi bi-list"></i>';

        }

        unlockScroll();
    }

    if (menuButton) {

        menuButton.addEventListener(
            "click",
            () => {

                if (sidebarOpen) {
                    closeSidebar();
                } else {
                    openSidebar();
                }

            }
        );

    }

    if (overlay) {
        overlay.addEventListener(
            "click",
            closeSidebar
        );
    }

    document.querySelectorAll(
        ".sidebar-link"
    ).forEach(link => {

        if (link.id === "logoutButton") {
            return;
        }

        link.addEventListener(
            "click",
            () => {

                if (window.innerWidth <= 991) {
                    closeSidebar();
                }

            }
        );

    });

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {
                closeSidebar();
            }

        }
    );

    window.addEventListener(
        "resize",
        () => {

            if (window.innerWidth > 991) {
                closeSidebar();
            }

        }
    );

    if (logoutButton) {

        logoutButton.addEventListener(
            "click",
            event => {

                event.preventDefault();

                localStorage.removeItem("userEmail");
                localStorage.removeItem("userRole");
                localStorage.removeItem("stacklyLoggedIn");
                localStorage.removeItem("isLoggedIn");

                window.location.replace("login.html");

            }
        );

    }

    const navButtons =
        document.querySelectorAll(
            ".settings-nav-link"
        );

    const panels =
        document.querySelectorAll(
            ".settings-panel"
        );

    navButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const target =
                    button.dataset.section;

                navButtons.forEach(item => {
                    item.classList.remove("active");
                });

                panels.forEach(panel => {
                    panel.classList.remove("active");
                });

                button.classList.add("active");

                const targetPanel =
                    document.getElementById(target);

                if (targetPanel) {
                    targetPanel.classList.add("active");
                }

                if (window.innerWidth <= 991) {

                    requestAnimationFrame(() => {

                        const panelTop =
                            targetPanel
                                ? targetPanel.getBoundingClientRect().top +
                                  window.scrollY -
                                  90
                                : 0;

                        if (targetPanel) {

                            window.scrollTo({
                                top: Math.max(0, panelTop),
                                behavior: "smooth"
                            });

                        }

                    });

                }

            }
        );

    });

    const toggles =
        document.querySelectorAll(
            ".toggle input"
        );

    toggles.forEach(toggle => {

        const storageKey =
            `adminSetting_${toggle.id}`;

        const savedValue =
            localStorage.getItem(storageKey);

        if (savedValue !== null) {
            toggle.checked =
                savedValue === "true";
        }

        toggle.addEventListener(
            "change",
            () => {

                localStorage.setItem(
                    storageKey,
                    String(toggle.checked)
                );

            }
        );

    });

    const selects =
        document.querySelectorAll(
            ".small-select"
        );

    selects.forEach(select => {

        const storageKey =
            `adminSetting_${select.id}`;

        const savedValue =
            localStorage.getItem(storageKey);

        if (savedValue !== null) {
            select.value = savedValue;
        }

        select.addEventListener(
            "change",
            () => {

                localStorage.setItem(
                    storageKey,
                    select.value
                );

            }
        );

    });

    const generalFields = [
        "platformName",
        "workspaceName",
        "adminEmail",
        "timezone"
    ];

    generalFields.forEach(id => {

        const field =
            document.getElementById(id);

        if (!field) {
            return;
        }

        const storageKey =
            `adminGeneral_${id}`;

        const savedValue =
            localStorage.getItem(storageKey);

        if (savedValue !== null) {
            field.value = savedValue;
        }

        field.addEventListener(
            "input",
            () => {

                localStorage.setItem(
                    storageKey,
                    field.value
                );

            }
        );

        field.addEventListener(
            "change",
            () => {

                localStorage.setItem(
                    storageKey,
                    field.value
                );

            }
        );

    });

    const saveButtons =
        document.querySelectorAll(
            ".save-button"
        );

    saveButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const activePanel =
                    button.closest(
                        ".settings-panel"
                    );

                if (!activePanel) {
                    return;
                }

                const message =
                    activePanel.querySelector(
                        ".save-message"
                      

                    );

                if (!message) {
                    return;
                }

                message.textContent =
                    button.dataset.save ||
                    "Settings saved successfully";
                      window.location.href="error.html";

                message.style.opacity = "1";

                setTimeout(() => {
                    message.textContent = "";
                }, 2500);

            }
        );

    });

    const settingsIcon =
        document.querySelector(
            ".settings-hero-icon"
        );

    if (
        settingsIcon &&
        typeof gsap !== "undefined"
    ) {

        gsap.to(
            settingsIcon,
            {
                rotation: 8,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );

    }

    if (typeof gsap !== "undefined") {

        gsap.from(
            ".settings-hero",
            {
                opacity: 0,
                y: 22,
                duration: 0.75,
                ease: "power3.out"
            }
        );

        gsap.from(
            ".settings-hero-copy > *",
            {
                opacity: 0,
                y: 15,
                duration: 0.6,
                stagger: 0.08,
                delay: 0.12,
                ease: "power3.out"
            }
        );

        gsap.from(
            ".settings-nav-card",
            {
                opacity: 0,
                x: -18,
                duration: 0.65,
                delay: 0.3,
                ease: "power3.out"
            }
        );

        gsap.from(
            ".settings-card",
            {
                opacity: 0,
                y: 20,
                duration: 0.65,
                delay: 0.35,
                ease: "power3.out"
            }
        );

        gsap.from(
            ".settings-insight",
            {
                opacity: 0,
                y: 18,
                duration: 0.6,
                delay: 0.5,
                ease: "power3.out"
            }
        );

    }

});