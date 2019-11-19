import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

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
                <Field type='text' name='username' placeholder='Username'/>
                {touched.username && errors.username && (<p>{errors.name}</p>)}
                <Field type='password' placeholder='password' name='password'/>
                {touched.password && errors.password && (<p>{errors.password}</p>)}
                <button type='submit' disabled={isSubmitting}>Login</button>
            </Form>
        </div>
    )
}

const superLoginForm = withFormik({
    mapPropsToValues({name,password}){
        return {
            name: name || '',
            password: password || '',
        };
    },
    
})

export default LoginForm;