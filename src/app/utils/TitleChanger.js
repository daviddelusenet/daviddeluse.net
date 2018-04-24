export default class TitleChanger {
  constructor() {
    this.setVariables();
    this.addEventListeners();
  }

  setVariables() {
    this.originalTitle = document.title;
    this.titles = [
      'Ain\'t nobody prayin\' for me',
      'Don\'t leave me here..',
      'Donovan Mitchell is ROTY',
      'Be weird, it\'s ok',
      'Meanwhile..',
      'Keep the dream alive',
      'Sit down, be humble',
      'Spoiler, you die in the end',
      'Good vibes only',
      'Stay cozy',
      'Don\'t be afraid to dream big',
      'Strange world isn\'t it?',
      'Wubalubadubdub',
      'Literally no one cares',
      'Be kind'
    ];
  }

  addEventListeners() {
    window.addEventListener('blur', () => this.changeTitle());
    window.addEventListener('focus', () => this.changeTitle({ showOriginal: true }));
  }

  changeTitle({ showOriginal = false } = {}) {
    document.title = showOriginal ? this.originalTitle : this.titles[Math.floor(Math.random() * this.titles.length)];
  }
}
