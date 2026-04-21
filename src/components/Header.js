import axios from "axios";
import React, { useEffect, useState } from "react";
import LineIcon from "react-lineicons";
import ProgressiveImage from "react-progressive-image";
import { Link, NavLink } from "react-router-dom";
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next'

function Header() {
  const [information, setInformation] = useState("");
  const [navigationToggler, setNavigationToggler] = useState(false);
  const { t } = useTranslation();

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  };

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
  }, []);

  return (
    <nav className={navigationToggler ? "mi-header is-visible" : "mi-header"}>
      <button onClick={handleNavigationToggler} className="mi-header-toggler">
        {!navigationToggler ? (
          <LineIcon name="menu" />
        ) : (
          <LineIcon name="close" />
        )}
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <Link to="/">
            <ProgressiveImage
              src={information.brandImage}
              placeholder="/images/about-image-placeholder.png"
            >
              {(src) => <img src={src} alt="brandimage" />}
            </ProgressiveImage>
          </Link>
        </div>
        <div class="mi-header-languages flagicons">
          <LanguageSelector/>
        </div>

        <ul className="mi-header-menu">
          <li>
            <NavLink to="/" end>
              <span>{t("menu.home")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <span>{t("menu.about")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume">
              <span>{t("menu.resume")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/international">
              <span>{t("menu.international")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/teacher">
              <span>{t("menu.teacher")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolios">
              <span>{t("menu.portfolio")}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <span>{t("menu.contact")}</span>
            </NavLink>
          </li>
        </ul>
        <p className="mi-header-copyright">
          &copy; {new Date().getFullYear()}{" "}
          <b>
            Alfonso Sermonti
          </b>
        </p>
      </div>
    </nav>
  );
}

export default Header;
