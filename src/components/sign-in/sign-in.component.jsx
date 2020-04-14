import React from 'react';

import FormInput from '../form-input/form-input.component';
import FormBtn from '../buttons/form-btn.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';



class SignIn extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;

		try{
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({password: '', email: ''})
		} catch(error){
			console.log(error);
		}

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
		<div className="sign-in component">
			<h2 className="title">Already have account</h2>
			<p className="blurb">Sign in with your email and password </p>

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
				<div className="buttons">
					<FormBtn type="submit">
						Log In
					</FormBtn>
					<FormBtn onClick={signInWithGoogle} isGoogleSignIn >
						Sign In with Google
					</FormBtn>
				</div>

			</form>
		</div>	
		)
	}
}


export default SignIn;
