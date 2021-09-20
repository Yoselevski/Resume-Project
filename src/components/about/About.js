import AboutStyle from "./About.module.css";
import DownloadBtn from "./DownloadBtn";
import {SocialIcon} from "react-social-icons";
import {Linking} from 'react-native';
import TypeWriterEffect from 'react-typewriter-effect';


const About = () => {

    const contact = () => {
        Linking.openURL("https://api.whatsapp.com/send?phone=972537171929");
    }

    return (
        <div>
            <span id="headline-container"
                className={
                    AboutStyle.headlineContainer
            }>
                <strong>I am Sahar Cohen
                </strong>
            </span>
            <span id="sub-headline-container"
                className={
                    AboutStyle.subHeadlineContainer
            }>
                <p>A softwer developer</p>
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
                <div className={AboutStyle.hide}> 
                <button className={
                        AboutStyle.whatsapp
                    }
                    onClick={contact}>
                    <strong>Contact me</strong>
                    {
                    < SocialIcon
                    fgColor = "snow" url = "https://api.whatsapp.com/send?phone=972537171929" style = {{zIndex:"-10", float: "left"}}
                    />
                }</button>
                </div>
            </span>
            <span id="split-screen-right"
                className={
                    AboutStyle.splitRight
            }>
                <div id="info-container">
                    <p className={
                        AboutStyle.info
                    }>
                        <TypeWriterEffect textStyle={
                                {
                                    fontFamily: "'Dosis', sans-serif",
                                    fontSize: "24px"
                                }
                            }
                            startDelay={300}
                            cursorColor="black"
                            text="Third year student, BSC in Computer Sciences. Looking for an entry level position as a developer, in which I
                                                    can both contribute and evolve professionally."
                            typeSpeed={80}/>


                    </p>
                </div>
            </span>
            <span id="footer-buttons"
                className={
                    AboutStyle.footerContainer
            }>
                <DownloadBtn/>

            </span>
        </div>
    );
}
export default About;
