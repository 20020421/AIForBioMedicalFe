import classNames from "classnames/bind";
import Banner from "./Banner";
import Diagnostic from "./Diagnostic";
import style from './HomePage.module.scss';

const cx = classNames.bind(style);

function HomePage() {
    return ( <div className={cx('wrapper')}>
        <Banner />
        <Diagnostic />
    </div> );
}

export default HomePage;