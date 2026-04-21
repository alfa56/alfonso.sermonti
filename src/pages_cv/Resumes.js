import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Resume from "../components/Resume";
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from "../components/Smalltitle";
import Spinner from "../components/Spinner";
import { useTranslation } from 'react-i18next'

function Resumes() {
  const { t } = useTranslation();
  const experience = t("experience", { returnObjects: true });

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
            <Sectiontitle title={t("menu.resume")} />
            <div className="mi-resume-wrapper">
              {experience.map((workingExp) => (
                <Resume key={workingExp.id} resumeData={workingExp} />
              ))}
            </div>
            </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default Resumes;
