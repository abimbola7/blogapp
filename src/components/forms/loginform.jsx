"use client"

import React from 'react'
import * as Yup from "yup"
import { Formik, Form, Field } from 'formik'

const loginSchema = Yup.object().shape({
  email : Yup.string().email('Invalid Email').required("Required"),
  password : Yup.string().required("Please enter your password")
})


const LoginForm = () => {
  return (
    <div
    className='mx-auto w-[40rem] max-w-[90%] mt-10'
    >
      <h1 className='text-center uppercase text-5xl mb-5'>Login</h1>
      <Formik
      initialValues={{
        email : "",
        password : "",
      }}
      validationSchema={loginSchema}
      onSubmit={async (values) => {
        console.log(values)
      }}
      >
        {
          ({ errors, isSubmitting, touched, values })=>(
            <Form
            className='flex flex-col space-y-3'
            >
              <div>
                <label>Email</label>
                <Field name="email"  className="forms"/>
                {errors.email && touched.email ? (
                  <div className='text-red-700'>{errors.email}</div>
                ) : null}
              </div>
              <div>
                <label>Password</label>
                <Field name="password"  className="forms"  type="password"/>
                {errors.password && touched.password ? (
                  <div className='text-red-700'>{errors.password}</div>
                ) : null}
              </div>
              <button type="submit" disabled={isSubmitting}  className='w-full text-center bg-green-600 py-2 text-white mt-2 rounded-md focus:outline-none disabled:bg-green-300'>Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default LoginForm