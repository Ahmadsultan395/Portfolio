import React, { useEffect } from "react";
import css from "./PortFolioDetail.module.scss";
import { useParams } from "react-router-dom";
import Header2 from "../../Header/Header2/Header2";
import Footer2 from "../../Footer/Footer2/Footer2";

const PortFolioDetail = () => {
    const {id} = useParams();
    console.log('idididiid', id)

  const   projects = [
        {   _id :1, 
            projectName: "Itify (SMC-Private) Limited" , headerImage:'/itify.png',
            desc: "I am a frontend developer with 1.5 years of experience in building high-performance web applications. My expertise lies in HTML, CSS, JavaScript, and frameworks and libraries such as Bootstrap, jQuery, React.js, Material-UI, SCSS, SASS and Tailwind CSS. I specialize in creating responsive and dynamic user interfaces. While I have basic knowledge of backend technologies like Node.js, MongoDB, and SQL, as well as tools like MS Excel and MS Word, my primary focus and strength are in frontend development. I am eager to apply my skills to innovative projects that enhance user engagement and drive business success",
            skills: [{ skill: 'java' }, { skill: 'php' }, { skill: 'css' },
                { skill: 'java' }, { skill: 'php' }, { skill: 'css' }
            ],
            proconDesc:'I am a frontend developer with 1.5 years of experience in building high-performance web applications. My expertise lies in HTML, CSS, JavaScript, and frameworks and libraries such as Bootstrap, jQuery, React.js, Material-UI, SCSS, SASS and Tailwind CSS. I specialize in creating responsive and dynamic user interfaces. While I have basic knowledge of backend technologies like Node.js, MongoDB, and SQL, as well as tools like MS Excel and MS Word, my primary focus and strength are in frontend development. I am eager to apply my skills to innovative projects that enhance user engagement and drive business success',
            proconImage:'/itify3.png'
        },
        {   _id :2, 
            projectName: "Black Technology" , headerImage:'/black-tech.png',
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi consequuntur tempora nisi voluptatibus eius, laboriosam consequatur natus maiores dolorum corrupti magni earum provident, debitis possimus magnam. Amet repellendus molestias mollitia quis sapiente similique reiciendis! Aut rem totam dolorem doloremque dolor.",
            skills: [{ skill: 'java' }, { skill: 'php' }, { skill: 'css' },
                { skill: 'java' }, { skill: 'php' }, { skill: 'css' }
            ],
            proconDesc:'I am a frontend developer with 1.5 years of experience in building high-performance web applications. My expertise lies in HTML, CSS, JavaScript, and frameworks and libraries such as Bootstrap, jQuery, React.js, Material-UI, SCSS, SASS and Tailwind CSS. I specialize in creating responsive and dynamic user interfaces. While I have basic knowledge of backend technologies like Node.js, MongoDB, and SQL, as well as tools like MS Excel and MS Word, my primary focus and strength are in frontend development. I am eager to apply my skills to innovative projects that enhance user engagement and drive business success',
            proconImage:'/black2.png'
        },
        {   _id :3, 
            projectName: "Promote" , headerImage:'/promote2.png',
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi consequuntur tempora nisi voluptatibus eius, laboriosam consequatur natus maiores dolorum corrupti magni earum provident, debitis possimus magnam. Amet repellendus molestias mollitia quis sapiente similique reiciendis! Aut rem totam dolorem doloremque dolor.",
            skills: [{ skill: 'java' }, { skill: 'php' }, { skill: 'css' },
                { skill: 'java' }, { skill: 'php' }, { skill: 'css' }
            ],
            proconDesc:'I am a frontend developer with 1.5 years of experience in building high-performance web applications. My expertise lies in HTML, CSS, JavaScript, and frameworks and libraries such as Bootstrap, jQuery, React.js, Material-UI, SCSS, SASS and Tailwind CSS. I specialize in creating responsive and dynamic user interfaces. While I have basic knowledge of backend technologies like Node.js, MongoDB, and SQL, as well as tools like MS Excel and MS Word, my primary focus and strength are in frontend development. I am eager to apply my skills to innovative projects that enhance user engagement and drive business success',
            proconImage:'/promote1.png'
        },
        {   _id :4, 
            projectName: "javascript & JQuery" , headerImage:'/javascript2.png',
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi consequuntur tempora nisi voluptatibus eius, laboriosam consequatur natus maiores dolorum corrupti magni earum provident, debitis possimus magnam. Amet repellendus molestias mollitia quis sapiente similique reiciendis! Aut rem totam dolorem doloremque dolor.",
            skills: [{ skill: 'java' }, { skill: 'php' }, { skill: 'css' },
                { skill: 'java' }, { skill: 'php' }, { skill: 'css' }
            ],
            proconDesc:'I am a frontend developer with 1.5 years of experience in building high-performance web applications. My expertise lies in HTML, CSS, JavaScript, and frameworks and libraries such as Bootstrap, jQuery, React.js, Material-UI, SCSS, SASS and Tailwind CSS. I specialize in creating responsive and dynamic user interfaces. While I have basic knowledge of backend technologies like Node.js, MongoDB, and SQL, as well as tools like MS Excel and MS Word, my primary focus and strength are in frontend development. I am eager to apply my skills to innovative projects that enhance user engagement and drive business success',
            proconImage:'/javascript1.png'
        }

    ]


  const   projectData = projects.find((project) => project._id == id);
  // console.log('iddd777777777777', projectData)
     if (!projectData) {
        return <div>Project not found!</div>;
      }


      useEffect(()=>{
        window.scroll(0,0);
      },[])

  return (
    <>
    <Header2/>
      <div className={css.wrapper}>

       {/* {projectData.map((row, id)=>( */}
        <>
         <div key={id} className={css.heroImage} style={{ backgroundImage:`url(${projectData.headerImage})`}}></div>
        <br />    
        <div className={css.headingContainer} >
          <h1 className={css.heading}>{projectData.projectName}</h1><br />
          <br />
          <p className={css.subheading}>
            {" "}
           {projectData.desc}
          </p>
        </div>
        <div className={css.skillContainer}>
          <h1 className={css.skillheading}>Technology</h1><br /><br />
          <div style={{display:'flex', flexWrap:'wrap' , justifyContent:'center', gap:'1rem'}}>
          {projectData.skills.map((skill , i)=>(
           <p key={i} className={css.skillsubheading} > {skill.skill} </p>
       ))}
          </div>
          <br />

          <div className={css.procon}>
            <div className={css.proconheading}>
                <h1 className={css.proheading}>Functionallity & Problem Solved</h1> <br />
                <p className={css.prosubheading}>{projectData.proconDesc} </p>
            </div>
            <img src={projectData.proconImage} alt="" />
            <div>

            </div>
          </div>
            <br /><br />
        </div>
        </>
        {/* ))} */}

      </div>
      
      <Footer2/>
    </>
  );
};

export default PortFolioDetail;
