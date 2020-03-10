import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
	constructor(){
		super();
		this.state = {
			sections: [
				{
					title: 'hats',
					bgImgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					id: 1,
					linkUrl: 'hats',
				},
				{
					title: 'jackets',
					bgImgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					id: 2,
					linkUrl: '',
				},
				{
					title: 'sneakers',
					bgImgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					id: 3,
					linkUrl: '',
				},
				{
					title: 'men',
					bgImgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					id: 4,
					linkUrl: '',
				},
				{
					title: 'women',
					bgImgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					id: 5,
					linkUrl: '',
				}
			]
		}

	}

	render() {
		return(
			<ul className="directory-menu">
				{ this.state.sections.map(({id, ...otherSectionProps }) => (
						<MenuItem key={id} {...otherSectionProps} />
					))} 
			</ul>
		)	
	}	
}

export default Directory;