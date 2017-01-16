import { h, render } from 'preact';
import {Preview} from 'components/preview';
import style from 'components/preview/style';
import * as dynamicData from 'dynamicData';

import assertJsx from 'preact-jsx-chai';

/*global sinon,expect*/

describe('Preview', () => {
	const type = 'preview-type';
	const typeSvg = '<div class="svg">fake type svg</div>';
	const design = 'preview-design';
	const designSvg = '<div class="svg">fake design svg</div>';
	let scratch;

	before(() => {
		scratch = document.createElement('div');
		(document.body || document.documentElement).appendChild(scratch);

		sinon.stub(dynamicData, 'getDesign').withArgs(design).returns(designSvg);
		sinon.stub(dynamicData, 'getType').withArgs(type).returns(typeSvg);
	});

	beforeEach( () => {
		scratch.innerHTML = '';
	});

	after(() => {
		scratch.parentNode.removeChild(scratch);
		scratch = null;
		
		dynamicData.getDesign.restore();
		dynamicData.getType.restore();
	})

	it('render style definition with supplied color', () => {
		const preview = <Preview color={{name: 'yellow', color: '#0ff'}} />;
		
		expect(preview).to.contain('fill: #0ff !important;');
	});

	it('render tshirt type svg', () => {
		render(<Preview color={{name: 'blue', color: '#00f'}} type={type} />, scratch);
		
		expect(scratch.innerHTML).to.contain(typeSvg);
	});

	it('render design svg', () => {
		render(<Preview color={{name: 'blue', color: '#00f'}} design={design} />, scratch);
		
		expect(scratch.innerHTML).to.contain(designSvg);
	});
});
