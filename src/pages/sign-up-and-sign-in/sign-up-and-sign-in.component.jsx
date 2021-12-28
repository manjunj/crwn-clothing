import React from 'react';
import './sign-up-and-sign-in.styles.scss';
import Signin from '../../components/sign-in/sign-in.component'
import Signup from '../../components/sign-up/sign-up.component'

const SignUpSignin = ()=>(
<div className='sign-in-and-sign-up'>
    <Signin />
    <Signup />
</div>
)

export default SignUpSignin;