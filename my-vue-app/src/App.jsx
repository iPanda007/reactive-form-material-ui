import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { filledInputClasses, TextField } from '@mui/material'
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(20).required(),
})

let App = () => {

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const formSubmitHandler = (data) => {
    console.log("form data is", data)
  }
  console.log(errors)

  return (
    <div>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Controller
          name='email'  defaultValue="aungkyawkhaing2000@gmail.com"  control={control}
          render={({ field }) => (
            <TextField 
            {...field} 
            type="email" 
            id="" 
            label="Email" 
            variant='outlined'
            error ={!!errors.email}
            helperText={errors.email ? errors.email?.message : ''}
            />

          )}
        />

        <br />
        <input className={`${errors.password && 'red'}`} {...register('password', { required: true })} defaultValue={""} type="password" />
        <br />
        {errors.password && <span>{errors.password.message}</span>}
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
