import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function Faq() {

    const  {t } = useTranslation();
  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  return(
    <div id="faq" className="block faqBloc contenu">
      <div className="container-fluid ">
        <div className="titleHolder">
          <h2 className='mx-5 mb-5'>{t('FAQ.1')}</h2>
         
        </div>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header> <span>{t('FAQ.2')}</span></Accordion.Header>
        <Accordion.Body>
        <span>{t('FAQ.3')}</span>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><span>{t('FAQ.4')}</span></Accordion.Header>
        <Accordion.Body>
        <span>{t('FAQ.5')}</span>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          
          <Button variant="primary" className='mt-2 mx-5'> <span>{t('FAQ.6')}</span></Button>{' '}
        </div>
      </div>
     
  );
}

export default Faq;