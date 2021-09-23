import ProjectsCard from "./ProjectsCard";
import Pro from "./Projects.module.css";
import ProjectsFooter from "./ProjectsFooter";
import { Fragment } from "react/cjs/react.production.min";
const Projects = () => {
  return (
    <Fragment>
      <div className={Pro.headlineContainer}>
        <div className={Pro.headlineText}> Favourites Projects</div>
        <div className={Pro.headlineUnderline} />
      </div>
      <div className={Pro.projectsContainer}>
        <ul className={Pro.ulCards}>
          <li className={Pro.liCards}>
            <ProjectsCard
              HeaderP1="Micro-Services"
              HeaderP2="OOP Project"
              subject="Multi-threads"
              content="Project that was fun "
              message="Hey"
              img="1"
            />
          </li>
          <li className={Pro.liCards}>
            <ProjectsCard
              HeaderP1="Course-Registartion"
              HeaderP2="OOP Project"
              subject="Multi-threads"
              content="Project that was fun "
              message="Hey"
              img="1"
            />
          </li>
          <li className={Pro.liCards}>
            <ProjectsCard
              HeaderP1="Micro-Services"
              HeaderP2="OOP Project"
              subject="Multi-threads"
              content="Project that was fun "
              message="Hey"
              img="1"
            />
          </li>
        </ul>
      </div>
      <ProjectsFooter />
    </Fragment>
  );
};

export default Projects;
