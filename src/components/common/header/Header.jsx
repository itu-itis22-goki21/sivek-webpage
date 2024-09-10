import { NavLink } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  
  return (
    <>
        <Head/>
        <header>
          
          <nav className='flexSB'>
            <ul className='flexSB'>
            <li><NavLink exact to="/" activeClassName="active">Anasayfa</NavLink></li>
            <li><NavLink to="/etkinlikler" activeClassName="active">Etkinlikler</NavLink></li>
            <li><NavLink to="/dictionary" activeClassName="active">Havacılık Sözlüğü</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">Hakkında</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">İletişim</NavLink></li>
            </ul>
            <div className="start">
              <div className="button1">
                <a href="https://www.instagram.com/itusivek/" target="_blank" rel="noopener noreferrer">
                  <button>KULÜBE KATIL</button>
                </a>
              </div>
            </div>
            
          </nav>
        </header>
    </>
  )
}

export default Header