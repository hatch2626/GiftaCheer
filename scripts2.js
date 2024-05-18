function navigateTo(page) {
    console.log(`Navigating to ${page}`); // Log to check if function is called
    window.location.href = page;
}

function addKeyResult() {
    if (keyResultCount >= 5) {
        alert('You can add a maximum of 5 Key Results.');
        return;
    }
    
    keyResultCount++;
    const container = document.getElementById('keyResultsContainer');
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'keyResult';
    input.className = 'keyResult';
    input.required = true;
    container.appendChild(input);
}

function updateProgressDial(value) {
    const label = document.getElementById('progressLabel');
    let text;
    let color;

    if (value < 25) {
        text = "Not Yet Started";
        color = "red";
    } else if (value < 50) {
        text = "On the Way";
        color = "red";
    } else if (value < 75) {
        text = "Getting There";
        color = "orange";
    } else if (value < 100) {
        text = "Reaching Soon";
        color = "orange";
    } else {
        text = "Completed";
        color = "green";
    }

    label.textContent = text;
    label.style.color = color;
}