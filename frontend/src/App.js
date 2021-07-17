import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import LabDemo from './pages/LabDemo';

import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/lab/:labID'>
          <LabDemo />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
