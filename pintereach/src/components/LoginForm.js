import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginForm = ({touched, errors, isSubmitting, status, values }) => {
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    useEffect(()=> {
        status && setLogin(login =>[...login, status])
    },[status]);
    
    
    return(
        <div className='login_form'>
            <Form>
                <Field type='text' name='username' placeholder='Username' value={values.username} />
                {touched.username && errors.username && (<p>{errors.name}</p>)}
                <Field type='password' placeholder='password' name='password' value={values.password} />
                {touched.password && errors.password && (<p>{errors.password}</p>)}
                <button type='submit' disabled={isSubmitting}>Login</button>
            </Form>
        </div>
    )
}

const superLoginForm = withFormik({
    mapPropsToValues({username,password}){
        return {
            username: username || '',
            password: password || '',
        };
    },

    validationSchema:Yup.object().shape({
        username: Yup.string().required('Username is required!'),
        password: Yup.string().required('Password is required!').min(8, 'Password must be 8 characters')
    }),
    handleSubmit(values, {resetForm, setErrors, setSubmitting, setStatus}){
        axios.post('https://pintereach-backend.herokuapp.com/auth/login', values)
        .then(response => {
            console.log(response);
            resetForm();
            setSubmitting(false);
            setStatus(response.data);
        })
        .catch(error => console.log(error));
        setSubmitting(false);
    }
    
})(LoginForm)

export default superLoginForm;