import { h } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export const List = ({items, active, createLinkUrl}) => (
	<ul class={style.list}>
	{
		items.map(item => {
			return active && item === active
				? (<li class={style.active}>{item}</li>)
				: ( 
					<li class={style.item}>
						<Link href={createLinkUrl(item)}>{item}</Link>
					</li>
				)
		})
	}
	</ul>
)
