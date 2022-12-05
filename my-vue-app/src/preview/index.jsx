import React,{useState,useEffect} from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  cover: yup.mixed().test("required", "please Select a File", (value) => {
    return value && value.length;
  }),
});

const PreviewImg = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
    watch,
  } = methods;

  const formSubmit = (data) => {
    console.log(data.cover["0"].name);
  };

     
  const [image,setImage] = useState('')



  useEffect(()=>{
     convert()
  },[watch('cover')?.["0"].name])

  const convert = ()=>{
    let fileUpload =  watch('cover')?.["0"] 
      if(fileUpload){
          let preview = URL.createObjectURL(fileUpload)
           if(fileUpload.type.includes("image")){
               setImage(preview)
           }
        console.log(preview)
      }

  }

 
  
  
  
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <input type="file"  {...register("cover")} id="fileUpload"></input>
      {!watch("cover") || watch("cover")?.length === 0 && view ? (
        <>
          <label htmlFor="fileUpload">
            <div>Aung kyaw khaing</div>
          </label>
          {errors.cover && <span>{errors.cover?.message}  </span>}
        </>
      ) : (
        <>
        <span onClick={()=>resetField('cover')}>close</span>
          <label htmlFor="fileUpload">
            {image && <img src={image}/>}
        
          </label>
          {errors.cover && <span>{errors.cover?.message} </span>}
          
        </>
      )}

      <button type="submit">done</button>
    </form>
  );
};

export default PreviewImg;
