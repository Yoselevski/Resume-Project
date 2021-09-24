import { useContext, useState } from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import WhyMeStyle from "./WhyMe.module.css";
import QualityModal from './QualityModal'

const WhyMe = () => {

    const numOfQualities = 4;
    const [pressedNum, setPressedNum] = useState(0);
    const [showModal, setShowModal] = useState(0);

    const circleHandler = (circleNumber) => {
        
    }

    const pressHandler = () => {
       if (pressedNum === numOfQualities) {
           setPressedNum(0);
       }
       else {
           setPressedNum(pressedNum+1);
       }
    }
    return (
    <div>

        <div className={WhyMeStyle.headlineContainer}>
            <div className={WhyMeStyle.headlineText}> what sets me apart</div>
            <div className={WhyMeStyle.headlineUnderline}/>
        </div>
            {(showModal === 1) && <QualityModal setShowModal={setShowModal} headline="constantly learning" content="1"/>}
            {(showModal === 2) && <QualityModal setShowModal={setShowModal} headline="coding is life" content="2"/>}
            {(showModal === 3) && <QualityModal setShowModal={setShowModal} headline="open minded" content="open minded"/>}
            {(showModal === 4) && <QualityModal setShowModal={setShowModal} content="Self disciplined"/>}
        <span className={WhyMeStyle.colLeft}>
            <span className={WhyMeStyle.leftContainer}>
                {pressedNum>=1 && <button onClick={() => setShowModal(1)} className={WhyMeStyle.btnUp}>
                <i className="fas fa-file-alt fa-4x"></i>
                    </button>}
                {pressedNum>=2 && <button onClick={() => setShowModal(2)} className={WhyMeStyle.btnDown}>
                    <i className="fas fa-code fa-4x"></i>
                    </button>}
            </span>
        </span>
        <span >
            <button onClick={pressHandler} className={WhyMeStyle.btn}>PRESS TO FIND OUT</button>
        </span>
        <span className={WhyMeStyle.colRight}>
            <span className={WhyMeStyle.rightContainer}>
                {pressedNum>=3 && <button onClick={() => setShowModal(3)}  className={WhyMeStyle.btnUp}>
                <i class="fas fa-door-open fa-4x"></i>
                    </button>}
                {pressedNum>=4 && <button onClick={() => setShowModal(4)} className={WhyMeStyle.btnDown}>
                <i class="fas fa-user-ninja fa-4x"></i>
                    </button>}

            </span>
        </span>

        
    </div>);
}

export default WhyMe;
