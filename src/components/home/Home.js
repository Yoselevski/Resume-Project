import HomeStyle from './Home.module.css';
import DownloadBtn from './DownloadBtn';

const Home = () => {
    return (<div>

        <div className={
            HomeStyle.headlineContainer
        }>
            Hi, I'm Sahar
        </div>
        <div className={
            HomeStyle.subHeadlineContainer
        }>
            I am third year student at BGU
            <br/>
            &&
            <br/>
            A softwear developer
        </div>
        <div className={
            HomeStyle.btns
        }>
            <ul className={
            HomeStyle.ul
        }>
                <li className={
            HomeStyle.li
        }> {
                    < DownloadBtn />
                }</li>
                <li className={
            HomeStyle.li
        }>
                    <button className={
                        HomeStyle.btn
                    }>
                        Get in touch
                    </button>
                </li>
            </ul>
        </div>
    </div>);
}

export default Home;
