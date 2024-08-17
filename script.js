// script.js
document.addEventListener('DOMContentLoaded', function() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const celebrateBtn = document.getElementById('celebrate-btn');
    const celebrationMessage = document.getElementById('celebration-message');

    function updateCountdown() {
        const currentYear = new Date().getFullYear();
        const newYearTime = new Date(`January 1, ${currentYear + 1} 00:00:00`);
        const currentTime = new Date();
        const diff = newYearTime - currentTime;

        const days = Math.floor(diff / 1000 / 60 / 60 / 24);
        const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        daysEl.textContent = days < 10 ? '0' + days : days;
        hoursEl.textContent = hours < 10 ? '0' + hours : hours;
        minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    function showCelebration() {
        celebrationMessage.textContent = "🎉Happy New Year! 🎉";
        celebrationMessage.style.display = 'block';
    }

 
    updateCountdown();

    setInterval(updateCountdown, 1000);
    celebrateBtn.addEventListener('click', showCelebration);
});
