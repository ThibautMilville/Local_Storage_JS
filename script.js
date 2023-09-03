class localStorage {
  constructor() {
    this.storage = window.localStorage;

    this.input = document.getElementById('local-storage');
    this.button = document.getElementById('submit-button');

    this.previousStoredWordParagraph = document.getElementsByClassName('local-storage-content')[0];
    this.previousStoredWord = document.getElementsByClassName('local-storage-content__word')[0];
    this.newStoredWord = document.getElementsByClassName('after-submit-message')[0];
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
    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      this.setItem('word', this.input.value);
      this.newStoredWord.innerHTML = "The new word registered is:&nbsp;<span class='after-submit-message__word'>" + this.getItem('word') + "</span><br>Refresh the page to see the previous word.";
      this.newStoredWord.style.display = 'flex';
    });
  }
}

const storage = new localStorage();
storage.load();