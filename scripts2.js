let keyResultCount = 1; // Initialize the key result count

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
    const table = document.getElementById('keyResultsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const keyResultCell = newRow.insertCell(0);
    const ownerCell = newRow.insertCell(1);
    const endDateCell = newRow.insertCell(2);
    const progressCell = newRow.insertCell(3);

    keyResultCell.innerHTML = `<input type="text" name="keyResult" class="keyResult" required>`;
    ownerCell.innerHTML = `<input type="text" name="owner" class="owner" required>`;
    endDateCell.innerHTML = `<input type="date" name="endDate" class="endDate" required>`;
    progressCell.innerHTML = `
        <label><input type="radio" name="progress${keyResultCount}" value="Not Yet Started"> ⏳</label>
        <label><input type="radio" name="progress${keyResultCount}" value="On the Way"> 🚶</label>
        <label><input type="radio" name="progress${keyResultCount}" value="Getting There"> 🏃</label>
        <label><input type="radio" name="progress${keyResultCount}" value="Reaching Soon"> 🚀</label>
        <label><input type="radio" name="progress${keyResultCount}" value="Completed"> 🙌</label>
    `;
}
