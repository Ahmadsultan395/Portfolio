import React, { useEffect } from "react";
import css from "./PortFolioDetail.module.scss";
import { useParams } from "react-router-dom";
import Header2 from "../../Header/Header2/Header2";
import Footer2 from "../../Footer/Footer2/Footer2";

const PortFolioDetail = () => {
  const { id } = useParams();
  console.log("idididiid", id);

  const projects = [
    {
      _id: 1,
      projectName: "Itify (SMC-Private) Limited",
      headerImage: "/itify.png",
      desc: "ITify (SMC Private) Limited is an innovative technology company that has been providing comprehensive IT solutions since its establishment in 2020. The company offers a wide range of services, including website and app development, search engine optimization, social media marketing, email marketing, pay-per-click advertising, graphic design, and mobile app development. With a commitment to making technology accessible, ITify serves clients worldwide, delivering tailored solutions that meet the specific needs and goals of their clients.",
      skills: [
        { skill: "ReactJs" },
        { skill: "Html" },
        { skill: "CSS" },
        { skill: "Javascript" },
        { skill: "Jquery" },
        { skill: "Bootstrap" },
      ],
      proconDesc:
        "In this project, I was responsible for designing and developing the company’s website, ensuring that it effectively showcases ITify's services and capabilities. My focus was on creating a responsive, user-friendly site that highlights the company’s expertise and facilitates easy navigation for users. The goal was to build a website that not only reflects the professionalism of ITify but also provides a seamless user experience.",
      proconImage: "/itify3.png",
      myrolemain: "My Role in the project",
      myrolemain1: "Challenges Faced",
      rolesubheading1: "Cross-Browser Compatibility:",
      rolesubheading1sub:
        " Ensuring the website looked and functioned well across different browsers was a challenge. I had to write specific CSS and JavaScript code to address inconsistencies, especially in older browsers.",
      rolesubheading2: "Cross-Browser Compatibility:",
      rolesubheading2sub:
        " Ensuring the website looked and functioned well across different browsers was a challenge. I had to write specific CSS and JavaScript code to address inconsistencies, especially in older browsers.",
      rolesubheading3: "Cross-Browser Compatibility:",
      rolesubheading3sub:
        " Ensuring the website looked and functioned well across different browsers was a challenge. I had to write specific CSS and JavaScript code to address inconsistencies, especially in older browsers.",
      problemsolve:'Problems Solved',
      problemsolveDes:'The need to create a website for ITify arose from the company’s desire to establish a strong online presence that accurately represents their brand and services. The website serves as a digital gateway for potential clients to learn about ITify, explore their services, and get in touch with the team. It was crucial to develop a platform that not only highlights ITify’s expertise but also facilitates effective communication and business growth.'
    },
    {
      _id: 2,
      projectName: "Black Technology",
      headerImage: "/black-tech.png",
      desc: "Black Technology is a student Final Year Project (FYP) designed to serve as a showcase platform for technology services. The primary objective was to create a clean, modern website that highlights various tech services and provides an intuitive user experience. The site is intended to demonstrate both technical skills and the ability to design a user-friendly interface, making it a crucial part of my academic journey.",
      skills: [
        { skill: "React js " },
        { skill: "Tailwind CSS" },
        { skill: "css" },
        { skill: "Html" },
        { skill: "Props Dealing" },
        { skill: "Nodemail" },
      ],
      proconDesc:
        "As the sole developer of the Black Tech website, I was responsible for both the design and development phases. I utilized React.js, HTML, CSS, and Bootstrap to create a fully responsive and visually appealing site. My role involved constructing the layout, implementing interactivity, and ensuring that the site was optimized for both performance and usability.",
      proconImage: "/black2.png",
      myrolemain: "My Role in the project",
      myrolemain1: "Challenges Faced",
      rolesubheading1: "Responsive Design:",
      rolesubheading1sub:
        " One of the main challenges was ensuring that the website looked great and functioned well across different devices and screen sizes. I overcame this by carefully utilizing Bootstrap’s responsive utilities and testing the site on various devices.",
      rolesubheading2: "Form Validation:",
      rolesubheading2sub:
        " Implementing client-side form validation was crucial for the Contact page to ensure that users submitted valid and complete information. This required careful attention to user input handling and error messaging.",
      rolesubheading3: "Consistent UI Design:",
      rolesubheading3sub:
        "Maintaining a consistent and cohesive design throughout the site was essential. I focused on aligning the design elements across all pages, ensuring a seamless user experience.",
      problemsolve:'Purpose and Rationale',
      problemsolveDes:'The Black Tech website was developed as part of my Final Year Project, with the goal of showcasing my technical and design skills. The project was intended to demonstrate my ability to create a fully functional, professional-grade website using modern web technologies. The need for this website stemmed from a desire to create a platform that could effectively present tech services in a clear and engaging manner, while also serving as a portfolio piece that highlights my development capabilities.'

    },
    {
      _id: 3,
      projectName: "Promote",
      headerImage: "/promote2.png",
      desc: "The Promote Name website was developed for a client who was highly interested in frontend design and wanted a visually striking, complex single-page application. The client provided a Figma design that featured intricate layouts, advanced styling, and a seamless user experience. The main challenge was to bring this design to life while ensuring that it was fully responsive across all devices.",
      skills: [
        { skill: "Html" },
        { skill: "CSS" },
        { skill: "Bootstrap" },
        { skill: "Advanced UI Implementation" },
        { skill: "Intricate Design Execution" },
        // { skill: "css" },
      ],
      proconDesc:
        "As the lead frontend developer, my responsibility was to translate the client's Figma design into a functional and responsive website using HTML, CSS, and Bootstrap. My role included coding the entire layout, ensuring pixel-perfect accuracy, implementing interactive elements, and optimizing the site for different screen sizes. I worked closely with the client to ensure that every detail matched their vision, delivering a website that was not only beautiful but also user-friendly.",
      proconImage: "/promote1.png",
      myrolemain: "My Role in the project",
      myrolemain1: "Challenges Faced",
      rolesubheading1: "Complex Design Implementation:",
      rolesubheading1sub:
        "The Figma design provided by the client was highly detailed and intricate. Translating this into code while maintaining responsiveness required careful planning and execution. I had to write custom CSS and make extensive use of Bootstrap’s grid system to achieve the desired layout.",
      rolesubheading2: "Responsiveness Across Devices:",
      rolesubheading2sub:
        "Ensuring that the website maintained its beauty and functionality across all devices was a significant challenge. I employed media queries and flexible grid layouts to address this, testing the site extensively on different screen sizes.",
      rolesubheading3: "Maintaining Design Consistency:",
      rolesubheading3sub:
        "With a design as complex as this, maintaining consistency across different sections and ensuring that the visual elements aligned perfectly was crucial. I paid close attention to detail, ensuring that each section flowed seamlessly into the next.",
      problemsolve:'Purpose and Rationale',
      problemsolveDes:"The Promote Name website was created to provide the client with a visually stunning online presence that accurately reflected their brand's identity. The single-page application was designed to showcase their services, team, and projects in a manner that was both engaging and easy to navigate. The client’s need for a complex, beautifully designed, and fully responsive site drove the project, and I was able to deliver a final product that exceeded their expectations."
    },
    {
      _id: 4,
      projectName: "javascript & JQuery",
      headerImage: "/javascript2.png",
      desc: "This website was developed for a client who had a strong focus on frontend design and user experience. The project began with a detailed Figma design that presented a sophisticated and intricate layout. My goal was to transform this design into a fully functional and responsive single-page application, utilizing HTML, CSS, Bootstrap, along with advanced animations and interactions powered by JavaScript and jQuery.",
      skills: [
        { skill: "Javascript" },
        { skill: "JQuery" },
        { skill:'Complex UI Handling'},
        { skill: "Html" },
        { skill: "CSS" },
        { skill: "Bootstrap" },
        { skill: "Intricate Design Execution" },
      ],
      proconDesc:
        "As the frontend developer, I was responsible for bringing the client’s complex design to life. Using a blend of JavaScript and jQuery, I implemented dynamic animations and interactive elements that enhanced the user experience while ensuring the site was fully responsive across all devices.",
      proconImage: "/javascript1.png",
      myrolemain: "My Role in the project",
      myrolemain1: "Challenges Faced",
      rolesubheading1: "Complex Design Implementation:",
      rolesubheading1sub:
        "Translating the intricate animations and hover effects from the Figma design into functional code required careful planning and precise execution with JavaScript and jQuery.",
      rolesubheading2: "Responsiveness Across Devices:",
      rolesubheading2sub:
        "Ensuring that all animations and interactive elements worked seamlessly across different devices was a significant challenge, which was successfully addressed using a combination of Bootstrap and custom media queries.",
      rolesubheading3: "Maintaining Design Integrity:",
      rolesubheading3sub:
        "The project required meticulous attention to detail to ensure that the complex design elements were preserved while maintaining functionality and performance.",
      problemsolve:'Purpose and Rationale',
      problemsolveDes:"The website was developed to provide the client with a high-quality, interactive online presence that showcased their services, team, and portfolio in a visually appealing manner. The use of JavaScript and jQuery allowed for the creation of a dynamic user experience, aligning with the client’s focus on engaging frontend design."
    },
  ];

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
