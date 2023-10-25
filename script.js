document.addEventListener('DOMContentLoaded', function () {
    const contentElement = document.querySelector('.content');

    const colors = ['#FF5733', '#07AE98', '#3D85C6', '#08844C', '#F333FF'];
    
    function changeBackgroundColor() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        contentElement.style.backgroundColor = randomColor;
    }

    // Change the background color every 5 seconds (5000 milliseconds)
    setInterval(changeBackgroundColor, 5000);
});
