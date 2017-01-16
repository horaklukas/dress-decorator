import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Home from './home';
import {getDesigns, getTypes} from 'dynamicData';

const colors = {
	women: [
		{name: "white", color: "#fff"},
		{name: "light-pink", color: "#ffb6c1"},
		{name: "fuchsia", color: "#f0f"},
		{name: "sunflower", color: "gold"},
		{name: "orange", color: "#ffa500"},
		{name: "red", color: "#f00"},
		{name: "skye-blue", color: "#87ceeb"},
		{name: "azure-blue", color: "cyan"},
		{name: "kelly-green", color: "#4CBB17"}
	],
	men: [
		{name: "white", color: "#fff"},
		{name: "lime-green", color: "#32cd32"},
		{name: "orange", color: "#ffa500"},
		{name: "red", color: "#f00"},
		{	name: "turquoise", color: "#40e0d0"}
	]
};
const types = getTypes();
const designs = getDesigns();

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		const defaultType = types[0].name;
		const defaultColor = colors.women[0].name;
		const defaultDesign = designs[0].name;

		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Home path="/" type={defaultType} color={defaultColor} design={defaultDesign} colors={colors} types={types} designs={designs} />
					<Home path="/:type/" color={defaultColor} design={defaultDesign} colors={colors} types={types} designs={designs} />
					<Home path="/:type/:color" design={defaultDesign} colors={colors} types={types} designs={designs} />
					<Home path="/:type/:color/:design" colors={colors} types={types} designs={designs} />
				</Router>
			</div>
		);
	}
}
