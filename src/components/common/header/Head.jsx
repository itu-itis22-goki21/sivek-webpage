import React from 'react'
import logo from './../../img/svk_logotek_beyaz_lacivert.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const head = () => {
  return (
    <>
        <section className='head'>
            <div className="container flexSB">
                  <img src={logo} alt="club logo" className='logo1'/>
                <div className="logo">
                    <h1>SİVEK</h1>
                    <span> İTÜ SİVİL HAVACILIK VE ETKİLEŞİM KULÜBÜ</span>
                </div>

                <div className="social">
                <a href='https://www.instagram.com/itusivek/' target='_blank' rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="icon" />
                </a>
                <a href='https://discord.gg/UvrrUXH7' target='_blank' rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faDiscord} className="icon" /> 
                </a> 
                <FontAwesomeIcon icon={faWhatsapp} className='icon'/>                   
                </div>
            </div>
        </section>
    </>
  )
}

export default head