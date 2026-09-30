document.addEventListener("DOMContentLoaded", () => {

    const sidebar = document.getElementById("mvSidebar");
    const overlay = document.getElementById("mvSidebarOverlay");
    const menuButton = document.getElementById("mvMobileMenuButton");
    const logoutButton = document.getElementById("mvLogoutButton");
    const notificationButton = document.getElementById("mvNotificationButton");
    const periodSelect = document.getElementById("mvChartPeriod");

    const sidebarUserName = document.getElementById("sidebarUserName");
    const sidebarUserRole = document.getElementById("sidebarUserRole");
    const headerUserName = document.getElementById("headerUserName");
    const headerUserRole = document.getElementById("headerUserRole");

    const storedEmail = localStorage.getItem("userEmail");
    const storedRole = localStorage.getItem("userRole");

    if (storedEmail) {
        const emailName = storedEmail
            .split("@")[0]
            .replace(/[._-]+/g, " ")
            .replace(/\b\w/g, letter => letter.toUpperCase());

        sidebarUserName.textContent = emailName;
        headerUserName.textContent = emailName;
    }

    if (storedRole) {
        sidebarUserRole.textContent = storedRole;
        headerUserRole.textContent = storedRole;
    }

    function openSidebar() {
        if (!sidebar || !overlay || !menuButton) {
            return;
        }

        sidebar.classList.add("mobile-open");
        overlay.classList.add("active");
        document.body.classList.add("menu-open");

        menuButton.setAttribute("aria-expanded", "true");
        menuButton.setAttribute("aria-label", "Close navigation");
        menuButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
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
        menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
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

    document.querySelectorAll(".mv-side-link").forEach(link => {

        if (link.id === "mvLogoutButton") {
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

        logoutButton.addEventListener("click", () => {

            localStorage.removeItem("userEmail");
            localStorage.removeItem("userRole");

            window.location.href = "login.html";

        });

    }

    if (notificationButton) {

        notificationButton.addEventListener("click", () => {
            window.location.href = "error.html";
        });

    }

    if (typeof Chart !== "undefined") {

        const performanceCanvas =
            document.getElementById("mvPerformanceChart");

        const defectCanvas =
            document.getElementById("mvDefectChart");

        let performanceChart = null;

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
                passRate: [
                    97.8,
                    98.2,
                    98.1,
                    98.9,
                    99.0,
                    98.7,
                    99.2
                ],
                accuracy: [
                    97.2,
                    97.8,
                    98.0,
                    98.2,
                    98.4,
                    98.5,
                    98.7
                ]
            },

            "Last 30 Days": {
                labels: [
                    "Week 1",
                    "Week 2",
                    "Week 3",
                    "Week 4"
                ],
                passRate: [
                    97.6,
                    98.2,
                    98.8,
                    99.2
                ],
                accuracy: [
                    97.1,
                    97.8,
                    98.3,
                    98.7
                ]
            },

            "Last 90 Days": {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar"
                ],
                passRate: [
                    96.9,
                    98.1,
                    99.2
                ],
                accuracy: [
                    96.5,
                    97.9,
                    98.7
                ]
            }
        };

        function createPerformanceChart(period) {

            if (!performanceCanvas) {
                return;
            }

            const selectedData =
                chartData[period] || chartData["Last 7 Days"];

            if (performanceChart) {
                performanceChart.destroy();
            }

            performanceChart = new Chart(performanceCanvas, {

                type: "line",

                data: {

                    labels: selectedData.labels,

                    datasets: [
                        {
                            label: "Pass Rate",
                            data: selectedData.passRate,
                            borderColor: "#2ad5ee",
                            backgroundColor: "rgba(42, 213, 238, 0.08)",
                            fill: true,
                            tension: 0.4,
                            borderWidth: 2,
                            pointRadius: 3,
                            pointHoverRadius: 5,
                            pointBackgroundColor: "#2ad5ee",
                            pointBorderWidth: 0
                        },

                        {
                            label: "Accuracy",
                            data: selectedData.accuracy,
                            borderColor: "#4cce91",
                            backgroundColor: "transparent",
                            fill: false,
                            tension: 0.4,
                            borderWidth: 2,
                            pointRadius: 3,
                            pointHoverRadius: 5,
                            pointBackgroundColor: "#4cce91",
                            pointBorderWidth: 0
                        }
                    ]

                },

                options: {

                    responsive: true,

                    maintainAspectRatio: false,

                    interaction: {
                        mode: "index",
                        intersect: false
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
                            padding: 12,
                            displayColors: true,

                            callbacks: {
                                label: context => {
                                    return `${context.dataset.label}: ${context.parsed.y}%`;
                                }
                            }
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
                                    size: 12,
                                    weight: "500"
                                }
                            }

                        },

                        y: {

                            min: 94,
                            max: 100,

                            grid: {
                                color: "rgba(42, 213, 238, 0.05)",
                                drawBorder: false
                            },

                            ticks: {
                                color: "#78919f",

                                font: {
                                    family: "Inter",
                                    size: 12,
                                    weight: "500"
                                },

                                callback: value => `${value}%`
                            }

                        }

                    }

                }

            });

        }

        if (performanceCanvas) {
            createPerformanceChart("Last 7 Days");
        }

        if (periodSelect) {

            periodSelect.addEventListener("change", event => {

                createPerformanceChart(event.target.value);

                periodSelect.style.borderColor =
                    "rgba(42, 213, 238, 0.3)";

                setTimeout(() => {
                    periodSelect.style.borderColor = "";
                }, 600);

            });

        }

        if (defectCanvas) {

            new Chart(defectCanvas, {

                type: "doughnut",

                data: {

                    labels: [
                        "Surface",
                        "Shape",
                        "Color",
                        "Alignment"
                    ],

                    datasets: [
                        {
                            data: [
                                42,
                                26,
                                18,
                                14
                            ],

                            backgroundColor: [
                                "#2ad5ee",
                                "#4cce91",
                                "#edc35d",
                                "#8e9cff"
                            ],

                            borderWidth: 0,

                            hoverOffset: 6
                        }
                    ]

                },

                options: {

                    responsive: true,

                    maintainAspectRatio: false,

                    cutout: "72%",

                    animation: {
                        animateRotate: true,
                        duration: 1000
                    },

                    plugins: {
                        legend: {
                            display: false
                        },

                        tooltip: {
                            backgroundColor: "#071c32",
                            borderColor: "rgba(42, 213, 238, 0.2)",
                            borderWidth: 1,
                            titleColor: "#ffffff",
                            bodyColor: "#a1b3c0",
                            padding: 10,

                            callbacks: {
                                label: context => {
                                    return `${context.label}: ${context.raw}%`;
                                }
                            }
                        }
                    }

                }

            });

        }

    }

    const statCards =
        document.querySelectorAll(".mv-stat-card");

    statCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            if (typeof gsap !== "undefined") {

                gsap.to(card, {
                    y: -3,
                    duration: 0.25,
                    ease: "power2.out"
                });

            }

        });

        card.addEventListener("mouseleave", () => {

            if (typeof gsap !== "undefined") {

                gsap.to(card, {
                    y: 0,
                    duration: 0.25,
                    ease: "power2.out"
                });

            }

        });

    });

    if (typeof gsap !== "undefined") {

        gsap.from(".mv-welcome-section", {
            opacity: 0,
            y: 24,
            duration: 0.8,
            ease: "power3.out"
        });

        gsap.from(".mv-dashboard-label", {
            opacity: 0,
            y: 12,
            duration: 0.6,
            delay: 0.15,
            ease: "power3.out"
        });

        gsap.from(".mv-welcome-copy h1", {
            opacity: 0,
            y: 22,
            duration: 0.75,
            delay: 0.2,
            ease: "power3.out"
        });

        gsap.from(".mv-welcome-copy p", {
            opacity: 0,
            y: 18,
            duration: 0.7,
            delay: 0.3,
            ease: "power3.out"
        });

        gsap.from(".mv-welcome-actions a", {
            opacity: 0,
            y: 16,
            duration: 0.65,
            delay: 0.4,
            stagger: 0.1,
            ease: "power3.out"
        });

        gsap.from(".mv-stat-card", {
            opacity: 0,
            y: 25,
            duration: 0.65,
            delay: 0.45,
            stagger: 0.09,
            ease: "power3.out"
        });

        gsap.from(".mv-panel", {
            opacity: 0,
            y: 22,
            duration: 0.7,
            delay: 0.55,
            stagger: 0.08,
            ease: "power3.out"
        });

        gsap.from(".mv-insight-panel", {
            opacity: 0,
            y: 18,
            duration: 0.7,
            delay: 0.75,
            ease: "power3.out"
        });

        gsap.to(".mv-scan-line", {
            left: "92%",
            duration: 2.6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(".mv-camera-center", {
            boxShadow:
                "0 0 0 18px rgba(42, 213, 238, 0.025), 0 0 50px rgba(42, 213, 238, 0.20)",
            duration: 1.6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(".object-one", {
            scale: 1.06,
            opacity: 0.7,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(".object-two", {
            scale: 1.04,
            opacity: 0.75,
            duration: 1.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 0.2
        });

        gsap.to(".object-three", {
            scale: 1.06,
            opacity: 0.72,
            duration: 1.3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 0.35
        });

    }

});