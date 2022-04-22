(() => {
    
const cDate = new Date();
const cDay = cDate.getDate();
const cMonth = cDate.getMonth() + 1;
const cYear = cDate.getFullYear();

const shamsiDate = miladiBeShmasi(cYear, cMonth, cDay);
const sDay = shamsiDate[2];
const sMonth = shamsiDate[1];
const sYear = shamsiDate[0];


const calendar = document.getElementById("calendar");
const monthContainers = document.getElementsByClassName("month");

const dayNames = {
    0: "شنبه",
    1: "یکشنبه",
    2: "دوشنبه",
    3: "سه شنبه",
    4: "چهارشنبه",
    5: "پنجشنبه",
    6: "جمعه"
};

let dayCounter = 2;

function resetDayCounter() {
    if (dayCounter >= 7) {
        dayCounter = 0;
    }
}

function generateDays(from, to, containerIndex) {
    for (let j = from; j < to; j++) {
        const day = document.createElement("div");
        day.classList.add("day");
        day.innerHTML = `<p>${j + 1}</p> <p>${dayNames[dayCounter]}</p>`;

        if (containerIndex + 1 === sMonth && j + 1 === sDay) {
            day.classList.add("active");
        }
        if (containerIndex + 1 === sMonth) {
            monthContainers[containerIndex].classList.add("active");
        }

        monthContainers[containerIndex].appendChild(day);
        dayCounter++;
        resetDayCounter();
    }
}

for (let i = 0; i < 12; i++) {

    if (i < 6) {
        generateDays(0, 31, i);
    }

    if (i >= 6 && i !== 11) {
        generateDays(0, 30, i);
    }

    if (i === 11) {
        generateDays(0, 29, i);
    }

}

})();