import React, { Component } from "react";
import { connect } from "react-redux";
//change the route for this
import { addUser } from "../../store/actions/userActions";
import { withRouter, Link, Route } from "react-router-dom";
// import { Alert } from "reactstrap";
import axios from "axios";
import MyRecipes from "../recipes/myrecipes";
import "../recipes/recipes.css";

class RecipeBook extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: [],
			search: "",
			name: "",
			ndbno: null
		};
	}
	searchFood = event => {
		event.preventDefault();
		axios
			.get(
				`https://api.nal.usda.gov/ndb/search/?format=json&q=${
					this.state.search
				}&sort=n&max=25&offset=0&api_key=c24xU3JZJhbrgnquXUNlyAGXcysBibSmESbE3Nl6`
			)
			.then(response => {
				console.log(response);
				this.setState({
					list: response.data.list.item
				});
			})
			.catch(error => {
				console.log("Error", error);
			});
	};

	handleChange = event => {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		return (
			<div className="weather-container">
				<div className="home-container">
					<div className="sidebar">
						<Link to="/homepage/weather" style={{ textDecoration: "none" }}>
							<h2 className="titlelinks">Weather</h2>
						</Link>
						<Link to="/homepage/recipes" style={{ textDecoration: "none" }}>
							<h2 className="titlelinks">Recipes</h2>
						</Link>
						<Link to="/homepage/alarms" style={{ textDecoration: "none" }}>
							<h2 className="titlelinks">Alarms</h2>
						</Link>
						<Link to="/homepage/meals" style={{ textDecoration: "none" }}>
							<h2 className="titlelinks">Meals</h2>
						</Link>
						<Link to="/homepage/billing" style={{ textDecoration: "none" }}>
							<h2 className="titlelinks">Billing</h2>
						</Link>
						<Link to="/homepage/settings" style={{ textDecoration: "none" }}>
							<h2 className="titlelinks">Settings</h2>
						</Link>
					</div>
					<div className="recipe-card">
					<h1>Recipe Book</h1>
					<Link to="/homepage/recipes/myrecipes" style={{ textDecoration: "none" }}>
					<h2>Add A New Recipe</h2>
					</Link> 
						
						<div className="dynamic-display">
						{this.state.list.map(item => (
							<MyRecipes
								item={item}
								key={item.ndbno}
								name={item.name}
								ndbno={item.ndbno}
							/>
						))}
					</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	user: state.user
});

export default connect(
	mapStateToProps,
	{ addUser }
)(withRouter(RecipeBook));