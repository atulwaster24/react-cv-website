import React from 'react'
import "./contact.css"
import { MdOutlineEmail } from 'react-icons/md'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e9wt1fu', 'template_7caryke', form.current, '1yBlhUaKtFKw-1ntx')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>atulwasterstar@gmail.com</h5>
            <a href="mailto: atulwasterstar@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <BsInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>atulwaster24</h5>
            <a href="https://ig.me/m/atulwaster24">Send a Direct Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>842-487-9206</h5>
            <a href="https://api.whatsapp.com/send?phone=8424879206">Whatsapp Me</a>
          </article>

        </div>

        {/* End of Contact Options */}
        <form ref={form} onSubmit = {sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder=' Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact