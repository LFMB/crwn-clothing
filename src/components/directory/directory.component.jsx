import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';


// no reason to use a class component when not using state
// or life cycle methods
// class Directory extends React.Component {
const Directory = ({sections}) => (
	<ul className="directory-menu">
		{sections.map(({id, ...otherSectionProps }) => (
				<MenuItem key={id} {...otherSectionProps} />
			))} 
	</ul>
)

// references directory.selector
const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
});



export default connect(mapStateToProps)(Directory);