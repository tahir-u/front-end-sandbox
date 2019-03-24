(function () {
  'use strict';

  const circle = document.querySelector('circle');
  const radius = parseInt(circle.r.baseVal.value, 10);
  const circumference = radius * 2 * Math.PI;
  const input = document.querySelector('#progress');

  const setProgress = (percent) => {
    console.log(`percent: ${percent}`);
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
  }

  const setCircleStyles = () => {
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
  }

  setCircleStyles();
  setProgress(parseInt(input.value, 10));
  console.log(circle.style);

  input.addEventListener('change', (e) => {
    const value = parseInt(input.value, 10);
    setProgress(value);
  });
}());