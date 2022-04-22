(() => {
    const monthContainers = document.getElementsByClassName("month");
    const monthIndicator = document.getElementById("month-indicator");
    const prevMonth = document.getElementById("prevMonth");
    const nextMonth = document.getElementById("nextMonth");
    let activeMonth = null;

    const monthNames = {
        0: "فروردین",
        1: "اردیبهشت",
        2: "خرداد",
        3: "تیر",
        4: "مرداد",
        5: "شهریور",
        6: "مهر",
        7: "آبان",
        8: "آذر",
        9: "دی",
        10: "بهمن",
        11: "اسفند"
    };

    for (let i = 0; i < monthContainers.length; i++) {
        if (monthContainers[i].classList.contains("active")) {
            activeMonth = i;
            monthIndicator.innerHTML = `${monthNames[i]} - 1401`;
        }
    }

    function setActiveMonth() {
        for (let i = 0; i < monthContainers.length; i++) {
            if (monthContainers[i].classList.contains("active")) 
                monthContainers[i].classList.remove('active');
        }
        monthContainers[activeMonth].classList.add("active");
        monthIndicator.innerHTML = `${monthNames[activeMonth]} - 1401`;
    }
    function addToActiveMonth(num) {
        activeMonth += num;
        if (activeMonth > 11) {
            activeMonth = 0;
        }
        if (activeMonth < 0 ) {
            activeMonth = 11;
        }
    }

    prevMonth.addEventListener("click", () => {
        addToActiveMonth(-1);
        setActiveMonth();
    });
    nextMonth.addEventListener("click", () => {
        addToActiveMonth(1);
        setActiveMonth();
    });

})();