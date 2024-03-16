import React from 'react'

export default function SocialMedia() {
  return (
    <section className='flex flex-col md:flex-row p-4 bg-[#F7F8FA] py-12 justify-around'>
        <div className='flex flex-col'>
            <h1 className='text-3xl font-black uppercase'>Sign up for news & offers</h1>
            <div className='flex flex-col'>
            <a href="#" className='bg-black py-2 text-center uppercase font-bold text-white text-xl mt-4'>Subscribe</a>
            <span className='text-xs'>By submitting this form, you agree to our Terms & Conditions and Privacy Policy.</span>
            </div>
        </div>
        <div className='flex flex-col justify-center gap-y-4'>
            <h3 className='text-md font-black'>Follow us:</h3>
            <div className='flex gap-x-4'>
                <a><img src="https://images.ctfassets.net/m8onsx4mm13s/7z1pAOQBLHEuVOVM6LRPcx/b780b4f8014da92d2580f7ee4e2db124/icon-instagram.svg" alt="instagram" className='size-10' /></a>
                <a><img src="https://images.ctfassets.net/m8onsx4mm13s/35Oaae1J6dqWxeuNAvrNwa/b25005683fd9757a05a84e4178b83512/icon-twitter.svg" alt="twitter" className='size-10' /></a>
                <a><img src="https://images.ctfassets.net/m8onsx4mm13s/StLA124Qs8nCQs8QAfEhs/ee76f7cd2e1231ff501e87a86adfb078/icon-youtube.svg" alt="youtube" className='size-10' /></a>
                <a><img src="https://images.ctfassets.net/m8onsx4mm13s/4LXqNqHU1A4TwofkuQiyTG/eafd61f24af8995e99e8e23f9e348952/icon-facebook.svg" alt="facebook" className='size-10' /></a>
                <a><img src="https://images.ctfassets.net/m8onsx4mm13s/4wAHtxp4Tw35DxLOA1jgcM/6e020e6de55d1e02c088b32752763df5/icon-msg.svg" alt="forum" className='size-10' /></a>
            </div>
        </div>
    </section>
  )
}
