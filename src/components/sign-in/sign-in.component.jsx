import React from 'react';
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'

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

    handleSubmit(){

    }

    render(){
        return (
        <form onSubmit={this.handleSubmit}>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <FormInput handleChange={this.handleChange} label="Name" 
            type="email" name="email" value={this.state.email} required/>
            <FormInput handleChange={this.handleChange} label="Password" 
            type="password" name="password" value={this.state.password} required/>
            <CustomButton type="submit">Submit Form</CustomButton>
            <CustomButton onclick={signInWithGoogle}>Sign In With Google</CustomButton>
        </form>
        )
    }
}

export default Signin;