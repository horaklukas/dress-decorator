import { h, render, rerender } from 'preact';
import { route } from 'preact-router';
import App from 'components/app';
import 'style';

/*global sinon,expect*/

xdescribe('App', () => {
	let scratch;

	before( () => {
		scratch = document.createElement('div');
		(document.body || document.documentElement).appendChild(scratch);
	});

	beforeEach( () => {
		scratch.innerHTML = '';
	});

	after( () => {
		scratch.parentNode.removeChild(scratch);
		scratch = null;
	});

	describe('routing', () => {
		it('should render /', () => {
			render(<App />, scratch);
			route('/');
			rerender();

			expect(scratch.innerHTML).to.contain('Barva: white');
			expect(scratch.innerHTML).to.contain('Typ: tshirt-men');;
		});

		it('should render /:ttype', () => {
			render(<App />, scratch);
			route('/tshirt2');
			rerender();

			expect(scratch.innerHTML).to.contain('Barva: white');
			expect(scratch.innerHTML).to.contain('Typ: tshirt2')
		});

		it('should render /:ttype/:color', () => {
			render(<App />, scratch);
			route('/tshirt3/green');
			rerender();

			expect(scratch.innerHTML).to.contain('Barva: green');
			expect(scratch.innerHTML).to.contain('Typ: tshirt3')
		});
	});
});
