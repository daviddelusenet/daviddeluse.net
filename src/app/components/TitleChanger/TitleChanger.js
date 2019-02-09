import React from 'react';

export default class TitleChanger extends React.PureComponent {
  componentDidMount() {
    this.setVariables();
    this.addEventListeners();
  }

  componentWillUnmount() {
    this.removeEventListeners();
  }

  setVariables() {
    this.originalTitle = document.title;

    this.titles = [
      'Ain\'t nobody prayin\' for me',
      'Be kind',
      'Be weird, it\'s ok',
      'Blessed be the fruit',
      'Don\'t be afraid to dream big',
      'Don\'t leave me here',
      'Eden is a blessing',
      'Good vibes only',
      'I ain\'t got time',
      'I can\'t believe I made it',
      'I don\'t feel pain anymore',
      'I finally found love and it\'s beautiful',
      'I just wanna feel liberated',
      'I\'m just anonymous',
      'If you don\'t know, now you know',
      'Juan in a million',
      'Keep the dream alive',
      'Lay a player flat before the trainer felt his clock was on',
      'Literally no one cares',
      'Lovin\' me is complicated',
      'Luka Dončić is ROTY',
      'May the Lord open',
      'Meanwhile..',
      'Now drop to your knees for the offerin\'',
      'Okay the streets aren\'t paved with gold, at least they paved tho',
      'Sit down, be humble',
      'Spoiler, you die in the end',
      'Stay cozy',
      'Strange world isn\'t it?',
      'This a Rollie, not a stopwatch, shit don\'t ever stop',
      'We gon\' be alright',
      'We offer you the finest of the finer things',
      'Wubalubadubdub',
    ];
  }

  handleChangeTitle = () => {
    document.title = document.visibilityState === 'visible'
      ? this.originalTitle : this.titles[Math.floor(Math.random() * this.titles.length)];
  };

  addEventListeners() {
    document.addEventListener('visibilitychange', this.handleChangeTitle);
  }

  removeEventListeners() {
    document.removeEventListener('visibilitychange', this.handleChangeTitle);
  }

  render() {
    return null;
  }
}
