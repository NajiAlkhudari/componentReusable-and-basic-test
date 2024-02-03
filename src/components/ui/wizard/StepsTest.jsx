import React ,{useState , useEffect} from 'react'
 import Button from "../Button";
 import TextInput from "../TextInput/TextInput";
 import { useForm } from "react-hook-form";
 import { yupResolver } from "@hookform/resolvers/yup";
 import * as yup from "yup";
 import { IoCheckmarkDoneSharp } from "react-icons/io5";



 const steps =[
  {
    id : 1,
    title : "personal Info",
  },
  {
id : 2,
title : "additional" ,
  },
 ];

let personalSchema = yup.object().shape({
  name: yup.string().required("name is required"),
  email : yup.string().email("Email is not valid").required("email is required"),
});

let additionalSchema = yup.object().shape({
  street : yup.string().required("street is required"),
  city : yup.string().required("city is required"),
  postcode : yup.string()
  .length(5)
  .matches(/^[0-9]{5}/)
  .required('postcode is required'),
});

const StepsTest = () => {
  const [stepNumber, setStepNumber] = useState(0);

  // find current step schema
  let currentStepSchema;
  switch (stepNumber) {
    case 0:
      currentStepSchema = personalSchema;
      break;
    case 1:
      currentStepSchema = additionalSchema;
      break;
    default:
      currentStepSchema = personalSchema;
  }

  useEffect(() => {
    console.log("step number changed", stepNumber);
  }, [stepNumber]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    resolver: yupResolver(currentStepSchema),
    // keep watch on all fields
    mode: "all",
  });

  const onSubmit = (data) => {
    // next step until last step . if last step then submit form
    let totalSteps = steps.length;
    const isLastStep = stepNumber === totalSteps - 1;
    if (isLastStep) {
      console.log(data);
    } else {
      setStepNumber(stepNumber + 1);
    }
  };

  const handlePrev = () => {
    setStepNumber(stepNumber - 1);
  };
  return (
    <>
<div className='pt-16 grid  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1  justify-between items-center bg-gray-900 '>

<div className=' '>
              <h1 className='text-gray-200 text-6xl font-bold font-serif'>
              Wizaed  Component
              </h1>
             

  </div>
 

    <div className="  xl:px-96  my-10">
    <div className="flex z-[5] items-center relative justify-center md:mx-8 pb-12"  >
            {steps.map((item, i) => (
              <div
                className="relative z-[1] items-center item flex flex-start flex-1 last:flex-none group"
                key={i}
              >
                <div
                  className={`${
                    stepNumber >= i
                      ? "bg-slate-900 text-white ring-slate-900 ring-offset-2 dark:ring-offset-slate-500 dark:bg-slate-900 dark:ring-slate-900"
                      : "bg-white ring-slate-900 ring-opacity-70  text-slate-900 dark:text-slate-300 dark:bg-slate-600 dark:ring-slate-600 text-opacity-70"
                  }  transition duration-150 icon-box md:h-12 md:w-12 h-7 w-7 rounded-full flex flex-col items-center justify-center relative z-[66] ring-1 md:text-lg text-base font-medium`}
                >
                  {stepNumber <= i ? (
                    <span> {i + 1}</span>
                  ) : (
                    <span className="text-3xl">
                       <IoCheckmarkDoneSharp />  
                    </span>
                  )}
                </div>

                <div
                  className={`${
                    stepNumber >= i
                      ? "bg-slate-900 dark:bg-white"
                      : "bg-[#E0EAFF] dark:bg-slate-700"
                  } absolute top-1/2 h-[2px] w-full`}
                ></div>
                <div
                  className={` ${
                    stepNumber >= i
                      ? " text-slate-900 dark:text-slate-300"
                      : "text-slate-500 dark:text-slate-300 dark:text-opacity-40"
                  } absolute top-full text-base md:leading-6 mt-3 transition duration-150 md:opacity-100 opacity-0 group-hover:opacity-100`}
                >
                  <span className="w-max">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
    <form onSubmit={handleSubmit(onSubmit)}>
              
            {stepNumber === 0 &&(
              <>
               
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                <TextInput type="text" placeholder="name" name="name"     error={errors.name}     register={register}
                className="bg-white text-black mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="  block text-sm font-medium text-gray-700">Email:</label>
                <TextInput type="email"  placeholder="name@example.com" name="email"     error={errors.email}  register={register}
                 className="bg-white  text-black mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              </>
            )}
            {stepNumber === 1 && (
              <>
               
<div>
<label htmlFor="street" className="block text-sm font-medium text-gray-700">Street:</label>
               <TextInput type="text" name="street"     error={errors.street}   register={register}
               className="bg-white text-black mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  />
</div>
<div>
<label htmlFor="city" className="block text-sm font-medium text-gray-700">City:</label>
               <TextInput type="text" name="city"     error={errors.city}  register={register}
               className="bg-white text-black mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  />
</div>
     <div>
     <label htmlFor="postcode" className="block text-sm font-medium text-gray-700">Postcode:</label>
               <TextInput type="number" name="postcode"     error={errors.postcode} register={register}
                 className="bg-white text-black mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  />
     </div>

               </>

            )}
            
            <div
                className={`${
                  stepNumber > 0 ? "flex justify-between" : " text-right"
                } mt-10`}
              >
                {stepNumber !== 0 && (
                  <Button
                    className="btn btn-warning px-6"
                    onClick={handlePrev}
                  >
                    prev
                    </Button>
               
                )}
                <Button
                    className="btn btn-warning px-6"
                  type="submit"
              >
{stepNumber !== steps.length - 1 ? "next" : "submit"}
                </Button>
              
              </div>
</form>      
    </div>
</div>
   </>
  )
}

export default StepsTest
