document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');

    // Loading animation function
    function showLoading(callback) {
        loadingScreen.style.display = 'block';
        var percent = document.querySelector('.percent');
        var progress = document.querySelector('.progress');
        var text = document.querySelector('.text');
        var count = 0;
        var per = 10;
        var loading = setInterval(animate, 1);

        function animate() {
            if (count >= 100 && per >= 400) {
                percent.classList.add("text-blink");
                text.style.display = "block";
                clearInterval(loading);
                setTimeout(callback, 500); // Move to next page after loading completes
            } else {
                per += 4;
                count += 1;
                progress.style.width = per + 'px';
                percent.textContent = count + '%';
            }
        }
    }

    // Function to handle button clicks and show loading screen before redirect
    function handleButtonClick(url) {
        showLoading(() => {
            window.location.href = url; // Redirect to the target URL after loading
        });
    }

    // Event listener for Enter Lobby button
    document.getElementById('enter-lobby').addEventListener('click', function() {
        handleButtonClick('file:///C:/Users/dinoz/OneDrive/Desktop/MyPortfolio/DineshvanPuttenPortfolio/ArcadeLobby/Arcade/arcade.html');
    });

    // // Event listener for Login button
    // document.getElementById('login').addEventListener('click', function() {
    //     handleButtonClick('file:///C:/Users/dinoz/OneDrive/Desktop/Code%20Database/Alfa-College/Code%20Database/Games/Arcade%20Lobby/Login%20Form/index.html');
    // });

    // // Event listener for Signup button
    // document.getElementById('signup').addEventListener('click', function() {
    //     handleButtonClick('file:///C:/Users/dinoz/OneDrive/Desktop/Code%20Database/Alfa-College/Code%20Database/Games/Arcade%20Lobby/Signup%20Form/index.html');
    // });
});
