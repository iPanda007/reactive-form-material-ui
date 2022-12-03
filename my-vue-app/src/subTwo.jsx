import React from 'react'
import { useForm, Controller,FormProvider,useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { filledInputClasses, TextField } from '@mui/material'

const SubTwo = () => {
    const {control,formState:{errors}} = useFormContext();
  return (
    <div>
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
        <Controller
          name='password' control={control}
          render={({ field }) => (
            <TextField 
            {...field} 
            type="password" 
            id="" 
            label="Password" 
            variant='outlined'
            error ={!!errors.password}
            helperText={errors.password ? errors.password?.message : ''}
            />

          )}
        />
    </div>
  )
}

export default SubTwo
