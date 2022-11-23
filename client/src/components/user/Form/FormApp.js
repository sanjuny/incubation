import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

function Form() {

  const [errorMessage, setErrorMessage] = useState('')
  const intialValues = { name: "", address: "", city: "", email: "", phone: "", company_name: ""};
  const [formValues, setFormValues] = useState(intialValues);

  let user = JSON.parse(localStorage.getItem('user'))  
  console.log(user._id,'user');
  const logout = () =>{
    alert('are you sure want to logout')
    localStorage.removeItem('userToken')
    // removeCookie("token");
    navigate('/login')
  }

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValues.name) {
      setErrorMessage("Name is required")
    } else if (formValues.name.length < 3) {
      setErrorMessage("Name must be atleast 3 characters")
    } else if (!formValues.name.match(/^[A-Za-z][A-Za-z ]*$/)) {
      setErrorMessage("Enter a valid name")
    } else if (!formValues.address) {
      setErrorMessage("Address is required")
    } else if (!formValues.city) {
      setErrorMessage("City is required")
    } else if (!formValues.email) {
      setErrorMessage("Email is required")
    } else if (!formValues.email.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
      setErrorMessage("Enter a valid email")
    } else if (!formValues.phone) {
      setErrorMessage("Phone is required")
    } else if (formValues.phone.match(/[^0-9]/g)) {
      setErrorMessage("Enter a valid Phone number")
    } else if (formValues.phone.length !== 10) {
      setErrorMessage("Phone must be 10 characters");
    } else if (!formValues.company_name) {
      setErrorMessage("Company name is required");
    } else {
      axios.post('http://localhost:7000/form', { ...formValues , userId: user._id}).then((res) => {
        console.log(res, 'hellllooo');
        navigate('/homepage')
      }).catch((err) => {
        alert('Your One Application Already In pending.... Please try again later ')
        console.log('error');
      })
    }

  }
  return (
    <div className="p-2 justify-center">
      <button onClick={logout} type="button" className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out float-right">Log Out</button>
      <div className='flex justify-center'>
        <div className='flex justify-center border rounded-lg w-fit bg-gradient-to-r from-gray-600 to-gray-300'>

          <form onSubmit={handleSubmit} className='m-20'  >
            <h1 className='text-black-600 font-bold text-4xl mb-8 border-b-2  border-white-300'>Application Form </h1>
            <div className="grid-cols-1   w-full flex-col md:grid-cols-2 gap-2 p-5">
              <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                <input type="text" name="name" placeholder='Name *' className='bg-gray-100 outline-none text-sm flex-1 py-1' value={formValues.name} onChange={(e)=>{handleChange(e)} }required />
              </div>
              <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                <input type="text" name="address" placeholder='Address*' className='bg-gray-100 outline-none text-sm flex-1 py-1' value={formValues.address} onChange={(e)=>{handleChange(e)} } required />
              </div>
              <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                <input type="text" name="city" placeholder='city*' className='bg-gray-100 outline-none text-sm flex-1 py-1' value={formValues.city} onChange={(e)=>{handleChange(e)} } required />
              </div>

              <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                <input type="text" name="email" placeholder='Email *' className='bg-gray-100 outline-none text-sm flex-1 py-1' value={formValues.email} onChange={(e)=>{handleChange(e)} } required />
              </div>
              <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                <input type="number" name="phone" placeholder='Phone no*' className='bg-gray-100 outline-none text-sm flex-1 py-1' value={formValues.phone} onChange={(e)=>{handleChange(e)} } required />
              </div>
              <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                <input type="text" name="company_name" placeholder='Company Name*' className='bg-gray-100 outline-none text-sm flex-1 py-1' value={formValues.company_name} onChange={(e)=>{handleChange(e)} } required />
              </div>
            </div>
            {errorMessage && <div className="p-2 mb-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert"> {errorMessage}</div>}
            <div className='px-5 w-fit mx-auto pb-5'>
              <button type='submit' className='border-2 text-black-800 border-white-200 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-400 hover:text-white'>Submit</button>
            </div>


          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
