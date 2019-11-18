import React, {useState} from 'react';
const LoginForm = () => {
    const [login, setLogin] = useState([])

    const handleChanges = event => {
        setLogin({...member, [event.target.name]:event.target.value})
    }
    return(
        <form>
            <label>Username: </label>
            <input type='text' placeholder='Username' name='username' value={member.name}/>
            <label>Password: </label>
            <input type='password' placeholder='password' name='password' value={member.password} />
            <button type='submit'>Login</button>
        </form>
    )
}

export default LoginForm;