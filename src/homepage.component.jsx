import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
	<div className='homepage'>
		<ul className='directory-menu'>
			<li className='menu-item'>
				<div className='content'>
					<label className='title'>Hats</label>
					<button className='subtitle cta'>Shop Now</button>
				</div>
			</li>
			<li className='menu-item'>
				<div className='content'>
					<label className='title'>Jackets</label>
					<button className='subtitle cta'>Shop Now</button>
				</div>
			</li>
			<li className='menu-item'>
				<div className='content'>
					<label className='title'>Sneakers</label>
					<button className='subtitle cta'>Shop Now</button>
				</div>
			</li>
			<li className='menu-item'>
				<div className='content'>
					<label className='title'>Womens</label>
					<button className='subtitle cta'>Shop Now</button>
				</div>
			</li>
			<li className='menu-item'>
				<div className='content'>
					<label className='title'>Mens</label>
					<button className='subtitle cta'>Shop Now</button>
				</div>
			</li>
		</ul>
	</div>
)

export default HomePage;