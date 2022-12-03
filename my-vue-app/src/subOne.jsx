import React from 'react'
import { useForm, Controller,FormProvider,useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { filledInputClasses, TextField } from '@mui/material'

const SubOne = () => {

  const {control,formState:{errors}} = useFormContext();

  return (
    <div>
        <Controller
          name='firstName'   control={control}
          render={({ field }) => (
            <TextField 
            {...field} 
            type="text" 
            id="" 
            label="First Name" 
            variant='outlined'
            error ={!!errors.firstName}
            helperText={errors.firstName ? errors.firstName?.message : ''}
            />

          )}
        />

        <br />
        <Controller
          name='lastName' control={control}
          render={({ field }) => (
            <TextField 
            {...field} 
            type="text" 
            id="" 
            label="lastName" 
            variant='outlined'
            error ={!!errors.lastName}
            helperText={errors.password ? errors.lastName?.message : ''}
            />

          )}
        />
    </div>
  )
}

export default SubOne
