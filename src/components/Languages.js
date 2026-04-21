import React from "react";
import { useTranslation } from 'react-i18next'

function Languages(props) {
    const { t } = useTranslation();

    return (
    <div className="mi-about mt-30">
        <table>
            <thead>
                <tr>
                    <td width="20%"></td>
                    <td width="30%" colspan="2">{t("about.read")}</td>
                    <td width="30%" colspan="2">{t("about.spoken")}</td>
                    <td width="20%" rowspan="2">{t("about.written")}</td>
                </tr>
                <tr>
                    <td width="20%"></td>
                    <td width="15%">{t("about.ascolto")}</td>
                    <td width="15%">{t("about.lettura")}</td>
                    <td width="15%">{t("about.interazione")}</td>
                    <td width="15%">{t("about.oral")}</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td width="20%">{t("about.french")}</td>
                    <td width="15%">C2</td>
                    <td width="15%">C2</td>
                    <td width="15%">C2</td>
                    <td width="15%">C2</td>
                    <td width="20%">C2</td>
                </tr>
                <tr>
                    <td width="20%">{t("about.english")}</td>
                    <td width="15%">B2</td>
                    <td width="15%">C1</td>
                    <td width="15%">C1</td>
                    <td width="15%">B2</td>
                    <td width="20%">B2</td>
                </tr>
                <tr>
                    <td width="20%">{t("about.portuguese")}</td>
                    <td width="15%">B2</td>
                    <td width="15%">B1</td>
                    <td width="15%">B1</td>
                    <td width="15%">A2</td>
                    <td width="20%">A2</td>
                </tr>
                <tr>
                    <td width="20%">{t("about.spanish")}</td>
                    <td width="15%">A2</td>
                    <td width="15%">A2</td>
                    <td width="15%">A2</td>
                    <td width="15%">B1</td>
                    <td width="20%">A2</td>
                </tr>
            </tbody>
        </table>
    </div>
  );
};

export default Languages;
