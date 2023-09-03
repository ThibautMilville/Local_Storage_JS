class localStorage {
  constructor() {
    this.storage = window.localStorage;

    this.input = document.getElementById('local-storage');
    this.button = document.getElementById('submit-button');
    this.output = document.getElementsByClassName('after-submit-message')[0];
  }

  load() {
    this.bindEvents();
  }

  setItem(key, value) {
    this.storage.setItem(key, value);
  }

  getItem(key) {
    return this.storage.getItem(key);
  }

  bindEvents() {
    this.button.addEventListener('click', () => {
      this.setItem('word', this.input.value);
      this.output.innerHTML = "The saved word is: " + this.getItem('word');
    });
  }
}

const storage = new localStorage();
storage.load();