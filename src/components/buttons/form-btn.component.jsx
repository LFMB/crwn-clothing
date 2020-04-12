import React from 'react';

import './form-btn.styles.scss';

// might want to rename isGoogleSignIn to SSI aka isSingleSignIn 
const FormBtn = ({children, isGoogleSignIn, ...otherProps}) => (
	<button 
		className={`${isGoogleSignIn ? 'single-sign-in' : ''} button`} 
		{...otherProps}
	>
		{children}
	</button>
)

export default FormBtn;