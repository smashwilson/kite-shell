import React from 'react/addons';
import Setup from './components/Setup.react';
import About from './components/About.react';
import Router from 'react-router';

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <RouteHandler/>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="about" path="/about" handler={About}/>
    <DefaultRoute name="setup" handler={Setup}/>
  </Route>
);

module.exports = routes;
