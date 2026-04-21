import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import TrackVisibility from "react-on-screen";
import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Resume from "../components/Resume";
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from "../components/Smalltitle";
import Spinner from "../components/Spinner";
import { useTranslation } from 'react-i18next'

function International() {
  const { t } = useTranslation();
  const international = t("international", { returnObjects: true });

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
        <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title={t("menu.international")} />
            <div className="mi-resume-wrapper">
              {international.map((internationalExp) => (
                <Resume key={internationalExp.id} resumeData={internationalExp} />
              ))}
            </div>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default International;
