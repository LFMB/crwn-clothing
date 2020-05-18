import React from 'react';
import {connect} from 'react-redux';

import FormBtn from '../buttons/form-btn.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';


import './cart-dropdown.styles.scss';


const CartDropdown = ({cartItems}) => (
	<div className="cart-dropdown">
		<div className="cart-items">
		{
			cartItems.map(
				cartItem => (<CartItem key={cartItem.id} item={cartItem} />)
			)
		}
		</div>
		<FormBtn>Go to Checkout</FormBtn>
	</div>
)


// don't understand difference between mapStateToProps and mapDispatchToProps
// prevents needless rerenders
const mapStateToProps = state => ({
	cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);