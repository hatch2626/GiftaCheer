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
function navigateTo(page) {
    window.location.href = page;
}

async function fetchOKRs() {
    const response = await fetch('http://localhost:3000/api/okrs');
    const okrs = await response.json();

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
        tdEndDate.textContent = new Date(okr.endDate).toLocaleDateString();
        tr.appendChild(tdEndDate);

        const tdProgress = document.createElement('td');
        tdProgress.textContent = `${okr.progress}% `;
        const emoji = document.createElement('span');
        emoji.className = 'emoji';
        if (okr.progress == 0) {
            emoji.textContent = '🙌'; // Not Yet Started
        } else if (okr.progress <= 25) {
            emoji.textContent = '🚶'; // On the Way
        } else if (okr.progress <= 50) {
            emoji.textContent = '🏃'; // Getting There
        } else if (okr.progress <= 75) {
            emoji.textContent = '🏃‍♂️'; // Reaching Soon
        } else {
            emoji.textContent = '🚀'; // Completed
        }
        tdProgress.appendChild(emoji);
        tr.appendChild(tdProgress);

        const tdCheerUp = document.createElement('td');
        tdCheerUp.className = 'cheerup-column';
        for (let i = 0; i < 5; i++) {
            const thumbsUp = document.createElement('span');
            thumbsUp.className = 'thumbs-up';
            thumbsUp.textContent = '👍';
            tdCheerUp.appendChild(thumbsUp);
        }
        const select = document.createElement('select');
        ['Great job!', 'Keep it up!', 'You can do it!', 'Almost there!', 'Fantastic effort!'].forEach(text => {
            const option = document.createElement('option');
            option.value = text;
            option.textContent = text;
            select.appendChild(option);
        });
        tdCheerUp.appendChild(select);
        tr.appendChild(tdCheerUp);

        tbody.appendChild(tr);
    });
}

// Call fetchOKRs when the page loads
window.onload = fetchOKRs;


function navigateTo(page) {
    window.location.href = page;
}

function fetchMockOKRs() {
    // Sample data array representing OKRs
    const mockData = [
        {
            objective: "Increase Customer Satisfaction",
            keyResults: ["Improve response time", "Launch new support portal"],
            owner: "Alice",
            endDate: "2024-12-31",
            progress: 20
        },
        {
            objective: "Boost Website Traffic",
            keyResults: ["Optimize SEO", "Launch social media campaign"],
            owner: "Bob",
            endDate: "2024-10-15",
            progress: 50
        },
        {
            objective: "Expand Product Line",
            keyResults: ["Conduct market research", "Develop prototypes", "Launch new products"],
            owner: "Carol",
            endDate: "2024-08-01",
            progress: 80
        }
    ];

    const tbody = document.querySelector('#okrTable tbody');
    tbody.innerHTML = '';

    mockData.forEach(okr => {
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
        tdEndDate.textContent = new Date(okr.endDate).toLocaleDateString();
        tr.appendChild(tdEndDate);

        const tdProgress = document.createElement('td');
        tdProgress.textContent = `${okr.progress}% `;
        const emoji = document.createElement('span');
        emoji.className = 'emoji';
        if (okr.progress == 0) {
            emoji.textContent = '🙌'; // Not Yet Started
        } else if (okr.progress <= 25) {
            emoji.textContent = '🚶'; // On the Way
        } else if (okr.progress <= 50) {
            emoji.textContent = '🏃'; // Getting There
        } else if (okr.progress <= 75) {
            emoji.textContent = '🏃‍♂️'; // Reaching Soon
        } else {
            emoji.textContent = '🚀'; // Completed
        }
        tdProgress.appendChild(emoji);
        tr.appendChild(tdProgress);

        const tdCheerUp = document.createElement('td');
        tdCheerUp.className = 'cheerup-column';
        for (let i = 0; i < 5; i++) {
            const thumbsUp = document.createElement('span');
            thumbsUp.className = 'thumbs-up';
            thumbsUp.textContent = '👍';
            tdCheerUp.appendChild(thumbsUp);
        }
        const select = document.createElement('select');
        ['Great job!', 'Keep it up!', 'You can do it!', 'Almost there!', 'Fantastic effort!'].forEach(text => {
            const option = document.createElement('option');
            option.value = text;
            option.textContent = text;
            select.appendChild(option);
        });
        tdCheerUp.appendChild(select);
        tr.appendChild(tdCheerUp);

        tbody.appendChild(tr);
    });
}

// Call fetchMockOKRs when the page loads
window.onload = fetchMockOKRs;
