import React, { useEffect } from 'react';

// Google Analytics
import ReactGA from 'react-ga';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from './pages/Home/Home';
import FarmerDetails from './pages/FarmerDetails/FarmerDetails';
import Error from './pages/Error/Error';
import FarmersPage from './pages/FarmersPage/FarmersPage';
import RoastersPage from './pages/RoastersPage/RoastersPage';
import MediaPage from './pages/MediaPage/MediaPage';


const App = () => {

  useEffect(() => {

    // // Render test
    // console.log('Hello From App.js');

    // Google Analytics initiazation
    ReactGA.initialize(`${process.env.REACT_APP_GA_ID}`);
    // Google Analytics Page View report
    ReactGA.pageview(window.location.pathname + window.location.search);

  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/roasters">
          <RoastersPage />
        </Route>
        <Route exact path="/about-us">
          <Error />
        </Route>
        <Route exact path="/partners">
          <Error />
        </Route>
        <Route exact path="/media">
          <MediaPage />
        </Route>
        <Route exact path="/farmers-2021">
          <FarmersPage />
        </Route>
        <Route exact path="/farmer-2021/:name">
          <FarmerDetails />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </>
  );
};

export default App;
