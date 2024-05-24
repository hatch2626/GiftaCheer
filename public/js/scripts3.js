let keyResultCount = 1; // Initialize the key result count

async function fetchOKRs() {
    // Simulating fetching data from a database
    const okrs = [
        {
            objective: "Complete Project Alpha",
            keyResults: ["Finish coding tasks"],
            owner: "John Doe",
            endDate: "2024-06-30",
            progress: "🚶"
        },
        {
            objective: "Complete Project Alpha",
            keyResults: ["Prepare documentation"],
            owner: "Jane Smith",
            endDate: "2024-07-15",
            progress: "🏃"
        },
        {
            objective: "Launch Marketing Campaign",
            keyResults: ["Design marketing materials", "Implement social media strategy"],
            owner: "Michael Brown",
            endDate: "2024-08-01",
            progress: "🚀"
        },
        {
            objective: "Launch Marketing Campaign",
            keyResults: ["Design marketing materials", "Implement social media strategy"],
            owner: "Emily Davis",
            endDate: "2024-08-15",
            progress: "🙌"
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

function toggleThumbs(selectedThumb) {
    const thumbs = selectedThumb.parentElement.querySelectorAll('.thumbs-up');
    let clicked = false; // Flag to indicate if the selected thumb has been clicked
    thumbs.forEach(thumb => {
        if (thumb === selectedThumb) {
            clicked = true;
            thumb.style.color = 'green'; // Color the clicked thumb
        } else {
            if (clicked) {
                thumb.style.color = 'lightgreen'; // Color thumbs after the clicked thumb
            } else {
                thumb.style.color = ''; // Reset color for thumbs before the clicked thumb
            }
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