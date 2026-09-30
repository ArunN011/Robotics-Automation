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

    function toggleSidebar() {

        if (sidebarOpen) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    if (menuButton) {
        menuButton.addEventListener(
            "click",
            toggleSidebar
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
            closeSidebar
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

    sidebarUserRole.textContent = "Administrator";
    headerUserRole.textContent = "Administrator";

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

    const chartCanvas =
        document.getElementById("activityChart");

    const chartPeriod =
        document.getElementById("chartPeriod");

    let activityChart = null;

    const chartSets = {

        "Last 7 Days": {
            labels: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ],
            users: [
                165,
                188,
                210,
                230,
                215,
                255,
                284
            ],
            projects: [
                42,
                48,
                51,
                59,
                62,
                68,
                74
            ]
        },

        "Last 30 Days": {
            labels: [
                "Week 1",
                "Week 2",
                "Week 3",
                "Week 4"
            ],
            users: [
                710,
                860,
                1045,
                1284
            ],
            projects: [
                49,
                57,
                69,
                86
            ]
        },

        "Last 90 Days": {
            labels: [
                "Jan",
                "Feb",
                "Mar"
            ],
            users: [
                890,
                1080,
                1284
            ],
            projects: [
                57,
                71,
                86
            ]
        }

    };

    function createActivityChart(period) {

        if (!chartCanvas || typeof Chart === "undefined") {
            return;
        }

        const selected =
            chartSets[period] ||
            chartSets["Last 7 Days"];

        if (activityChart) {
            activityChart.destroy();
        }

        activityChart = new Chart(
            chartCanvas,
            {
                type: "line",

                data: {

                    labels: selected.labels,

                    datasets: [
                        {
                            label: "Users",
                            data: selected.users,
                            borderColor: "#2ad5ee",
                            backgroundColor: "rgba(42, 213, 238, 0.08)",
                            borderWidth: 2,
                            fill: true,
                            tension: 0.4,
                            pointRadius: 3,
                            pointHoverRadius: 5,
                            pointBackgroundColor: "#2ad5ee"
                        },

                        {
                            label: "Projects",
                            data: selected.projects,
                            borderColor: "#4cce91",
                            backgroundColor: "transparent",
                            borderWidth: 2,
                            fill: false,
                            tension: 0.4,
                            pointRadius: 3,
                            pointHoverRadius: 5,
                            pointBackgroundColor: "#4cce91"
                        }
                    ]

                },

                options: {

                    responsive: true,

                    maintainAspectRatio: false,

                    interaction: {
                        intersect: false,
                        mode: "index"
                    },

                    plugins: {

                        legend: {

                            position: "top",

                            align: "start",

                            labels: {
                                color: "#a1b3c0",
                                usePointStyle: true,
                                pointStyle: "circle",
                                padding: 18,
                                font: {
                                    family: "Inter",
                                    size: 12,
                                    weight: "600"
                                }
                            }

                        },

                        tooltip: {
                            backgroundColor: "#071c32",
                            borderColor: "rgba(42, 213, 238, 0.2)",
                            borderWidth: 1,
                            titleColor: "#ffffff",
                            bodyColor: "#a1b3c0",
                            padding: 12
                        }

                    },

                    scales: {

                        x: {

                            grid: {
                                color: "rgba(42, 213, 238, 0.05)",
                                drawBorder: false
                            },

                            ticks: {
                                color: "#78919f",
                                font: {
                                    family: "Inter",
                                    size: 12
                                }
                            }

                        },

                        y: {

                            beginAtZero: true,

                            grid: {
                                color: "rgba(42, 213, 238, 0.05)",
                                drawBorder: false
                            },

                            ticks: {
                                color: "#78919f",
                                font: {
                                    family: "Inter",
                                    size: 12
                                }
                            }

                        }

                    }

                }

            }
        );
    }

    createActivityChart("Last 7 Days");

    if (chartPeriod) {

        chartPeriod.addEventListener(
            "change",
            event => {
                createActivityChart(
                    event.target.value
                );
            }
        );

    }

    const metricCards =
        document.querySelectorAll(
            ".metric-card"
        );

    metricCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {
                card.style.transform =
                    "translateY(-3px)";
            }
        );

        card.addEventListener(
            "mouseleave",
            () => {
                card.style.transform =
                    "translateY(0)";
            }
        );

    });

    const orbitA =
        document.querySelector(".orbit-a");

    const orbitB =
        document.querySelector(".orbit-b");

    const orbitC =
        document.querySelector(".orbit-c");

    let orbitAngle = 0;

    function animateOrbits() {

        if (
            !orbitA ||
            !orbitB ||
            !orbitC
        ) {
            return;
        }

        orbitAngle += 0.12;

        orbitA.style.transform =
            `rotate(${orbitAngle}deg)`;

        orbitB.style.transform =
            `rotate(${-orbitAngle * 0.7}deg)`;

        orbitC.style.transform =
            `rotate(${orbitAngle * 0.45}deg)`;

        requestAnimationFrame(
            animateOrbits
        );
    }

    animateOrbits();

    if (typeof gsap !== "undefined") {

        gsap.from(
            ".dashboard-welcome",
            {
                opacity: 0,
                y: 22,
                duration: 0.75,
                ease: "power3.out"
            }
        );

        gsap.from(
            ".welcome-copy > *",
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
            ".metric-card",
            {
                opacity: 0,
                y: 22,
                duration: 0.65,
                stagger: 0.08,
                delay: 0.3,
                ease: "power3.out"
            }
        );

        gsap.from(
            ".dashboard-card",
            {
                opacity: 0,
                y: 20,
                duration: 0.65,
                stagger: 0.08,
                delay: 0.42,
                ease: "power3.out"
            }
        );

        gsap.from(
            ".quick-action",
            {
                opacity: 0,
                y: 18,
                duration: 0.6,
                stagger: 0.07,
                delay: 0.55,
                ease: "power3.out"
            }
        );

        gsap.from(
            ".dashboard-insight",
            {
                opacity: 0,
                y: 18,
                duration: 0.6,
                delay: 0.65,
                ease: "power3.out"
            }
        );

        gsap.to(
            ".visual-core",
            {
                scale: 1.08,
                boxShadow:
                    "0 0 60px rgba(42,213,238,0.22)",
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            }
        );

    }

});