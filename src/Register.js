import { Link, Navigate, useNavigate } from "react-router-dom";
import img10 from "./images/basket.png"
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
const Register = () => {
    
    const  {t } = useTranslation();
  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
    let navigate= useNavigate();
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };

      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
          errors.username = "Username is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        }
        return errors;
      };

    return ( 
    
     
    <>  <section className=" mt-5">
        <div className=" container   ">
            <img src={img10} className=" mt-4"/>
                <div>
                    <h4 className="mt-2">{t('Info.1')}.</h4>
                </div>

                <div className=" mt-4 col-5 border border-4 border-secondary ">
                    <h5 >{t('Info.2')}.</h5>
                </div>
           </div>

    </section><section className="info mt-5 ">
    <div className="container form2">
     { (Object.keys(formErrors).length === 0 && isSubmit)?(<Navigate to={"/Message"}/>) : (
      <div> <span>{t('Info.3')}</span></div>
      )}
      <form onSubmit={handleSubmit}>
      
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label><span>{t('Info.4')}</span> </label>
            <input
              type="text"
              name="username"
              placeholder={t('Info.4')}
              value={formValues.username}
              onChange={handleChange}
              className="mx-4 entr"
            />
          </div>
          <p className="error">{formErrors.username}</p>
          <div className="field">
            <label><span>{t('Info.5')}</span> </label>
            <input
              type="text"
              name="email"
              placeholder={t('Info.5')}
              value={formValues.email}
              onChange={handleChange}
              className="mx-5 entr"
            />
          </div>
          <p className="error">{formErrors.email}</p>
          <div className="field">
            <label><span>{t('Info.6')}</span>  </label>
            <input
              type="password"
              name="password"
              placeholder={t('Info.6')}
              value={formValues.password}
              onChange={handleChange}
              className="mx-5 entr"
            />
          </div>
          <p className="error">{formErrors.password}</p>
          <button className="fluid ui button blue button2"><span>{t('Info.7')}</span></button>
        </div>
      </form>
    </div>
        </section><section className="step-wizard mx-auto mt-5">
            <div className="container">
                <ul className="step-wizard-list">
                    <li className="step-wizard-item">
                        <span className="progress-count">1</span>
                        <span className="progress-label"><span>{t('Progress.1')}</span></span>
                    </li>
                    <li className="step-wizard-item ">
                        <span className="progress-count">2</span>
                        <span className="progress-label"><span>{t('Progress.2')}</span></span>
                    </li>
                    <li className="step-wizard-item current-item">
                        <span className="progress-count">3</span>
                        <span className="progress-label"><span>{t('Progress.3')}</span></span>
                    </li>

                </ul>
            </div>
        </section></> );
}
 
export default Register;