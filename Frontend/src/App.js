import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TodosList from './components/TodosList';
import EditTodo from './components/EditTodo';
import CreateTodo from './components/CreateTodo';

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>

        <div className="container">
          <nav className="navbar navbar-expand-sm bg-light">

            <a className="navbar-brand" href="/">Logo</a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Todos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/create">CreateTodo</a>
              </li>
              
            </ul>

          </nav>

          <Route path="/" exact component={TodosList} ></Route>
          <Route path="/edit/:id" component={EditTodo} ></Route>
          <Route path="/create" component={CreateTodo} ></Route>
        </div >





      </Router>

    );
  }
}

export default App;
