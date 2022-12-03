import React from 'react'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password:yup.string().min(4).max(20).required(),
})

let App = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState:{errors}
  }  = useForm({
    resolver:yupResolver(schema)
  });

  const formSubmitHandler = (data)=>{
    console.log("form data is",data)
  }
  console.log(errors)

  return (
    <div>
         <form onSubmit={handleSubmit(formSubmitHandler)}>
             <input type="email"  {...register('email')} id="" defaultValue={"aungkyawkhaing2000@gmail.com"} />
             <br />
             <input className={`${errors.password && 'red'}`} {...register('password',{required:true})} defaultValue={""} type="password"  />
             <br />
              {errors.password && <span>{errors.password.message}</span>}
              <br />
             <button type='submit'>Submit</button>
         </form>
    </div>
  )
} 

export default App
