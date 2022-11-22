import classNames from "classnames/bind";
import style from './InFuture.module.scss';

const cx = classNames.bind(style);

function InFuturePage() {
    return (<div className={cx('wrapper')}>
        <h1>In The Future</h1>
    </div> );
}

export default InFuturePage;