import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
const Message = () => {

    
    const  {t } = useTranslation();
  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
    return ( 
       
        <><section className=" mt-5 ">
            <div className=" congrats container mb-5  col-5 mes">
                <h4>Congratulations, you just registered to the className.<br /> You will receive a confirmation by mail soon.</h4>
            </div>
        </section><section className="step-wizard mx-auto mt-5">
                <div className="container">
                    <ul className="step-wizard-list">
                        <li className="step-wizard-item">
                            <span className="progress-count current-item">1</span>
                            <span className="progress-label"><span>{t('Progress.1')}</span></span>
                        </li>
                        <li className="step-wizard-item ">
                            <span className="progress-count">2</span>
                            <span className="progress-label"><span>{t('Progress.2')}</span>r</span>
                        </li>
                        <li className="step-wizard-item">
                            <span className="progress-count">3</span>
                            <span className="progress-label"><span>{t('Progress.3')}</span></span>
                        </li>

                    </ul>
                </div>
            </section></>
      
     );
}
 
export default Message;