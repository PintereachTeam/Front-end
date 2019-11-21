import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import background from '../img/background.jpg'

const SignUpForm = ({touched, errors, isSubmitting, values }) => {

  
    return(

        <div style={{height:'100vh', width: '100%', background: 'black', position: 'absolute', zIndex: '-1'}}>
        <img src={background} alt='libraryimage' style={{width: '100%',height: '100vh', position:'absolute' , zIndex:'-1', right:'0%', opacity: '0.8' }}/>
    <div className='login_form container deep-purple darken-3' style={{width: '30%', height: '550px', margin: '70px auto', padding:'80px', borderRadius:'10px'}}>
        <Form>
        <h2 style={{color:'white', fontSize:'30px', marginBottom:'15px'}}>Welcome to Pinterech</h2>
            <Field style={{textAlign: 'center', width: '80%'}} type='text' name='first_name' placeholder='First name' value={values.first_name} />
             {touched.first_name && errors.first_name && (<p>{errors.first_name}</p>)}
             <Field style={{textAlign: 'center', width: '80%'}} type='text' name='last_name' placeholder='Last name' value={values.last_name} />
             {touched.last_name && errors.last_name && (<p>{errors.last_name}</p>)}
             <Field style={{textAlign: 'center', width: '80%'}} type='email' name='email' placeholder='Email'/> 
            {touched.email && errors.email && (<p>{errors.email}</p>)}
            <Field style={{textAlign: 'center', width: '80%'}} type='text' name='username' placeholder='Username' value={values.username} />
            <Field style={{textAlign: 'center', width: '80%'}} type='password' placeholder='Password' name='password' value={values.password} />
            {touched.username && errors.username && (<p>{errors.name}</p>)}
            {touched.password && errors.password && (<p>{errors.password}</p>)}
            <br/>
            <button style={{margin: '15px'}} className="waves-effect waves-light btn" type='submit' disabled={isSubmitting}>Sign Up
            <i className="material-icons right">send</i>
            </button>
        </Form>
    </div>
    </div>
    )
}

const superSignUpForm = withFormik({
    mapPropsToValues({username,password,first_name,last_name,email}){
        return {
            username: username || '',
            password: password || '',
            first_name: first_name || '',
            last_name: last_name || '',
            email: email || '',
        };
    },

    validationSchema:Yup.object().shape({
        username: Yup.string().required('Username is required!'),
        password: Yup.string().required('Password is required!').min(7, 'Password must be 8 characters'),
        first_name: Yup.string().required('First name is required!'),
        last_name: Yup.string().required('Last name is required!'),
        email: Yup.string().required('Email address is required!')
    }),
    handleSubmit(values, {resetForm, setSubmitting, setStatus, props}){
        axios.post('https://pintereach-backend.herokuapp.com/auth/register', values)
        .then(response => {
            console.log(response);
            resetForm();
            setSubmitting(false);
            setStatus(response.data);
            props.history.push("/login")
        })
        .catch(error => console.log(error));
        setSubmitting(false);
    }
    
})(SignUpForm)

export default superSignUpForm;