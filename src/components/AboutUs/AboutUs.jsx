import React from 'react'
import SocialMedia from './SocialMedia'

export default function AboutUs() {
  return (
    <>
    <section className='max-w-auto md:max-w-[640px] lg:max-w-[840px] xl:max-w-[1140px] mx-auto py-20'>
        <div className='flex flex-col gap-y-8'>
            <header className='flex flex-col gap-y-6 mt-12 md:mt-0'>
                <h1 className='text-2xl px-4 md:px-0 md:text-5xl uppercase text-gray-800'>About Okawa</h1>
                <p className='text-md md:text-lg max-w-5xl p-4 md:p-0'>Welcome to Okawa, your premier destination for all things musical! Nestled in the heart of a bustling city, Okawa has been a cornerstone of the local music community since its establishment in 1995. With a passion for craftsmanship and a commitment to excellence, we offer a diverse selection of instruments ranging from classic guitars and pianos to cutting-edge synthesizers and DJ equipment. Our knowledgeable staff, comprised of seasoned musicians and industry experts, is dedicated to providing personalized assistance to every customer, whether they're a seasoned pro or a budding enthusiast. At Okawa, we believe that music is more than just notes on a page—it's a universal language that brings people together and enriches lives. Come visit us and let us help you find the perfect instrument to unlock your musical potential.</p>
                <hr />
            </header>
            <article>
                <h1 className='text-3xl font-medium text-gray-800 px-2 md:px-0'>Saul Hudson (Slash)</h1>
                <h2 className='text-lg font-regular text-gray-800 px-2 md:px-0'>President & Main Guitarist</h2>
                <p>
                    <img src="/imgs/slash-modern.jpg" alt="slash" className='w-[880px] object-cover h-auto' />
                </p>
                <p className='font-medium text-gray-800 text-xs md:text-lg p-4 md:p-0 md:max-w-5xl md:mt-4'>Born into a family of musicians, Slash, the visionary behind Okawa, developed a deep-seated love for music from an early age. Growing up surrounded by the melodious tunes of his parents' jazz band, Slash' fascination with musical instruments and their craftsmanship blossomed into a lifelong passion. Despite initially pursuing a career in finance, Slash' heart always remained tethered to the world of music.</p>
                <p className='font-medium text-gray-800 text-xs md:text-lg p-4 md:p-0 md:max-w-5xl md:mt-4'>After years of working in corporate finance, Slash couldn't shake the feeling that something was missing. Longing to combine his financial acumen with his love for music, he embarked on a journey to realize his dream of creating a haven for musicians—a place where artistry and commerce intersected harmoniously. Thus, in the vibrant year of 1995, Okawa was born.</p>
                <p className='font-medium text-gray-800 text-xs md:text-lg p-4 md:p-0 md:max-w-5xl md:mt-4'>From its humble beginnings as a small storefront tucked away in a quaint alley, Okawa quickly gained recognition for its commitment to quality and customer service. Drawing upon his background in finance, Slash meticulously curated an inventory of instruments that not only showcased exceptional craftsmanship but also catered to the diverse needs of musicians across genres.</p>
                <p className='font-medium text-gray-800 text-xs md:text-lg p-4 md:p-0 md:max-w-5xl md:mt-4'>As Okawa flourished, Slash' role expanded beyond that of a mere founder. Assuming the mantle of President and Financial Officer, he steered the company through triumphs and tribulations with unwavering determination. His keen business acumen and passion for music served as guiding beacons, propelling Okawa to new heights of success.</p>
                <p className='font-medium text-gray-800 text-xs md:text-lg p-4 md:p-0 md:max-w-5xl md:mt-4'>Under Slash' leadership, Okawa became more than just a music store—it evolved into a cultural hub, fostering a sense of community among musicians of all backgrounds. Whether it was hosting workshops led by renowned artists or sponsoring local music events, Okawa was firmly entrenched in the fabric of the city's musical landscape.</p>
                <p className='font-medium text-gray-800 text-xs md:text-lg p-4 md:p-0 md:max-w-5xl md:mt-4'>Throughout the years, Slash' commitment to excellence never wavered. He remained actively involved in every aspect of Okawa's operations, from selecting the finest instruments to nurturing relationships with customers and suppliers alike. His dedication to fostering a supportive environment for musicians earned Okawa a reputation as not just a retailer, but a trusted ally in their artistic journey.</p>
                <p className='font-medium text-gray-800 text-xs md:text-lg p-4 md:p-0 md:max-w-5xl md:mt-4'>As Okawa continues to thrive, Slash remains steadfast in his belief that music has the power to transcend boundaries and inspire change. With a firm foundation built on passion, integrity, and a love for music, he looks forward to the next chapter in Okawa's journey, where innovation and creativity will continue to reign supreme.</p>
            </article>
        </div>
    </section>
    <SocialMedia/>
    </>
  )
}
