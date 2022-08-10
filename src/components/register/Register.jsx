import React, { useState } from 'react'
import '../register/Register.css';
import axios from 'axios';
//import RegisterInput from './RegisterInput';
import FormInput from './Forminput';







const Register = () => {

 
    const [values, setValues] = useState({
        userName: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
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
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It Should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday"
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password Should be 8-20 characters and innclude at least 1 letter , 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "ConfirmPassword",
            errorMessage: "Passwords don't match",
            label: "ConfirmPassword",
            pattern: values.password,
            required: true,
        },
    ]


    const handleInputChange = e => {
        e.preventDefault();
        setValues({
            ...values, [e.target.name]: e.target.value,
        })
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(values);
        axios.post('http://localhost:8083/saveUser', values)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='registerApp'>
          <div>
          <form onSubmit={submitHandler} className='registerForm'>
                <h1 className='registerHeader'>Register</h1>
                {inputs.map((input) => (
                    <FormInput key={input.id}
                        {...input} value={values[input.name]}
                        onChange={handleInputChange} />
                ))}
                <button className='registerButton' type='Submit'>Submit</button>
            </form>
          </div> 
        </div>

    )
}

export default Register;
