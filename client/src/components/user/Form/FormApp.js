import React, { useState } from 'react'
import axios from 'axios'

function Form() {

  const intialValues = { name: "", address: "", city: "", email: "", phone: "", company_name: "" };
  const [formValues, setFormValues] = useState(intialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = (e) => {
    axios.post('http://localhost:7000/form', { ...formValues }).then((res) => {
      console.log(res, 'hellllooo');
    })

  }
  return (
    <div className="p-2 justify-center">
      <button type="button" className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out float-right">Log Out</button>
      <div className='flex justify-center'>
        <div className='flex justify-center border rounded-lg w-fit bg-gradient-to-r from-gray-600 to-gray-300'>

          <form onSubmit={handleSubmit} className='m-20'  >
            <h1 className='text-black-600 font-bold text-4xl mb-8 border-b-2  border-white-300'>Application Form </h1>
            <div className="grid-cols-1   w-full flex-col md:grid-cols-2 gap-2 p-5">
              <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                <input type="text" name="name" placeholder='Name *' className='bg-gray-100 outline-none text-sm flex-1 py-1' value={formValues.name} onChange={handleChange} required />
              </div>
              <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                <input type="text" name="address" placeholder='Address*' className='bg-gray-100 outline-none text-sm flex-1 py-1' value={formValues.address} onChange={handleChange} required />
              </div>
              <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                <input type="text" name="city" placeholder='city*' className='bg-gray-100 outline-none text-sm flex-1 py-1' value={formValues.city} onChange={handleChange} required />
              </div>

              <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                <input type="text" name="email" placeholder='Email *' className='bg-gray-100 outline-none text-sm flex-1 py-1' value={formValues.email} onChange={handleChange} required />
              </div>
              <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                <input type="text" name="phone" placeholder='Phone no*' className='bg-gray-100 outline-none text-sm flex-1 py-1' value={formValues.phone} onChange={handleChange} required />
              </div>
              <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                <input type="text" name="company_name" placeholder='Company Name*' className='bg-gray-100 outline-none text-sm flex-1 py-1' value={formValues.company_name} onChange={handleChange} required />
              </div>
            </div>
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
