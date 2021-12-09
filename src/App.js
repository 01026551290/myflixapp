import React from 'react';
import {HashRouter, Route, BrowserRouter} from "react-router-dom";
import Footer from './components/Footer';
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
      <BrowserRouter>
            <NavBar />
            <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
                    <Route exact path="/myflixapp"  component={LandingPage} />
                    <Route exact path="/myflixapp/movie/:movieId"  component={MovieDetail} />
            </div>
            <Footer />
      </BrowserRouter>
  );
}

export default App;
