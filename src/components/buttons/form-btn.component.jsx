import React from 'react';

import './form-btn.styles.scss';

// might want to rename isGoogleSignIn to SSI aka isSingleSignIn 
const FormBtn = ({
	children, 
	isGoogleSignIn,
	inverted,
	 ...otherProps
}) => (
	<button 
		className={`
			${inverted ? 'inverted' : '' }
			${isGoogleSignIn ? 'single-sign-in' : ''} 
			button`} 
		{...otherProps}
	>
		{children}
	</button>
)

export default FormBtn;