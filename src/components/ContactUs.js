import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next'

export const ContactUs = () => {
    const { t } = useTranslation();
    const form = useRef();
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        if (!formdata.name) {
            setError(true);
            setMessage(t("contact.namerequired"));
        } else if (!formdata.email) {
            setError(true);
            setMessage(t("contact.emailrequired"));
        } else if (!formdata.subject) {
            setError(true);
            setMessage(t("contact.subjectrequired"));
        } else if (!formdata.message) {
            setError(true);
            setMessage(t("contact.messagerequired"));
        } else {
            emailjs
                .sendForm('service_vcxixhh', 'template_mamhaks', form.current, {
                    publicKey: 'Cg6DpSe35C5tjFVX6',
                })
                .then(
                    () => {
                        setError(false);
                        setMessage(t("contact.sentmessage"));
                    },
                    (error) => {
                        setError(true);
                        setMessage(t("contact.senderror"));                                
                    },
                );
        }   
    };

    const handleAlerts = () => {
        if (error && message) {
          return <div className="alert alert-danger mt-4">{message}</div>;
        } else if (!error && message) {
          return <div className="alert alert-success mt-4">{message}</div>;
        } else {
          return null;
        }
    };

    const handleChange = (event) => {
        setFormdata({
          ...formdata,
          [event.currentTarget.name]: event.currentTarget.value,
        });
    };
    
    return (
        <div className="mi-contact-formwrapper">
            <h4>{t("contact.getintouch")}</h4>
            <form action="#" className="mi-form mi-contact-form" ref={form} onSubmit={sendEmail} >
                <div className="mi-form-field">
                    <label htmlFor="contact-form-name">{t("contact.yourname")}*</label>
                    <input onChange={handleChange} type="text" name="name" id="contact-form-name" value={formdata.name} />
                </div>
                <div className="mi-form-field">
                    <label htmlFor="contact-form-email">{t("contact.youremail")}*</label>
                    <input onChange={handleChange} type="text" name="email" id="contact-form-email" value={formdata.email}/>
                </div>
                <div className="mi-form-field">
                    <label htmlFor="contact-form-subject">{t("contact.yoursubject")}*</label>
                    <input onChange={handleChange} type="text" name="subject" id="contact-form-subject" value={formdata.subject}/>
                </div>
                <div className="mi-form-field">
                    <label htmlFor="contact-form-message">{t("contact.yourmessage")}*</label>
                    <textarea onChange={handleChange} name="message" id="contact-form-message" cols="30" rows="6" value={formdata.message}></textarea>
                </div>
                <div className="mi-form-field">
                    <button className="mi-button" type="submit">{t("contact.send")}</button>
                </div>
            </form>
            {handleAlerts()}
        </div>
    );
};