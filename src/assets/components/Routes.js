// // Routes.js
import React from 'react';
import App from '../../App'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            {/*<Route path="/currency" component={Currency}/>*/}
        </Switch>
    </BrowserRouter>
);

