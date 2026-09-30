document.addEventListener("DOMContentLoaded", () => {

    const email = localStorage.getItem("userEmail");
    const role = (
        localStorage.getItem("userRole") || ""
    ).toLowerCase().trim();

    if (!email || !role) {
        window.location.replace("login.html");
        return;
    }

    if (role === "admin") {
        window.location.replace("admin-dashboard.html");
        return;
    }

    if (role !== "user" && role !== "client") {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userRole");
        localStorage.removeItem("rememberLogin");
        window.location.replace("login.html");
        return;
    }

    const sidebar = document.getElementById("dashboardSidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const menuButton = document.getElementById("mobileMenuButton");
    const logoutButton = document.getElementById("logoutButton");

    let previousScroll = 0;

    const getNameFromEmail = (emailAddress) => {

        const part = emailAddress
            .split("@")[0]
            .replace(/[0-9]+/g, "")
            .replace(/[._-]+/g, " ")
            .trim();

        if (!part) {
            return "User";
        }

        return part
            .split(/\s+/)
            .map((word) => {
                return (
                    word.charAt(0).toUpperCase() +
                    word.slice(1).toLowerCase()
                );
            })
            .join(" ");
    };

    const displayName = getNameFromEmail(email);

    const setText = (id, value) => {

        const element = document.getElementById(id);

        if (element) {
            element.textContent = value;
        }
    };

    setText("sidebarUserName", displayName);
    setText("headerUserName", displayName);
    setText("welcomeUser", displayName);
    setText("profileUserName", displayName);
    setText("profileEmail", email);

    setText(
        "sidebarUserRole",
        role === "client"
            ? "Client Account"
            : "User Account"
    );

    setText(
        "profileRole",
        role === "client"
            ? "CLIENT"
            : "USER"
    );

    const dateElement =
        document.getElementById("dashboardDate");

    if (dateElement) {

        dateElement.textContent =
            new Date()
                .toLocaleDateString(
                    "en-US",
                    {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    }
                )
                .toUpperCase();
    }

    const lockBody = () => {

        previousScroll = window.scrollY;

        document.documentElement.style.overflow = "hidden";

        document.body.style.position = "fixed";
        document.body.style.top = `-${previousScroll}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.width = "100%";
        document.body.style.overflow = "hidden";

        document.body.classList.add("menu-open");
    };

    const unlockBody = () => {

        document.body.classList.remove("menu-open");

        document.documentElement.style.overflow = "";

        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";
        document.body.style.overflow = "";

        requestAnimationFrame(() => {
            window.scrollTo(
                0,
                previousScroll
            );
        });
    };

    const openSidebar = () => {

        if (!sidebar || !overlay || !menuButton) {
            return;
        }

        sidebar.classList.add("mobile-open");
        overlay.classList.add("active");

        lockBody();

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        menuButton.setAttribute(
            "aria-label",
            "Close menu"
        );

        menuButton.innerHTML =
            '<i class="bi bi-x-lg"></i>';
    };

    const closeSidebar = () => {

        if (!sidebar || !overlay || !menuButton) {
            return;
        }

        sidebar.classList.remove("mobile-open");
        overlay.classList.remove("active");

        unlockBody();

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Open menu"
        );

        menuButton.innerHTML =
            '<i class="bi bi-list"></i>';
    };

    if (menuButton) {

        menuButton.addEventListener(
            "click",
            (event) => {

                event.preventDefault();
                event.stopPropagation();

                if (
                    sidebar &&
                    sidebar.classList.contains(
                        "mobile-open"
                    )
                ) {
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

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                sidebar &&
                sidebar.classList.contains(
                    "mobile-open"
                )
            ) {
                closeSidebar();
            }
        }
    );

    sidebar
        ?.querySelectorAll(".sidebar-link")
        .forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    if (
                        window.innerWidth <= 991
                    ) {
                        closeSidebar();
                    }
                }
            );
        });

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 991 &&
                sidebar &&
                sidebar.classList.contains(
                    "mobile-open"
                )
            ) {
                closeSidebar();
            }
        }
    );

    if (logoutButton) {

        logoutButton.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                localStorage.removeItem(
                    "userEmail"
                );

                localStorage.removeItem(
                    "userRole"
                );

                localStorage.removeItem(
                    "rememberLogin"
                );

                sessionStorage.clear();

                window.location.replace(
                    "login.html"
                );
            }
        );
    }

    const counters =
        document.querySelectorAll(
            "[data-counter]"
        );

    counters.forEach((counter) => {

        const target = Number(
            counter.dataset.counter
        );

        if (!Number.isFinite(target)) {
            return;
        }

        let current = 0;

        const increment =
            Math.max(
                1,
                Math.ceil(target / 40)
            );

        const timer =
            setInterval(() => {

                current += increment;

                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }

                counter.textContent =
                    current.toLocaleString();

            }, 25);
    });

    if (typeof Chart !== "undefined") {

        const canvas =
            document.getElementById(
                "robotUtilizationChart"
            );

        if (canvas) {

            const context =
                canvas.getContext("2d");

            const gradient =
                context.createLinearGradient(
                    0,
                    0,
                    0,
                    300
                );

            gradient.addColorStop(
                0,
                "rgba(42, 213, 238, 0.3)"
            );

            gradient.addColorStop(
                1,
                "rgba(42, 213, 238, 0.01)"
            );

            new Chart(
                canvas,
                {
                    type: "line",

                    data: {
                        labels: [
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep"
                        ],

                        datasets: [
                            {
                                label:
                                    "Robot Utilization",

                                data: [
                                    64,
                                    68,
                                    72,
                                    77,
                                    81,
                                    87
                                ],

                                borderColor:
                                    "#2ad5ee",

                                backgroundColor:
                                    gradient,

                                borderWidth: 3,

                                fill: true,

                                tension: 0.4,

                                pointRadius: 4,

                                pointHoverRadius: 6,

                                pointBackgroundColor:
                                    "#2ad5ee",

                                pointBorderColor:
                                    "#06172b"
                            }
                        ]
                    },

                    options: {
                        responsive: true,

                        maintainAspectRatio: false,

                        plugins: {
                            legend: {
                                display: false
                            }
                        },

                        interaction: {
                            intersect: false,
                            mode: "index"
                        },

                        scales: {
                            x: {
                                grid: {
                                    color:
                                        "rgba(42, 213, 238, 0.05)"
                                },

                                ticks: {
                                    color: "#8199a8",

                                    font: {
                                        size: 14,
                                        weight: "600"
                                    }
                                }
                            },

                            y: {
                                min: 40,
                                max: 100,

                                grid: {
                                    color:
                                        "rgba(42, 213, 238, 0.05)"
                                },

                                ticks: {
                                    color: "#8199a8",

                                    font: {
                                        size: 14,
                                        weight: "600"
                                    },

                                    callback: (value) => {
                                        return value + "%";
                                    }
                                }
                            }
                        }
                    }
                }
            );
        }
    }

    if (typeof gsap !== "undefined") {

        gsap.fromTo(
            ".dashboard-hero",
            {
                opacity: 0,
                y: 25
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power3.out"
            }
        );

        gsap.fromTo(
            ".stat-card",
            {
                opacity: 0,
                y: 18
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.45,
                stagger: 0.06,
                delay: 0.1,
                ease: "power3.out"
            }
        );

        gsap.fromTo(
            ".dashboard-card",
            {
                opacity: 0,
                y: 18
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.48,
                stagger: 0.06,
                delay: 0.18,
                ease: "power3.out"
            }
        );

        gsap.fromTo(
            ".fleet-card",
            {
                opacity: 0,
                y: 18
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.45,
                stagger: 0.07,
                delay: 0.3,
                ease: "power3.out"
            }
        );

        gsap.fromTo(
            ".quick-card",
            {
                opacity: 0,
                y: 18
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.45,
                stagger: 0.06,
                delay: 0.38,
                ease: "power3.out"
            }
        );

        gsap.fromTo(
            ".dashboard-note",
            {
                opacity: 0,
                y: 18
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.45,
                delay: 0.45,
                ease: "power3.out"
            }
        );

        gsap.to(
            ".ring-one",
            {
                rotation: 360,
                duration: 12,
                repeat: -1,
                ease: "none"
            }
        );

        gsap.to(
            ".ring-two",
            {
                rotation: -360,
                duration: 18,
                repeat: -1,
                ease: "none"
            }
        );

        gsap.to(
            ".ring-three",
            {
                rotation: 360,
                duration: 27,
                repeat: -1,
                ease: "none"
            }
        );

        gsap.to(
            ".hero-center",
            {
                scale: 1.06,
                duration: 1.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );

        gsap.to(
            ".hero-node",
            {
                y: -7,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                stagger: 0.17,
                ease: "sine.inOut"
            }
        );
    }
});