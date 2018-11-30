/////Static Imports/////////
import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
//////////////////////////

/////Dev. Created/////////

// import LandingPage from "./components/landingpage/landingpage";
import GetIngredient from "./components/ingredients/getIngredient";

import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import Meals from "./components/Meals/Meals";
import HomePage from "./components/homepage/homepage";
import Weather from "./components/weather/weather";
import Recipes from "./components/recipes/recipes";
import MyRecipes from "./components/recipes/myrecipes";
import RecipeBook from "./components/recipebook/recipebook";
import CreateNewRecipe from "./components/creatnewrecipe/createnewrecipe";
// import LandingPage from "./components/landingpage/landingpage";
import MyIngredients from "./components/recipes/myrecipe";
import MyWeather from "./components/weather/myweather";
import MyAlarms from "./components/alarms/myAlarms";
import AddAlarms from "./components/alarms/addAlarm";
import Billing from "./components/billing/billing";
import SettingsMain from "./components/Settings/SettingsMain";

////////////////////////

import Callback from "./Callback";
import Sign from "./components/Sign";

import "./App.css";
import LandingPage from "./components/landingpage/landingpage";
import EditEmail from "./components/Settings/EditEmail";
import EditPassword from "./components/Settings/EditPassword";
import EditZip from "./components/Settings/EditZip";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {/* <Route exact path="/" render={() => <LandingPage />} /> */}
          <Route exact path="/" render={() => <LandingPage />} />
          <Route exact path="/signup" render={() => <Signup />} />
          <Route exact path="/callback" render={() => <Callback />} />

          <Route path="/login" render={() => <Login />} />
          <Route exact path="/homepage" render={() => <HomePage />} />
          <Route exact path="/homepage/meals" render={() => <Meals />} />
          <Route exact path="/homepage/weather" render={() => <Weather />} />
          <Route path="/ingredients" render={() => <GetIngredient />} />
          <Route exact path="/homepage/recipes" render={() => <Recipes />} />
          <Route exact path="/homepage/billing" render={() => <Billing />} />
          <Route
            path="/homepage/recipes/createnewrecipe"
            render={() => <CreateNewRecipe />}
          />
          <Route
            path="/homepage/ingredients/myingredients"
            render={() => <MyIngredients />}
          />
          <Route
            path="/homepage/weather/myweather"
            render={() => <MyWeather />}
          />
          <Route
            path="/homepage/recipes/myrecipes"
            render={() => <MyRecipes />}
          />
          <Route
            path="/homepage/recipes/recipebook"
            render={() => <RecipeBook />}
          />

          <Route
            path="/homepage/ingredients/myingredients"
            render={() => <MyIngredients />}
          />
          <Route exact path="/homepage/alarms" render={() => <MyAlarms />} />
          <Route
            path="/homepage/alarms/add-alarms"
            render={() => <AddAlarms />}
          />
          <Route
            path="/homepage/alarms/add-alarms"
            render={() => <AddAlarms />}
          />
          <Route
            exact
            path="/homepage/settings"
            render={() => <SettingsMain />}
          />
          <Route path="/homepage/settings/email" render={() => <EditEmail />} />
          <Route
            path="/homepage/settings/password"
            render={() => <EditPassword />}
          />
          <Route path="/homepage/settings/zip" render={() => <EditZip />} />
        </Switch>
      </div>
    );
  }
}

export default App;
