import React, { Component } from 'react';
import {connect} from "react-redux";
import Recipes from '../components/Recipes';

// Import our actions so we can properly declare them later
import { addRecipe } from '../actions/recipeActions';
import { editRecipe } from '../actions/recipeActions';
import { removeRecipe } from '../actions/recipeActions';

class RecipeApp extends Component {
  render() {
    return <Recipes recipes={this.props.recipes} addRecipe={this.props.addRecipe} editRecipe={this.props.editRecipe} removeRecipe={this.props.removeRecipe} />
  }
}

// Take state and set it to props that can be passed
const mapStateToProps = (state) => {
  return {
  	recipes: state
  };
};

// Set actions to props that  can be passed
const mapDispatchToProps = (dispatch) => {
  return {
  	addRecipe: (name, list, text) => {
  		dispatch(addRecipe(name,list,text))
  	},
  	editRecipe: (index, propName, value) => {
			dispatch(editRecipe(index, propName, value))
  	},
  	removeRecipe: (index) => {
  		dispatch(removeRecipe(index))
  	}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeApp);