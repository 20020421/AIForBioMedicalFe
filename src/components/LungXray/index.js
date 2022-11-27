import classNames from "classnames/bind";
import FormUpLoadImage from "../FormUpLoadImage";
import style from './LungXRay.module.scss';

const cx = classNames.bind(style);

function LungXRay() {
    return ( <div className={cx('wrapper')}>
    <h1 className={cx('title')}>
        Lung Diagnostic
    </h1>


    <FormUpLoadImage />
</div> )
}

export default LungXRay;