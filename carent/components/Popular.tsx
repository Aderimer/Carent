import Image from 'next/image'
import React from 'react'

const Popular = () => {
  return (
    <div className='bg-gray-50 h-gorilla'>
      <h1 className='font-bold text-4xl lg:text-6xl flex justify-center relative top-10 w-full z-10'>Populære valg</h1>

      <div className='inline-flex w-full relative top-32 justify-center gap-2 h-gorilla-cut'>

        <section className='z-20'>
          <Image src="/car1.png" width={400} height={300} alt='Rusty car'/>
          <div className='relative bg-gray-100 rounded-lg left-8 inline-flex font-semibold gap-16 m-5 border-2 flex-row justify-center p-8 w-72 h-56'>
            <ul>
              <li>Merke:</li>
              <li>Seter:</li>
              <li>Hjul:</li>
              <li>KM:</li>
              <li>Motor:</li>
            </ul>
            <ul>
              <li>Volvo</li>
              <li>5</li>
              <li>4</li>
              <li>462 991</li>
              <li>Ja</li>
            </ul>
            <button className='flex-none absolute bottom-2 bg-red-800 text-white p-2 px-8 border-2 rounded-3xl'>Bestill nå</button>
          </div>
        </section>

        <section className='z-20'>
          <Image src="/car2.png" width={400} height={300} alt='Rusty car'/>
          <div className='relative bg-white border-green-400 rounded-lg left-8 inline-flex font-semibold gap-16 m-5 border-2 flex-row justify-center p-8 w-72 h-56'>
            <ul>
              <li>Merke:</li>
              <li>Seter:</li>
              <li>Hjul:</li>
              <li>KM:</li>
              <li>Motor:</li>
            </ul>
            <ul>
              <li>???</li>
              <li>1</li>
              <li>3</li>
              <li>12 328</li>
              <li>Nei</li>
            </ul>
            <button className='flex-none absolute bottom-2 bg-red-700 text-white p-2 px-8 border-2 rounded-3xl'>Bestill nå</button>
          </div>
        </section>

        <section className='z-20'>
          <Image src="/car3.png" width={400} height={300} alt='Rusty car'/>
          <div className='relative bg-slate-50 rounded-lg left-8 inline-flex font-semibold gap-16 m-5 border-2 flex-row justify-center p-8 w-72 h-56'>
            <ul>
              <li>Merke:</li>
              <li>Seter:</li>
              <li>Hjul:</li>
              <li>KM:</li>
              <li>Motor:</li>
            </ul>
            <ul>
              <li>BMW</li>
              <li>5</li>
              <li>4</li>
              <li>112 991</li>
              <li>Ja</li>
            </ul>
            <button className='flex-none absolute bottom-2 bg-red-800 text-white p-2 px-8 border-2 rounded-3xl'>Bestill nå</button>
          </div>
        </section>
                    <Image className='absolute opacity-25 w-full -bottom-80 z-10' src='/swoosh.png' alt='' width={1920} height={1920 } />
      </div>
    </div>
  )
}

export default Popular