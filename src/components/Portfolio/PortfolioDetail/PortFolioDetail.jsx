import React from "react";
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
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi consequuntur tempora nisi voluptatibus eius, laboriosam consequatur natus maiores dolorum corrupti magni earum provident, debitis possimus magnam. Amet repellendus molestias mollitia quis sapiente similique reiciendis! Aut rem totam dolorem doloremque dolor.",
            skills: [{ skill: 'java' }, { skill: 'php' }, { skill: 'css' },
                { skill: 'java' }, { skill: 'php' }, { skill: 'css' }
            ],
            proconDesc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo dolore sint sequi, a reprehenderit dolorum aspernatur non architecto? Nisi incidunt eos laudantium, quibusdam neque accusantium rerum blanditiis laborum. Impedit praesentium consectetur quis eligendi dolor repellat, voluptate illum magni incidunt aliquid laboriosam inventore voluptatibus necessitatibus nostrum ratione? Iste quos officiis dolore placeat nihil illo, vitae veniam quaerat possimus similique tempora saepe eaque architecto tenetur at in ipsam, corrupti delectus deleniti dolores, cupiditate blanditiis quae. Accusantium ipsam incidunt laboriosam. Iusto voluptatibus eos laboriosam pariatur ut, consectetur quisquam atque cumque delectus veniam suscipit exercitationem adipisci temporibus, nobis eum nemo nulla, tenetur tempora minus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dignissimos asperiores, fuga ipsa rerum aperiam impedit necessitatibus suscipit maiores neque optio delectus accusamus molestias. Laboriosam quia laudantium accusamus fugiat quis.',
            proconImage:'/showCase2.png'
        },
        {   _id :2, 
            projectName: "Black Technology" , headerImage:'/black-tech.png',
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi consequuntur tempora nisi voluptatibus eius, laboriosam consequatur natus maiores dolorum corrupti magni earum provident, debitis possimus magnam. Amet repellendus molestias mollitia quis sapiente similique reiciendis! Aut rem totam dolorem doloremque dolor.",
            skills: [{ skill: 'java' }, { skill: 'php' }, { skill: 'css' },
                { skill: 'java' }, { skill: 'php' }, { skill: 'css' }
            ],
            proconDesc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo dolore sint sequi, a reprehenderit dolorum aspernatur non architecto? Nisi incidunt eos laudantium, quibusdam neque accusantium rerum blanditiis laborum. Impedit praesentium consectetur quis eligendi dolor repellat, voluptate illum magni incidunt aliquid laboriosam inventore voluptatibus necessitatibus nostrum ratione? Iste quos officiis dolore placeat nihil illo, vitae veniam quaerat possimus similique tempora saepe eaque architecto tenetur at in ipsam, corrupti delectus deleniti dolores, cupiditate blanditiis quae. Accusantium ipsam incidunt laboriosam. Iusto voluptatibus eos laboriosam pariatur ut, consectetur quisquam atque cumque delectus veniam suscipit exercitationem adipisci temporibus, nobis eum nemo nulla, tenetur tempora minus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dignissimos asperiores, fuga ipsa rerum aperiam impedit necessitatibus suscipit maiores neque optio delectus accusamus molestias. Laboriosam quia laudantium accusamus fugiat quis.',
            proconImage:'/showCase1.png'
        }

    ]


  const   projectData = projects.find((project) => project._id == id);
  console.log('iddd777777777777', projectData)
     if (!projectData) {
        return <div>Project not found!</div>;
      }


  return (
    <>
    <Header2/>
      <div className={css.wrapper}>

       {/* {projectData.map((row, id)=>( */}
        <>
         <div key={id} className={css.heroImage} style={{ backgroundImage:`url(${projectData.headerImage})`}}></div>
        <div className={css.headingContainer} >
          <h1 className={css.heading}>{projectData.projectName}</h1><br />
          <p className={css.subheading}>
            {" "}
           {projectData.desc}
          </p>
        </div>
        <div className={css.skillContainer}>
          <h1 className={css.skillheading}>Technology</h1><br />
          <div style={{display:'flex', flexWrap:'wrap' , justifyContent:'center', gap:'1rem'}}>
          {projectData.skills.map((skill , i)=>(
           <p key={i} className={css.skillsubheading} > {skill.skill} </p>
       ))}
          </div>

          <div className={css.procon}>
            <div className={css.proconheading}>
                <h1 className={css.proheading}>Functionallity & Problem Solved</h1> <br />
                <p className={css.prosubheading}>{projectData.proconDesc} </p>
            </div>
            <img src={projectData.proconImage} alt="" />
            <div>

            </div>
          </div>
        </div>
        </>
        {/* ))} */}

      </div>
      <Footer2/>
    </>
  );
};

export default PortFolioDetail;
