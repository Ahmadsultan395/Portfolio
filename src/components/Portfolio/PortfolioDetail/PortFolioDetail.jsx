import React, { useEffect } from "react";
import css from "./PortFolioDetail.module.scss";
import { useParams } from "react-router-dom";
import Header2 from "../../Header/Header2/Header2";
import Footer2 from "../../Footer/Footer2/Footer2";
import { projects } from "../../../utils/data";

const PortFolioDetail = () => {
  const { id } = useParams();
  console.log("idididiid", id);

 

  const projectData = projects.find((project) => project._id == id);
  // console.log('iddd777777777777', projectData)
  if (!projectData) {
    return <div>Project not found!</div>;
  }

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Header2 />
      <div className={css.wrapper}>
        {/* {projectData.map((row, id)=>( */}
        <>
          <div
            key={id}
            className={css.heroImage}
            style={{ backgroundImage: `url(${projectData.headerImage})` }}
          ></div>
          <br />
          <div className={css.headingContainer}>
            <h1 className={css.heading}>{projectData.projectName}</h1>
            <br />
            {/* <br /> */}
            <p className={css.subheading}> {projectData.desc}</p>
          </div>
          <div className={css.skillContainer}>
            <h1 className={css.skillheading}>Technology</h1>
            {/* <br /> */}
            <br />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              {projectData.skills.map((skill, i) => (
                <p key={i} className={css.skillsubheading}>
                  {" "}
                  {skill.skill}{" "}
                </p>
              ))}
            </div>
            {/* <br /> */}
          </div>
          <div className={css.procon}>
              <div className={css.proconheading}>
                <h1 className={css.proheading}>{projectData.myrolemain}</h1>{" "}
                <br />
                <p className={css.prosubheading}>{projectData.proconDesc} </p>
              </div>
              <div>
                <img src={projectData.proconImage} alt="" />
              </div>
            </div>
            <br />
            <br />
            <div className={css.myrolemain}>
              <h1>{projectData.myrolemain1}</h1>
              <br />
              <ul>
                <li>
                  <strong>{projectData.rolesubheading1}</strong>
                  {projectData.rolesubheading1sub}
                </li>
                <li>
                  <strong>{projectData.rolesubheading1}</strong>
                  {projectData.rolesubheading1sub}
                </li>
                <li>
                  <strong>{projectData.rolesubheading1}</strong>
                  {projectData.rolesubheading1sub}
                </li>
              </ul>
            </div>

            <div className={css.problemsolve}>
              <br />
              <h1>{projectData.problemsolve}</h1>
              <br />
              <p>
                {projectData.problemsolveDes}
              </p>
            </div>
        </>
        {/* ))} */}
      </div>

      <Footer2 />
    </>
  );
};

export default PortFolioDetail;
