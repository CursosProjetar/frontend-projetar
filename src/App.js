import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

// Components
import MenuBar from './components/MenuBar'

// Pages
import Home from './pages/home'
import Courses from './pages/courses'

function App() {
  return (
    <Router>
      <div>
          <Link to='/'>Home</Link>
          <Link to='/courses'>Courses</Link>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/courses' exact component={Courses} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
