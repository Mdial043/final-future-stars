import './App.css';
import './Home.js';
import Home from './Home.js';
import './Recherche.js';
import Recherche from './Recherche.js';
import './Recherche.js';
import Message from './Message';
import './Message';
import Resevation from './Reservation.js';
import './Reservation.js';
import Register from './Register';
import './Register';
import Faq from './Faq.js';
import './Faq';
import Chat from './Chat.js';
import './Chat';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
function App() {
  const  {t } = useTranslation();
  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  return (
  
    
  <Router>
   <nav className="navbar navbar-expand-lg fixed-top navbar-light navigatio">
      <div className="container-fluid">
        <Link className="navbar-brand text-white mb-3" to={"/"}>FUTURE STARS</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex mx-4">
              <i className="material-icons mt-2 icon">home</i> <Link className="nav-link active text-white" aria-current="page" to={"/"}> <p>
            <h3>{t('Home.1')}</h3>  
          </p> </Link>
            </li>

            <li className="nav-item mx-4">
              <Link className="nav-link text-white" to={"/Faq"}> <h5> FAQ</h5></Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link text-white" to={"/Reservation"}> <p>
            <h5>{t('BOOK.1')}</h5>  
          </p></Link>
            </li>
            <li className="nav-item mx-4">
              <Link to={"/Recherche"} className="reservation text-white"> <p>
            <h5>{t('Register.1')}</h5>  
          </p></Link>
            </li>
            <li className="nav-item d-flex mx-4">
              <i className="material-icons  mt-2 icon">chat</i> <Link className="nav-link text-white" to={"/Chat"}> <p>
            <h5>{t('Chat.1')}</h5>  
          </p></Link>
            </li>
          

            <li className="nav-item d-flex mx-5 element">
            {  <><button onClick={() => handleClick('en')}>
                  En
                </button> /<button onClick={() => handleClick('fr')}>
                    Fr
                  </button></> }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  <Routes>
<Route  path="/" element={< Home/>}  />
<Route  path="/Recherche" element={< Recherche/>}  />
<Route  path="/Message" element={< Message/>}  />
<Route  path="/Reservation" element={< Resevation/>}  />
<Route  path="/Chat" element={< Chat/>}  />
<Route  path="/Register" element={< Register/>}  />
<Route  path="/Faq" element={< Faq/>}  />
  </Routes>
  
   
    
    </Router>
    
  );
}

export default App;
