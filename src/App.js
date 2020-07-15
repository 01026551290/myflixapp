import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Footer from './components/Footer';
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
        <BrowserRouter>
            <NavBar />
            <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
                <Switch>
                    <Route exact path="/"  component={LandingPage} />
                    <Route exact path="/movie/:movieId"  component={MovieDetail} />
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>
  );
}

export default App;
