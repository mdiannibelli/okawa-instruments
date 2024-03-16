import React from 'react'
import { NavLink } from 'react-router-dom'
const items = [
    {
        title: 'Orgy of the Damned by SLASH',
        descp: 'Listen to the Latest Single, “Killing Floor” feat. Brian Johnson Now',
        img: 'https://images.ctfassets.net/m8onsx4mm13s/6UtXG4LmdkqO9SbMSBtur3/ddea14f9f323997aecb0654232df2d4f/Slash-OOTD_33Module.jpg',
        btn: 'Listen Now',
        link: 'https://gibsonrecords.lnk.to/killingfloor'
    },
    {
        title: 'Gibson Mod™ Collection',
        descp: 'Rarities. Exclusives. Customized one-off guitar mods.',
        img: 'https://images.ctfassets.net/m8onsx4mm13s/1Z7Cwomc5kDqvw0MHwZQQ0/1f5d0be3a575a27ea4a860d6e9cf12be/ModCollection-A_33Module.jpg',
        btn: 'Shop Now',
        link: '/store'
    },
    {
        title: '1958 ES-335 REISSUES, MURPHY LAB AGED',
        descp: 'Striking limited edition reissues of the very first ES-335',
        img: 'https://images.ctfassets.net/m8onsx4mm13s/2fgCP7o5bnxdNSGPFX2GFt/042f6e951f636d5690e5b53003e8e970/Gibson-1958-ES-335-ML_33Module.jpg',
        btn: 'Shop Now',
        link: '/store'
    }
]

export default function HorizontalCarrousel() {
  return (
    <section className='md:max-w-[1024px] xl:max-w-[1280px] flex justify-center mx-auto mt-12 mb-8'>
        <div className='flex flex-col justify-between items-center lg:items-stretch lg:flex-row gap-4'>
            {items.map((item, i) => (
                <div key={i} className='flex flex-col md:flex-row lg:flex-col px-4 md:p-0 md:w-[728px] lg:w-full lg:min-w-[331px] xl:min-w-[416px] xl:min-h-[440px]'> 
                <div className='w-full'>
                    <img src={item.img} alt={item.name} className='object-cover h-full md:h-[232px] w-full bg-center'/>
                </div>
                <div className='bg-black p-8 w-full h-full flex flex-col justify-center'>
                    <div className='h-full'>
                        <h1 className='text-xl text-white font-black'>{item.title}</h1>
                        <p className='text-xs text-white font-bold'>{item.descp}</p>
                    </div>
                    <div className='bg-secondary hover:bg-bgcolor duration-300 px-4 py-4 flex items-center justify-center mt-8 cursor-pointer'>
                        <NavLink to={item.link} className='text-md text-white font-semibold uppercase'>{item.btn}</NavLink>
                    </div>
                </div>
                </div> 
            ))}
        </div>
    </section>
  )
}
