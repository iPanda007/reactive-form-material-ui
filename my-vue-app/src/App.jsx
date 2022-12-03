import React from 'react'
import {useForm} from 'react-hook-form'

let App = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState:{errors}
  }  = useForm();

  const formSubmitHandler = (data)=>{
    console.log("form data is",data)
  }
  console.log(errors)

  return (
    <div>
         <form onSubmit={handleSubmit(formSubmitHandler)}>
             <input type="email"  {...register('email')} id="" defaultValue={"aungkyawkhaing2000@gmail.com"} />
             <br />
             <input {...register('password',{required:true})} defaultValue={""} type="password"  />
             <br />
              {errors.password && <span>This field is required</span>}
              <br/>
             <button type='submit'>Submit</button>
         </form>
    </div>
  )
} 

export default App
