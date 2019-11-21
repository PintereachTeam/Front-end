import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import background from '../img/background.jpg'

const LoginForm = ({touched, errors, isSubmitting, values }) => {
    
  
    return(
        <div style={{height:'100vh', width: '100%', background: 'black', position: 'absolute', zIndex: '-1'}}>
            <img src={background} alt='libraryimage' style={{width: '100%',height: '100vh', position:'absolute' , zIndex:'-1', right:'0%', opacity: '0.8' }}/>
        <div className='login_form container deep-purple darken-3' style={{width: '30%', height: '300px', margin: '70px auto', padding:'80px'}}>
            <Form>
            <h2 style={{color:'white', fontSize:'30px', marginBottom:'15px'}}>Welcome to Pinterech</h2>
                <Field style={{textAlign: 'center', width: '80%'}} type='text' name='username' placeholder='Username' value={values.username} />
                <Field style={{textAlign: 'center', width: '80%'}} type='password' placeholder='Password' name='password' value={values.password} />
                {touched.username && errors.username && (<p>{errors.name}</p>)}
                {touched.password && errors.password && (<p>{errors.password}</p>)}
                <br/>
                <button className="waves-effect waves-light btn" type='submit' disabled={isSubmitting}>Login
                <i className="material-icons right">send</i>
                </button>
            </Form>
        </div>
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
                localStorage.setItem("savedArticles", JSON.stringify([]))
            }
            props.history.push("/profile")

        })
        .catch(error => console.log(error));
        setSubmitting(false);
    }
    
})(LoginForm)

export default superLoginForm;