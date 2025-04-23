document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');

    // Function to show the loading screen
    function showLoading(callback) {
        loadingScreen.style.display = 'flex'; // Show the loading screen
        const percent = document.querySelector('.percent');
        const progress = document.querySelector('.progress');
        const text = document.querySelector('.text');
        let count = 0;

        const loading = setInterval(() => {
            if (count >= 100) {
                percent.classList.add("text-blink");
                text.style.display = "block";
                clearInterval(loading);
                setTimeout(callback, 500); // Redirect after 500ms
            } else {
                count += 1; // Increment count
                progress.style.width = count + '%'; // Update progress width
                percent.textContent = count + '%'; // Update percent text
            }
        }, 20); // Adjust speed here
    }

    // Function to handle button clicks
    function handleButtonClick(url) {
        showLoading(() => {
            window.location.href = url; // Redirect to the target URL after loading
        });
    }

    // Event listener for Invaders button
    document.getElementById('invaders').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        handleButtonClick('file:///C:/Users/dinoz/OneDrive/Desktop/MyPortfolio/DineshvanPuttenPortfolio/ArcadeLobby/SpaceInvasion/invaders/spaceinvasion.html');
    });

    // Other game buttons can be added similarly
});
