const strips = [...document.querySelectorAll(".strip")];
const numberSize = 8; // Size of each number block in vmin

// Function to highlight the number in a strip
function highlight(stripIndex, digit) {
    const numberElements = strips[stripIndex].querySelectorAll('.number');
    numberElements[digit].classList.add("pop");

    // Remove the highlight after a short delay
    setTimeout(() => {
        numberElements[digit].classList.remove("pop");
    }, 950);
}

// Strip sliding animation
function stripSlider(stripIndex, number) {
    let d1 = Math.floor(number / 10); // First digit
    let d2 = number % 10; // Second digit

    // Slide the first digit strip
    strips[stripIndex].style.transform = `translateY(${d1 * -numberSize}vmin)`;
    highlight(stripIndex, d1);

    // Slide the second digit strip
    strips[stripIndex + 1].style.transform = `translateY(${d2 * -numberSize}vmin)`;
    highlight(stripIndex + 1, d2);
}

// Set up the clock to update every second
setInterval(() => {
    // Get the current time
    const time = new Date();

    // get hours, minutes, and seconds
    const hours = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();

    // Update the strips
    stripSlider(0, hours); // Update hours
    stripSlider(2, mins); // Update minutes
    stripSlider(4, secs); // Update seconds
}, 1000);
