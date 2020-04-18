import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import FormBtn from '../buttons/form-btn.component';

import './collection-item.styles.scss';

const CollectionItem = ({item, addItem }) => {
	const {name, price, imageUrl} = item;

	return (
	<div className='collection-item'>
		<div
			className='image'
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		/>
		<div className='collection-footer'>
			<span className='name'>{name}</span>
			<span className='price'>{price}</span>
		</div>
		<FormBtn onClick={() => addItem(item)}>Add to cart</FormBtn>
	</div>
)};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);