let keyResultCount = 1; // Initialize the key result count

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

function toggleThumbs(selectedThumb) {
    const thumbs = selectedThumb.parentElement.querySelectorAll('.thumbs-up');
    thumbs.forEach(thumb => {
        if (thumb === selectedThumb) {
            thumb.style.color = 'green';
        } else {
            thumb.style.color = '';
        }
    });
}

// Call fetchOKRs when the page loads
window.onload = fetchOKRs;

function navigateTo(page) {
    console.log(`Navigating to ${page}`); // Log to check if function is called
    window.location.href = page;
}
