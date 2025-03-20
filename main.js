// main.js
import { wiley_journals } from './wiley_journals.js';
import { sage_journals } from './sage_journals.js';

const journalPublishers = [
  { name: "Wiley Journals", journals: wiley_journals },
  { name: "Sage Journals", journals: sage_journals },
];

document.getElementById('searchInput').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const resultsList = document.getElementById('searchResults');
  const publisherName = document.getElementById('publisherName');
  publisherName.innerHTML = '';
  resultsList.innerHTML = '';

  if (searchTerm.trim() === '') {
    return;
  }

  journalPublishers.forEach(publisher => {
    const filteredJournals = publisher.journals.filter(journal =>
      journal.toLowerCase().includes(searchTerm)
    );

    if (filteredJournals.length > 0) {
      publisherName.innerHTML += `<h3>${publisher.name}</h3>`; // Add publisher name as a heading
      filteredJournals.forEach(journal => {
        const listItem = document.createElement('li');
        listItem.textContent = journal;
        resultsList.appendChild(listItem);
      });
    }
  });

  // Display "No results" if nothing was found
  if (resultsList.children.length === 0) {
    const noResults = document.createElement('li');
    noResults.textContent = 'No matching journals found.';
    resultsList.appendChild(noResults);
  }
});
