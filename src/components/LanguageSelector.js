import React, {useState} from "react";
import i18n from '../i18n';
import Flag from "react-flagkit";

const LanguageSelector = () => {
    
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

    const chooseLanguage = (e) => {
        var lng;
        console.log("lang",e.target.alt)
        e.preventDefault();
        switch(e.target.alt) {
            case "GB Flag": lng = "en"; break;
            case "IT Flag": lng = "it"; break;
            case "FR Flag": lng = "fr"; break;
            default: lng = "it";
        }
        console.log("lng",lng)
        i18n.changeLanguage(lng);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(lng);
        localStorage.setItem("lang", lng);
    }

    return (
        <ul className="mi-flagicons mi-flagicons-bordered">
            <li>
                <Flag country="IT" role="button" size={36} onClick={chooseLanguage} />
            </li>
            <li>
                <Flag country="GB" role="button" size={36} onClick={chooseLanguage} />
            </li>
            <li>
                <Flag country="FR" role="button" size={36} onClick={chooseLanguage} />
            </li>
        </ul>
    );
};

export default LanguageSelector;