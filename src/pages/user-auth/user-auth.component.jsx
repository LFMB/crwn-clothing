import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';

import './user-auth.styles.scss';


const UserAuth = () => (
	<div className="user-auth">
		<h3>User Auth</h3>
		<SignIn />
	</div>
);


export default UserAuth;