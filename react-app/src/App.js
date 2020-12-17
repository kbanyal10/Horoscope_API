import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Signin from './components/users/signin.js';
import Signup from './components/users/signup.js';
import Horoscope from './components/horoscope';
import selectedHoroscope from './components/selectedHoroscope';

function App() {
  return (
    
    <Router>
      <div className="App" class="jumbotron text-center">
     
        <main>
          <Switch>
          <Route path="/users/signup">
              <Signup/>
            </Route>
            <Route path="/users/signin">
              <Signin />
            </Route>
            <Route path="/horoscope">
              <Horoscope />
            </Route>
            <Route path="/">
            <div class="container-fluid bg-grey">
                <div class="row">
                  <div>
                    <h2>Daily Horoscope <span class="glyphicon glyphicon-globe logo slideanim"></span></h2><br/><br/><br/>
                    <img src="https://www.horoscope.com/wp-content/uploads/sites/2/2020/04/zodiac-sign-symbols.png" alt="Zodiac Signs"/><br/><br/><br/><br/>
                    <h4><strong>MISSION:</strong> Our mission is to provide people with their horoscope, anyone can signup and use our website or API to get data on the preferred zodia sign.</h4><br/>
                    </div>
                </div>
              </div>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
