import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Particle from "../components/Particle";
import Socialicons from "../components/Socialicons";
import Smalltitle from "../components/Smalltitle";
import Spinner from "../components/Spinner";
import { useTranslation } from 'react-i18next'
import TextWithLineBreaks from "../components/TextWithLineBreaks";
import Progress from "../components/Progress";
import TrackVisibility from "react-on-screen";

function Home({ lightMode }) {
  const [skills, setSkills] = useState([]);
  const [information, setInformation] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
    axios.get("/api/skills").then((response) => {
      setSkills(response.data);
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
        <div className="mi-home-area mi-padding-section">
          <Particle lightMode={lightMode} />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-12">
                <div className="mi-home-content">
                  <h1>
                    <span className="color-theme">{information.name}</span>
                  </h1>
                  <p><TextWithLineBreaks text={t("home.text")} /></p>
                  <div className="mi-skills-area mi-padding pt-20">
                      <div className="pb-30">
                        <Smalltitle title={t("home.skills")} icon="briefcase" />
                      </div>
                      <div className="mi-skills">
                        <div className="row mt-30-reverse">
                          {skills.map((skill) => (
                            <TrackVisibility
                              once
                              className="col-lg-6 mt-30"
                              key={skill.title}
                            >
                              <Progress title={skill.title} percentage={skill.value} />
                            </TrackVisibility>
                          ))}
                        </div>
                    </div>
                  </div>
                  <div className="socialicons">
                    <Socialicons bordered />
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

export default Home;
