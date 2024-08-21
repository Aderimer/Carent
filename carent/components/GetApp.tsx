import Image from 'next/image'
import React from 'react'

const GetApp = () => {
  return (
    <>
    <h1 className='flex w-full justify-center text-4xl font-bold relative top-10'>Last ned appen vår!</h1>

    <section className='w-full flex-row relative left-gorilla top-20'>
      <h2 className='text-xl w-gorilla'>Få tilgang til funksjoner du ikke trenger, nyhetsbrev, personlige tilbud og masse mer!</h2>
      <p className=' text-gray-200 w-gorilla'>*Ved å laste ned denne appen godtar du våre bruksvilkår. All bruk av applikasjonen skjer på eget ansvar og informasjon du oppgir vil bli videresolgt.</p>
    </section>

    <div className='h-gorilla-cut w-full justify-center relative top-40 flex'>
      <Image className='h-40 w-gorilla-cut cursor-grab' src="/gplay_badge_generic.png" height={0} width={400} alt='Fake Google Play download badge' />
      <Image className='h-28 relative top-6 cursor-grab w-gorilla-cut' src="/astore_badge_generic.svg" height={80} width={350} alt='Fake App Store download badge' />
    </div>
    </>
  )
}

export default GetApp