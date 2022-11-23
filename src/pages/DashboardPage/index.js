import classNames from "classnames/bind";
import style from './DashboardPage.module.scss';
import SideBar from "./SideBar";

const cx = classNames.bind(style);


function DashboardPage() {
    return ( <div className={cx('wrapper')}>
        <SideBar />
    </div> );
}

export default DashboardPage;