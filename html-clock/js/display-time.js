(function() {
    "use strict";

    const currentTime = document.getElementById("current-time");

    const formatHour = (hour) => {
        const formattedHour = hour % 12;

        return formattedHour === 0 ? 12 : String(formattedHour);
    }

    const getTimePeriod = (hour) => {
        return (hour < 12) ? "AM" : "PM";
    }

    const padZero = (number) => {
        if (number < 10) {
            return `0${String(number)}`;
        }

        return String(number);
    }

    const displayTime = () => {
        let now = new Date();
        let hour = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        const timeString = `${formatHour(String(hour))}:${padZero(String(minutes))}:${padZero(String(seconds))}`;
        
        currentTime.innerHTML = `${timeString} ${getTimePeriod(hour)}`;
    };

    setInterval(displayTime, 1000);
    displayTime();
}());