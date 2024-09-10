import React from "react"
import Back from "../common/back/Back"
import "./contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperclip} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
          <iframe title="location" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.5120823004854!2d29.019217611632914!3d41.10150611355956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5dd691dffd3%3A0xa3883d8b73e161e4!2sITU%20Faculty%20of%20Aeronautics%20and%20Astronautics!5e0!3m2!1sen!2str!4v1725900927184!5m2!1sen!2str" 
            allowfullscreen="" loading="lazy" >
          </iframe>
          </div>
          <div className='right row'>
            <h1>İletişim</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADRES:</h4>
                <p>İTÜ Uçak ve Uzay Bilimleri Fakültesi</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> sivek@itu.edu.tr</p>
              </div>
              <div className='box'>
                <h4>Katılım Formu:</h4>
                <p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe4s3QYYLxFX8NZypQ2qhLBwr1XekPUWspUIqglnx6CMWcaZQ/viewform" target="_blank" rel="noopener noreferrer">için tıklayınız</a>
                    <FontAwesomeIcon icon={faPaperclip} />
                </p>
              </div>
            </div>
           

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10' placeholder="Fikirlerinizi form aracılığıyla belirtebilirsiniz...">
                
              </textarea>
              <button className='primary-btn'>GÖNDER</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact