import AboutStyle from "./About.module.css";

const About = () => {
    return (<div>

        <span id="headline-container"
            className={
                AboutStyle.headlineContainer
        }>
            sdfasdf
        </span>
        <span id="split-screen-left"
            className={
                AboutStyle.splitLeft
        }>
            <div id="image-container" >
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" className={AboutStyle.center}/>
            </div>
        </span>
        <span id="split-screen-right"
            className={
            AboutStyle.splitRight
        }>
            <div id="info-container"
                >
                <p className={AboutStyle.info}>sdfas AppStyleasdf 
                                            AppStyleasdfsd
                                            sdf
                                            AppStyleasdf
                                            sdfasdfasdf
                                            AppStyleasdfasdfasdf
                                            AppStyleasdfasdf
                </p>

            </div>
        </span>
    </div>
    );
    }
    
    export default About;
    
    //
    <section>
        //
        <span data-words='["A Programmer","A Developer"]'>
            //
            <span>
                //             A Programmer</span>
            //
        </span>
        //
        <div className="container">
            //
            <h2 className="section-title">About Me</h2>
            //
            <div className="bottom-line"></div>
            //
            <p className="lead">Let me tell you a little about myself</p>
            //
            <div className="about-info">
                //             IMAGE
                //
                <div className="bio bg-light"></div>
                //
            </div>
            //
        </div>
        //
    </section>
