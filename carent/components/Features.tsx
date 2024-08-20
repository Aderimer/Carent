import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className='relative w-full inline-flex justify-center gap-12 h-gorilla-cut items-center bottom-15'>

      <section className='border-r-2 rounded-xl flex items-center justify-center flex-col w-64 h-3/4'>
        <Image height={150} width={150} src='creditcard.svg' alt='Fixed prices' />
        <h3 className='font-bold text-xl'>Fleksibel betaling</h3>
        <p className='w-orangutan p-2'>Hos oss kan du betale med alt fra bitcoin, kontanter, kort eller flasker.</p>
      </section>

      <section className='border-r-2 rounded-xl flex items-center justify-center flex-col w-64 h-3/4'>
        <Image height={120} width={110} src='lock.svg' alt='Fixed prices' />
        <h3 className='font-bold text-xl'>Hent når du vil</h3>
        <p className='w-orangutan p-2'>Våre biler står alltid ulåst og klar for å kjøres.</p>
      </section>

      <section className='border-r-2 rounded-xl flex items-center justify-center flex-col w-64 h-3/4'>
        <Image height={150} width={150} src='ambulanse.svg' alt='Fixed prices' />
        <h3 className='font-bold text-xl'>Vi bæcker deg</h3>
        <p className='w-orangutan p-2'>Hos oss dekker vi alle ambulansekostnader når en ulykke oppstår.</p>
      </section>

      <section className='flex items-center justify-center flex-col w-64 h-3/4'>
        <Image height={150} width={150} src='clock.svg' alt='Fixed prices' />
        <h3 className='font-bold text-xl'>Sen levering?</h3>
        <p className='w-orangutan p-2'>Ikke noe problem! Vi vil helst ikke ha tilbake bilene, de er ikke våre.</p>
      </section>

    </div>
  )
}

export default Features