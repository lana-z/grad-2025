import './style.css';
import Invitation from '/Seth-Graduation-Party-Invitation-no-addr.png';

document.querySelector('#app').innerHTML = `
  <div class="container">
    <img src="${Invitation}" alt="Graduation Invitation" class="invite" />

    <div class="button-container">
      <button id="rsvpButton" class="action-button">RSVP</button>
      <button id="messageBoardButton" class="action-button">Message</button>
    </div>

    <!-- RSVP Modal -->
    <div id="rsvpModal" class="modal">
      <div class="modal-content">
        <span class="close-button" data-modal-id="rsvpModal">&times;</span>
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSd3-6P9nLDT1dL5eFAEA-U2F-DJo7V1E9w78kGV3CDQaJet5w/viewform?embedded=true" 
          width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0">
          Loading RSVP form…
        </iframe>
      </div>
    </div>

    <!-- Message Board Modal -->
    <div id="messageBoardModal" class="modal">
      <div class="modal-content">
        <span class="close-button" data-modal-id="messageBoardModal">&times;</span>
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSf0nxd3r_gFIvR0SnDJGeppEXASACJck0EygInmHMWhlyisHQ/viewform?embedded=true" 
          width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0">
          Loading message board form…
        </iframe>
      </div>
    </div>
  </div>
`;

// Modal functionality
const rsvpButton = document.getElementById('rsvpButton');
const messageBoardButton = document.getElementById('messageBoardButton');
const rsvpModal = document.getElementById('rsvpModal');
const messageBoardModal = document.getElementById('messageBoardModal');
const closeButtons = document.querySelectorAll('.close-button');

rsvpButton.addEventListener('click', () => {
  rsvpModal.style.display = 'block';
});

messageBoardButton.addEventListener('click', () => {
  messageBoardModal.style.display = 'block';
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal-id');
    document.getElementById(modalId).style.display = 'none';
  });
});

// Close modal if user clicks outside of the modal content
window.addEventListener('click', (event) => {
  if (event.target === rsvpModal) {
    rsvpModal.style.display = 'none';
  }
  if (event.target === messageBoardModal) {
    messageBoardModal.style.display = 'none';
  }
});

// Fetch and render messages
fetch(import.meta.env.VITE_WEB_APP_URL)
  .then(response => response.json())
  .then(data => {
    const messagesContainer = document.createElement('div');
    messagesContainer.className = 'guest-messages-display-area';

    const heading = document.createElement('h2');
    heading.textContent = 'Message Board';
    heading.className = 'messages-heading';
    messagesContainer.appendChild(heading);

    data.forEach(entry => {
      const name = entry['Name'] || 'Anonymous';
      const messageText = entry['Message for Seth'] || '';
      
      const messageDiv = document.createElement('div');
      messageDiv.className = 'message';
      messageDiv.innerHTML = `<p><span class="message-content">${messageText}</span> &mdash; <strong class="message-author">${name}</strong></p>`;
      messagesContainer.appendChild(messageDiv);
    });

    document.body.appendChild(messagesContainer);
  })
  .catch(error => {
    console.error('Error fetching messages:', error);
  });
