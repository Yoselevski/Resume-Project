import TypeWriterEffect from 'react-typewriter-effect';
import WhyMeStyle from "./WhyMe.module.css";

const WhyMe = () => {

    // window.onscroll = function () {startTypingCode()};

    // const startTypingCode = () => {

    // }

    return (
    <div>
        <span className={WhyMeStyle.text}>
            {/* <TypeWriterEffect textStyle={
                    {
                        fontFamily: "'Dosis', sans-serif",
                        fontSize: "24px",
                        color: "snow"
                    }
                }
                startDelay={3000}
                cursorColor="black"
                text="if (this.sad) {
                                stop();
                                beAwesome()
                            }"
                typeSpeed={100}/>
 */}

        </span>
        <div className={WhyMeStyle.headlineContainer}>
            <div className={WhyMeStyle.headlineText}> what sets me apart</div>
            <div className={WhyMeStyle.headlineUnderline}/>
        </div>
        
        <div className={WhyMeStyle.contentContainer}>
            sdfsdf
        </div>

        
    </div>);
}

export default WhyMe;
