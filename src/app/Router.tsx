import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { FunctionComponent } from 'react';
import ErrorPage from './pages/Error/Error';
import HomePage from './pages/Home/Home';
import TitleChanger from './components/TitleChanger/TitleChanger';

const Router: FunctionComponent = () => (
    <>
        <TitleChanger />
        <BrowserRouter>
            <Switch>
                <Route component={HomePage} exact path="/" />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    </>
);

export default Router;
