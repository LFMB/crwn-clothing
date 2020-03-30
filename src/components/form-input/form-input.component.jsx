import React from 'react';

import './form-input.styles.scss';


const FormInput = ({handleChange, label, ...otherProps}) => (
	<div className="input-group">
		{ label ?
			<label className={`${
				otherProps.value.length ? 'shrink' : '' 
				} input-label`
			}>
				{label}
			</label>
			: null
		}
		<input 
			className="input"
			onChange={handleChange}
			{...otherProps}
		/>
	</div>	
);


export default FormInput;