import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Components
import MenuBar from './components/MenuBar'

// Pages
import Home from './pages/home'
import Courses from './pages/courses'
import Login from './pages/login'

function App() {
  return (
    <Router>
      <div>
        <MenuBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/courses' exact component={Courses} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
