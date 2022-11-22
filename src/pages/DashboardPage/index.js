import classNames from "classnames/bind";
import style from './DashboardPage.module.scss';

const cx = classNames.bind(style);


function DashboardPage() {
    return ( <div className={cx('wrapper')}>Dashboard</div> );
}

export default DashboardPage;