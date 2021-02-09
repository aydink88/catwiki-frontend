import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './containers/Layout';
import BreedPage from './views/BreedPage';
import HomePage from './views/HomePage';
import PopularPage from './views/PopularPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/breed/:breedId">
            <BreedPage />
          </Route>
          <Route path="/popular">
            <PopularPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
