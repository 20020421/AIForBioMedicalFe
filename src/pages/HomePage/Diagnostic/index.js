import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { images } from "../../../assets/images";
import style from '../HomePage.module.scss';

const cx = classNames.bind(style);

const features = [
    {
        id: 1,
        title: 'Chẩn đoán phổi',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at risus viverra adipiscing at in. Ornare quam viverra orci sagittis eu. Sed vulputate odio ut enim blandit volutpat. Facilisis leo vel fringilla est ullamcorper eget. Vitae congue eu consequat ac felis donec. Varius sit amet mattis vulputate enim. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Viverra aliquet eget sit amet. Ut faucibus pulvinar elementum integer. Faucibus pulvinar elementum integer enim neque.',
        image: images.diagnosticLung,
        to: '/ai-for-biomedical-images/lung',
    },
    {
        id: 2,
        title: 'Chẩn đoán xương',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at risus viverra adipiscing at in. Ornare quam viverra orci sagittis eu. Sed vulputate odio ut enim blandit volutpat. Facilisis leo vel fringilla est ullamcorper eget. Vitae congue eu consequat ac felis donec. Varius sit amet mattis vulputate enim. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Viverra aliquet eget sit amet. Ut faucibus pulvinar elementum integer. Faucibus pulvinar elementum integer enim neque.',
        image: images.diagnosticLung,
        to: '/ai-for-biomedical-images/lung',
    }
]


function Diagnostic() {



    return ( <div className={cx('diagnostic-wrapper')}>
        <h2 className={cx('diagnostic-header')}>Features</h2>
        <div className={cx('diagnostic-container')}>
            {
                features.map((feature, index) => (
                    <Link to={feature.to} className={cx('feature')} key={index}>
                        <div className={cx('feature-image')}>
                            <img src={feature.image} alt={feature.title} />
                        </div>
                        <p className={cx('feature-title')}>
                            {feature.title}
                        </p>
                        <p className={cx('feature-description')}>
                            {feature.description}
                        </p>
                    </Link>
                ))
            }
        </div>
    </div> );
}

export default Diagnostic;