import React from 'react';
import { connect } from 'react-redux';
import { 
	clearProductFromCart,
	addItem,
	removeItem,
} from '../../redux/cart/cart.actions';


import './checkout-item.styles.scss';

const CheckoutItem = ({
	cartItem,
	addItem,
	removeItem,
	clearProductFromCart
}) => {
	const {name, imageUrl, price, quantity} = cartItem;
 
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img 
					alt="item"
					src={imageUrl}
				/>
			</div>
			<div className="name">
				{name}
			</div>
			<div className="quantity">
				<span
					onClick={() => removeItem(cartItem)} 
					className="arrow"
				>&#10094;</span>
				<span className="value">
					{quantity}
				</span>
				<span
					onClick={() => addItem(cartItem)} 
					className="arrow"
				>&#10095;</span>
			</div>
			<div className="price">
				${price}
			</div>
			<div 
				className="remove-button"
				onClick={() => clearProductFromCart(cartItem)}
			>
				&#10005;
			</div>
		</div>
	);
};


const mapDispatchToProps = dispatch => ({
	clearProductFromCart: item => dispatch(clearProductFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);