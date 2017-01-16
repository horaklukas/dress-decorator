import { h } from 'preact';
import * as dynamicData from 'dynamicData';

import style from './style';

export const Preview = ({color, type, design}) => (
	<div class={style.preview}>
		<div class={style.dress} 
			dangerouslySetInnerHTML={{__html: createStyle(color.color) + dynamicData.getType(type)}} />
		<div class={style.design} 
			dangerouslySetInnerHTML={{__html: dynamicData.getDesign(design)}} />
	</div>
);

const createStyle = (color) => (
	`
		<style>
			.${style.preview} g.fill path {
				fill: ${color} !important;
			}
		</style>
	`
);