import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import {assets} from '../assets/assets'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-112.5' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-500'>
              <p>We are an online shopping platform dedicated to delivering high-quality products with a smooth and secure shopping experience. Our goal is to make fashion and lifestyle shopping simple, affordable, and enjoyable for everyone.

We carefully curate our collections to match the latest trends while maintaining comfort and quality. From everyday essentials to special styles, we ensure each product meets our standards.

</p>
              <p>Customer satisfaction is at the heart of what we do. With easy navigation, secure payments, and reliable delivery, we strive to create a seamless experience from browsing to checkout.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission is to provide customers with high-quality products at affordable prices while delivering a smooth and reliable online shopping experience. We aim to combine style, comfort, and convenience in every purchase.</p>
          </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>We ensure that every product available on our platform meets strict quality standards before reaching our customers. Each item is carefully checked for durability, comfort, and design to guarantee the best value.</p>
        </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>Our platform is designed to make shopping easy and hassle-free. With a user-friendly interface, quick navigation, and secure checkout, customers can find and purchase products in just a few clicks.</p>
        </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Services:</b>
            <p className='text-gray-600'>We are committed to providing excellent customer support at every step of your shopping journey. Our dedicated support team is always ready to assist with product inquiries, order tracking, and after-sales support.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About