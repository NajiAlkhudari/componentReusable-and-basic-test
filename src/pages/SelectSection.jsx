import React ,{useState} from 'react'
import Select from '../components/ui/Select'

const SelectSection = () => {

    const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: '1', label: 'JavaScript' },
    { value: '2', label: 'TypeScript' },
    { value: '3', label: 'C#' },
    { value: '4', label: 'JSX' },

  ];

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <>
 <div className= 'py-16 grid  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  justify-between  items-center  bg-white '>
<div className='xl:px-16'>
              <h1 className='text-sky-700 text-6xl font-bold font-serif'>
              Select  
              </h1>
              <h1 className='text-sky-700 text-6xl font-bold font-serif'>
              Component 
              </h1>

  </div>
<div className='flex flex-wrap  p-10 '>
  <div className='m-4'>
    <Select 
className="bg-black text-white"
 options={options}
 label="Select an option"
  onChange={handleSelectChange} 
 value={selectedOption}
 /></div>
<div className='m-4'>
  <Select 
className="bg-white text-black rounded-lg "
 options={options}
 label="Select an option"
  onChange={handleSelectChange} 
 value={selectedOption}
 />
 </div>
 </div>

</div>

      </>
  );
}

export default SelectSection
