import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import FormBtn from '../buttons/form-btn.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from  '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';


const CartDropdown = ({cartItems, history, dispatch}) => (
	<div className="cart-dropdown">
		<div className="cart-items">
		{
			cartItems.length ? (
			cartItems.map(
				cartItem => (<CartItem key={cartItem.id} item={cartItem} />)
			 )
			) : (
				<span className="empty-message">
					Your cart is empty
				</span>
			)			
		}
		</div>
		<FormBtn onClick={() => {
			history.push('/checkout');
			dispatch(toggleCartHidden());
		} }>Go to Checkout</FormBtn>
	</div>
)


// don't understand difference between mapStateToProps and mapDispatchToProps
// prevents needless rerenders
/*
const mapStateToProps = state => ({
	cartItems: selectCartItems(state)
});
*/

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));