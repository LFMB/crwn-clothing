import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

import { auth } from '../../firebase/firebase.utils';


const Header = ({currentUser, hidden}) => (
	<div className='header'>
		<Link className="logo-container" to="/">
			<Logo className='logo' />
		</Link>
		<div className="options">
			<Link className='option' to='/shop'>
				Shop
			</Link>
			<Link className='option' to='/shop'>
				Contact
			</Link>
			{currentUser ? (
				<div 
					className='option'
					onClick={() => auth.signOut()}
				>
					Sign Out
				</div>
				) : (
				<Link className='option' to='/sign-in'>
					Sign In
				</Link>
			)}
			<CartIcon />	
		</div>
		{
			hidden ? null : <CartDropown />	
		}
	</div>
)

/*
const mapStateToProps = ({
		user: {currentUser},
		cart: {hidden}
	}
) => ({
		currentUser,
		hidden
});
*/

const mapStateToProps = (state) => createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);