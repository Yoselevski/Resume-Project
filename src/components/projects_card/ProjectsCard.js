import CardStyle from './ProjectsCard.module.css'

const ProjectsCard = () => {
    return (
        <div className={CardStyle.flipCard}>
            <div className={CardStyle.flipCardInner}>
                <div className={CardStyle.flipCardFront}>
                asdgfasdfga
                </div>
                <div className={CardStyle.flipCardBack}>
                    <h1>John Doe</h1>
                    <p>Architect  Engineer</p>
                    <p>We love that guy</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectsCard;