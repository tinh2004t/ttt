document.addEventListener("DOMContentLoaded", () => {
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    let currentDate = today.getDate();
    let selectDays = [];
    let selectedMonth = null;

    function generateCalendar(month, year) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;

        let calendarHtml = `
        <div class="calendar" style="    width: 100%; margin:0 12px;">
            <h3 class="title-Community16">${getMonthName(month)} ${year}</h3>
            <div class="days">
            <div class="day-header">T2</div>
            <div class="day-header">T3</div>
            <div class="day-header">T4</div>
            <div class="day-header">T5</div>
            <div class="day-header">T6</div>
            <div class="day-header" style="color:#ff3366;">T7</div>
            <div class="day-header" style="color:#ff3366;">CN</div>
    `;

        for (let i = 0; i < firstDay; i++) {
            calendarHtml += `<div class="day empty"></div>`;
        }

        for (let day = 1; day <= daysInMonth; day++) {
            let textColor;
            let cursor = "pointer";

            if (year < currentYear || (year === currentYear && month < currentMonth) ||
                (year === currentYear && month === currentMonth && day < currentDate)) {
                textColor = "#999999";
                cursor = "not-allowed";
            } else if (year === currentYear && month === currentMonth && day === currentDate) {
                textColor = "#ff3366";
                cursor;
            }

            calendarHtml += `<div class="day-number flex-center" 
        data-day="${day}" data-month="${month}" data-year="${year}" 
        style="cursor: ${cursor}; font-weight: 600; color: ${textColor};">
        ${day}
        </div>`;


        }

        calendarHtml += `</div></div>`;
        return calendarHtml;
    }
    function selectDay(element, day, month, year) {
        if (element.style.cursor === "not-allowed") return;

        if (selectDays.length === 2) {
            document.querySelectorAll(".day-number").forEach(el => {
                el.style.background = "none";
                el.style.borderRadius = "0";
            });
            selectDays = [];
        };


        selectDays.push({ element, day, month, year });



        if (selectDays.length === 1) {
            element.style.background = "rgba(255,51,102,.1)";
            element.style.borderRadius = "40px 0 0 40px";
        } else if (selectDays.length === 2) {
            let [firstDayObj, secondDayObj] = selectDays.sort((a, b) => {
                if (a.year !== b.year) return a.year - b.year;
                if (a.month !== b.month) return a.month - b.month;
                return a.day - b.day;
            });
            let firstDateObj = new Date(firstDayObj.year, firstDayObj.month, firstDayObj.day);
            let secondDateObj = new Date(secondDayObj.year, secondDayObj.month, secondDayObj.day);

            document.querySelectorAll(".day-number").forEach(d => {
                d.classList.remove("selected-date");
            });

            document.querySelectorAll(".day-number").forEach(d => {
                let dDay = parseInt(d.getAttribute("data-day"));
                let dMonth = parseInt(d.getAttribute("data-month"));
                let dYear = parseInt(d.getAttribute("data-year"));

                let dDate = new Date(dYear, dMonth, dDay);


                if (dDate >= firstDateObj && dDate <= secondDateObj) {
                    d.style.background = "rgba(255,51,102,.1)";
                    d.style.borderRadius = "0";
                    d.classList.add("selected-date");
                    d.style.fontWeight = "bold";
                }
            });

            firstDayObj.element.style.borderRadius = "40px 0 0 40px";
            secondDayObj.element.style.borderRadius = " 0 40px 40px 0";

            let thuTrongTuan = ["Chủ nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
            let firstDayOfWeek = thuTrongTuan[firstDateObj.getDay()];
            let secondDayOfWeek = thuTrongTuan[secondDateObj.getDay()];

            const goDateTour = document.querySelector(".date-go .title-content");
            const backDateTour = document.querySelector(".date-backHome .title-content");

            goDateTour.innerText = `${firstDayOfWeek}, ${firstDayObj.day}/${firstDayObj.month + 1}`;
            backDateTour.innerText = `${secondDayOfWeek}, ${secondDayObj.day}/${secondDayObj.month + 1}`;

            goDateTour.classList.add("title-content");
            backDateTour.classList.add("title-content");

            let timeDiff = Math.abs(secondDateObj - firstDateObj);
            let diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

            const daysCountElement = document.querySelector(".icon-date-nav.flex-align");
            daysCountElement.innerHTML = `
                  ${diffDays}
            <svg width="10" height="9" fill="none" style="margin-left: 2px;">
                <path d="M4.982.504h.173A3.319 3.319 0 008.66 6.01 3.982 3.982 0 114.982.5v.004z" stroke="#718096" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            `
            localStorage.setItem("selectedDates", JSON.stringify(selectDays));


        }
    }






    function updateCalendar() {
        document.getElementById("calendarContainer").innerHTML =
            generateCalendar(currentMonth, currentYear) +
            generateCalendar(currentMonth + 1, currentYear);

        document.getElementById("prevBtn").disabled = (currentMonth === today.getMonth() && currentYear === today.getFullYear());
    }



    function nextMonth() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar();
    }

    function prevMonth() {
        if (currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
            return;
        }

        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar();
    }

    function getMonthName(month) {
        const months = [
            "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
            "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
        ];
        return months[month];
    }


    updateCalendar();

    function attachEventListeners() {
        document.querySelectorAll(".day-number").forEach(element => {
            element.addEventListener("click", function () {
                const day = parseInt(this.getAttribute("data-day"));
                const month = parseInt(this.getAttribute("data-month"));
                const year = parseInt(this.getAttribute("data-year"));

                selectDay(this, day, month, year);
            });
        });
    }
    function updateCalendar() {

        let calendarContainer = document.getElementById("calendarContainer");

        if (!calendarContainer) {
            return;
        }
        calendarContainer.innerHTML =
            generateCalendar(currentMonth, currentYear) +
            generateCalendar(currentMonth + 1, currentYear);

        attachEventListeners();

        document.getElementById("prevBtn").disabled =
            (currentMonth === today.getMonth() && currentYear === today.getFullYear());
    }

    document.addEventListener("calendarReady", () => {
        updateCalendar();
    })


})