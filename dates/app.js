document.addEventListener("DOMContentLoaded", function() {
    var endDate = new Date("2024-03-01T00:00:00").getTime();

    var timerInterval = setInterval(function() {
        var now = new Date().getTime();

        var timeLeft = endDate - now;

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.querySelector('.timer__days').innerText = formatTime(days);
        document.querySelector('.timer__hours').innerText = formatTime(hours);
        document.querySelector('.timer__minutes').innerText = formatTime(minutes);
        document.querySelector('.timer__seconds').innerText = formatTime(seconds);

        if (timeLeft < 0) {
            clearInterval(timerInterval);
        }
    }, 1000);

    function formatTime(time) {
        return time < 10 ? "0" + time : time;
    }
});


















// const currentDay = new Date()


// function zeroPaste(month) {
//     return month < 10 ? '0' + month : month
// }

// const days = ['Поенедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

// function getUserTime(d) {
//     let Y = d.getFullYear()
//     let M = zeroPaste(d.getMonth() + 1)
//     let D = zeroPaste(d.getDate())
//     let N = days[d.getDay() - 1]
//     let h = d.getHours()
//     let m = d.getMinutes()
//     let s = d.getSeconds()

//     console.log(Y, M, D, N, h, m, s)
// }

// getUserTime(currentDay)





// let date = new Date('Feb 15 2024 19:00:00')

// function counts() {
//     let now = new Date()
//     let gap = date - now;
//     console.log(gap)

//     let days = Math.floor(gap / 1000 / 60 / 60 / 24)
//     let hours = Math.floor(gap / 1000 / 60 / 60) % 24
//     let minutes = Math.floor(gap / 1000 / 60) % 60
//     let seconds = Math.floor(gap / 1000) % 60


//     document.querySelector('.timer__days').innerText = days
//     document.querySelector('.timer__hours').innerText = hours
//     document.querySelector('.timer__minutes').innerText = minutes
//     document.querySelector('.timer__seconds').innerText = seconds
// }



// function checkExpiration() {
//     try {
//         if (gap <= 0) {
//             clearInterval(intervalId); // Остановка интервала, чтобы больше не обновлять таймер
//             document.querySelector('.timer').innerText = "Срок истек"; // Заменить содержимое элемента таймера на "Срок истек"
//         }
//     } catch (error) {

//     }

// }

// const intervalId = setInterval(() => {

//     counts();
//     checkExpiration();

// }, 1000);














// const animatedElement = document.getElementById('animatedElement');
// let position = 0;
// const speed = 2; // Скорость перемещения элемента

// function moveElement() {
//     position += speed;
//     animatedElement.style.left = position + 'px';

//     // Перемещаем элемент обратно в начальное положение, если он достиг правого края окна
//     if (position >= window.innerWidth) {
//         position = 0;
//     }
// }

// // Запускаем анимацию, обновляя положение элемента через определенные интервалы времени
// setInterval(moveElement, 20);

// const denNedeli = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье',]
// const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']

// const dateUser = new Date('2024-02-15 21:31:00')
// function zero(date) {
//     return date < 10 ? '0' + date : date
// }

// function counter() {
//     const currentDate = new Date()
//     const raznica = dateUser - currentDate
//     const day = Math.floor(raznica / 1000 / 60 / 60 / 24)
//     const hours = Math.floor(raznica / 1000 / 60 / 60) % 24
//     const minutes = Math.floor(raznica / 1000 / 60) % 60
//     const sec = Math.floor(raznica / 1000) % 60
//     console.log(day, hours, minutes, sec)

//     document.querySelector('.timer__days').innerText = zero(day)
//     document.querySelector('.timer__hours').innerText = zero(hours)
//     document.querySelector('.timer__minutes').innerText = zero(minutes)
//     document.querySelector('.timer__seconds').innerText = zero(sec)
// }

// let stop = setInterval(counter, 1000)

// document.querySelector('.timer').onclick = function () {
//     clearInterval(stop)
// }







// function getUserTime(dateTime) {

//     const year = dateTime.getFullYear()
//     const month = dateTime.getMonth()
//     const day = dateTime.getDate()
//     const hours = dateTime.getHours()
//     const minute = dateTime.getMinutes()
//     const seconds = dateTime.getSeconds()
//     const week = denNedeli[dateTime.getDay() - 1]

//     console.log(dateTime, year, month, day, hours, minute, seconds, week)
// }

// getUserTime(d)