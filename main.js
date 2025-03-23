import { wiley_journals } from './publishers_open_access_journals.js';
import { sage_journals } from './publishers_open_access_journals.js';
import { taylor_francis_journals } from './publishers_open_access_journals.js';
import { springer_journals } from './publishers_open_access_journals.js';

const journalPublishers = [
  { name: "Wiley Journals", journals: wiley_journals },
  { name: "Sage Journals", journals: sage_journals },
  { name: "Taylor Francis Journals", journals: taylor_francis_journals },
  { name: "Springer Journals", journals: springer_journals },
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

  let publisherResultsFound = false; // Flag to track if any publisher had results

  journalPublishers.forEach((publisher, index) => {
    const filteredJournals = publisher.journals.filter(journal =>
      journal.toLowerCase().includes(searchTerm)
    );

    if (filteredJournals.length > 0) {
      publisherResultsFound = true; // Set flag to true
     
      // Add publisher title
      const publisherTitle = document.createElement('li');
      publisherTitle.textContent = publisher.name;
      publisherTitle.style.fontWeight = 'bold';
      resultsList.appendChild(publisherTitle);

      // Add line break between the title and results
      const lineBreak = document.createElement('div');
      lineBreak.style.marginTop = '5px';
      resultsList.appendChild(lineBreak);

      filteredJournals.forEach(journal => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href='https://www.wiley.com/en-us/network/publishing/research-publishing/open-access' target='_blank'>${journal}</a>`;
        resultsList.appendChild(listItem);
      });

      // Add three line breaks between publishers (except after the last one)
      if (index < journalPublishers.length - 1) { // Check if it's not the last publisher
        for (let i = 0; i < 3; i++) {
          const publisherLineBreak = document.createElement('div');
          publisherLineBreak.style.marginTop = '50px';
          resultsList.appendChild(publisherLineBreak);
        }
      }
    }
  });

  // Display "No results" if nothing was found
  if (!publisherResultsFound) {
    const noResults = document.createElement('li');
    noResults.textContent = 'No matching journals found.';
    resultsList.appendChild(noResults);
  }
});
