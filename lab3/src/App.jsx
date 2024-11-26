import {useForm} from 'react-hook-form'
import './App.css'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
function App() {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    name: Yup.string().required('Name is required').min(3, 'Name must be at least 3 characters long'),
    size: Yup.string().required('Size is required'),
    comments: Yup.string().nullable().notRequired()
  });
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(validationSchema), 
    defaultValues: {
      size: 'M'
    }
  })
  const onSubmit = (data) => console.log(data)
 
  const sizes = ["XS", "S", "M", "L", "XL"]

  return (
    <div className='flex flex-col justify-center items-center mt-5'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-1/3 p-5 gap-2 border-black border'>
        <div className='flex flex-col'>
          <label htmlFor="email">Вкажіть пошту</label>
          <input {...register("email")} className='input border border-black w-72' ></input>
          {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
        </div>
        <div className='flex flex-col'>
          <label htmlFor="name">Вкажіть ім'я</label>
          <input {...register("name", {required: true})} className='border border-black w-72'></input>
          {errors.name && <span className='text-red-600'>{errors.name.message}</span>}
        </div>
        <h3>Вкажіть розмір</h3> 
        <div>
          {sizes.map((size, index) => (
            <div key={index} className='w-72'>
              <input type="radio" name="size" value={size} {...register("size")} className='border border-black'></input>
              <label htmlFor='size' className='ml-2'>{size}</label>
            </div>
          ))}
          {errors.size && <span className='text-red-600'>{errors.size.message}</span>}
        </div>
        <span>T-shirt preview</span>
        <img src="/t-shirt.png" alt="t-shirt"/>
        <label htmlFor="comments">Other thoughts or comments</label>
        <input type="text" {...register("comments")} className='border border-black'/>
        {errors.comments && <span className='text-red-600'>{errors.comments.message}</span>}
        <input type='submit' className='border border-black bg-slate-200 cursor-pointer'></input>
      </form>
    </div>
  )
}

export default App
