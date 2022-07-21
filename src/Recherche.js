import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img1 from "./images/basket.png"
import img2 from "./images/weekly.png"
import img3 from "./images/d-league.png"
import img4 from "./images/day-camp.png"
import img5 from "./images/overnight-camp.png"
import img6 from "./images/private.png"
import img7 from "./images/semi-private.png"
import img8 from "./images/strength.png"
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
const images = [img1,img2,img3,img4]
function BasicExample() {
    
    const  {t } = useTranslation();
  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
    return (

        <Container className='contenu'>
      
      <Row>
        <Col>
        <Link to={"/Register"}> 
         <Card style={{ width: '18rem' ,height: '16rem' }}>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title><span>{t('Register.2')}</span></Card.Title>
         
        
        </Card.Body>
      </Card>
      </Link></Col>
        <Col>
        <Link to={"/Register"}>  <Card style={{ width: '18rem' ,height: '15rem' } }>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title><span>{t('Register.3')}</span></Card.Title>
          
        
        </Card.Body>
      </Card>  </Link></Col>
        <Col><Link to={"/Register"}> <Card style={{ width: '18rem' ,height: '15rem' }}>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title><span>{t('Register.4')}</span></Card.Title>
         
        
        </Card.Body>
      </Card> </Link></Col>
        <Col><Link to={"/Register"}> <Card style={{ width: '18rem' ,height: '15rem' }}>
        <Card.Img variant="top" src={img4} />
        <Card.Body>
          <Card.Title><span>{t('Register.5')}</span></Card.Title>
         
        
        </Card.Body>
      </Card></Link></Col>
      </Row>

      <Row>
        <Col><Link to={"/Register"}> <Card style={{ width: '18rem' ,height: '15rem' }}>
        <Card.Img variant="top" src={img5} />
        <Card.Body>
          <Card.Title><span>{t('Register.6')}</span></Card.Title>
         
        </Card.Body>
      </Card></Link></Col>
        <Col><Link to={"/Register"}> <Card style={{ width: '18rem' ,height: '15rem' }}>
        <Card.Img variant="top" src={img6} />
        <Card.Body>
          <Card.Title><span>{t('Register.7')}</span></Card.Title>
          
        
        </Card.Body>
      </Card></Link></Col>
        <Col> <Link to={"/Register"}><Card style={{ width: '18rem'  ,height: '15rem'}}>
        <Card.Img variant="top" src={img7} />
        <Card.Body>
          <Card.Title><span>{t('Register.8')}</span></Card.Title>
         
        
        </Card.Body>
      </Card></Link></Col>
        <Col> <Link to={"/Register"}><Card style={{ width: '18rem'  ,height: '15rem'}}>
        <Card.Img variant="top" src={img8} />
        <Card.Body>
          <Card.Title><span>{t('Register.9')}</span></Card.Title>
        
        
        </Card.Body>
      </Card></Link></Col>
      </Row>
    </Container>
    
     
    );
  }
  

export default BasicExample;