import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../Pages/Home';
import Search from '../Pages/Search';

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
        </Switch>
        </BrowserRouter>
    );
};

export default Routes;