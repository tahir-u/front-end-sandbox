(function() {
    "use strict";

    Math.TAU = 2 * Math.PI;

    let generateCurrentTime = () => {
        const now = new Date();

        return {
            now: now,
            hour: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds()
        };
    };

    let generateClockCanvas = (elementId) => {
        const canvas = document.querySelector(elementId);

        return {
            canvas: canvas,
            context: canvas.getContext("2d"),
            clockRadius: 100,
            clockX: canvas.width / 2,
            clockY: canvas.height / 2
        };
    }

    let drawArm = (progress, clockCanvas, armSettings) => {
        let armRadians = (Math.TAU * progress) - (Math.TAU / 4);
        let armLength = clockCanvas.clockRadius * armSettings.armLength;

        let targetX = clockCanvas.clockX + Math.cos(armRadians) * armLength;
        let targetY = clockCanvas.clockY + Math.sin(armRadians) * armLength;

        clockCanvas.context.lineWidth = armSettings.armThickness;
        clockCanvas.context.strokeStyle = armSettings.armColor;

        clockCanvas.context.beginPath();
        clockCanvas.context.moveTo(clockCanvas.clockX, clockCanvas.clockY);
        clockCanvas.context.lineTo(targetX, targetY);
        clockCanvas.context.stroke();
    }

    let renderClock = () => {
        const currentTime = generateCurrentTime();
        const clockCanvas = generateClockCanvas("#clock");
        const armSettings = {
            hour: {
                armThickness: 10,
                armLength: 0.50,
                armColor: "#000000"
            },
            minutes: {
                armThickness: 4,
                armLength: 0.75,
                armColor: "#000000"
            },
            seconds: {
                armThickness: 2,
                armLength: 1.00,
                armColor: "#ff0000"
            }
        };

        clockCanvas.context.clearRect(0, 0, clockCanvas.canvas.width, clockCanvas.canvas.height);
        drawArm(currentTime.hour / 12, clockCanvas, armSettings.hour);
        drawArm(currentTime.minutes / 60, clockCanvas, armSettings.minutes);
        drawArm(currentTime.seconds / 60, clockCanvas, armSettings.seconds);
    }

    setInterval(renderClock, 1000);
    renderClock();
}());