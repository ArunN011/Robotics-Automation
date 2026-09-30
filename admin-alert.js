document.addEventListener("DOMContentLoaded", () => {

    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
    }

    const sidebar = document.getElementById("dashboardSidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const menuButton = document.getElementById("mobileMenuButton");
    const logoutButton = document.getElementById("logoutButton");
    const notificationButton = document.getElementById("notificationButton");

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

    if (notificationButton) {

        notificationButton.addEventListener(
            "click",
            () => {
                window.location.href = "error.html";
            }
        );

    }

    const severityFilter =
        document.getElementById("severityFilter");

    const alerts =
        Array.from(
            document.querySelectorAll(".system-alert")
        );

    const noAlerts =
        document.getElementById("noAlerts");

    function filterAlerts() {

        if (!severityFilter) {
            return;
        }

        const selected =
            severityFilter.value;

        let visibleCount = 0;

        alerts.forEach(alert => {

            const severity =
                alert.dataset.severity;

            const shouldShow =
                selected === "all" ||
                selected === severity;

            if (shouldShow) {

                alert.classList.remove("hidden");
                visibleCount++;

            } else {

                alert.classList.add("hidden");

            }

        });

        if (noAlerts) {
            noAlerts.classList.toggle(
                "show",
                visibleCount === 0
            );
        }

    }

    if (severityFilter) {
        severityFilter.addEventListener(
            "change",
            filterAlerts
        );
    }

    const chartCanvas =
        document.getElementById("alertActivityChart");

    const chartPeriod =
        document.getElementById("alertChartPeriod");

    let alertChart = null;

    const chartData = {

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

            critical: [
                4,
                3,
                5,
                2,
                4,
                3,
                3
            ],

            warning: [
                8,
                10,
                7,
                12,
                9,
                8,
                7
            ],

            resolved: [
                13,
                16,
                18,
                15,
                20,
                19,
                22
            ]

        },

        "Last 30 Days": {

            labels: [
                "Week 1",
                "Week 2",
                "Week 3",
                "Week 4"
            ],

            critical: [
                12,
                10,
                8,
                9
            ],

            warning: [
                24,
                28,
                22,
                20
            ],

            resolved: [
                55,
                64,
                71,
                76
            ]

        },

        "Last 90 Days": {

            labels: [
                "Jan",
                "Feb",
                "Mar"
            ],

            critical: [
                16,
                13,
                11
            ],

            warning: [
                36,
                30,
                25
            ],

            resolved: [
                82,
                94,
                114
            ]

        }

    };

    function createAlertChart(period) {

        if (
            !chartCanvas ||
            typeof Chart === "undefined"
        ) {
            return;
        }

        const selected =
            chartData[period] ||
            chartData["Last 7 Days"];

        if (alertChart) {
            alertChart.destroy();
        }

        alertChart = new Chart(
            chartCanvas,
            {
                type: "line",

                data: {

                    labels: selected.labels,

                    datasets: [

                        {
                            label: "Critical",
                            data: selected.critical,
                            borderColor: "#ff6878",
                            backgroundColor:
                                "rgba(255, 104, 120, 0.04)",
                            borderWidth: 2,
                            fill: true,
                            tension: 0.4,
                            pointRadius: 3,
                            pointHoverRadius: 5,
                            pointBackgroundColor: "#ff6878"
                        },

                        {
                            label: "Warnings",
                            data: selected.warning,
                            borderColor: "#edc35d",
                            backgroundColor:
                                "rgba(237, 195, 93, 0.04)",
                            borderWidth: 2,
                            fill: true,
                            tension: 0.4,
                            pointRadius: 3,
                            pointHoverRadius: 5,
                            pointBackgroundColor: "#edc35d"
                        },

                        {
                            label: "Resolved",
                            data: selected.resolved,
                            borderColor: "#2ad5ee",
                            backgroundColor:
                                "rgba(42, 213, 238, 0.06)",
                            borderWidth: 2,
                            fill: true,
                            tension: 0.4,
                            pointRadius: 3,
                            pointHoverRadius: 5,
                            pointBackgroundColor: "#2ad5ee"
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

                    animation: {
                        duration: 800,
                        easing: "easeOutQuart"
                    },

                    plugins: {

                        legend: {

                            position: "top",
                            align: "start",

                            labels: {
                                color: "#a1b3c0",
                                usePointStyle: true,
                                pointStyle: "circle",
                                padding: 17,

                                font: {
                                    family: "Inter",
                                    size: 12,
                                    weight: "600"
                                }
                            }

                        },

                        tooltip: {

                            backgroundColor: "#071c32",
                            borderColor:
                                "rgba(42, 213, 238, 0.2)",
                            borderWidth: 1,
                            titleColor: "#ffffff",
                            bodyColor: "#a1b3c0",
                            padding: 12

                        }

                    },

                    scales: {

                        x: {

                            grid: {
                                color:
                                    "rgba(42, 213, 238, 0.05)",
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
                                color:
                                    "rgba(42, 213, 238, 0.05)",
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

    createAlertChart("Last 7 Days");

    if (chartPeriod) {

        chartPeriod.addEventListener(
            "change",
            event => {

                createAlertChart(
                    event.target.value
                );

            }
        );

    }

    const statCards =
        document.querySelectorAll(
            ".alert-stat-card"
        );

    statCards.forEach(card => {

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

    if (typeof gsap !== "undefined") {

        gsap.from(
            ".alert-welcome",
            {
                opacity: 0,
                y: 22,
                duration: 0.75,
                ease: "power3.out"
            }
        );

        gsap.from(
            ".alert-welcome-copy > *",
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
            ".alert-stat-card",
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
            ".alert-insight",
            {
                opacity: 0,
                y: 18,
                duration: 0.6,
                delay: 0.62,
                ease: "power3.out"
            }
        );

        gsap.to(
            ".alert-core",
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