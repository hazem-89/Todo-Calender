window.addEventListener('load', main);

const date = new Date();
console.log(date);

// const year = date.getFullYear();
// console.log(year);

// const month = date.getMonth() + 1;
// console.log(month);

// const day = date.getDate();
// console.log(day);

function main() {
    renderCalenders()
    addEventsListeners()
}

const renderCalenders = () => {
    date.setDate(1)
    const monthDays = document.querySelector('.days');

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
        ).getDate();
        console.log('last', lastDay);

    const prevLastDay = new Date(
            date.getFullYear(),
            date.getMonth(),
            0
        ).getDate();
        console.log(prevLastDay);

    const firstDayIndex = date.getDay();
        console.log(firstDayIndex);


    const lastDayIndex = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDay();
        console.log(lastDayIndex, 'lastDayIndex');

    const nextDays = 7 - lastDayIndex - 1;
        console.log(nextDays);

    const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
    let todayDate = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
    document.querySelector('.displayDate').innerHTML = `${todayDate}`;
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.querySelector('.displayTime').innerHTML = `${time}`;

    document.querySelector('.date h2').innerHTML = months[date.getMonth()];
    document.querySelector('.date p').innerHTML =  todayDate;

   
        
    let days = '';
    
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class = 'prev-date day'>${prevLastDay - x + 1}</div>`;
        
    }
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="today day">${i}</div>`;
        } else {
        days += `<div class="day">${i}</div>`;
    }
    }
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date day">${j}</div>`;
        monthDays.innerHTML = days;

        
    }



    

}

function addEventsListeners() {
    document.querySelector('.prev').addEventListener('click', () => {
        date.setMonth(date.getMonth() - 1);
        renderCalenders();
    });
    document.querySelector('.next').addEventListener('click', () => {
        date.setMonth(date.getMonth() + 1);
        renderCalenders();
    });


    const dayBoxes = document.querySelectorAll('.day');
    for (const dayBox of dayBoxes) {
        dayBox.addEventListener('click', () => {
            console.log("yes");
            const todoList = document.querySelector('.todo');
            todoList.classList.toggle('active');
        })
        
    }
}





// todo



let today = new Date();
