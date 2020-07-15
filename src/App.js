import React from 'react';
import {HashRouter, Route, BrowserRouter} from "react-router-dom";
import Footer from './components/Footer';
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
        <div>
            <NavBar />
            <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Route exact path="/myflixapp"  component={LandingPage} />
                    <Route exact path="/movie/:movieId"  component={MovieDetail} />
                </BrowserRouter>
            </div>
            <Footer />
        </div>
  );
}

export default App;
