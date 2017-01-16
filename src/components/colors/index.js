import { h } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export const Colors = ({type, colors}) => (
	<div class={style.colors}>
	{
		colors.map(({name, color}) => (
				<Link href={`/${type}/${name}`}>
					<span class={style.color} style={ {backgroundColor: color} } />
				</Link>
			)
		)
	}
	</div>
)
