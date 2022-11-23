import { faAngleDoubleRight, faLungs, faXRay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from '../HomePage.module.scss';

const cx = classNames.bind(style);

const features = [
    {
        id: 1,
        title: 'Chẩn đoán phổi',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at risus viverra adipiscing at in. Ornare quam viverra orci sagittis eu. Sed vulputate odio ut enim blandit volutpat. Facilisis leo vel fringilla est ullamcorper eget. Vitae congue eu consequat ac felis donec.',
        symbol: faLungs,
        to: '/ai-for-biomedical-images/lung',
    },
    {
        id: 2,
        title: 'Chẩn đoán xương',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at risus viverra adipiscing at in. Ornare quam viverra orci sagittis eu. Sed vulputate odio ut enim blandit volutpat. Facilisis leo vel fringilla est ullamcorper eget. Vitae congue eu consequat onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at risus viverra adipiscing at in. Ornare quam viverra orci sagittis eu. Sed vulputate odio ut enim blandit volutpat. Facilisis leo vel fringilla est ullamcorper eget. Vitae congue eu consequat ',
        symbol: faXRay,
        to: '/ai-for-biomedical-images/bone',
    }
]


function Diagnostic() {



    return ( <div className={cx('diagnostic-wrapper')}>
        <div className={cx('container')}> 
            <h2 className={cx('diagnostic-header')}><span>Our Features</span></h2>
            <span className={cx('diagnostic-subtitle')}>Advanced & powerful services </span>
            <div className={cx('features')}>
                {
                    features.map((feature, index) => (
                        <div className={cx('feature')} key={index}>
                            <div className={cx('feature-info')}>
                                <div className={cx('feature-symbol')} style={feature.id%2 === 1 ? {backgroundColor: '#F75A63'} : {backgroundColor: '#8FD2FF'}}>
                                    <FontAwesomeIcon icon={feature.symbol} />
                                </div>
                                <Link to={feature.to} className={cx('feature-title')}>
                                <h4>
                                    {feature.title}
                                </h4>
                                </Link>
                                <p className={cx('feature-description')}>
                                    {feature.description}
                                </p>
                            </div>
                            <Link to={feature.to} className={cx('try-now')}>
                                <span>Try Now</span>
                                <FontAwesomeIcon icon={faAngleDoubleRight} />
                            </Link>
                        </div>
                    ))
                }
            </div>

        </div>
    </div> );
}

export default Diagnostic;