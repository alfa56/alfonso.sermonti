import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import * as Icon from "react-feather";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";
import { ContactUs } from "../components/ContactUs";
import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation();
  const [information, setInformation] = useState("");

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
   }, []);

  return (
    <Layout>
      <Helmet>
        <title>Alfonso Sermonti</title>
        <meta
          name="description"
          content="Alfonso Sermonti"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title={t("menu.contact")} />
            <div className="row">
              <div className="col-lg-6">
                <ContactUs/>
              </div>
              <div className="col-lg-6">
                <div className="mi-contact-info">
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.Phone />
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>{t("about.phone")}</h6>
                      <p>{information.phone}</p>
                    </div>
                  </div>
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.Mail />
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>{t("about.email")}</h6>
                      <p>{information.email}</p>
                    </div>
                  </div>
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.MapPin />
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>{t("about.address")}</h6>
                      <p>{information.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default Contact;
