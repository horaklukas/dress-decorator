import { h } from 'preact';
import {List} from 'components/list';
import style from 'components/list/style';

//import assertJsx from 'preact-jsx-chai';

/*global sinon,expect*/

describe('List', () => {
	const items = [
		'item1', 'item2', 'item3', 'item4'
	];
	const createLinkUrl = item => `/url/${item}`;

	it('should render list of items', () => {
		const itemsList = List({ items, createLinkUrl }).children;
		
		expect(itemsList).to.have.length(4);
	});

	it('should create for each item link', () => {
		const itemsList = List({ items, createLinkUrl }).children;
		
		expect(itemsList[0].children[0].attributes.href).to.eql('/url/item1');
		expect(itemsList[1].children[0].attributes.href).to.eql('/url/item2');
		expect(itemsList[2].children[0].attributes.href).to.eql('/url/item3');
		expect(itemsList[3].children[0].attributes.href).to.eql('/url/item4');
	});	

	it('should render for each item its title', () => {
		const itemsList = List({ items, createLinkUrl }).children;
		
		expect(itemsList[0].children[0].children[0]).to.equal('item1');
		expect(itemsList[1].children[0].children[0]).to.equal('item2');
		expect(itemsList[2].children[0].children[0]).to.equal('item3');
		expect(itemsList[3].children[0].children[0]).to.equal('item4');
	});

	it('should mark active item', () => {
		const active = items[2];
		const itemsList = List({ items, createLinkUrl, active}).children;

		expect(itemsList[2].children[0]).to.equal('item3');
		expect(itemsList[2].attributes.class).to.equal(style.active);
	});

});
