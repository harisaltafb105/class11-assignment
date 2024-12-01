import React from 'react'
import Image from 'next/image'

/* giving type to array of objects */
interface CarProps {
    carimage:any,
    carname:string,
    carprice:number,
    carreviews:string,
}
 
interface ChildComponentProps {
   carDetails: CarProps[]
}



const Childcomponent:React.FC<ChildComponentProps> = ({carDetails}) => {
  return (
    <div className='min-h-screen w-full bg-slate-100'>
      <h1 className='text-center p-7 text-4xl font-extrabold text-red-900'> Featured cars</h1>
      
      {/* mobile responsive main div, making one div four div through map function */}
      <div className= 'flex flex-col items-center md:flex md:flex-row md:justify-center md:p-16 md:gap-2 md:min-w-full'>
        
      {
      carDetails.map((car,index)=>{
        return (<div key={index}>
          
          <div className='border-2 shadow-lg border-l-fuchsia-950 mb-7 w-72 h-56 bg-white'>
          <Image src={car.carimage} alt={car.carname} width={300} height={300}></Image>
          </div>
          <div className='flex flex-col items-center '>
          <h2 className='underline text-xl text-red-500'>{car.carname}</h2>
          <p className='underline text-lg text-red-500'>Price: {car.carprice}</p>
          <p className='underline text-lg text-red-500'>{car.carreviews}</p>
          </div>
          
          </div>
        )
      })  
}
    </div>
        </div>
  )}

export default Childcomponent
