import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginForm = ({touched, errors, isSubmitting, values }) => {
    
  
    return(
        <div className='login_form container'>
            <Form>
                <Field type='text' name='username' placeholder='Username' value={values.username} />
                {touched.username && errors.username && (<p>{errors.name}</p>)}
                <Field type='password' placeholder='password' name='password' value={values.password} />
                {touched.password && errors.password && (<p>{errors.password}</p>)}
                <button className="waves-effect waves-light btn" type='submit' disabled={isSubmitting}>Login</button>
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
        password: Yup.string().required('Password is required!').min(7, 'Password must be 8 characters')
    }),
    handleSubmit(values, {resetForm, setSubmitting, setStatus, props}){
        axios.post('https://pintereach-backend.herokuapp.com/auth/login', values)
        .then(response => {
            console.log(response);
            resetForm();
            setSubmitting(false);
            setStatus(response.data);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("id", response.data.id);
            if (!localStorage.getItem("savedArticles")) {
                localStorage.setItem("savedArticles", [])
            }
            props.history.push("/profile")

        })
        .catch(error => console.log(error));
        setSubmitting(false);
    }
    
})(LoginForm)

export default superLoginForm;