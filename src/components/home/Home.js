import HomeStyle from "./Home.module.css";
import DownloadBtn from "./DownloadBtn";
//import Modal from "../UI/Modal";
import { useState } from "react";

const Home = () => {
const [IconIsShown, setIconIsShown] = useState(false);

  const showIconHandler = () => {
    setIconIsShown(true);
  };

  const hideIconHandler = () => {
    setIconIsShown(false);
  };
  return (
    <div>
      <div className={HomeStyle.headlineContainer}>Hi, I'm Sahar</div>
      <div className={HomeStyle.subHeadlineContainer}>
        I am third year student at BGU
        <br />
        &&
        <br />A softwear developer
      </div>
      <div className={HomeStyle.btns}>
        <ul className={HomeStyle.ul}>
          <li className={HomeStyle.li}> {<DownloadBtn />}</li>
          <li className={HomeStyle.li}>
              {/* <Modal onClose={hideIconHandler}> */}
            <button className={HomeStyle.btn} >Get in touch</button>
            {/* </Modal> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
