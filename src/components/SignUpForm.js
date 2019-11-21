import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SignUpForm = ({touched, errors, isSubmitting, values }) => {

  
    return(
        <div className='login_form'>
            <Form>
                <Field type='text' name='username' placeholder='Username' value={values.username} />
                {touched.username && errors.username && (<p>{errors.name}</p>)}
                <Field type='password' placeholder='password' name='password' value={values.password} />
                {touched.password && errors.password && (<p>{errors.password}</p>)}
                <Field type='text' name='first_name' placeholder='First name' value={values.first_name} />
                {touched.first_name && errors.first_name && (<p>{errors.first_name}</p>)}
                <Field type='text' name='last_name' placeholder='Last name' value={values.last_name} />
                {touched.last_name && errors.last_name && (<p>{errors.last_name}</p>)}
                <Field type='email' name='email' placeholder='Email'/> 
                {touched.email && errors.email && (<p>{errors.email}</p>)}
                <button type='submit' disabled={isSubmitting}>Sign Up!</button>
            </Form>
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