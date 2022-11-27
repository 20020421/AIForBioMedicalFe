import classNames from "classnames/bind";
import style from './Analytics.module.scss';

const cx = classNames.bind(style);

function Analytics() {
    return ( <div className={cx('wrapper')}>Analytics</div> );
}

export default Analytics;