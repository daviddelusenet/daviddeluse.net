import { FunctionComponent, useCallback, useEffect } from 'react';

const originalTitle = document.title;

const titles = [
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

const TitleChanger: FunctionComponent = () => {
    const onChangeTitleCallback = useCallback(() => {
        document.title =
            document.visibilityState === 'visible' ? originalTitle : titles[Math.floor(Math.random() * titles.length)];
    }, []);

    useEffect(() => {
        document.addEventListener('visibilitychange', onChangeTitleCallback);

        return () => document.removeEventListener('visibilitychange', onChangeTitleCallback);
    }, []);

    return null;
};

export default TitleChanger;
