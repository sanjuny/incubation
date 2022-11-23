import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function AdminLogin() {

  const intialValues = { email: '', password: '' }
  const [formValues, setFormValues] = useState(intialValues)
  const [errorMsg, setErrorMsg] = useState('')

  const navigate = useNavigate()

  const handleChange = (e) => {
    console.log(e.target, 'jhgfd');
    e.preventDefault()
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handlesubmit = async (e) => {
    console.log('call');
    e.preventDefault()
    try {
      if (!formValues.email) {
        setErrorMsg('Email is Required!')
      }else if (!formValues.email.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)){
        setErrorMsg('Email is invalid')
      }else if (!formValues.password) {
        setErrorMsg('Password cannot be empty')
      } else {
         axios.post('http://localhost:7000/admin/adminlogin', { ...formValues }).then((res) => {
          console.log(res,'poooo');
          if (res.data.auth) {
            console.log('zxcvbnm,');
            localStorage.setItem('AdminToken', res.data.token)
            navigate('/approved')
          }
        }).catch((err)=>{
          alert(err.message)
          setErrorMsg(err.message)
        })
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <main
      class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      <section class="flex w-[30rem] flex-col space-y-10">
        <div class="text-center text-4xl font-medium">Admin LogIn</div>
        {errorMsg && <div className="p-2 mb-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert"> {errorMsg}</div>}
        <form onSubmit={handlesubmit}>
          <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="text"
              name='email'
              placeholder="Email or Username"
              value={formValues.email}
              onChange={handleChange}
              class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
          </div>

          <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="password"
              name='password'
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
          </div>

          <button
            class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
            LOG IN
          </button>
        </form>

        <a
          href="#"
          class="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSWORD?</a>
      </section>
    </main>
  )

}

export default AdminLogin
