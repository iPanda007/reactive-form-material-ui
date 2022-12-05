import React from 'react'
import { useForm, Controller,FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { filledInputClasses, TextField } from '@mui/material'
import * as yup from 'yup';
import SubOne from './subOne';
import SubTwo from './subTwo';
import PreviewImg from './preview';


const schema = yup.object().shape({
  firstName:yup.string().required(),
  lastName:yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(20).required(),
})

let App = () => {

  const methods = useForm({
    resolver: yupResolver(schema)
  });


    const {  register,
      handleSubmit,
      watch,
      control,
      formState: { errors }} = methods


  const formSubmitHandler = (data) => {
    console.log("form data is", data)
  }
  console.log(errors)

  return (
    <div>
        {/* <FormProvider {...methods}>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
         <SubOne/>
          <SubTwo/>
        <br />
        <button type='submit'>Submit</button>
      </form>
        </FormProvider> */}
        <PreviewImg/>
    </div>
  )
}

export default App
