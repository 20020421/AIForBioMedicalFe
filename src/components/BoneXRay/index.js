import classNames from "classnames/bind";
import FormUpLoadImage from "../FormUpLoadImage";
import style from './BoneXRay.module.scss';

const cx = classNames.bind(style);

function BoneXRay() {
    return ( <div className={cx('wrapper')}>
        <h1 className={cx('title')}>
            Bone Diagnostic
        </h1>


        <FormUpLoadImage />
    </div> );
}

export default BoneXRay;