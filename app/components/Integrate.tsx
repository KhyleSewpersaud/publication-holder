import React from 'react'
import Google from "../../public/google.png"
import Image from 'next/image'

const Integrate = () => {
  return (
    <section className='flex flex-col items-center'>
        <div className="divider"></div>
        <h3>Integrate to Your Website</h3>
        <div className='flex'>
            <Image src={Google} width={200} alt="Temp Company" />
            <Image src={Google} width={200} alt="Temp Company" />
            <Image src={Google} width={200} alt="Temp Company" />

        </div>
        <div className="divider"></div>
    </section>
  )
}

export default Integrate