function setSpeed(speedInSeconds) {
    const logoContainer = document.getElementById('logo-container');
    logoContainer.style.animationDuration = speedInSeconds + 's';
}

// Example: Set speed to 5 seconds
setSpeed(5);
