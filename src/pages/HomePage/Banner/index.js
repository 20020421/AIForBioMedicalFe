import classNames from "classnames/bind";
import { images } from "../../../assets/images";
import style from '../HomePage.module.scss';

const cx = classNames.bind(style);

function Banner() {
    return ( <div className={cx('banner-wrapper')}>
        <div className={cx('container')}>
            <img className={cx('banner-image')} src={images.banner} alt='banner' />
            <span className={cx('healthcare-text')}>AI for <span className='text-primary'>BioMedical</span> Images</span>
            <img className={cx('banner-sm-image', 'img1')} src={images.image1} alt='banner-sm-img' />
            <img className={cx('banner-sm-image', 'img2')} src={images.image2} alt='banner-sm-img' />
            <img className={cx('banner-sm-image', 'img3')} src={images.image3} alt='banner-sm-img' />
            <img className={cx('banner-sm-image', 'img4')} src={images.image4} alt='banner-sm-img' />
            <img className={cx('banner-sm-image', 'img5')} src={images.image5} alt='banner-sm-img' />
            <img className={cx('banner-sm-image', 'img6')} src={images.image6} alt='banner-sm-img' />
            <img className={cx('banner-sm-image', 'img7')} src={images.image7} alt='banner-sm-img' />
            <img className={cx('banner-sm-image', 'img8')} src={images.image8} alt='banner-sm-img' />

        </div>
    </div> );
}

export default Banner;