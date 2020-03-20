import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Header from "./Components/Header/Header";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Posts from "./Components/Posts/Posts";
import newPost from "./Components/newPost/newPost";
import Comments from "./Components/Comments/Comments";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <Switch>
              <Route path="/" exact component={Posts}/>
              <Route path="/register" component={Register}/>
              <Route path="/login" component={Login}/>
              <Route path="/new_post" component={newPost}/>
              <Route path="/comments/:id" exact component={Comments}/>
          </Switch>
        </div>
    )
  }
}

export default App;
