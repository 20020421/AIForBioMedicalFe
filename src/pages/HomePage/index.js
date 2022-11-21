import classNames from "classnames/bind";
import Banner from "./Banner";
import style from './HomePage.module.scss';

const cx = classNames.bind(style);

function HomePage() {
    return ( <div className={cx('wrapper')}>
        <Banner />
    </div> );
}

export default HomePage;