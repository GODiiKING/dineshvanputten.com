document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const enterLobbyButton = document.getElementById('enter-lobby');

    // Show loading screen with animation
    function showLoading(callback) {
        loadingScreen.style.display = 'block';
        const percent = document.querySelector('.percent');
        const progress = document.querySelector('.progress');
        const text = document.querySelector('.text');
        let count = 0;
        let progressWidth = 0;

        const loadingInterval = setInterval(() => {
            if (count >= 100) {
                clearInterval(loadingInterval);
                percent.classList.add("text-blink");
                text.style.display = "block";

                setTimeout(callback, 500); // Call the callback after loading completes
            } else {
                count++;
                progressWidth += 4; // Adjust this value for progress speed
                percent.textContent = count + '%';
                progress.style.width = progressWidth + 'px';
            }
        }, 30);
    }

    // Handle button click and redirect
    function handleButtonClick(url) {
        console.log("file:///C:/Users/dinoz/OneDrive/Desktop/MyPortfolio/DineshvanPuttenPortfolio/ArcadeLobby/Arcade/arcade.html", url); // Debug log
        showLoading(() => {
            window.location.href = url;
        });
    }

    // Add click event listener to Enter Lobby button
    enterLobbyButton.addEventListener('click', function () {
        handleButtonClick('/ArcadeLobby/Arcade/arcade.html'); // Adjust based on your hosted structure
 // Adjust path for your domain
    });
});
