import React from 'react';

import FormInput from '../form-input/form-input.component';
import FormBtn from '../buttons/form-btn.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';



class SignIn extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = event => {
		event.preventDefault();

		this.setState({
			email: '',
			password: ''
		});
	}


	handleChange = event => {
		const { value, name } = event.target;

		this.setState({[name]: value})
	}

	render(){
		return (
		<div className="sign-in">
			<h3>Already have account</h3>
			<p>Sign in with your email and password </p>

			<form onSubmit={this.handleSubmit}>

				<FormInput 
					name="email"
					type="email"
					label="Email"
					value={this.state.email}
					handleChange={this.handleChange}
					required
				/>
				
				<FormInput
					name="password"
					type="password"
					label="Password"
					value={this.state.password}
					handleChange={this.handleChange}
					required 
				/>
				
				<FormBtn type="submit">
					Log In
				</FormBtn>
				<FormBtn onClick={signInWithGoogle}>
					Sign In with Google
				</FormBtn>

			</form>
		</div>	
		)
	}
}


export default SignIn;
