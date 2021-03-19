import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch, NavLink } from 'react-router-dom';
// import Home from './Home';
// import Posts from './Posts';
// import Todos from './Todos';
// import NotFound from './NotFound';
import Routes from './routes';

export default function App(props) {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todos">Todos</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/lmao">Lmao</NavLink>
        </li>
      </ul>

      <Switch>
        {/* <Route
          exact
          path="/"
          render={(props) => <Home name="Alligator.io" {...props} />}
        />
        <Route path="/todos" component={Todos} />
        <Route path="/posts" component={Posts} />
        <Route component={NotFound} /> */}
        {renderRoutes(Routes)}
      </Switch>
    </div>
  );
}
