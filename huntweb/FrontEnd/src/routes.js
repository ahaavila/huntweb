import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main/main';
import Product from './pages/main/product';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Main } /* Na minha página principal eu vou mostrar o component Main*/ /> 
            <Route path="/products/:id" component={ Product } /* Na minha página products eu vou mostrar o component Product*/ />
        </Switch>
    </BrowserRouter>
);

export default Routes;