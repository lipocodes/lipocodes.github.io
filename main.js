// main.js
import { wiley_journals } from './wiley_journals.js'; // Adjust the path if needed

const journalList = wiley_journals;

document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const resultsList = document.getElementById('searchResults');
    resultsList.innerHTML = '';

    if (searchTerm.trim() === '') {
        return;
    }

    const filteredJournals = journalList.filter(journal =>
        journal.toLowerCase().includes(searchTerm)
    );

    const wileyElement = document.createElement('wiley');
wileyElement.textContent = "This is the text content.";

// Append the element to the document (e.g., to the body)
document.body.appendChild(wileyElement);
    
    if (filteredJournals.length === 0) {
        const noResults = document.createElement('li');
        noResults.textContent = 'No matching journals found.';
        resultsList.appendChild(noResults);
    } else {
        filteredJournals.forEach(journal => {
            const listItem = document.createElement('li');
            listItem.textContent = journal;
            resultsList.appendChild(listItem);
        });
    }
});
