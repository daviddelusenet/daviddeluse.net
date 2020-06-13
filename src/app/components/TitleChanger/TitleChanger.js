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
            "Ain't nobody prayin' for me",
            'Anonymous',
            'Be humble',
            'Be kind',
            "Be weird, it's ok",
            "Don't be afraid to dream big",
            "Don't leave me here",
            'Good vibes only',
            "If you don't know, now you know",
            'Keep the dream alive',
            'Meanwhile..',
            'Spoiler, you die in the end',
            'Stay cozy',
            "Strange world isn't it?",
            "We gon' be alright",
            'We offer you the finest of the finer things',
        ];
    }

    handleChangeTitle = () => {
        document.title =
            document.visibilityState === 'visible'
                ? this.originalTitle
                : this.titles[Math.floor(Math.random() * this.titles.length)];
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
