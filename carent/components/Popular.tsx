import Image from 'next/image'
import React from 'react'

const Popular = () => {
  return (
    <>
    <h1 className='font-bold text-4xl flex justify-center relative top-16 w-full z-10'>Populære valg</h1>
    <div className='w-full inline-flex justify-center bg-gray-50 h-gorilla items-start relative pt-32'>
        <Image src="/car1.png" width={400} height={300} alt='Rusty car'/>
        <Image src="/car2.png" width={400} height={300} alt='Rusty car'/>
        <Image src="/car3.png" width={400} height={300} alt='Rusty car'/>
    </div>
    <div className=''>
      <table>
        <tr>
          <th>Volvo</th>
          <th>Hæ?</th>
          <th>BMW</th>
        </tr>
        <tr>
          <td>KM:</td>
          <td>KM:</td>
          <td>KM:</td>
          <td>Seter:</td>
          <td>Seter:</td>
          <td>Seter:</td>
          <td>Motor:</td>
          <td>Motor:</td>
          <td>Motor:</td>
        </tr>
      </table>
    </div>
    </>
  )
}

export default Popular