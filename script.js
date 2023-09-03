class localStorage {
  constructor() {
    this.storage = window.localStorage;

    this.input = document.getElementById('local-storage');
    this.button = document.getElementById('submit-button');

    this.previousStoredWordParagraph = document.getElementsByClassName('local-storage-content')[0];
    this.previousStoredWord = document.getElementsByClassName('local-storage-content__word')[0];

    this.newStoredWord = document.getElementsByClassName('after-submit-message')[0];

    this.refreshLinkParagraph = document.getElementsByClassName('refresh-page')[0];
    this.refreshLink = document.getElementsByClassName('refresh-page__link')[0];
  }

  load() {
    this.displayPreviousWord();

    this.bindEvents();
  }

  setItem(key, value) {
    this.storage.setItem(key, value);
  }

  getItem(key) {
    return this.storage.getItem(key);
  }

  displayPreviousWord() {
    if (this.getItem('word')) {
      this.previousStoredWord.innerHTML = this.getItem('word');
    } else {
      this.previousStoredWordParagraph.style.display = 'none';
    }
  }

  bindEvents() {
    // Update local storage
    this.button.addEventListener('click', (event) => {
      // Prevent the default comportment of the button and store the word locally
      event.preventDefault();
      this.setItem('word', this.input.value);
      // Display the paragraphs
      this.newStoredWord.innerHTML = "The new word registered is:&nbsp;<span class='after-submit-message__word'>" + this.getItem('word') + "</span>";
      this.newStoredWord.style.display = 'flex';
      this.refreshLinkParagraph.style.display = 'flex';
    });
    // Refresh page
    this.refreshLink.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.reload();
    });
  }
}

const storage = new localStorage();
storage.load();