import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    
    
    return(
        <Form>
            <Field type='text' placeholder='Username' name='username' value={login.name}/>
            <Field type='password' placeholder='password' name='password' value={login.password} />
            <button type='submit'>Login</button>
        </Form>
    )
}

export default LoginForm;