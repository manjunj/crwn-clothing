import React from 'react';
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

class Signin extends React.Component{
    constructor(){
        super()
        this.state = {
            email:"",
            password:""
        }
    }

    handleChange=(event)=>{
        event.preventDefault();
        const {value, name} = event.target;
        this.setState(values => ({...values, [name]: value}));
    }

    handleSubmit=async event=>{
        const {email,password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
        } catch(error){
            console.log(error);
        }
        this.setState({email:"",password:""});
    }


    render(){
        return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit} >
                <FormInput handleChange={this.handleChange} label="Email" 
                type="email" name="email" value={this.state.email} required/>
                <FormInput handleChange={this.handleChange} label="Password" 
                type="password" name="password" value={this.state.password} required/>
                <div className ="buttons">
                <CustomButton type="submit">Submit Form</CustomButton>
                <CustomButton type ="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
        )
    }
}

export default Signin;