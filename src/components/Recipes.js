import React, { Component } from 'react';
import AddRecipes from './AddRecipes';

export default class Recipes extends Component {
	constructor() {
		super();
		this.handleAppRecipes = this.handleAppRecipes.bind(this);
	}

	handleAppRecipes() {
		// Use map function to build the section using a template and the data from objects in the array
		// Also note the second map function called to build the list of ingredients (property value is array)
		const recipesMap = this.props.recipes.map((item, index) => {
			if(item === null) { return null }
			return  (
				<li key={index}>
		      <div className="collapsible-header"><i className="material-icons">build</i>{item.name}</div>
		      <div className="collapsible-body recipe-body">
		      	<ul>
		      		{item.list.map((listItem, j) => {
		      			return <li key={j}>{listItem}</li>
		      		})}
		      	</ul>
		      	<hr />
		      	<p className="no-margin-top article">{item.text}</p>
		      	<a onClick={() => this.props.removeRecipe(index)} className="btn app-btn right">Delete<i className="material-icons right">delete</i></a>
		      	<br/>
		      </div>
		    </li>
			)
		})
		// return the completed section to the location this function was called
		return recipesMap;
	}

	render() {
		return (
			<div className="col s12 l6">
					<h4 className="center app-title no-margin-top z-depth-2">Recipe List Redux</h4>
					<ul className="collapsible expand no-margin-top z-depth-2">
				    {this.handleAppRecipes()}
				  </ul>
				  <AddRecipes addRecipe={this.props.addRecipe} />
			</div>
		)
	}
}

//

/*
import EditRecipes from './EditRecipes';
	
	<EditRecipes name={item.name} list={item.list} text={item.text} index={index} 
					  							editRecipe={this.props.editRecipe} saveEdit={this.props.saveEdit} />

*/