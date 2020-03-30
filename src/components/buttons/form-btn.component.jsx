import React from 'react';

import './form-btn.styles.scss';


const FormBtn = ({children, ...otherProps}) => (
	<button className="button" {...otherProps}>
		{children}
	</button>
)

export default FormBtn;