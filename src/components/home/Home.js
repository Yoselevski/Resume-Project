import HomeStyle from "./Home.module.css";
import DownloadBtn from "./DownloadBtn";
import Modal from "../modal/Modal";
import {useState} from "react";

const Home = () => {

    const [showModal, setShowModal] = useState(0);


    return (
        <div>
            <div className={
                HomeStyle.allContainer
            }>
                <div className={
                    HomeStyle.headlineContainer
                }>Hi, I'm Sahar</div>
                <div className={
                    HomeStyle.subHeadlineContainer
                }>
                    I am third year student at BGU
                    <br/>
                    &&
                    <br/>A softwear developer
                </div>
                <div className={
                    HomeStyle.btns
                }>
                    <ul className={
                        HomeStyle.ul
                    }>
                        <li className={
                            HomeStyle.li
                        }>
                            {
                            < DownloadBtn />
                        }</li>
                        <li className={
                            HomeStyle.li
                        }>
                            <button className={
                                    HomeStyle.btn
                                }
                                onClick={
                                    () => setShowModal(1)
                            }>Get in touch</button>
                        </li>
                    </ul>
                </div>

            </div>
            <div className={
                HomeStyle.modal
            }>
                {
                (showModal === 1) && <Modal setShowModal={setShowModal}
                    headline="constantly learning"
                    content="1"/>}
            
            </div>
        </div>
    );
};

export default Home;
