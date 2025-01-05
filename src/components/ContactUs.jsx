import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineMail } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_djd6lbs', 'template_ld7mkx8', form.current, {
        publicKey: 'UdZ3gM-Tjt-40Zn9L',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
   <div className='bg-black min-h-screen py-12'>
    <p className="text-center mb-7">
          <span className="text-[#8750f7]  text-5xl text-center font-extrabold">
            Contact
          </span>
          <span className="text-5xl font-extrabold text-[#b7a0e4]">
            {" "}
            Us
          </span>
        </p>
    <div className='mx-auto w-10/12 flex lg:flex-row flex-col'>
    <form className='lg:w-1/2 flex *:mb-5 flex-col bg-[#141119] p-8 rounded-2xl' ref={form} onSubmit={sendEmail}>
      <input className='bg-black py-3 rounded-md' type="text" placeholder='First name' name="from_name" />
      <input className='bg-black py-3 rounded-md' type="text" placeholder='Last name' name="from_name" />
      <input className='bg-black py-3 rounded-md' type="email" placeholder='Email address' name="from_email" />
      <input className='bg-black py-3 rounded-md' type="number" placeholder='Phone number' name="from_email" />
      <textarea className='bg-black h-48 py-3 rounded-md' name="message" placeholder='Massage' />
      <div className='float-end flex'>
      <input className='bg-[#7539d8] text-white font-semibold px-6 py-2 rounded-3xl shadow-lg'  type="submit" value="Send Massage" />
      </div>
    </form>
    <div className='lg:w-1/2 flex flex-col mt-10 lg:mt-0 *:mb-6 justify-center ml-10 lg:ml-28'>
      <div className='flex items-center '>
        <div className="hover:border mr-5 bg-purple-700 hover:bg-[#141119] hover:border-solid hover:border-[#8750f7] border-none flex items-center justify-center w-12 h-12 rounded-full">
                <FiPhoneCall className="hover:text-[#8750f7] text-white text-3xl"/>
                </div>
                <p className='text-white text-2xl font-semibold'>+880 1610 229720</p>
      </div>
      <div className='flex items-center'>
        <div className="hover:border mr-5 bg-purple-700 hover:bg-[#141119] hover:border-solid hover:border-[#8750f7] border-none flex items-center justify-center w-12 h-12 rounded-full">
                <MdOutlineMail className="hover:text-[#8750f7] text-white text-3xl"/>
                </div>
                <p className='text-white text-2xl font-semibold'>nmmaharaz@gmail.com</p>
      </div>
      <div className='flex items-center'>
        <div className="hover:border mr-5 bg-purple-700 hover:bg-[#141119] hover:border-solid hover:border-[#8750f7] border-none flex items-center justify-center w-12 h-12 rounded-full">
                <GrLocation className="hover:text-[#8750f7] text-white text-3xl"/>
                </div>
                <p className='text-white text-2xl font-semibold'>Chattogram, Bangladesh</p>
      </div>
    </div>
    </div>
   </div>
  );
};