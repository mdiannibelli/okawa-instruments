import { NavLink } from "react-router-dom"

const carrousels = [
    /* {
        title: 'Gibson Custom Murphy Lab',
        desc: "1959 Les Paul Standard Reissue Limited Edition Murphy Lab Aged Brazilian Rosewood, select the exact guitar you want – you'll only find these on Gibson.com",
        img: 'https://images.ctfassets.net/m8onsx4mm13s/5y6dQRg0TbbyYSgWAKVUb0/dcf0d445eb434bb511c3dbd779463b6d/Serialized59LP_50Module.jpg'
    },
    {
        title: 'SG Supreme',
        desc: 'With a AAA-grade figured maple top, Burstbucker Pro pickups, and a striking mother-of-pearl headstock inlay inspired by an original Gibson design from the Art Deco era, this isn’t just an electric guitar; it’s a statement.',
        img: 'https://images.ctfassets.net/m8onsx4mm13s/6rpdmnZYfiSJTZsAsmsmyT/6ade00aeb312a8d24aa7cfd8637a6b6c/LP-Supreme-DTC_50Module.jpg'
    },
    {
        title: 'Exclusive Acoustic Guitars',
        desc: 'Unique builds and color options for acoustic guitars that stand out from the crowd. You won’t find these Exclusive acoustic guitars available anywhere else.',
        img: 'https://images.ctfassets.net/m8onsx4mm13s/7zVXV0tt1d0v2TVsx7s2cr/845e6508ae25a9cc63a72303a86c2c94/Acoustic-Excl_50Module.jpg'
    },
    {
        title: 'Les Paul Modern Studio',
        desc: 'A No-Nonsense, High-Performance Tone Machine',
        img: 'https://images.ctfassets.net/m8onsx4mm13s/1bvqQt8ZMCRJ220xTktqCl/3b500e48318ada488473b64ac247ea62/LP-ModStudio_50Module.jpg'
    } */
]

export default function SecondCarrousel() {
  return (
    <>
    {/* FIRST WRAPPER */}
    <section className="min-h-full">
        <div className="flex flex-col md:flex-row  justify-between max-w-[1280px] mx-auto overflow-hidden gap-4 p-4 lg:p-0 mb-4">
            {/* First Container */}
                <div className="flex flex-col lg:flex-row min-h-[200px] lg:max-h-[230px]">
                    <div className="relative w-full min-w-full max-w-[380px] md:min-w-fit lg:max-w-[315px] h-full">
                        <img src='https://i.postimg.cc/7hdGYJ71/Gibson-Falcon-5-and-20-50-Module.jpg' alt='gibson' className="h-full w-full md:max-w-[380px] lg:max-w-[315px] lg:min-w-full object-cover bg-center"/>
                    </div>
                    <div className="bg-black w-full md:max-w-[380px] lg:max-w-[315px]">
                        <div className="flex justify-center flex-col m-6">
                        <h1 className="font-black text-white text-2xl">Gibson Amplifiers Are Back</h1>
                        <p className="font-bold text-white text-xs mt-2 max-w-sm">The Falcon 5 and Falcon 20 reimagine vintage tone for the modern guitar player</p>
                        <div className='bg-secondary hover:bg-bgcolor duration-300 px-4 py-2 flex items-center justify-center mt-4 cursor-pointer'>
                        <NavLink to='/store' className='text-md text-white font-semibold uppercase'>Shop Now</NavLink>
                        </div>
                        </div>
                    </div>
                </div>

            {/* Second Container */}
                <div className="flex flex-col lg:flex-row min-h-[200px] lg:max-h-[230px]">
                    <div className="relative w-full min-w-full max-w-[380px] md:min-w-fit lg:max-w-[315px] h-full">
                        <img src='https://i.postimg.cc/BZV1Cky8/1959-ES355-50-Module.jpg' alt='custom' className="h-full w-full md:max-w-[380px] lg:max-w-[315px] lg:min-w-full object-cover bg-center"/>
                    </div>
                    <div className="bg-black w-full md:max-w-[380px] lg:max-w-[315px]">
                        <div className="flex justify-center flex-col m-6">
                        <h1 className="font-black text-white text-2xl">New Customs and Exclusives</h1>
                        <p className="font-bold text-white text-xs mt-2 max-w-sm">Shop our latest exclusive finishes and Gibson Custom creations</p>
                        <div className='bg-secondary hover:bg-bgcolor duration-300 px-4 py-2 flex items-center justify-center mt-4 cursor-pointer'>
                        <NavLink to='/store' className='text-md text-white font-semibold uppercase'>Shop Now</NavLink>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>

    {/* SECOND WRAPPER */}
    <section className="min-h-full">
    <div className="flex flex-col md:flex-row  justify-between max-w-[1280px] mx-auto overflow-hidden gap-4 p-4 lg:p-0 mb-4">
            {/* Third Container */}
                <div className="flex flex-col lg:flex-row min-h-[200px] lg:max-h-[230px]">
                    <div className="relative w-full min-w-full max-w-[380px] md:min-w-fit lg:max-w-[315px] h-full">
                        <img src='https://i.postimg.cc/YqLLD8Kd/Serialized59-LP-50-Module.jpg' alt='custom-murphy' className="h-full w-full md:max-w-[380px] lg:max-w-[315px] lg:min-w-full object-cover bg-center"/>
                    </div>
                    <div className="bg-black w-full md:max-w-[380px] lg:max-w-[315px]">
                        <div className="flex justify-center flex-col m-6">
                        <h1 className="font-black text-white text-2xl">Gibson Custom Murphy Lab</h1>
                        <p className="font-bold text-white text-xs mt-2 max-w-sm">1959 Les Paul Standard Reissue Limited Edition Murphy Lab Aged Brazilian Rosewood, select the exact guitar you want – you'll only find these on Gibson.com</p>
                        <div className='bg-secondary hover:bg-bgcolor duration-300 px-4 py-2 flex items-center justify-center mt-4 cursor-pointer'>
                        <NavLink to='/store' className='text-md text-white font-semibold uppercase'>Shop Now</NavLink>
                        </div>
                        </div>
                    </div>
                </div>

            {/* Fourth Container */}
                <div className="flex flex-col lg:flex-row min-h-[200px] lg:max-h-[230px]">
                    <div className="relative w-full min-w-full max-w-[380px] md:min-w-fit lg:max-w-[315px] h-full">
                        <img src='https://i.postimg.cc/nh8jy7np/LP-Supreme-DTC-50-Module.jpg' alt='sg' className="h-full w-full md:max-w-[380px] lg:max-w-[315px] lg:min-w-full object-cover bg-center"/>
                    </div>
                    <div className="bg-black w-full md:max-w-[380px] lg:max-w-[315px]">
                        <div className="flex justify-center flex-col m-6">
                        <h1 className="font-black text-white text-2xl">SG Supreme</h1>
                        <p className="font-bold text-white text-xs mt-2 max-w-sm">With a AAA-grade figured maple top, Burstbucker Pro pickups, and a striking mother-of-pearl headstock inlay inspired by an original Gibson design from the Art Deco era, this isn’t just an electric guitar; it’s a statement.</p>
                        <div className='bg-secondary hover:bg-bgcolor duration-300 px-4 py-2 flex items-center justify-center mt-4 cursor-pointer'>
                        <NavLink to='/store' className='text-md text-white font-semibold uppercase'>Shop Now</NavLink>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>

     {/* THIRD WRAPPER */}
    <section className="min-h-full">
        <div className="flex flex-col md:flex-row  justify-between max-w-[1280px] mx-auto overflow-hidden gap-4 p-4 lg:p-0 mb-12">
                {/* Fifht Container */}
                <div className="flex flex-col lg:flex-row min-h-[200px] lg:max-h-[230px]">
                    <div className="relative w-full min-w-full max-w-[380px] md:min-w-fit lg:max-w-[315px] h-full">
                        <img src='https://i.postimg.cc/mgQzBDrM/Acoustic-Excl-50-Module.jpg' alt='acoustic' className="h-full w-full md:max-w-[380px] lg:max-w-[315px] lg:min-w-full object-cover bg-center"/>
                    </div>
                    <div className="bg-black w-full md:max-w-[380px] lg:max-w-[315px]">
                        <div className="flex justify-center flex-col m-6">
                        <h1 className="font-black text-white text-2xl">Exclusive Acoustic Guitars</h1>
                        <p className="font-bold text-white text-xs mt-2 max-w-sm">Unique builds and color options for acoustic guitars that stand out from the crowd. You won’t find these Exclusive acoustic guitars available anywhere else.</p>
                        <div className='bg-secondary hover:bg-bgcolor duration-300 px-4 py-2 flex items-center justify-center mt-4 cursor-pointer'>
                        <NavLink to='/store' className='text-md text-white font-semibold uppercase'>Shop Now</NavLink>
                        </div>
                        </div>
                    </div>
                </div>

                {/* Sixth Container */}
                <div className="flex flex-col lg:flex-row min-h-[200px] lg:max-h-[230px]">
                    <div className="relative w-full min-w-full max-w-[380px] md:min-w-fit lg:max-w-[315px] h-full">
                        <img src='https://i.postimg.cc/HLdJxgJN/LP-Mod-Studio-50-Module.jpg' alt='studio' className="h-full w-full md:max-w-[380px] lg:max-w-[315px] lg:min-w-full object-cover bg-center"/>
                    </div>
                    <div className="bg-black w-full md:max-w-[380px] lg:max-w-[315px] flex justify-between py-6">
                        <div className="flex flex-col justify-between">
                            <div className="flex justify-center flex-col m-6">
                                <h1 className="font-black text-white text-2xl">Les Paul Modern Studio</h1>
                                <p className="font-bold text-white text-xs mt-2 max-w-sm">A No-Nonsense, High-Performance Tone Machine</p>
                            </div>
                        <div className="px-4">
                            <div className='bg-secondary hover:bg-bgcolor duration-300 px-4 py-2 flex items-center justify-center mt-4 cursor-pointer'>
                                <NavLink to='/store' className='text-md text-white font-semibold uppercase'>Shop Now</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
