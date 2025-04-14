var btnHistory = document.getElementById("btn__history");

btnHistory.addEventListener('click', () => {
    window.location.replace("history.html");
})

var btnDarkMode = document.getElementById("btn__darkmode__toggle");

btnDarkMode.addEventListener('click', () => {
    document.documentElement.classList.toggle("dark__mode");
})