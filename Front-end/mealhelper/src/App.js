/////Static Imports/////////
import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
//////////////////////////

/////Dev. Created/////////
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import Thanks from "./components/thanks/thanks";
import HomePage from "./components/homepage/homepage";
import Weather from "./components/weather/weather";
import Recipes from "./components/recipes/recipes";
////////////////////////

import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="main-container">
					<div className="entry-button-group">
						<Link to="/signup">
							<button className="signup-button">
								<span>Signup</span>
							</button>
						</Link>
						<Link to="/login">
							<button className="login-button">
								<span>Login</span>
							</button>
						</Link>
					</div>
					<div className="signin">
						<Switch>
							<Route exact path="/signup" render={() => <Signup />} />
							<Route path="/login" render={() => <Login />} />
							<Route path="/thanks" render={() => <Thanks />} />
							<Route path="/homepage" render={() => <HomePage />} />
							<Route path="/homepage/weather" render={() => <Weather />} />
							<Route path="/homepage/recipes" render={() => <Recipes />} />
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
