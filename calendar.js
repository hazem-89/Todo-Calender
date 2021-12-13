window.addEventListener('load', main);


function main() {
    generateCalendar()
    addEventlistners()
    AllDaysOfTheWeek()
    changeMonth()
}
let calendar = document.querySelector('.calendar')

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

    let calendarDays = document.querySelector('.calendar-days')
    let calendarHeaderYear = document.querySelector('#year')

    let daysOfMonth = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendarDays.innerHTML = ''

    let currDate = new Date()
    if (!month) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()


    let monthPicker = document.getElementById('month-picker');
    let currMonth = `${months[month]}`
    monthPicker.innerHTML = currMonth
    calendarHeaderYear.innerHTML = year

    // get first day of month
    
    let firstDay = new Date(year, month, 1)
    console.log(firstDay.getDay());
    for (let i = 0; i <= daysOfMonth[month] + firstDay.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= firstDay.getDay()) {
            day.classList.add('calendar-day')
            day.innerHTML = i - firstDay.getDay() + 1
            day.innerHTML += `<span class = "todo-sum":></span>
                            <span  class = "todo-spacial" ></span>`
            if (i - firstDay.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
        }
        calendarDays.appendChild(day)
    }
    const dayBoxes = document.querySelectorAll('.calendar-day');
       for (const dayBox of dayBoxes) {
       dayBox.addEventListener('click', () => {
         let todoList = document.querySelector('.todo-list');
       todoList.classList.toggle('active');
     })
        
 }
 
}


function changeMonth() {
    
    let monthList = document.querySelector('.month-list');
    months.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        monthList.classList.remove('show')
        curr_month.value = index
        generateCalendar(index, curr_year.value)
    }
    monthList.appendChild(month)
})
}




let currDate = new Date()
let curr_month = {value: currDate.getMonth()};
let curr_year = {value: currDate.getFullYear()};

function addEventlistners() {

    document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

let monthList = document.querySelector('.month-list');
document.getElementById('month-picker').onclick = () => {
    monthList.classList.add('show')
};


}












function AllDaysOfTheWeek(){
let elements = document.getElementsByClassName("calendar-week-day")[0].getElementsByTagName("div")


const dayToday = new Date();
let colorDays = elements[dayToday.getDay()];



colorDays.style.color = "pink"


}

