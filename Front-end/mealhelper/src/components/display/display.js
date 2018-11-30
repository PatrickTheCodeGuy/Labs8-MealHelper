import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import "../homepage/homepage.css";
import MealDisplay from "./MealDisplay";
import RecipeDisplay from "./RecipeDisplay";
//change the route for this
import { addUser } from "../../store/actions/userActions";
import { withRouter, Link, Route, Switch } from "react-router-dom";
import { Alert } from "reactstrap";
import Weather from "../weather/weather";
import Recipes from "../recipes/recipes";
import Meals from "../Meals/Meals";
import CreateNewRecipe from "../creatnewrecipe/createnewrecipe";
import AddAlarms from "../alarms/addAlarm";
import MyAlarms from "../alarms/myAlarms";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "../checkout/CheckoutForm";
import Billing from "../billing/billing";
import SideBar from "../sidebar/sidebar";

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      zip: null,
      healthCondition: "",
      visable: false,
      modal: false,
      meals: [],
      recipes: []
    };
  }

  componentDidMount = () => {
    if (localStorage.getItem("token")) {
      const id = this.props.user.userID;
      axios
        .get(`https://labs8-meal-helper.herokuapp.com/recipe/user/${id}`)
        .then(recipess => {
          this.setState({ recipes: recipess.data });
        })
        .catch(err => {
          console.log(err);
        });
      this.componentGetMeals();
    } else {
      this.props.history.push("/");
    }
  };

  componentGetMeals() {
    console.log(this.state.recipes);
    const id = this.props.user.userID;
    axios
      .get(`https://labs8-meal-helper.herokuapp.com/users/${id}/meals`)
      .then(meals => {
        console.log(meals);
        this.setState({ meals: meals.data });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(this.state.meals);
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  createUser = event => {
    event.preventDefault();
    if (!this.state.email || !this.state.password) {
      this.setState({ visable: true });
    } else {
      const { email, password, zip, healthCondition } = this.state;
      const user = { email, password, zip, healthCondition };
      this.props.addUser(user);
      // this.props.history.push("/");
    }
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  logout = event => {
    event.preventDefault();
    localStorage.removeItem("token");
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="flex-me">
        <div className="dynamic-display-home-meals">
          <p className="recentMeals">4 Most Recently Made Meals: </p>
        </div>
        <div className="dynamic-display-home">
          <div className="mealsRecipe-Container">
            <div>
              <div className="mealDisplay-Flex">
                {this.state.meals
                  .reverse()
                  .slice(0, 4)

                  .map(meal => (
                    <MealDisplay
                      key={meal.id}
                      meal={meal}
                      mealTime={meal.mealTime}
                      temp={meal.temp}
                      experience={meal.experience}
                      date={meal.date}
                      city={meal.name}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="dynamic-display-home-meals">
          <p className="recentMeals">4 Most Recently Made Recipes: </p>
        </div>
        <div className="dynamic-display-home">
          <div className="mealsRecipe-Container">
            <div>
              <div className="mealDisplay-Flex">
                {this.state.recipes
                  .reverse()
                  .slice(0, 4)
                  .map(recipe => (
                    <RecipeDisplay
                      key={recipe.id}
                      recipe={recipe}
                      servings={recipe.servings}
                      calories={recipe.calories}
                      name={recipe.name}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
  meals: state.mealsReducer.meals
});

export default connect(
  mapStateToProps,
  { addUser }
)(withRouter(Display));
