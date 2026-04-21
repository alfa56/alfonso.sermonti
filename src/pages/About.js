import axios from "axios";
import FsLightbox from "fslightbox-react";
import React, { Suspense, useEffect, useState } from "react";
import * as Icon from "react-feather";
import { Helmet } from "react-helmet";
import ProgressiveImage from "react-progressive-image";
import Slider from "react-slick";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";
import Languages from "../components/Languages";
import { useTranslation } from 'react-i18next'

function About() {
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");
  const { t } = useTranslation();

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleToggler = (event) => {
    setToggler(!toggler);
  };

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
        <div className="mi-about-area mi-section mi-padding-top">
          <div className="container">
            <Sectiontitle title={t("about.about")} />
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="mi-about-image">
                  <ProgressiveImage
                    src={information.aboutImage}
                    placeholder="/images/about-image-placeholder.png"
                  >
                    {(src) => (
                      <img
                        src={src}
                        alt="aboutimage"
                        onClick={() => handleToggler(!toggler)}
                      />
                    )}
                  </ProgressiveImage>
                  <span className="mi-about-image-icon">
                    <Icon.ZoomIn />
                  </span>
                  <FsLightbox
                    toggler={toggler}
                    sources={[information.aboutImageLg]}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mi-about-content">
                  <h3>
                    {t("about.iam")} <span className="color-theme">{information.name}</span>
                  </h3>
                  <p>
                  {t("about.aboutContent")}  
                  </p>
                  <ul>
                      <li>
                        <b>{t("about.phone")}</b> {information.phone}
                      </li>
                      <li>
                        <b>{t("about.nationality")}</b> {t("about.nationalityText")}
                      </li>
                      <li>
                        <b>{t("about.email")}</b> {information.email}
                      </li>
                      <li>
                        <b>{t("about.address")}</b> {information.address}
                      </li>
                      <li>
                        <b>{t("about.status")}</b> {t("about.freelanceStatus")}
                      </li>
                      <li>
                        <b>{t("about.educationTitle")}</b> {t("about.education")}
                      </li>
                  </ul>
                  <a href={t("about.cvfile")} className="mi-button" target="_blank">
                    {t("about.downloadcv")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mi-about-area mi-section mi-padding-top">
          <div className="container">
            <Sectiontitle title={t("about.languages")} />
            <Languages/>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default About;
