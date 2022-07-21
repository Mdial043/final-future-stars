import { useTranslation } from 'react-i18next';
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import i18next from 'i18next';
const Reservation = () => {
    
    const  {t } = useTranslation();
  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
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

        <><section className="  gym ">
            <div className="container mb-5">
                <select className="form-select mt-2 forme w-75 border border-5 border-dark ">
                    <option selected><span>{t('BOOK.2')}</span></option>
                    <option value="1">Ottawa</option>
                    <option value="2">Montreal</option>
                    <option value="3">Quebec</option>
                    <option value="3">Vancouver</option>
                </select>

                <h2 className="mt-3">{t('BOOK.3')}</h2>

                <div className="container cal mx-5 ">

                    <div className="calendar">
                        <div className="month">
                            <i className="fas fa-angle-left prev"></i>
                            <div className="date">
                                <h1></h1>
                                <p></p>
                            </div>
                            <i className="fas fa-angle-right next"></i>
                        </div>
                        <div className="weekdays">
                            <div>Sun</div>
                            <div>Mon</div>
                            <div>Tue</div>
                            <div>Wed</div>
                            <div>Thu</div>
                            <div>Fri</div>
                            <div>Sat</div>
                        </div>
                        <div className="days"></div>
                    </div>
                </div>
            </div>
        </section>

         <section className="info2 mt-2  ">
                <div className="container form2">
                    {(Object.keys(formErrors).length === 0 && isSubmit) ? (<Navigate to={"/Message"} />) : (
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
                                    className="mx-4 entr" />
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
                                    className="mx-5 entr" />
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
                                    className="mx-5 entr" />
                            </div>
                            <p className="error">{formErrors.password}</p>
                            <button className="fluid ui button blue button2"><span>{t('Info.7')}</span></button>
                        </div>
                    </form>
                </div> </section>
                </>
                );
                }

                export default Reservation;