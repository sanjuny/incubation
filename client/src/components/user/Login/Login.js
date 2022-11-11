import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Login() {
    const intialValues = {email:"", password:""};
    const [formValues, setFormValues] = useState(intialValues);
    const [errors, seterrors] = useState({});
    const [submit, setsubmit] = useState(false);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value});
    }

    const handleSubmit = (e) =>{
        console.log('dfghgfh');
        e.preventDefault();
        seterrors(Validate(formValues));
        setsubmit(true);
    }

    useEffect(()=>{
        if(Object.keys(errors).length === 0 && submit){  
        }
    },[errors])

    const Validate = (values) =>{
        const errors = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const userRegex = /^[A-Za-z0-9_-]{3,15}$/

        if(!values.email){
            errors.email = "Email is required"
          }else if(!regex.test(values.email)){
            errors.email='Enter a valid email'
          }

          if(!values.password){
            errors.password = "Password is required"
          }else if(values.password.length <6){
            errors.password ='Password must be more than 6 characters'
          }else if(values.password.length >10){
            errors.password ='Password cannot exceed more than 10 characters'
          }

          return errors
    }
    return (
        <div className='w-full h-screen bg-white flex justify-center items-center'>
            <div className='h-3/4 w-3/4 bg-gray-300  flex justify-center items-center rounded-2xl'>
                <section class="h-screen">
                    <div class="px-6 h-full text-gray-800">
                        <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                            <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login Form</h2>
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="w-full" alt="Sample image" />
                            </div>
                            <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form onSubmit = {handleSubmit}>
                                    <div class="mb-6">
                                    <p className="text-red-600">{errors.email}</p>
                                        <input
                                            type="text"
                                            name="email"
                                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleFormControlInput2"
                                            placeholder="Email address"
                                            value={formValues.email}
                                            onChange={handleChange}/>
                                    </div>
                                    <div class="mb-6">
                                    <p className="text-red-600">{errors.password}</p>
                                        <input
                                            type="password"
                                            name="password"
                                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleFormControlInput2"
                                            placeholder="Password"
                                            value={formValues.password}
                                            onChange={handleChange}/>
                                    </div>
                                    <div class="flex justify-between items-center mb-6">
                                        <div class="form-group form-check">
                                            <input
                                                type="checkbox"
                                                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                id="exampleCheck2"/>
                                            <label class="form-check-label inline-block text-gray-800" for="exampleCheck2">Remember me</label>
                                        </div>
                                        <a href="#!" class="text-gray-800">Forgot password?</a>
                                    </div>

                                    <div class="text-center lg:text-left">
                                        <button
                                            class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Login
                                        </button>
                                        <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                            Don't have an account?
                                            <Link to="/signup" className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">Register</Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default Login
