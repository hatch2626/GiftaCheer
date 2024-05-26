
// Navigation function
function navigateTo(page) {
    if (page === 'home') {
        window.location.href = '/'; // Navigate to the home page explicitly
    } else {
        window.location.href = `/${page}`;
    }
}
// Function to add key results (only if applicable to the current page)
if (document.body.classList.contains('page2')) {
    let keyResultCount = 1; // Initialize the key result count

function addKeyResult() {
    if (keyResultCount >= 5) {
        alert('You have reached the max of 5 KRs.');
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
// Function to fetch OKRs (only if applicable to the current page)
if (document.body.classList.contains('page3')) {
    async function fetchOKRs() {
        // Simulating fetching data from a database
        const okrs = [
            {
            objective: "Complete TechUp Web App",
            keyResults: ["Build HTML"],
            owner: "YL",
            endDate: "2024-05-15",
            progress: "🙌"
        },
        {
            objective: "Complete TechUp Web App",
            keyResults: ["Deliver CSS"],
            owner: "YL",
            endDate: "2024-05-20",
            progress: "🙌"
        },
        {
            objective: "Complete TechUp Web App",
            keyResults: ["Web site is operational"],
            owner: "YL",
            endDate: "2024-05-29",
            progress: "🏃"
        },
        {
            objective: "Gift My Team Cheers",
            keyResults: ["90% of team access the web app"],
            owner: "YL",
            endDate: "2024-08-15",
            progress: "🏃"
        }
    ];

    const tbody = document.querySelector('#okrTable tbody');
    tbody.innerHTML = '';

    okrs.forEach(okr => {
        const tr = document.createElement('tr');

        const tdObjective = document.createElement('td');
        tdObjective.textContent = okr.objective;
        tr.appendChild(tdObjective);

        const tdKeyResults = document.createElement('td');
        tdKeyResults.textContent = okr.keyResults.join(', ');
        tr.appendChild(tdKeyResults);

        const tdOwner = document.createElement('td');
        tdOwner.textContent = okr.owner;
        tr.appendChild(tdOwner);

        const tdEndDate = document.createElement('td');
        tdEndDate.textContent = okr.endDate;
        tr.appendChild(tdEndDate);

        const tdProgress = document.createElement('td');
        tdProgress.textContent = okr.progress;
        tr.appendChild(tdProgress);

        const tdCheerUp = document.createElement('td');
        tdCheerUp.className = 'cheerup-column';
        const cheerSection = document.createElement('div');
        cheerSection.className = 'cheer-section';

        const nameForm = document.createElement('form');
        nameForm.id = 'nameForm';
        nameForm.innerHTML = `<button type="submit">Submit</button>`;
        nameForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Register the input data in the backend database
            // Add your AJAX code here to submit the form data
        });

        cheerSection.appendChild(nameForm);

        const textarea = document.createElement('textarea');
        textarea.className = 'cheer-input';
        textarea.placeholder = 'I want to say (max 250 characters)';
        cheerSection.appendChild(textarea);

        tdCheerUp.appendChild(cheerSection);
        tr.appendChild(tdCheerUp);

        tbody.appendChild(tr);
    });
}

// Call fetchOKRs when the page loads
window.onload = fetchOKRs;
