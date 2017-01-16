import { h, Component } from 'preact';
import {Colors} from 'components/colors';
import {List} from 'components/list';
import {Preview} from 'components/preview';
import style from './style';

export default class Home extends Component {
	getSelectedColor() {
		const {colors, color} = this.props;
		
		return colors.men
			.concat(colors.women)
			.filter(c => c.name === color)[0];
	}

	getColorsByType() {
		const {colors, type} = this.props;
		return type === 'tshirt-men' ? colors.men : colors.women
	}

	getTypeDefaultColor(type) {
		return this.getColorsByType(type)[0].name;
	}

	render({colors, types, designs, design, type}) {
		const color = this.getSelectedColor();
		// TODO how to do it better 
		const colorsByType = this.getColorsByType();

		return (
			<div class={style.home}>
				<div class={style.topbar}>
					<Colors type={type} colors={colorsByType} />
				</div>
				<List items={types.map(t => t.name)} active={type}
					createLinkUrl={newType => createLinkUrl(newType, this.getTypeDefaultColor(newType), design)} />
				<List items={designs.map(d => d.name)} active={design}
					createLinkUrl={newDesign => createLinkUrl(type, color.name, newDesign)} />
				<ul class={style.info}>
					<li><label>Barva: {color.name}</label></li>
					<li><label>Typ: {type}</label></li>
				</ul>
				<Preview color={color} type={type} design={design} />
			</div>
		);
	}
}

const createLinkUrl = (type, color, design) => (
	`/${type}/${color}/${design}`
)