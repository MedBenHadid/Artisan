import React from 'react';
import logo from './logo.svg';
import Header from './Componenets/Header/Header';
import Footer from './Componenets/Footer/Footer';
import LandingPage from './Componenets/LandingPage/LandingPage'
import Form from './Componenets/Form/Form'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <div class="container">
      <Switch>
          <Route path="/Form">
            <Form />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
  
</Router>
<Footer/>
    </div>
  );
}

export default App;
