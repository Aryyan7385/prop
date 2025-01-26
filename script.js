// Function to display the message after clicking the button
function showMessage() {
    document.getElementById("message").classList.remove("hidden");
}

// Create falling flowers
function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerText = "🌸";
    flower.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    flower.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random falling speed
    document.body.appendChild(flower);

    // Remove flower after it falls
    setTimeout(() => {
        flower.remove();
    }, 5000);
}

// Generate flowers continuously
setInterval(createFlower, 300);