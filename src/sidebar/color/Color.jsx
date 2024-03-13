import Input from "../../components/Categories/Input";
import { useCart } from "../../context/useContext";
export default function Color() {
    const {handleChange} = useCart();
    return (
        <div>
            <h1 className='font-sora text-md font-semibold text-filter border-b-2 pb-2 uppercase'>Color</h1>
            <div className='items-center mt-4 mb-2'>
                <label className='categories cursor-pointer relative select-none'>
                    <input type="radio" onChange={handleChange} value='' name='test4' className='absolute cursor-pointer'/>
                    <span className='checkmark top-1 left-0 absolute h-[16px] w-[16px] bg-[#eee] border-[2px] border-filter'></span>
                    <span className='font-sora text-filter text-xs ml-6'>All</span>
                </label>

            </div>
            <div className='flex flex-col gap-y-2 mt-2'>
                <Input
                name='test4'
                value='https://images.ctfassets.net/m8onsx4mm13s/5QChjllWMCAA1BwWRKi6El/39c585bfdb4a8be5ac88ecf9a594a484/Vintage_Sunburst__Murphy_Lab_Heavy_Aged.png'
                title='Vintage Sunburst'
                color='https://images.ctfassets.net/m8onsx4mm13s/5QChjllWMCAA1BwWRKi6El/39c585bfdb4a8be5ac88ecf9a594a484/Vintage_Sunburst__Murphy_Lab_Heavy_Aged.png'
                />
                <Input
                name='test4'
                value='https://images.ctfassets.net/m8onsx4mm13s/5LyRF92YTm9WahIcldyCrg/81a64cb9501ee633cf512767352a6a4b/Cherry_Murphy_Lab_-_NG.JPG'
                title='Cherry'
                color='https://images.ctfassets.net/m8onsx4mm13s/5LyRF92YTm9WahIcldyCrg/81a64cb9501ee633cf512767352a6a4b/Cherry_Murphy_Lab_-_NG.JPG'
                />
                <Input
                name='test4'
                value='https://images.ctfassets.net/m8onsx4mm13s/64QorrYJZuBYdG4CmCLFoU/8dfeeb192e1d6b79582c9d29476e4b91/Translucent_Fuschia.png'
                title='Translucent Fuschia'
                color='https://images.ctfassets.net/m8onsx4mm13s/64QorrYJZuBYdG4CmCLFoU/8dfeeb192e1d6b79582c9d29476e4b91/Translucent_Fuschia.png'
                />
                <Input
                name='test4'
                value='https://images.ctfassets.net/m8onsx4mm13s/54oMXSKudUWWX3ACqwbD3Z/480f9c04a0f9c7f6932ad549b2d363ba/__static.gibson.com_product-images_USA_USARIR238_Blueberry_Burst_Blueberry_Burst.jpg'
                title='Blueberry Burst'
                color='https://images.ctfassets.net/m8onsx4mm13s/54oMXSKudUWWX3ACqwbD3Z/480f9c04a0f9c7f6932ad549b2d363ba/__static.gibson.com_product-images_USA_USARIR238_Blueberry_Burst_Blueberry_Burst.jpg'
                />
                <Input
                name='test4'
                value='https://images.ctfassets.net/m8onsx4mm13s/gSTG7R27bgnVYmlY6nxHt/adb127a4a8508a50e0e40265522fc522/Vintage_Honey_Burst.PNG'
                title='Vintage Honey Burst'
                color='https://images.ctfassets.net/m8onsx4mm13s/gSTG7R27bgnVYmlY6nxHt/adb127a4a8508a50e0e40265522fc522/Vintage_Honey_Burst.PNG'
                />
                <Input
                name='test4'
                value='https://images.ctfassets.net/m8onsx4mm13s/1YqlO7SUjDWP0jM1tBqmVb/9154ec4f3aa91acf94db476a057c5ea0/__static.gibson.com_product-images_Acoustic_ACCN8H793_Vintage_Cherry_Sunburst_Vintage_Cherry_Sunburst.jpg'
                title='Vintage Cherry Sunburst'
                color='https://images.ctfassets.net/m8onsx4mm13s/1YqlO7SUjDWP0jM1tBqmVb/9154ec4f3aa91acf94db476a057c5ea0/__static.gibson.com_product-images_Acoustic_ACCN8H793_Vintage_Cherry_Sunburst_Vintage_Cherry_Sunburst.jpg'
                />
                <Input
                name='test4'
                value='https://images.ctfassets.net/m8onsx4mm13s/6FFMEKJXRlliRXe2KM7xKp/d70cc4b784d0542938a4f458d8a78ceb/__static.gibson.com_product-images_Demo_DMOEUU944_Heritage_Cherry_Sunburst_Heritage_Cherry_Sunburst.jpg'
                title='Heritage Cherry Sunburst'
                color='https://images.ctfassets.net/m8onsx4mm13s/6FFMEKJXRlliRXe2KM7xKp/d70cc4b784d0542938a4f458d8a78ceb/__static.gibson.com_product-images_Demo_DMOEUU944_Heritage_Cherry_Sunburst_Heritage_Cherry_Sunburst.jpg'
                />
                <Input
                name='test4'
                value='https://images.ctfassets.net/m8onsx4mm13s/5nhegDB5SGFPIXx9L3byQL/70ada9c6a5164269e887c63e103569d2/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_thumbnail.png'
                title='Tobacco Burst'
                color='https://images.ctfassets.net/m8onsx4mm13s/5nhegDB5SGFPIXx9L3byQL/70ada9c6a5164269e887c63e103569d2/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_thumbnail.png'
                />
                <Input
                name='test4'
                value='https://i.gyazo.com/be5f2e58d458d03c2ec898948c313004.png'
                title='Sunburst'
                color='https://i.gyazo.com/be5f2e58d458d03c2ec898948c313004.png'
                />
                <Input
                name='test4'
                value='https://i.gyazo.com/1c09d1551ceb1a51a57b9fd588f2d1ea.png'
                title='Amethyst'
                color='https://i.gyazo.com/1c09d1551ceb1a51a57b9fd588f2d1ea.png'
                />
                <Input
                name='test4'
                value='https://i.gyazo.com/be8ecdd18e661df38cb4f0bcff00532e.png'
                title='Arce Flameado'
                color='https://i.gyazo.com/be8ecdd18e661df38cb4f0bcff00532e.png'
                />
                <Input
                name='test4'
                value='https://i.gyazo.com/528078bdcfbb7f39dfd51b2a30c034cc.png'
                title='Mars Mocha Heirloom'
                color='https://i.gyazo.com/528078bdcfbb7f39dfd51b2a30c034cc.png'
                />
                <Input
                name='test4'
                value='https://i.gyazo.com/ad5c49ac01e13cfed3a636f3af9030e6.png'
                title='Candy Apple Red'
                color='https://i.gyazo.com/ad5c49ac01e13cfed3a636f3af9030e6.png'
                />
                <Input
                name='test4'
                value='https://i.gyazo.com/5180e8af19fea7e9ed5e19c062d16c6e.png'
                title='Fiesta Red'
                color='https://i.gyazo.com/5180e8af19fea7e9ed5e19c062d16c6e.png'
                />
                <Input
                name='test4'
                value='https://i.gyazo.com/6c9379e1a182b3facfbcbe4addfd3c31.png'
                title='Black'
                color='https://i.gyazo.com/6c9379e1a182b3facfbcbe4addfd3c31.png'
                />
                <Input
                name='test4'
                value='https://i.gyazo.com/05be463742ad4b63f959c05a5eac5cf1.png'
                title='Sea Foam Green'
                color='https://i.gyazo.com/05be463742ad4b63f959c05a5eac5cf1.png'
                />
                <Input
                name='test4'
                value='https://i.gyazo.com/b4d21d16a44240bcc403276b95896ef8.png'
                title='Olympic Pearl'
                color='https://i.gyazo.com/b4d21d16a44240bcc403276b95896ef8.png'
                />
                <Input
                name='test4'
                value='https://i.gyazo.com/ed6f36a526b66282e38b7a9c990a80e3.png'
                title='Olympic White'
                color='https://i.gyazo.com/ed6f36a526b66282e38b7a9c990a80e3.png'
                />
                <Input
                name='test4'
                value='https://i.gyazo.com/a58b5c3a7b10546218ac85407c8859e7.png'
                title='Dark Night'
                color='https://i.gyazo.com/a58b5c3a7b10546218ac85407c8859e7.png'
                />
                <Input
                name='test4'
                value='https://i.gyazo.com/0452474819498d7d06bf903f2f1821a1.png'
                title='Red Wood'
                color='https://i.gyazo.com/0452474819498d7d06bf903f2f1821a1.png'
                />
                <Input
                name='test4'
                value='https://i.gyazo.com/7a87c731951496360a5cbf41e9c72fa0.png'
                title='Solid Wood'
                color='https://i.gyazo.com/7a87c731951496360a5cbf41e9c72fa0.png'
                />
                <Input
                name='test4'
                value='https://images.ctfassets.net/m8onsx4mm13s/2osFGPDYoRNI5CvHyBXlA3/0703360ae165ff243edeca1dac0547d9/__static.gibson.com_product-images_Epiphone_EPI1TY333_Dark_Wine_Red_Wine_Red.jpg'
                title='Wine Red'
                color='https://images.ctfassets.net/m8onsx4mm13s/2osFGPDYoRNI5CvHyBXlA3/0703360ae165ff243edeca1dac0547d9/__static.gibson.com_product-images_Epiphone_EPI1TY333_Dark_Wine_Red_Wine_Red.jpg'
                />
                <Input
                name='test4'
                value='https://images.ctfassets.net/m8onsx4mm13s/0vaxV31R39Xra6P3659lKT/617c1e6c6992946cba9c2bca0aed9dc5/__static.gibson.com_product-images_Epiphone_EPIB4J646_Fireburst_Fireburst.jpg'
                title='Fireburst'
                color='https://images.ctfassets.net/m8onsx4mm13s/0vaxV31R39Xra6P3659lKT/617c1e6c6992946cba9c2bca0aed9dc5/__static.gibson.com_product-images_Epiphone_EPIB4J646_Fireburst_Fireburst.jpg'
                />
                <Input
                name='test4'
                value='https://images.ctfassets.net/m8onsx4mm13s/5kRR2OithHQNtFGesNVtBr/b2b24b15c67bf2334f0796a2b99ab407/RAM019784-swatch.jpg'
                title='Brunswick Blue'
                color='https://images.ctfassets.net/m8onsx4mm13s/5kRR2OithHQNtFGesNVtBr/b2b24b15c67bf2334f0796a2b99ab407/RAM019784-swatch.jpg'
                />
                <Input
                name='test4'
                value='https://images.ctfassets.net/m8onsx4mm13s/5O4gyJHCRpGdEkSpvhVzgv/dabf743b4da1989a727f411b4f997e69/__static.gibson.com_product-images_Epiphone_EPINKN592_Vintage_Cherry_Vintage_Cherry.jpg'
                title='Vintage Cherry'
                color='https://images.ctfassets.net/m8onsx4mm13s/5O4gyJHCRpGdEkSpvhVzgv/dabf743b4da1989a727f411b4f997e69/__static.gibson.com_product-images_Epiphone_EPINKN592_Vintage_Cherry_Vintage_Cherry.jpg'
                />
                <Input
                name='test4'
                value='https://chapmanguitars.s3.eu-west-1.amazonaws.com/wp-content/uploads/2023/06/07090045/wp-thumb-mop-150x150.jpg'
                title='Morpheus Flip Gloss'
                color='https://chapmanguitars.s3.eu-west-1.amazonaws.com/wp-content/uploads/2023/06/07090045/wp-thumb-mop-150x150.jpg'
                />
                <Input
                name='test4'
                value='https://i.gyazo.com/504c1f9e1aa6f4ef009ece3ae4e70a56.png'
                title='Jungle'
                color='https://i.gyazo.com/504c1f9e1aa6f4ef009ece3ae4e70a56.png'
                />
                <Input
                name='test4'
                value='https://i.gyazo.com/fdc31b9421481d87739cc9e1ca06957c.png'
                title='Exotic Green'
                color='https://i.gyazo.com/fdc31b9421481d87739cc9e1ca06957c.png'
                />
                <Input
                name='test4'
                value='https://chapmanguitars.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/09/28112237/x-drg.png'
                title='Transparant Deep Red'
                color='https://chapmanguitars.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/09/28112237/x-drg.png'
                />
                <Input
                name='test4'
                value='https://chapmanguitars.s3.eu-west-1.amazonaws.com/wp-content/uploads/2021/07/27103102/stormburst.jpg'
                title='Storm Burst'
                color='https://chapmanguitars.s3.eu-west-1.amazonaws.com/wp-content/uploads/2021/07/27103102/stormburst.jpg'
                />
                <Input
                name='test4'
                value='https://chapmanguitars.s3.eu-west-1.amazonaws.com/wp-content/uploads/2021/07/27110320/hot-white.jpg'
                title='Hot White'
                color='https://chapmanguitars.s3.eu-west-1.amazonaws.com/wp-content/uploads/2021/07/27110320/hot-white.jpg'
                />
                <Input
                name='test4'
                value='https://i.gyazo.com/3dedc32ca22027f8b759e7d9af9d3bac.png'
                title='Blue Sky'
                color='https://i.gyazo.com/3dedc32ca22027f8b759e7d9af9d3bac.png'
                />
            
            </div>
        </div>
    )
}