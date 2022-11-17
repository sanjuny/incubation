import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios'

function Signup() {

    const navigate = useNavigate()

    const intialValues ={username:"", email:"", phone:"", password:"", confirmPassword:""};
    const [formValues, setFormValues] = useState(intialValues);
    const [errors, seterrors] = useState({});
    const [submit, setsubmit] = useState(false);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        seterrors(Validate(formValues));
        setsubmit(true);
        if(Object.keys(errors).length === 0){
            axios.post('http://localhost:7000/signup',{...formValues}).then((res)=>{
                console.log(res,'yuio;');
                navigate('/login')
            })
        }

    }

    useEffect(()=>{
        if(Object.keys(errors).length === 0 && submit){
        }
    },[errors])

    const Validate = (values) => {
        const errors = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const userRegex = /^[A-Za-z0-9_-]{3,15}$/

        if(!values.username){
            errors.username = "Username is required"
          }else if(!userRegex.test(values.username)){
            errors.username= 'Enter a valid username'
          }

          if(!values.email){
            errors.email = "Email is required"
          }else if(!regex.test(values.email)){
            errors.email='Enter a valid email'
          }
      
          if(!values.phone){
            errors.phone = "Phone is required"
          }else if(values.phone.length != 10){
            errors.phone = "Phone must be 10 digits"
          } 

          if(!values.password){
            errors.password = "Password is required"
          }else if(values.password.length <6){
            errors.password ='Password must be more than 6 characters'
          }else if(values.password.length >10){
            errors.password ='Password cannot exceed more than 10 characters'
          }

          // if(!values.confirmPassword){
          //   errors.confirmPassword = "Password is required"
          // }else if(values.password != values.confirmPassword){
          //   errors.password ='Password must be match'
          // }

          return errors
    }

    return (
        <div className='w-full h-screen bg-white flex justify-center items-center'>
                <div class="flex items-center justify-center  bg-white-100 w-3/4">
                    <div class=" px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-3/4 lg:w-3/4 sm:w-3/4">
                        <h3 class="text-2xl font-bold text-center">Signup Form</h3>
                        <form onSubmit={handleSubmit}>
                            <div class="mt-4">
                                <div>
                                    <label class="block" for="Name">Name</label>
                                    <input
                                     type="text"
                                     name="username"
                                     placeholder="Username"
                                     class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                     value={formValues.username}
                                     onChange={handleChange}/>
                                </div>
                                <p className="text-red-600">{errors.username}</p>
                                <div class="mt-4">
                                    <label class="block" for="email">Email</label>
                                    <input 
                                     type="text"
                                     name="email"
                                     placeholder="Email"
                                     class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                     value={formValues.email}
                                     onChange={handleChange}/>
                                </div>
                                <p className="text-red-600">{errors.email}</p>
                                <div class="mt-4">
                                    <label class="block">Phone</label>
                                    <input
                                     type="number"
                                     name="phone"
                                     placeholder="Phone number"
                                     class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                     value={formValues.phone}
                                     onChange={handleChange}/>
                                </div>
                                <p className="text-red-600">{errors.phone}</p>
                                <div class="mt-4">
                                    <label class="block">Password</label>
                                    <input
                                     type="password"
                                     name="password"
                                     placeholder="Password"
                                     class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                     value={formValues.password}
                                     onChange={handleChange}/>
                                </div>
                                <p className="text-red-600">{errors.password}</p>
                                {/* <div class="mt-4">
                                    <label class="block">Confirm Password</label>
                                    <input
                                     type="password"
                                     name="confirmPassword"
                                     placeholder="ConFirmPassword"
                                     class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                     value={formValues.confirmPassword}
                                     onChange={handleChange}/>
                                </div> */}
                                {/* <p className="text-red-600">{errors.confirmPassword}</p> */}
                                <div class="flex">
                                    <button class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Create
                                        Account</button>
                                </div>
                                <div class="mt-6 text-grey-dark">
                                    Already have an account?
                                    <Link to="/login" class="text-blue-600 hover:underline">
                                        Log in
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default Signup
