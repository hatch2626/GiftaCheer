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

 