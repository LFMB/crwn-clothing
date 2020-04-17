import React from 'react';
import FormBtn from '../buttons/form-btn.component';

import './cart-dropdown.styles.scss';


const CartDropdown = () => (
	<div className="cart-dropdown">
		<div className="cart-items" />
		<FormBtn>Go to Checkout</FormBtn>
	</div>
)

export default CartDropdown;