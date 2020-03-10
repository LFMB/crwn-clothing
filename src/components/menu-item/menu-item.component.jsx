import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss'

const MenuItem = ({title, bgImgUrl, history, linkUrl, match}) => (
	<li className='menu-item'
		style={{
			backgroundImage: `url(${bgImgUrl})`
		}}
		onClick={() => history.push(`${match.url}${linkUrl}`)}	
	>
		<div className='content'>
			<label className='title'>{title}</label>
			<button className='subtitle cta'>Shop Now</button>
		</div>
	</li>
)

export default withRouter(MenuItem);