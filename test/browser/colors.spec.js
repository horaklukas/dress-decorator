import { h, render, rerender } from 'preact';
import {Colors} from 'components/colors';
import style from 'components/colors/style';

import assertJsx from 'preact-jsx-chai';

/*global sinon,expect*/

describe('Colors', () => {
	const colors = [
		{name: "red", color: "#f00"},
		{name: "green", color: "#0f0"}, 
		{name: "blue", color: "#00f"}
	];

	it('should render list of colors', () => {
		const colorsList = Colors({ colors }).children;
		
		expect(colorsList).to.have.length(3);
	});

	it('should render for each color correct link', () => {
		const colorsList = Colors({ colors, type: 'shirt1' }).children;
		
		expect(colorsList[0].attributes.href).to.eql('/shirt1/red');
		expect(colorsList[1].attributes.href).to.eql('/shirt1/green');
		expect(colorsList[2].attributes.href).to.eql('/shirt1/blue');
	});	

	it('should render for each color its preview', () => {
		const colorsList = Colors({ colors }).children;
		
		expect(colorsList[0].children[0]).to.eql(<span class={style.color} style="background-color: #f00;" />);
		expect(colorsList[1].children[0]).to.eql(<span class={style.color} style="background-color: #0f0;" />);
		expect(colorsList[2].children[0]).to.eql(<span class={style.color} style="background-color: #00f;" />);
	});

});
