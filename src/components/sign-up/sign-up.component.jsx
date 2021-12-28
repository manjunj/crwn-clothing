import React from 'react';
import './sign-up.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component'
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';

class Signup extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName:'',
            email:"",
            password:"",
            confirmPassword:''
        };
    }

    handleChange=event=>{
        const {value, name} = event.target;
        this.setState(values => ({...values, [name]: value}));
    }

    handleSubmit=async event=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        if (password!==confirmPassword){
            alert("Passwords do not match.")
        } else{
            try{
                // create user
                const {user} = await auth.createUserWithEmailAndPassword(email, password);
                console.log(user);
                // add profile document
                await createUserProfileDocument(user,{displayName});
                // set state back to empty
                console.log(this.state);
                this.setState({
                    displayName:'',
                    email:"",
                    password:"",
                    confirmPassword:''
                })
            }catch(error){
                console.error(error);
            }
        }
    }

    render(){
        return (
        <div className='sign-up'>
            <h2>I do not have an account</h2>
            <span>Create your account</span>
            <form onSubmit={this.handleSubmit} >
                <FormInput handleChange={this.handleChange} label="Display Name" 
                type="string" name="displayName" value={this.state.displayName} required/>
                <FormInput handleChange={this.handleChange} label="Email" 
                type="email" name="email" value={this.state.email} required/>
                <FormInput handleChange={this.handleChange} label="Password" 
                type="password" name="password" value={this.state.password} required/>
                <FormInput handleChange={this.handleChange} label="Confirm Password" 
                type="password" name="confirmPassword" value={this.state.confirmPassword} required/>
                <CustomButton type="submit">Submit Form</CustomButton>
            </form>
        </div>
        )
    }
}

export default Signup;
