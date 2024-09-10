import React from "react"
import { blog } from "../../../data"
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Eğlenceli Etkinlikler & Havacılık Eğitimleri</h1>
            <span>İnterdisipliner Uzmanlık Kulübü</span>
            <FontAwesomeIcon icon={faGlobe} className="icon" />
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <FontAwesomeIcon icon={faPaperPlane} className="icon"/>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1 style={{ color: '#000076', fontSize: '36px', textAlign: 'left', marginTop: '15px'}}>İTÜ SİVEK</h1>
            <span>SİVİL HAVACILIK VE ETKİLEŞİM KULÜBÜ</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

                <FontAwesomeIcon icon={faInstagram} className="icon" />
                <FontAwesomeIcon icon={faDiscord} className="icon" /> 
                <FontAwesomeIcon icon={faWhatsapp} className='icon'/> 
          </div>
          <div className='box link'>
            <h3>Keşfet</h3>
            <ul>
              <li>Etkinlikler</li>
              <li>Havacılık Sözlüğü</li>
              <li>Hakkımızda</li>
              <li>İletişim</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Linkler</h3>
            <ul>
              <li>İletişim</li>
              <a href="https://www.instagram.com/itusivek/" target="_blank" rel="noopener noreferrer">
                <li>İnstagram</li>
              </a>
              <li>Discord</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Geçmiş Etkinlikler</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Sorularınız için iletişim hattı</h3>
            <ul>
              <li>
              <FontAwesomeIcon icon={faLocation} className='icon'/>
                İTÜ Uçak ve Uzay Bilimleri Fakültesi
              </li>
              <li>
                <FontAwesomeIcon icon={faPhoneAlt} className='icon'/>
                forms.gle/FkZdm67uMs4JyZBAA
              </li>
              <li>
              <FontAwesomeIcon icon={faPaperPlane} className='icon'/>
                  sivek@itu.edu.tr.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved
        </p>
      </div>
    </>
  )
}

export default Footer