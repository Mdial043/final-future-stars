import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import img12 from "./images/profil1.png"
import img13 from "./images/profil2.png"
const Chat = () => {
    
    const  {t } = useTranslation();
  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
    return (
<div className="container">
    <div className=" mt-2 mb-4"> <h1 className="border border-2 bg-secondary text-white">CHAT ROOM</h1></div>
    <div className="border border-3">
    <div className="container x">
        <img src={img12} alt="Avatar"/>
        <p>Hello. How are you today?</p>
        <span className="time-right">11:00</span>
    </div>

    <div className="container x darker">
        <img src={img13} alt="Avatar" className="right"/>
        <p>Hey! I'm fine. Thanks for asking!</p>
        <span className="time-left">11:01</span>
    </div>

    <div className="container x">
        <img src={img12} alt="Avatar"/>
        <p>Sweet! So, what do you wanna do today?</p>
        <span className="time-right">11:02</span>
    </div>

    <div className="container x darker">
        <img src={img13} alt="Avatar" className="right"/>
        <p>I want to play around 4 if you're there's an available gym.</p>
        <span className="time-left">11:05</span>
    </div>
</div>
</div>

      );
}
 
export default Chat;