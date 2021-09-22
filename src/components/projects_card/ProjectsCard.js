import CardStyle from "./ProjectsCard.module.css";
import OldMan from '../pictures/React.png';

const ProjectsCard = ({
  HeaderP1,
  HeaderP2,
  subject,
  content,
  message,
  img,
}) => {
  return (
    <div className={CardStyle.flipCard}>
      <div className={CardStyle.flipCardInner}>
        <div className={CardStyle.flipCardFront}>
          <h2>{HeaderP1}</h2>
          <p>{HeaderP2}</p>
          <img src={OldMan}></img>
        </div>
        <div className={CardStyle.flipCardBack}>
          <h1>{subject}</h1>
          <p>{content}</p>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
