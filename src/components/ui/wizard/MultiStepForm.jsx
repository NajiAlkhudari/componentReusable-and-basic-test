import React, { useState } from "react";
  import Button from "../Button";
  import TextInput from "../TextInput/TextInput";


const Step1 = ({ data, handleChange, next }) => (
  
    <form className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-violet-300">Personal Info</h1>
      </div>
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
      <TextInput type="text" placeholder="name" name="name" value={data.name} onChange={handleChange} className="bg-white text-black mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
    </div>
    <div>
      <label htmlFor="email" className="  block text-sm font-medium text-gray-700">Email:</label>
      <TextInput type="email"  placeholder="name@example.com" name="email" value={data.email} onChange={handleChange} className="bg-white  text-black mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
    </div>
    <Button onclick={next} className="btn btn-warning">Next</Button>
    
  </form>
);

const Step2 = ({ data, handleChange, print, back }) => (
  <form>
      <div>
        <h1 className="text-xl font-bold text-violet-300">Additional Info</h1>
      </div>
    <label htmlFor="street" className="block text-sm font-medium text-gray-700">Street:</label>
    <TextInput type="text" name="street" value={data.street} onChange={handleChange}
    className="bg-white text-black mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  />
    <label htmlFor="city" className="block text-sm font-medium text-gray-700">City:</label>
    <TextInput type="text" name="city" value={data.city} onChange={handleChange}
    className="bg-white text-black mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  />
    <label htmlFor="postcode" className="block text-sm font-medium text-gray-700">Postcode:</label>
    <TextInput type="number" name="postcode" value={data.postcode} onChange={handleChange}
  className="bg-white text-black mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  />
    <div className="flex space-x-8 mt-4"> 
    <Button onclick={back} className="btn btn-warning">Back</Button>
    <Button type="button" onclick={print} className="btn btn-warning">Print</Button></div>
   

  </form>
);



const MultiStepForm = () => {
  const [currentPage, setPage] = useState(1);
  const [data, setData] = useState({ name: "", email: "", street: "", city: "", postcode: "", comments: "" });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const nextPage = () => setPage((prev) => ++prev);
  const prevPage = () => setPage((prev) => --prev);

  const printData = () => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto my-10">
   
      {currentPage === 1 && <Step1 data={data} handleChange={handleChange} next={nextPage} />}
      {currentPage === 2 && <Step2 data={data} handleChange={handleChange} print={printData} back={prevPage} />}
    </div>
  );
};

export default MultiStepForm;
