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
      'Be kind',
      'Blessed be the fruit',
      'I\'m just anonymous',
      'May the Lord open',
      'This a Rollie, not a stopwatch, shit don\'t ever stop',
      'Juan in a million',
      'I just wanna feel liberated',
      'Ill nana',
      'I ain\'t got time',
      'Lovin\' me is complicated',
      'If you don\'t know, now you know',
      'I can\'t believe I made it',
      'Now drop to your knees for the offerin\'',
    ];
  }

  addEventListeners() {
    document.addEventListener('visibilitychange', () => {
      this.changeTitle({ showOriginal: document.visibilityState === 'visible' });
    });
  }

  changeTitle({ showOriginal }) {
    document.title = showOriginal ? (
      this.originalTitle
    ) : (
      this.titles[Math.floor(Math.random() * this.titles.length)]
    );
  }
}
