
import { Link } from "react-router-dom";
import "./App.css"
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Home = () => {


    const  {t } = useTranslation();
  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
    return ( 

        <>
      
<section className="s1 border border-1 border-dark mb-sm-5" id="home">
            <div className="m-auto w-75 p-3 mt-5 sm-mt-0 d-flex flex-column">

                <p className="box1 m-auto w-75 p-3 text-white mt-4">
                    
                    
            <span>{t('Home.2')}</span>  
          
                </p>
            </div>
        </section><section className="sect">

                <div className="container global col-12 ">
                    <div className="container registertext  col-5  "> <span>{t('Home.3')}</span>   <button className="mt-2 mb-3 bts"> <Link to={"/Register"} className="lien">   <span>{t('Home.6')}</span>  </Link></button></div>
                </div>


            </section><section className="mt-5 mb-4 sect">

                <div className="container global2 col-12  mb-3 ">
                    <div className="container registertext  col-5  mb-3 "> <span>{t('Home.4')}</span> <br /><button className="mt-2 mb-3 bts2"> <Link to={"/Reservation"} className="lien"> <span>{t('Home.7')}</span></Link></button></div>
                </div>


            </section><section className="mt-5 mb-3 sect " id="about">

                <div className="container global3 col-12 ">
                    <div className="container registertext  col-4  "> <span>{t('Home.5')}</span> <br /> <button className="mt-2 mb-3 bts3"> <Link to={"/Faq"} className="lien"> <span>{t('Home.8')}</span></Link></button></div>
                </div>


            </section></>
     
        
     );
}
 
export default Home;