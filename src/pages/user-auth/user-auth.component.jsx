import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './user-auth.styles.scss';


const UserAuth = () => (
	<div className="page-content">
		<h1 className='page-title'>User Auth</h1>
		<div className='row'>
			<SignIn />
			<SignUp />
		</div>
	</div>
);


export default UserAuth;