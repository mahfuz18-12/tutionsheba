import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import NotFound from './Components/NotFound/NotFound';
import TopBanner from './Components/TopBanner/TopBanner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <TopBanner></TopBanner>
          </Route>
          <Route exact path="/home">
            <TopBanner></TopBanner>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
