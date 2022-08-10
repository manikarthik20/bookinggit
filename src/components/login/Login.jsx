import React, { useState } from 'react';
import '../login/Login.css';
import FormInput from '../register/Forminput';
import axios from 'axios';

function Login() {

    //const [backend, setBackend] = useState("");
    const [logins, setLogins] = useState({
        userName: "",
        password: "",
    });
    const loginDetails = [
        {
            id: 1,
            name: "userName",
            type: "text",
            placeholder: "Username",
            errorMessage: "UserName Should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            pattern: `^[A-Za-z0-9]{3,16}$`,
            required: true,

        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password Should be 8-20 characters and innclude at least 1 letter , 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        }
    ]


    // useEffect(() => {

    //         axios.get(`http://localhost:8083/all`)
    //         .then(response => {
    //          response.data.map((res) => setBackend(res.userName))
    //         })
    //         console.log(backend)

    //   }, []);


    const handleLoginChange = (e) => {
        e.preventDefault();
        setLogins({
            ...logins, [e.target.name]: e.target.value,
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8083/all`)
            .then(response => {
                response.data.map((res) => {
                    const container = {};
                    if (  res.userName === logins.userName && res.password === logins.password) {
                        container.username = res.userName;
                        container.password = res.password;
                        localStorage.setItem("username", res.userName)
                        localStorage.setItem("password", res.password)
                        alert("Sucessfully login into your account   "+res.userName);
                        window.location.replace('/');
                    }
                    // else{
                    //     alert(res.userName+' on this name there is no account register till now')
                    // }
                    console.log(container);})})
            .catch(error => {
                console.log(error)
            })
    }

    //    const submitHandler = (e) => {
    //     e.preventDefault();
    //     console.log(values);
    //     axios.post('http://localhost:8083/saveUser', values)
    //         .then(response => {
    //             console.log(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }


    return (
        <div className='loginApp'>
            <div >
                <form onSubmit={submitHandler} className='loginForm'>
                    <h1 className='loginHeader'>Login</h1>
                    {loginDetails.map((login) => (
                        <FormInput key={login.id}
                            {...login} value={logins[login.name]}
                            onChange={handleLoginChange}
                        />
                    ))}
                    <button className='loginButton' type='Submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
