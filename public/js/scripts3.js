let keyResultCount = 1; // Initialize the key result count

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
        for (let i = 0; i < 5; i++) {
            const thumbsUp = document.createElement('span');
            thumbsUp.className = 'thumbs-up';
            thumbsUp.textContent = '👍';
            thumbsUp.onclick = function() {
                toggleThumbs(thumbsUp);
            };
            thumbsUp.style.cursor = 'pointer'; // Ensure the cursor changes to pointer on hover
            tdCheerUp.appendChild(thumbsUp);
        }

        const textarea = document.createElement('textarea');
        textarea.className = 'cheer-input';
        textarea.placeholder = 'I want to say (max 250 characters)';
        tdCheerUp.appendChild(textarea);
        tr.appendChild(tdCheerUp);

        tbody.appendChild(tr);
    });
}

//Thumbs color
function toggleThumbs(selectedThumb) {
    const thumbs = selectedThumb.parentElement.querySelectorAll('.thumbs-up');
    let clicked = false; // Flag to indicate if the selected thumb has been clicked

    thumbs.forEach((thumb, index) => {
        if (thumb === selectedThumb) {
            clicked = true;
        }

        // Check if the current thumb is clicked or before the clicked thumb
        if (clicked || thumb === selectedThumb) {
            thumb.style.color = 'yellow'; // Color the clicked thumb or thumbs before it
        } else {
            thumb.style.color = ''; // Reset color for thumbs after the clicked thumb
        }
    });
}




// Call fetchOKRs when the page loads
window.onload = fetchOKRs;

function navigateTo(page) {
    if (page === 'home') {
        window.location.href = '/'; // Navigate to the home page explicitly
    } else {
        window.location.href = `/${page}`;
    }
}