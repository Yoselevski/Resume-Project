import AboutStyle from "./About.module.css";
import DownloadBtn from "./DownloadBtn";

const About = () => {
    return (
        <div>

            <span id="headline-container"
                className={
                    AboutStyle.headlineContainer
            }>
                I am a software developer
            </span>
            <span id="sub-headline-container"
                className={
                    AboutStyle.subHeadlineContainer
            }>
                Let me tell you a little about myself
            </span>
            <span id="split-screen-left"
                className={
                    AboutStyle.splitLeft
            }>
                <div id="image-container">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQExR8dHfFd4fg/profile-displayphoto-shrink_400_400/0/1616767253210?e=1637798400&v=beta&t=FylE3KYeGwCOvwpO--OYD8kFHdMWTcpklg2KZvRekaI" alt="Sahar Cohen"
                        className={
                            AboutStyle.image
                        }/>
                </div>
            </span>
            <span id="split-screen-right"
                className={
                    AboutStyle.splitRight
            }>
                <div id="info-container">
                    <p className={
                        AboutStyle.info
                    }>sdfas AppStyleasdf 
                                                                                    AppStyleasdfsd
                                                                                    sdf
                                                                                    AppStyleasdf
                                                                                    sdfasdfasdf
                                                                                    AppStyleasdfasdfasdf
                                                                                    AppStyleasdfasdf
                    </p>

                </div>
            </span>
            <span id="footer-buttons"
                className={
                    AboutStyle.footerContainer
            }>
                <DownloadBtn/>
                <button className={
                        AboutStyle.button
                    }
                    onClick={
                        () => console.log("hello")
                }>BTN2</button>
                <button className={
                    AboutStyle.button
                }>BTN3</button>
            </span>
        </div>
    );
}

export default About;
