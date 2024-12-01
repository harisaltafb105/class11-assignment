import React from 'react';
import Childcomponent from './Childcomponent';
import Image from 'next/image';


const Parentcomponent = () => {
 interface Cars{
    carimage:any,
    carname:string,
    carprice:number,
    carreviews:string,
}
/* Array of objects */
const cars: Cars[] =[
    {carimage: "/Hondacity2.jpg" ,carname: 'Honda City',carprice: 6000000, carreviews: '621 reviews'  },
    {carimage: "/Hondacivic1.jpg" ,carname: 'Honda Civic',carprice: 8000000, carreviews: '221 reviews' },
    {carimage: "/Suzukialto.jpg" ,carname: 'Suzuki Alto',carprice: 3000000, carreviews: '300 reviews' },
    {carimage:"/toyotacorolla.jpg" ,carname: 'Toyota Corolla',carprice: 6000000, carreviews: '423 reviews' }
]




  return (
    <div>
      
        <Childcomponent 
        carDetails ={cars} /*transfer of array of objects data through props in child component */
        />
    </div>
  )

}

export default Parentcomponent