"use client"
import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from "yup"
import Link from 'next/link'

const passwordValidator = (message) => {
  return `Your password must have at least 1 ${message} character.`
}


const SignupSchema = Yup.object().shape({
  firstName : Yup.string()
  .min(2, 'Too short!')
  .max(50, 'Too long!')
  .required('Required!'),
  lastName : Yup.string()
  .min(2, 'Too short!')
  .max(50, 'Too long!')
  .required('Required!'),
  email : Yup.string().email('Invalid Email').required("Required"),
  password : Yup.string().required("Please enter your password")
  .min(8, "Password must have at least 8 characters")
  .matches(/[0-9]/, passwordValidator("digit"))
  .matches(/[a-z]/, passwordValidator("lowercase"))
  .matches(/[A-Z]/, passwordValidator("uppercase")),
  confirmPassword : Yup.string()
  .required("Please re-type your password")
  .oneOf([Yup.ref("password")], "Passwords do not match")
})


const RegisterForm = () => {
  const [ error, setError ] = React.useState(null)
  return (
    <div className='mx-auto w-[40rem] max-w-[90%] mt-10'>
      <h1 className='text-center uppercase text-5xl mb-5'>Sign Up</h1>
      <Formik
      initialValues={{
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        confirmPassword : ""
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        setError(null)
        try {
          const user = {
            email : values.email
          }
          const resUserExists = await fetch("/api/userexists", {
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({user})
          })
          const { userEmail } = await resUserExists.json()
          if (userEmail) {
            setError("User already exists")
            return;
          }
        } catch (error){
          console.log(error, "registerform")
        }

        try {
          const res  = await fetch("/api/register", {
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
              firstName : values.firstName,
              lastName : values.lastName,
              email : values.email,
              password : values.password
            })
          })
          if (res.ok) {
            console.log("okay")
            
          }
        } catch(err) {
          console.error(err, "PROBLEM FROM REGISTER")
        }
      }}
      >
        {({ errors, touched, isSubmitting, values }) => (
         <Form className='flex flex-col space-y-3'>
          <div>
            <label>First Name</label>
            <Field name="firstName"  className="forms"/>
            {errors.firstName && touched.firstName ? (
              <div className='text-red-700'>{errors.firstName}</div>
            ) : null}
          </div>
          <div>
           <label>Last Name</label>
           <Field name="lastName" className="forms"/>
           {errors.lastName && touched.lastName ? (
             <div className='text-red-700'>{errors.lastName}</div>
           ) : null}
          </div>
          <div>
           <label>Email</label>
           <Field name="email" type="email" className="forms"/>
           {errors.email && touched.email ? <div className='text-red-700'>{errors.email}</div> : null}
          </div>
          <div>
           <label>Password</label>
           <Field name="password" type="password" className="forms"/>
           {errors.password && touched.password ? <div className='text-red-700'>{errors.password}</div> : null}
          </div>
          <div>
           <label>Confirm Password</label>
           <Field name="confirmPassword" type="password" className="forms"/>
           {errors.confirmPassword && touched.confirmPassword ? <div className='text-red-700'>{errors.confirmPassword}</div> : null}
          </div>
          {
            error && <p className='text-red-500'>the email {values.email} already exists</p>
          }
           <button type="submit" disabled={isSubmitting}  className='w-full text-center bg-green-600 py-2 text-white mt-2 rounded-md focus:outline-none disabled:bg-green-300'>Submit</button>
           <p className='tect-center'>
            Already have an account? <Link href={"/auth/signin"} className='text-green-500'>Login</Link>
           </p>
         </Form>
       )}
      </Formik>
    </div>
  )
}

export default RegisterForm