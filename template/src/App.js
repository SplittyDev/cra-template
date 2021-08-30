import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import HomePage from 'pages/HomePage'

const App = ({ className }) => {
  return (
    <div className={className}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default styled(App)`

`
